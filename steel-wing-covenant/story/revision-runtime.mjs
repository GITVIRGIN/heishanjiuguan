// Apply reviewed story data without rewriting historical chapter modules.
export function reviseChapters(original, revisions) {
  const chapters=original.map(ch=>({...ch,nodes:{...ch.nodes},endings:{...(ch.endings||{})},
    scenes:[...(ch.scenes||[])],outcomeNodeIds:[...(ch.outcomeNodeIds||[])],decisions:[...(ch.decisions||[])]}));
  const issues=[];const directions={};const touched=new Map();
  const chapterFor=id=>chapters.find(ch=>ch.nodes[id]);
  for(const revision of revisions){
    for(const [id,patch] of Object.entries(revision.patches||{})){
      const chapter=chapterFor(id);
      if(!chapter){issues.push(`修订目标不存在: ${revision.id}/${id}`);continue;}
      for(const field of Object.keys(patch)){
        const key=`${id}.${field}`;
        if(touched.has(key)&&JSON.stringify(touched.get(key))!==JSON.stringify(patch[field]))issues.push(`修订字段冲突: ${key}`);
        touched.set(key,patch[field]);
      }
      chapter.nodes[id]={...chapter.nodes[id],...patch};
    }
    for(const [id,node] of Object.entries(revision.nodes||{})){
      if(chapterFor(id)){issues.push(`新增节点重复: ${revision.id}/${id}`);continue;}
      const chapter=chapters.find(ch=>ch.id===node.chapter);
      if(!chapter){issues.push(`新增节点章节不存在: ${id}`);continue;}
      chapter.nodes[id]=node;
    }
    for(const [id,meta] of Object.entries(revision.finalEndings||{})){
      const chapter=chapters.find(ch=>ch.id===(meta.chapter||'ch09'));
      if(!chapter){issues.push(`结局章节不存在: ${id}`);continue;}
      chapter.endings[id]={...(chapter.endings[id]||{}),...meta};
    }
    for(const [id,rules] of Object.entries(revision.directions||{})){
      if(directions[id])issues.push(`镜头修订重复: ${id}`);
      directions[id]=rules;
    }
  }
  // Only these reviewed link operations have runtime meaning. Other link
  // entries are authoring notes and cannot execute code or change a flag.
  for(const revision of revisions)for(const link of revision.links||[]){
    if(!['replace-choice-next','add-choice'].includes(link.action))continue;
    const chapter=chapterFor(link.nodeId);
    const source=chapter?.nodes[link.nodeId];
    if(!source?.choices){issues.push('路线选择入口缺失: '+link.nodeId);continue;}
    const choices=source.choices.map(c=>({...c}));
    if(link.action==='replace-choice-next'){
      const choice=choices.find(c=>c.id===link.choiceId);
      if(!choice||!chapterFor(link.next)){issues.push('路线接入目标缺失: '+revision.id);continue;}
      choice.next=link.next;
    }else{
      if(!link.choice?.id||choices.some(c=>c.id===link.choice.id)||!chapterFor(link.choice.next)){
        issues.push('新增路线选择无效: '+revision.id);continue;
      }
      choices.push({...link.choice});
    }
    chapter.nodes[link.nodeId]={...source,choices};
  }
  // Root-reviewed scene insertions redirect incoming edges, preserving the
  // original node identity for existing saves. The inserted entry keeps its exit.
  for(const revision of revisions)for(const redirect of revision.redirects||[]){
    for(const chapter of chapters)for(const [id,node] of Object.entries(chapter.nodes)){
      if(id===redirect.to||(redirect.except||[]).includes(id))continue;
      let changed=false;const copy={...node};
      if(copy.next===redirect.from){copy.next=redirect.to;changed=true;}
      if(copy.nextIf){copy.nextIf=copy.nextIf.map(rule=>rule.next===redirect.from?(changed=true,{...rule,next:redirect.to}):rule);}
      if(copy.choices){copy.choices=copy.choices.map(choice=>choice.next===redirect.from?(changed=true,{...choice,next:redirect.to}):choice);}
      if(changed)chapter.nodes[id]=copy;
    }
  }
  for(const chapter of chapters){
    const knownChoices=new Set(chapter.decisions.map(d=>typeof d==='string'?d:d.id));
    for(const node of Object.values(chapter.nodes)){
      if(!chapter.scenes.includes(node.scene))chapter.scenes.push(node.scene);
      for(const rule of node.sceneIf||[])if(!chapter.scenes.includes(rule.scene))chapter.scenes.push(rule.scene);
      if(['ending','chapterOutcome','checkpoint'].includes(node.kind)&&!chapter.outcomeNodeIds.includes(node.id))chapter.outcomeNodeIds.push(node.id);
      if(node.choices&&!knownChoices.has(node.id)){chapter.decisions.push(node.id);knownChoices.add(node.id);}
    }
  }
  return {chapters,issues,directions};
}
