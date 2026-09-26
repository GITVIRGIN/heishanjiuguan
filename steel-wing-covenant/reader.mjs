// Presentation-only pagination. Story nodes, choices and effects stay intact.
const CLOSE = /[”’」』）》】\]"']/u;
const SENTENCE = /[。！？!?；;]/u;
const CLAUSE = /[，、：,:—]/u;

function boundaries(text) {
  const paragraphs = [], sentences = [], clauses = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '\n') paragraphs.push(i + 1);
    if (SENTENCE.test(text[i])) {
      let end = i + 1;
      while (end < text.length && CLOSE.test(text[end])) end++;
      // Keep a short speech attribution with the quoted sentence.
      const attribution = /^(?:她|他|你)(?:说|问|答道|答|补充道|补充)[。。，]/u.exec(text.slice(end));
      if (attribution) end += attribution[0].length;
      sentences.push(end);
    }
    if (CLAUSE.test(text[i])) clauses.push(i + 1);
  }
  return { paragraphs, sentences, clauses };
}

/** fits measures the real fixed-size text area, including the active font. */
export function paginateText(text, fits) {
  text = String(text || '');
  if (!text.trim()) return [{ text: '', start: 0, end: text.length }];
  const points = boundaries(text), pages = [];
  let start = 0;
  while (start < text.length) {
    while (/\s/u.test(text[start] || '') && start < text.length) start++;
    if (start >= text.length) break;
    let end = text.length;
    if (!fits(text.slice(start).trim())) {
      // Find the maximum fitting prefix without splitting a Unicode character.
      const offsets = [start];
      for (const char of text.slice(start)) offsets.push(offsets.at(-1) + char.length);
      let low = 1, high = offsets.length - 1, best = 1;
      while (low <= high) {
        const mid = (low + high) >> 1;
        if (fits(text.slice(start, offsets[mid]).trim())) { best = mid; low = mid + 1; }
        else high = mid - 1;
      }
      const limit = offsets[best];
      const last = list => list.filter(n => n > start && n <= limit).at(-1);
      // Paragraphs are authored beats. Fall back to sentences, then long clauses.
      end = last(points.paragraphs) || last(points.sentences) || last(points.clauses) || limit;
      // Avoid an orphan closing mark at the start of the next screen.
      while (end > start && CLOSE.test(text[end])) {
        const earlier = [...points.sentences, ...points.clauses].filter(n => n > start && n < end).sort((a,b)=>a-b).at(-1);
        if (!earlier) break;
        end = earlier;
      }
    }
    pages.push({ text: text.slice(start, end).trim(), start, end });
    start = end;
  }
  return pages;
}

export function paginatePassage(segments, fits) {
  return segments.flatMap(segment => paginateText(segment.text, fits).map(page => ({ ...page, kind: segment.kind })));
}

export function restoredPage(pages, cursor) {
  if (!cursor || !Number.isSafeInteger(cursor.offset) || cursor.offset < 0) return 0;
  const matching = pages.map((page,index)=>({page,index})).filter(({page})=>page.kind===cursor.kind);
  return matching.find(({page})=>cursor.offset >= page.start && cursor.offset < page.end)?.index
    ?? matching.find(({page})=>page.start >= cursor.offset)?.index
    ?? matching.at(-1)?.index ?? 0;
}
