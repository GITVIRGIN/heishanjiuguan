// 钢翼盟约 — 可选 WebMCP 桥（把界面上真实存在的操作暴露成工具）
// 这里不做任何剧情决策：状态仍然只有 app.mjs 那一份，工具只是另一只"手"。
// 浏览器没有 document.modelContext.registerTool 时静默降级（supported:false），不影响游戏本身。

export const TOOL_NAMES = ['read_game_state', 'start_story', 'advance_dialogue', 'choose_option', 'continue_chapter'];

const EXPECTED_NODE_SCHEMA = {
  type: 'string',
  description: '调用方上次看到的节点 id。与当前节点不一致时本次调用被拒绝（过期操作不生效）。'
};

function isPlainInput(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * 用一组界面回调实现 5 个工具的校验逻辑（可在 Node 里用假界面直接测试）。
 * ui 需要提供：
 *   snapshot() / inProgress() / restart(callsign)
 *   hasDiscardableProgress()（可选：标题画面上的待继续存档、已结束的一局都算"会被丢弃的进度"）
 *   settle() / overlay()（可选：补全正在打字的一句；报告当前打开的覆盖面板）
 *   state() / isEnded() / isAwaitingChoice() / availableChoices() / nodeId()
 *   advance() / choose(choiceId)
 *   canContinueChapter() / continuation() / continueChapter()（章末继续点：只在下一章真的写好时可用）
 * 工具与界面共用同一份状态：不猜测、不凭空造进度，无法执行时一律拒绝并回报原因。
 */
export function createToolHandlers(ui) {
  const snapshot = () => ui.snapshot();
  const settle = () => {
    if (typeof ui.settle === 'function') ui.settle();
  };
  /** 写工具执行前先停掉自动播放：工具不该在玩家没看着的时候替他翻页 */
  const stopAuto = () => {
    if (typeof ui.stopAuto === 'function') ui.stopAuto('工具操作');
  };
  const openOverlay = () => {
    if (typeof ui.overlay !== 'function') return null;
    const value = ui.overlay();
    return typeof value === 'string' && value ? value : null;
  };
  const hasDiscardableProgress = () => {
    if (typeof ui.hasDiscardableProgress === 'function') return Boolean(ui.hasDiscardableProgress());
    return typeof ui.inProgress === 'function' ? Boolean(ui.inProgress()) : false;
  };
  const invalidInput = (reason, message) => ({ ok: false, reason: 'invalid_input', message, field: reason });
  const rejectUnknownKeys = (input, allowed) => {
    const unknown = Object.keys(input).filter((key) => !allowed.includes(key));
    if (unknown.length === 0) return null;
    return invalidInput(unknown[0], `不认识的参数：${unknown.join('、')}。本工具只接受 ${allowed.join(' / ')}。`);
  };
  const refuseWhileOverlay = () => {
    const overlay = openOverlay();
    if (!overlay) return null;
    return {
      ok: false,
      reason: 'overlay_open',
      message: `“${overlay}”面板正开着，屏幕上的对话与选项都被挡住。先关闭面板再操作，工具不会替玩家隔空点按钮。`,
      state: snapshot()
    };
  };

  return {
    read_game_state() {
      // 只读工具必须真的只读：不补全正在打字的一句，返回此刻屏幕上已经显示出来的部分。
      return snapshot();
    },

    start_story(input = {}) {
      if (!isPlainInput(input)) return invalidInput('input', 'start_story 需要对象参数，例如 {} 或 { callsign, confirmRestart }。');
      const unknown = rejectUnknownKeys(input, ['callsign', 'confirmRestart']);
      if (unknown) return unknown;
      if (Object.prototype.hasOwnProperty.call(input, 'callsign') && typeof input.callsign !== 'string') {
        return invalidInput('callsign', 'callsign 必须是字符串；不接受数字、布尔或对象（不做静默转换）。');
      }
      if (Object.prototype.hasOwnProperty.call(input, 'confirmRestart') && typeof input.confirmRestart !== 'boolean') {
        return invalidInput('confirmRestart', 'confirmRestart 必须是布尔值 true / false（不做静默转换）。');
      }
      if (hasDiscardableProgress() && input.confirmRestart !== true) {
        return {
          ok: false,
          reason: 'story_in_progress',
          message:
            '重新开始会丢弃当前进度：进行中的一章、已到达的结局，或标题画面上待继续的存档，' +
            '连同角色信任、阵营声望、旗标与回放记录一起清空。确认丢弃请传 confirmRestart:true。',
          state: snapshot()
        };
      }
      stopAuto();
      const callsign = typeof input.callsign === 'string' ? input.callsign : undefined;
      ui.restart(callsign);
      settle();
      return { ok: true, reset: true, state: snapshot() };
    },

    advance_dialogue(input = {}) {
      if (!isPlainInput(input)) return invalidInput('input', 'advance_dialogue 需要对象参数，例如 {} 或 { expectedNodeId }。');
      const unknown = rejectUnknownKeys(input, ['expectedNodeId']);
      if (unknown) return unknown;
      if (Object.prototype.hasOwnProperty.call(input, 'expectedNodeId') && typeof input.expectedNodeId !== 'string') {
        return invalidInput('expectedNodeId', 'expectedNodeId 必须是字符串节点 id。');
      }
      const blocked = refuseWhileOverlay();
      if (blocked) return blocked;
      if (!ui.inProgress() && !ui.isEnded()) {
        return { ok: false, reason: 'no_active_story', message: '还没有开始第一章。' };
      }
      if (ui.isEnded()) {
        return {
          ok: false,
          reason: 'ended',
          message: '已经到章末结果（或全书结局），不能像普通对话那样再翻页；下一章真的写好时请用 continue_chapter。',
          state: snapshot()
        };
      }
      if (ui.isAwaitingChoice()) {
        return {
          ok: false,
          reason: 'awaiting_choice',
          message: '当前在等待选择，请改用 choose_option。',
          state: snapshot()
        };
      }
      if (input.expectedNodeId && ui.nodeId() !== input.expectedNodeId) {
        return { ok: false, reason: 'stale_node', message: '节点已变化，请重新读取状态。', state: snapshot() };
      }
      stopAuto();
      const advanced = ui.advance();
      settle();
      return { ok: true, advanced: Boolean(advanced), state: snapshot() };
    },

    choose_option(input = {}) {
      if (!isPlainInput(input)) return invalidInput('input', 'choose_option 需要对象参数，例如 { choiceId }。');
      const unknown = rejectUnknownKeys(input, ['choiceId', 'expectedNodeId']);
      if (unknown) return unknown;
      if (typeof input.choiceId !== 'string' || input.choiceId.trim() === '') {
        return invalidInput('choiceId', 'choiceId 必须是非空字符串（必须来自 read_game_state 的 choices）。');
      }
      if (Object.prototype.hasOwnProperty.call(input, 'expectedNodeId') && typeof input.expectedNodeId !== 'string') {
        return invalidInput('expectedNodeId', 'expectedNodeId 必须是字符串节点 id。');
      }
      const blocked = refuseWhileOverlay();
      if (blocked) return blocked;
      if (!ui.inProgress() && !ui.isEnded()) {
        return { ok: false, reason: 'no_active_story', message: '还没有开始第一章。' };
      }
      if (ui.isEnded()) {
        return { ok: false, reason: 'ended', message: '已经到章末结果，这里的选项都不再有意义。', state: snapshot() };
      }
      if (!ui.isAwaitingChoice()) {
        return { ok: false, reason: 'not_awaiting_choice', message: '当前节点不是选项节点。', state: snapshot() };
      }
      if (input.expectedNodeId && ui.nodeId() !== input.expectedNodeId) {
        return { ok: false, reason: 'stale_node', message: '节点已变化，请重新读取状态。', state: snapshot() };
      }
      const available = ui.availableChoices().map((choice) => choice.id);
      if (!available.includes(input.choiceId)) {
        return {
          ok: false,
          reason: 'invalid_choice',
          message: '这个选项在当前节点不可用。',
          availableChoices: available,
          state: snapshot()
        };
      }
      stopAuto();
      const applied = ui.choose(input.choiceId);
      if (!applied) {
        return { ok: false, reason: 'invalid_choice', message: '选项未被应用。', state: snapshot() };
      }
      settle();
      return { ok: true, choiceId: input.choiceId, state: snapshot() };
    },

    continue_chapter(input = {}) {
      if (!isPlainInput(input)) return invalidInput('input', 'continue_chapter 需要对象参数，例如 {} 或 { expectedNodeId }。');
      const unknown = rejectUnknownKeys(input, ['expectedNodeId']);
      if (unknown) return unknown;
      if (Object.prototype.hasOwnProperty.call(input, 'expectedNodeId') && typeof input.expectedNodeId !== 'string') {
        return invalidInput('expectedNodeId', 'expectedNodeId 必须是字符串节点 id。');
      }
      const blocked = refuseWhileOverlay();
      if (blocked) return blocked;
      if (!ui.inProgress() && !ui.isEnded()) {
        return { ok: false, reason: 'no_active_story', message: '还没有开始第一章。' };
      }
      // 只在"真的停在章末结果、并且下一章已经写好"时可用；全书结局、普通节点、
      // 以及缺下一章的情况都拒绝——这是边界，不是隐藏跳转。
      if (!ui.isEnded() || typeof ui.canContinueChapter !== 'function' || !ui.canContinueChapter()) {
        const info = typeof ui.continuation === 'function' ? ui.continuation() : null;
        const reason = info && info.reason === 'final-ending'
          ? 'final_ending'
          : info && info.reason === 'chapter-not-loaded'
            ? 'next_chapter_not_loaded'
            : 'not_continuable';
        return {
          ok: false,
          reason,
          message: reason === 'final_ending'
            ? '这是全书结局，没有下一章。'
            : reason === 'next_chapter_not_loaded'
              ? '这一章的下一章还没有写出来：故事如实停在章末边界，工具不会隔空跳章。'
              : '当前不在"下一章已经写好"的章末继续点上。',
          state: snapshot()
        };
      }
      if (input.expectedNodeId && ui.nodeId() !== input.expectedNodeId) {
        return { ok: false, reason: 'stale_node', message: '节点已变化（或这一局已经被重置），请重新读取状态。', state: snapshot() };
      }
      stopAuto();
      const info = typeof ui.continuation === 'function' ? ui.continuation() : null;
      const moved = ui.continueChapter();
      if (!moved) {
        return { ok: false, reason: 'not_continuable', message: '这一局的章末继续点刚刚失效了，请重新读取状态。', state: snapshot() };
      }
      settle();
      return {
        ok: true,
        continuedTo: info && info.nextChapter
          ? { chapterId: info.nextChapter.id, chapterTitle: info.nextChapter.title, entryId: info.entryId, fromOutcomeId: info.outcomeId }
          : null,
        state: snapshot()
      };
    }
  };
}

/** 生成 4 个工具定义：{name,title,description,inputSchema,annotations,execute} */
export function buildTools(handlers) {
  const h = handlers || createToolHandlers({});
  return [
    {
      name: 'read_game_state',
      title: '读取当前游戏状态',
      description:
        '只读。返回此刻屏幕上真正可见的东西：画面（标题 / 游戏）、章节、呼号、当前节点、说话人、屏幕上显示的台词、' +
        '场景、语气、立绘状态、是否在等待选择、以及此刻真实可见的选项。' +
        '标题画面只返回标题画面上有的信息（含是否有待继续的存档），不会返回上一局的节点、台词或选项；' +
        '覆盖面板（档案 / 回放）打开时只报告 overlay 名称，被盖住的台词与选项不返回。' +
        '本工具不改变屏幕：台词正在逐字显示时返回的是此刻已经显示出来的那一段（可能不是整句），' +
        'typing 字段说明是否仍在打字。不返回未显示的剧情、旗标、羁绊数值或后续节点。',
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true, untrustedContentHint: false },
      execute: async () => h.read_game_state()
    },
    {
      name: 'start_story',
      title: '开始 / 重新开始第一章',
      description:
        '会重置：只要有任何会被丢弃的进度——进行中的一章、已经走到的结局，或标题画面上待继续的存档——' +
        '就必须显式传 confirmRestart:true，否则拒绝并返回当前状态（角色信任、阵营声望、旗标与回放记录都不会被清空）。' +
        '确认后：当前会话内进度（信任、声望、旗标与回放记录）全部清零，不保留存档，回到第一章开头。' +
        'callsign 会经过与控制台输入相同的清洗（去掉控制字符与尖括号，最长 12 字），留空使用默认呼号。' +
        'callsign 必须是字符串、confirmRestart 必须是布尔值：类型不对会被拒绝，不会被静默转换。',
      inputSchema: {
        type: 'object',
        properties: {
          callsign: { type: 'string', description: '主角呼号，最长 12 字，留空用默认值。' },
          confirmRestart: { type: 'boolean', description: 'true 表示确认丢弃当前进度并重开。' }
        },
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: async (input) => h.start_story(input || {})
    },
    {
      name: 'advance_dialogue',
      title: '推进下一屏对话',
      description:
        '与点击对话面板 / 按空格相同：打字中先补全当前屏；当前屏已读完时进入下一屏，只有整段分页结束才进入下一剧情节点。返回时当前屏文本完整显示，page 字段报告分页位置；' +
        '执行前会先停掉自动播放（工具不会替玩家自动翻页）。' +
        '等待选择、已到结局、尚未开始、覆盖面板（档案 / 回放）打开时一律拒绝（返回 ok:false，不改变任何状态）。' +
        '可传 expectedNodeId 拒绝过期调用；参数类型不对同样拒绝。',
      inputSchema: {
        type: 'object',
        properties: { expectedNodeId: EXPECTED_NODE_SCHEMA },
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: async (input) => h.advance_dialogue(input || {})
    },
    {
      name: 'choose_option',
      title: '选择一个分支',
      description:
        '在当前选项节点里选择一项，与点击选项按钮相同。choiceId 必须是此刻屏幕上真实可见的选项；' +
        '不在选项状态、覆盖面板打开、choiceId 不存在（或类型不对）或 nodeId 已过期时一律拒绝，且不改变任何状态。' +
        '被条件锁住的选项不会出现在可见列表里，也无法被强行选中。',
      inputSchema: {
        type: 'object',
        properties: {
          choiceId: { type: 'string', description: '当前可见选项的 id（来自 read_game_state 的 choices）。' },
          expectedNodeId: EXPECTED_NODE_SCHEMA
        },
        required: ['choiceId'],
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: async (input) => h.choose_option(input || {})
    },
    {
      name: 'continue_chapter',
      title: '进入下一章',
      description:
        '与点击章末结算面板上的「进入下一章」按钮等价：只把故事从当前的章末结果推进到它自己声明的、已经写好的下一章入口。' +
        '不在章末结果、是全书结局、下一章还没写出来、覆盖面板打开、参数类型不对或 expectedNodeId 已过期（含这一局被重置过）时一律拒绝，且不改变任何状态。' +
        '这不是隐藏跳转：没有可用的下一章时它只能如实报告边界。执行前会停掉自动播放，继续后屏幕停在下一章开头。',
      inputSchema: {
        type: 'object',
        properties: { expectedNodeId: EXPECTED_NODE_SCHEMA },
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute: async (input) => h.continue_chapter(input || {})
    }
  ];
}

/**
 * 注册工具（feature-detected，失败不影响游戏）。
 * registerTool 可能返回 void 或 Promise，两种都要处理。
 * 返回 { supported, registered, failures, signal, abort() }。
 */
export function registerGameTools(handlers, options = {}) {
  const target = options.target || (typeof document !== 'undefined' ? document : null);
  const registry = target && target.modelContext;
  const registered = [];
  const failures = [];

  if (!registry || typeof registry.registerTool !== 'function') {
    return {
      supported: false,
      registered,
      failures,
      reason: 'modelContext.registerTool 不可用：当前浏览器未提供 WebMCP，已静默降级。',
      abort() {}
    };
  }

  const controller = typeof AbortController === 'function' ? new AbortController() : null;
  const signal = controller ? controller.signal : undefined;

  for (const tool of buildTools(handlers)) {
    try {
      const maybePromise = registry.registerTool(tool, signal ? { signal } : undefined);
      registered.push(tool.name);
      if (maybePromise && typeof maybePromise.then === 'function') {
        maybePromise.catch((error) => {
          failures.push({ name: tool.name, message: String((error && error.message) || error) });
        });
      }
    } catch (error) {
      failures.push({ name: tool.name, message: String((error && error.message) || error) });
    }
  }

  return {
    supported: true,
    registered,
    failures,
    signal,
    abort() {
      if (controller) controller.abort();
    }
  };
}

export default { TOOL_NAMES, createToolHandlers, buildTools, registerGameTools };
