// Accounting compatibility for this campaign. History is evidence; an intention
// flag is never evidence that a paid physical operation has finished.
export const BRIDGE_LEDGER_VERSION = 1;
export function reconcileBridgeHistory(state) {
  if (state.flags?.ev6_ledger_version === BRIDGE_LEDGER_VERSION) return state;
  const flags={...state.flags};
  const history=Array.isArray(state.history)?state.history:[];
  const index=id=>history.findIndex(entry=>entry.nodeId===id);
  const seen=id=>index(id)>=0;
  const priorMode=state.chosen?.fx_choice_bridge;
  const modes=['fx_bridge_onewrite','fx_bridge_seal','fx_bridge_public','fx_bridge_dismantle'];
  const flagged=modes.filter(key=>Boolean(flags[key]));
  const mode=modes.includes(priorMode)?priorMode:flagged.length===1?flagged[0]:null;
  const completed8=(state.completedChapters||[]).some(ch=>ch.chapterId==='ch08');
  const w8=seen('c8_c19')||completed8||history.some(e=>String(e.nodeId).startsWith('out_ch8_'));
  const bypass=w8&&(seen('c8_br05')||Boolean(flags.bridge_write_restored));
  if(w8){flags.ev6_w8_spent=true;flags.bridge_write_consumed=true;}
  if(bypass){flags.ev6_w8_bypass_burned=true;flags.bridge_write_disabled=true;}
  const manual=Boolean(flags.ev6_h1_manual_only);
  const one=mode==='fx_bridge_onewrite';
  if(one)flags.ev6_w9_rebuild_promised=true;
  const actualPreparation=seen('fx_v6_w9_prepare')||seen('fx_v6_w9_legacy_prepare');
  // In the original text, fx_57 in the write route contains the actual
  // dismantling, new chip, test and start. Other modes have different work.
  const oldWriteStart=one&&!manual&&seen('fx_57');
  const preparation=actualPreparation||oldWriteStart;
  if(preparation){
    flags.ev6_w9_material_paid=true;
    flags.ev6_old_writer_retired=true;
    flags.ev6_w9_ready=!oldWriteStart&&!flags.ev6_w9_started&&!flags.ev6_w9_complete;
    flags.bridge_write_disabled=false;
  }
  if(oldWriteStart){
    flags.ev6_w9_started=true;
    flags.ev6_w9_ready=false;
  }
  if(oldWriteStart&&seen('fx_58')){
    flags.ev6_w9_complete=true;
    flags.bridge_write_consumed=true;
    flags.ev6_terminal_sealed=true;
    flags.bridge_write_disabled=true;
  }
  if(seen('fx_57')&&!one){
    if(mode==='fx_bridge_dismantle'){
      flags.ev6_terminal_dismantled=true;
      flags.ev6_terminal_sealed=false;
      flags.bridge_write_disabled=true;
    }else if(mode==='fx_bridge_seal'||mode==='fx_bridge_public'){
      flags.ev6_terminal_sealed=true;
      flags.bridge_write_disabled=true;
      if(mode==='fx_bridge_public')flags.fx_records_public=true;
    }
  }
  if(one&&!manual&&!preparation&&['fx_55','fx_56','fx_56a'].includes(state.nodeId))
    flags.ev6_w9_needs_legacy_prepare=true;
  flags.ev6_w9_request_active=one&&!manual&&!flags.ev6_w9_started&&!flags.ev6_w9_complete;
  if(seen('fx_r_03')){
    flags.ev6_terminal_dismantled=true;
    flags.ev6_terminal_sealed=false;
    flags.ev6_old_writer_retired=true;
    flags.bridge_write_disabled=true;
  }
  // Preserve historical evidence. Never reset choices, meters or source text.
  flags.ev6_ledger_version=BRIDGE_LEDGER_VERSION;
  return {...state,flags};
}

export function describeBridgeHardware(state) {
  const f=state?.flags||{};
  let status;
  if(f.ev6_terminal_dismantled)
    status='写入针与授权路径已物理拆除，保留只读显示和历史记录。';
  else if(f.ev6_w9_complete)
    status='本章的一次新写入已经完成，唯一备用控制板和针组已用掉；旧操作座退出使能，新座完成封存，返航按减少冗余后的性能安排。';
  else if(f.ev6_terminal_sealed)
    status='当前写入口已机械封座，只读显示和原始记录保留，钥匙随封条归档。';
  else if(f.ev6_w9_started)
    status='本章的一次写入已开始，唯一备用材料已经付出；完成仍待现场确认。';
  else if(f.ev6_w9_ready)
    status='唯一备用材料已改成一套就绪的一次性写入座，旧座退出使能；这次操作尚未开始。';
  else if(f.ev6_w8_bypass_burned)
    status='第八章的一次性旁路已用尽，现有接口只读；本章尚未付出新一套写入硬件。';
  else if(f.ev6_w8_spent&&f.key_returned)
    status='原授权芯片已移交港区封存库。旧航行记录记载了第八章作业，却缺少当次替代硬件的准备记录；现存资料不能据此认定原芯片仍在舰上。本章的备用控制板和针组仍在封箱里，后续按实物重新验收。';
  else if(f.ev6_w8_spent)
    status='第八章作业已登记，完整芯片留在原操作座内，本章的备用板和针组仍在封箱里。';
  else if(f.bridge_write_restored)
    status='一次性旁路已完成准备，本次写入尚未开始。原授权芯片的去向按移交或回收记录保管，旁路使用后将转回只读。';
  else if(f.key_returned)
    status='原授权芯片已移交港区封存库，舰内接收机现为只读；移交回执留在船上。';
  else
    status='接口按本航次已经确认的实物和作业记录保管。';
  if(f.ev6_h1_manual_only&&!f.ev6_w9_started&&!f.ev6_w9_complete)
    status+=' 本轮由三处进行现场维护互校，备用控制板和针组原样保留。';
  if(f.fx_records_public)status+=' 原始记录与校准方法已公开，后续移交保留公开状态。';
  return status;
}

export function formatBridgeOutcome(value,state) {
  if(typeof value==='string')return value.split('{bridge_status}').join(describeBridgeHardware(state));
  if(Array.isArray(value))return value.map(item=>formatBridgeOutcome(item,state));
  if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,formatBridgeOutcome(item,state)]));
  return value;
}
