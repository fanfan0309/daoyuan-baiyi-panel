; (function () {
  try {
    const hostView = (window.parent && window.parent !== window && window.parent.document && window.parent.document.body) ? window.parent : window;
    const hostDoc = hostView.document;
    const boot = hostDoc.createElement('div');
    boot.setAttribute('data-daoyuan-baiyi-boot', '1');
    boot.style.cssText = 'position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:2147483001;padding:10px 16px;border-radius:12px;border:1px solid #bdc8d566;background:#0e1826;color:#dfe7ef;font:13px/1.5 system-ui,sans-serif';
    boot.textContent = '[道渊·百艺] 脚本已开始执行';
    hostDoc.body.appendChild(boot);
    setTimeout(function () { try { boot.remove(); } catch (error) {} }, 8000);
  } catch (error) {}
  try {
// Source template for a character-local Tavern Helper script.
// tools/build.mjs replaces the one HTML marker with the JSON-escaped panel asset.
const PANEL_HTML = "<!doctype html>\n<html lang=\"zh-CN\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n  <title>百艺修习</title>\n</head>\n<body>\n<div class=\"dyb-root\" data-dyb-root>\n  <header class=\"dyb-header\">\n    <div class=\"dyb-header-copy\">\n      <p class=\"dyb-kicker\">道渊 · 山门百艺修持</p>\n      <h1>百艺修习</h1>\n      <p class=\"dyb-subtitle\">修一门手艺，留一段行功 · 由技艺见真章</p>\n      <button type=\"button\" class=\"dyb-collapse-toggle\" data-collapse-toggle aria-expanded=\"true\" aria-controls=\"dyb-panel-content\" aria-label=\"收纳面板下方内容\">\n        <span aria-hidden=\"true\" data-collapse-icon>⌃</span><span data-collapse-label>收纳下方内容</span>\n      </button>\n    </div>\n    <span class=\"dyb-header-sigil\" aria-hidden=\"true\">道</span>\n    <div class=\"dyb-header-meta\"><span class=\"dyb-status-dot\"></span><span data-dyb-status>读取中</span></div>\n  </header>\n\n  <div id=\"dyb-panel-content\" class=\"dyb-panel-content\" data-panel-content>\n  <nav class=\"dyb-tabs\" aria-label=\"百艺面板导航\">\n    <button type=\"button\" class=\"is-active\" data-tab=\"overview\" aria-pressed=\"true\">总览</button>\n    <button type=\"button\" data-tab=\"practice\" aria-pressed=\"false\">修习</button>\n    <button type=\"button\" data-tab=\"commissions\" aria-pressed=\"false\">委托</button>\n    <button type=\"button\" data-tab=\"record\" aria-pressed=\"false\">记录</button>\n  </nav>\n\n  <main>\n    <section class=\"dyb-view is-active\" data-view=\"overview\">\n      <div class=\"dyb-section-head\"><div><p class=\"dyb-kicker\">九艺修习谱 · NINE CRAFT PATHS</p><h2>百艺道场</h2></div><span class=\"dyb-count\" data-skill-count>0 门已有行功记录</span></div>\n      <section class=\"dyb-hero\" aria-label=\"百艺修习引言\">\n        <div class=\"dyb-hero-copy\"><p class=\"dyb-kicker\">个人修持 · 以艺入道</p><h3>一艺一修持，百艺皆可证道</h3><p>择一门艺业，从辨材、识理与习法开始；亲手演练、完成实作，再把所得与失误记入行履。</p><div class=\"dyb-hero-tags\"><span>择艺入门</span><i></i><span>按法勤修</span><i></i><span>亲作留痕</span></div></div>\n        <div class=\"dyb-hero-mark\" aria-hidden=\"true\"><span>修</span><b>行功</b></div>\n      </section>\n      <section class=\"dyb-practice-path\" aria-label=\"个人修习次第\">\n        <div class=\"dyb-path-heading\"><span>修习次第</span><small>不凭空晋阶，以经历印证所学</small></div>\n        <ol class=\"dyb-path-steps\">\n          <li><b>一</b><span>悟理</span><small>先明其道</small></li>\n          <li><b>二</b><span>练诀</span><small>再熟其法</small></li>\n          <li><b>三</b><span>行艺</span><small>亲手试功</small></li>\n          <li><b>四</b><span>验成</span><small>记得与失</small></li>\n          <li><b>五</b><span>求师访迹</span><small>循缘问道</small></li>\n        </ol>\n      </section>\n      <div class=\"dyb-grid-heading\"><span>九艺修持谱</span><small>择一门艺业，循序细修</small></div>\n      <div class=\"dyb-skill-grid\" data-skill-grid></div>\n      <div class=\"dyb-note\"><span class=\"dyb-note-mark\">✦</span><p>丹道、器道与储物袋沿用核心卡记录。此处只呈现与百艺成长有关的信息。</p></div>\n      <section class=\"dyb-materials\" aria-label=\"核心储物袋材料\"><h3>可用材料 · 核心卡储物袋</h3><div data-material-list></div></section>\n      <div class=\"dyb-pending\" data-pending hidden><span data-pending-text></span><button type=\"button\" data-cancel-pending>撤销待处理行动</button></div>\n    </section>\n\n    <section class=\"dyb-view\" data-view=\"practice\">\n      <div class=\"dyb-section-head\"><div><p class=\"dyb-kicker\">百艺法门 · 以艺入道</p><h2>择艺入门</h2></div></div>\n      <label class=\"dyb-field\"><span>艺业</span><select data-profession></select></label>\n      <div class=\"dyb-practice-card\" data-practice-card></div>\n      <label class=\"dyb-field\"><span>此次修习</span><select data-action-kind>\n        <option value=\"研习\">研习心得/传承</option>\n        <option value=\"演练\">基础演练</option>\n        <option value=\"实作\">尝试一次实作</option>\n        <option value=\"复盘\">复盘已发生的经历</option>\n        <option value=\"寻师/访迹\">沿当前剧情寻师/访迹</option>\n      </select></label>\n      <label class=\"dyb-field\"><span>目标或备注</span><input data-action-note maxlength=\"120\" placeholder=\"例如：研习手边的制符玉简或灵食谱卷\"></label>\n      <button type=\"button\" class=\"dyb-primary\" data-preview-practice>预览此次行动</button>\n    </section>\n\n    <section class=\"dyb-view\" data-view=\"commissions\">\n      <div class=\"dyb-section-head\"><div><p class=\"dyb-kicker\">以事证道 · PRACTICE BY DOING</p><h2>委托任务</h2></div></div>\n      <p class=\"dyb-copy\">委托由剧情中的坊市、宗门或修士提出。报酬、期限、材料和失败代价以角色卡世界规则与当前剧情为准。</p>\n      <nav class=\"dyb-order-filters\" aria-label=\"委托筛选\">\n        <button type=\"button\" class=\"is-active\" data-order-filter=\"all\" aria-pressed=\"true\">全部</button>\n        <button type=\"button\" data-order-filter=\"available\" aria-pressed=\"false\">待接取</button>\n        <button type=\"button\" data-order-filter=\"active\" aria-pressed=\"false\">进行中</button>\n        <button type=\"button\" data-order-filter=\"archive\" aria-pressed=\"false\">已归档</button>\n      </nav>\n      <div class=\"dyb-order-list\" data-order-list></div>\n      <button type=\"button\" class=\"dyb-secondary\" data-find-order>寻觅合适委托</button>\n    </section>\n\n    <section class=\"dyb-view\" data-view=\"record\">\n      <div class=\"dyb-section-head\"><div><p class=\"dyb-kicker\">行履留痕 · THE WAY YOU HAVE WALKED</p><h2>修习记录</h2></div><span class=\"dyb-count\" data-revision>记录 0</span></div>\n      <div class=\"dyb-record-list\" data-record-list></div>\n    </section>\n  </main>\n  </div>\n\n  <dialog class=\"dyb-dialog\" data-confirm-dialog>\n    <form method=\"dialog\" class=\"dyb-dialog-inner\">\n      <p class=\"dyb-kicker\">行前一念 · REVIEW BEFORE SENDING</p>\n      <h2>确认行动</h2>\n      <p class=\"dyb-copy\" data-confirm-summary></p>\n      <p class=\"dyb-risk\" data-confirm-risk></p>\n      <div class=\"dyb-dialog-actions\">\n        <button type=\"button\" class=\"dyb-secondary\" data-cancel>返回修改</button>\n        <button type=\"button\" class=\"dyb-primary\" data-confirm>填入输入框</button>\n      </div>\n    </form>\n  </dialog>\n  <p class=\"dyb-live\" data-live aria-live=\"polite\"></p>\n</div>\n\n<style>\n  .dyb-root{--ink:#eeeaf0;--muted:#aeb8c7;--line:#bdc8d522;--moon:#d9e5ed;--jade:#9ac9c3;--gold:#dfc993;--night:#08111d;position:relative;isolation:isolate;box-sizing:border-box;width:min(100%,900px);margin:0 auto;padding:clamp(15px,3vw,30px);overflow:hidden;border:1px solid #bdc8d52b;border-radius:22px;color:var(--ink);background:radial-gradient(ellipse at 84% 0%,#9cbac41a,transparent 29%),radial-gradient(ellipse at 8% 24%,#758ca00d,transparent 35%),linear-gradient(155deg,#111c2b,#0a1421 54%,#070d17);box-shadow:0 22px 70px #0007,inset 0 1px #ffffff0d;font:14px/1.55 system-ui,-apple-system,\"Segoe UI\",sans-serif}\n  .dyb-root *{box-sizing:border-box}.dyb-root button{font:inherit;color:inherit;cursor:pointer}.dyb-root button:focus-visible,.dyb-root input:focus-visible,.dyb-root select:focus-visible{outline:2px solid var(--jade);outline-offset:2px}\n  .dyb-kicker{margin:0 0 6px;color:#d8c48e;font-size:9px;font-weight:700;letter-spacing:.24em}.dyb-header{position:relative;isolation:isolate;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:158px;margin-bottom:13px;padding:24px clamp(18px,4vw,34px);overflow:hidden;border:1px solid #d5dce22b;border-radius:17px;background:radial-gradient(circle at 76% 10%,#e7f3fa31 0 1px,transparent 2px),radial-gradient(circle at 66% 30%,#dce9f222 0 1px,transparent 2px),radial-gradient(ellipse at 76% 6%,#cfdeec20,transparent 36%),linear-gradient(105deg,#172638 0%,#142130 54%,#172839 100%);box-shadow:inset 0 1px #ffffff0d}\n  .dyb-header::before{position:absolute;z-index:-1;top:-115px;right:12%;width:280px;height:280px;border:1px solid #e1ebef2b;border-radius:50%;background:radial-gradient(circle,#eef5f2 0 2%,#d9e5e4 3% 4%,#c6d5d8 5% 17%,#a9bfca23 18% 37%,transparent 38%);box-shadow:0 0 0 13px #dfeaf00a,0 0 0 35px #dfeaf008,0 0 55px #b1d0db20;content:\"\"}\n  .dyb-header::after{position:absolute;z-index:-1;inset:auto 0 0;height:53%;background:linear-gradient(160deg,transparent 0 34%,#0b1621 35% 100%);clip-path:polygon(0 48%,8% 34%,15% 60%,25% 18%,34% 55%,43% 38%,55% 70%,66% 25%,77% 61%,87% 12%,100% 56%,100% 100%,0 100%);content:\"\";opacity:.55}\n  .dyb-header h1{margin:0;color:#f5f2eb;font-family:serif;font-size:clamp(29px,5vw,41px);font-weight:500;letter-spacing:.2em;text-shadow:0 3px 24px #d9e5ed29}.dyb-subtitle{margin:8px 0 0;color:#bdc9d0;font-size:11px;letter-spacing:.17em}.dyb-header-sigil{position:absolute;top:54%;right:clamp(70px,14vw,145px);display:grid;place-items:center;width:73px;height:73px;transform:translateY(-50%) rotate(45deg);border:1px solid #e8dfbd52;border-radius:50%;color:#f2e6c3a6;font-family:serif;font-size:39px;line-height:1;box-shadow:0 0 0 7px #dae7ed0a,0 0 32px #d6e5eb18;pointer-events:none}.dyb-header-sigil::after{position:absolute;inset:7px;border:1px solid #e8dfbd45;border-radius:50%;content:\"\"}.dyb-header-meta{position:relative;z-index:1;display:flex;align-items:center;gap:8px;padding:7px 10px;border:1px solid #ffffff18;border-radius:99px;background:#07101da8;color:#c2ced4;font-size:10px;white-space:nowrap}.dyb-status-dot{width:6px;height:6px;border-radius:50%;background:#9ac9b4;box-shadow:0 0 10px #9ac9b488}\n  .dyb-tabs{display:flex;gap:5px;overflow:auto;padding:6px;border:1px solid #ffffff12;border-radius:13px;background:#050a11a8}.dyb-tabs button{flex:0 0 auto;min-height:44px;padding:8px 18px;border:1px solid transparent;border-radius:9px;background:transparent;color:#aeb8c7;font-size:11px;letter-spacing:.1em;transition:background .18s ease,color .18s ease,border-color .18s ease}.dyb-tabs button:hover{color:var(--moon)}.dyb-tabs button.is-active{border-color:#d6c28e34;background:linear-gradient(135deg,#d6c28e1c,#8eb9c51a);color:#f1e6c9;box-shadow:inset 0 1px #ffffff0b,0 4px 16px #0003}.dyb-view{display:none;padding:18px 0 2px}.dyb-view.is-active{display:block}\n  .dyb-section-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin:4px 1px 13px}.dyb-section-head h2,.dyb-dialog h2{margin:0;color:#f1eee8;font-family:serif;font-size:21px;font-weight:500;letter-spacing:.14em}.dyb-count{padding:5px 9px;border:1px solid #ffffff13;border-radius:99px;background:#ffffff05;color:#bcc5cd;font-size:10px;white-space:nowrap}\n  .dyb-hero{position:relative;isolation:isolate;display:flex;justify-content:space-between;align-items:center;gap:20px;min-height:177px;margin:0 0 15px;padding:22px clamp(17px,4vw,31px);overflow:hidden;border:1px solid #d5dfdc35;border-radius:15px;background:radial-gradient(circle at 81% 19%,#f4f7ef 0 1px,transparent 2px),radial-gradient(circle at 88% 73%,#e9f3ef 0 1px,transparent 2px),radial-gradient(circle at 72% 30%,#dae8ed10 0 42px,transparent 43px),radial-gradient(ellipse at 79% 18%,#d4e3ec24,transparent 34%),linear-gradient(115deg,#192a3b,#142334 56%,#172b36);box-shadow:inset 0 1px #ffffff10}\n  .dyb-hero::before{position:absolute;z-index:-1;inset:0;background:linear-gradient(155deg,transparent 45%,#0a1624 45.5% 100%);clip-path:polygon(0 53%,11% 38%,21% 61%,34% 26%,45% 62%,55% 44%,66% 76%,77% 39%,91% 65%,100% 28%,100% 100%,0 100%);content:\"\";opacity:.68}\n  .dyb-hero::after{position:absolute;z-index:-1;right:12%;top:-78px;width:190px;height:190px;border:1px solid #ecf1e84a;border-radius:50%;background:radial-gradient(circle,#f2f1df 0 2%,#dae5e5 3% 4%,#d5e1e4 5% 14%,#c3dce01a 15% 50%,transparent 51%);box-shadow:0 0 0 9px #dae9ed0b,0 0 36px #dbe8ec1f;content:\"\"}\n  .dyb-hero-copy{position:relative;max-width:530px}.dyb-hero h3{margin:4px 0 7px;color:#f5f0e5;font-family:serif;font-size:clamp(22px,4vw,30px);font-weight:500;letter-spacing:.15em;text-shadow:0 2px 20px #d6e3e91c}.dyb-hero-copy>p:not(.dyb-kicker){max-width:500px;margin:0;color:#c1cbd0;font-size:12px;line-height:1.85}.dyb-hero-tags{display:flex;align-items:center;gap:9px;margin-top:16px;color:#dfd2ad;font-size:10px;letter-spacing:.09em}.dyb-hero-tags i{width:3px;height:3px;border-radius:50%;background:#e0cd8e}\n  .dyb-hero-mark{position:relative;display:grid;place-items:center;flex:0 0 90px;width:90px;height:90px;transform:rotate(45deg);border:1px solid #e5d5a854;border-radius:50%;color:#e7d7aa;font-family:serif;box-shadow:0 0 0 7px #e1d1980b,0 0 32px #d6e5eb17,inset 0 0 20px #e1d1980d}.dyb-hero-mark::before,.dyb-hero-mark::after{position:absolute;inset:7px;border:1px solid #e5d5a83d;border-radius:50%;content:\"\"}.dyb-hero-mark::after{inset:-7px;border-color:#cfdee42b}.dyb-hero-mark span{font-size:37px;line-height:1}.dyb-hero-mark b{position:absolute;bottom:-16px;padding:1px 7px;transform:rotate(-45deg);background:#172b36;color:#cad8d3;font-family:serif;font-size:9px;font-weight:400;letter-spacing:.22em;white-space:nowrap}\n  .dyb-skill-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px}.dyb-skill{position:relative;width:100%;min-height:111px;padding:13px 14px;overflow:hidden;border:1px solid #d6e0e313;border-radius:12px;background:linear-gradient(145deg,#19293a,#111d2b);text-align:left;box-shadow:inset 0 1px #ffffff08;transition:transform .2s ease,border-color .2s ease,background .2s ease,box-shadow .2s ease}.dyb-skill::after{position:absolute;right:0;top:15px;bottom:15px;width:2px;border-radius:2px;background:linear-gradient(transparent,#e0cc8b88,transparent);content:\"\";opacity:.6}.dyb-skill:hover,.dyb-skill:focus-visible{transform:translateY(-2px);border-color:#d6c28e65;background:linear-gradient(145deg,#203449,#142333);box-shadow:0 9px 24px #0003,inset 0 1px #ffffff0c}.dyb-skill-head{display:flex;align-items:center;justify-content:space-between;gap:8px}.dyb-skill-title-group{display:flex;align-items:center;gap:9px;min-width:0}.dyb-skill-seal{display:grid;place-items:center;flex:0 0 32px;width:32px;height:32px;transform:rotate(45deg);border:1px solid #e0cc8b56;border-radius:8px;color:#e8d6a5;background:linear-gradient(145deg,#d6c28e1c,#9ac9c310);font-family:serif;font-size:16px}.dyb-skill-name{color:#f1eee8;font-family:serif;font-size:15px;letter-spacing:.12em}.dyb-rank{padding:3px 7px;border:1px solid #9ac9c331;border-radius:99px;background:#9ac9c30c;color:#b8d8d0;font-size:9px;white-space:nowrap}.dyb-skill-meta{display:flex;justify-content:space-between;gap:8px;margin:12px 0 6px 40px;color:var(--muted);font-size:10px}.dyb-progress{height:4px;margin-left:40px;overflow:hidden;border-radius:8px;background:#ffffff12}.dyb-progress span{display:block;height:100%;border-radius:8px;background:linear-gradient(90deg,#658f9a,#a9c9c2 55%,#e1cd91)}.dyb-progress-unavailable{margin:9px 0 0 40px;color:var(--muted);font-size:10px;line-height:1.4}\n  .dyb-note{display:flex;gap:10px;align-items:flex-start;margin-top:14px;padding:12px 14px;border:1px solid #d6c28e25;border-radius:11px;color:#bac4cc;background:linear-gradient(90deg,#d6c28e0d,#ffffff03);font-size:11px}.dyb-note p{margin:0}.dyb-note-mark{color:#e5d093}.dyb-materials{margin-top:12px;padding:14px 2px 2px;border-top:1px solid #ffffff13}.dyb-materials h3{display:flex;align-items:center;gap:8px;margin:0 0 9px;color:#e0d9c9;font-family:serif;font-size:13px;letter-spacing:.08em}.dyb-materials h3::before{width:3px;height:13px;border-radius:3px;background:var(--jade);content:\"\"}.dyb-material-list{display:flex;flex-wrap:wrap;gap:7px}.dyb-material{padding:6px 10px;border:1px solid #9ac9c327;border-radius:99px;background:#9ac9c309;color:#c9d0ce;font-size:10px}.dyb-empty{padding:8px 10px;border:1px dashed #ffffff20;border-radius:8px;color:var(--muted);font-size:11px}\n  .dyb-copy{margin:0 0 14px;color:var(--muted);font-size:12px;line-height:1.75}.dyb-field{display:grid;gap:6px;margin:12px 0;color:#c5cbd0;font-size:12px}.dyb-field input,.dyb-field select{width:100%;min-width:0;min-height:44px;border:1px solid #ffffff20;border-radius:9px;padding:10px 11px;background:#091320;color:var(--ink);font:inherit}.dyb-field input:hover,.dyb-field select:hover{border-color:#d6c28e54}.dyb-practice-card,.dyb-order,.dyb-record{padding:15px;border:1px solid #d6e0e316;border-radius:12px;background:linear-gradient(145deg,#172638,#101a28);box-shadow:inset 0 1px #ffffff08}.dyb-practice-card{margin:12px 0}.dyb-practice-card h3{margin:0 0 5px;color:#f0eadb;font-family:serif;font-size:19px;font-weight:500}.dyb-practice-card p{margin:0;color:#bdc7cd;font-size:12px}.dyb-guidance{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));gap:8px;margin:12px 0}.dyb-guidance-item{padding:10px;border:1px solid #ffffff13;border-radius:9px;background:#ffffff04}.dyb-guidance-item strong{display:block;margin-bottom:4px;color:#dfcb91;font-size:11px}.dyb-guidance-item span{color:var(--muted);font-size:11px;line-height:1.55}.dyb-known-techniques{margin-top:10px;padding-top:9px;border-top:1px solid #ffffff13;color:var(--muted);font-size:11px}\n  .dyb-primary,.dyb-secondary{min-height:44px;border-radius:9px;padding:9px 14px;font-weight:650;transition:transform .15s ease,border-color .15s ease,filter .15s ease}.dyb-primary{border:1px solid #dfcc8b7d;background:linear-gradient(130deg,#8e794d,#5e523b);color:#fff7e5;box-shadow:inset 0 1px #ffffff24,0 5px 14px #0002;letter-spacing:.06em}.dyb-primary:hover,.dyb-secondary:hover{transform:translateY(-1px);filter:brightness(1.08)}.dyb-secondary{border:1px solid #ffffff1d;background:#ffffff07;color:#d0d6d7}\n  .dyb-order-filters{display:flex;gap:6px;overflow:auto;padding:5px 0 12px}.dyb-order-filters button{min-height:44px;padding:6px 13px;border:1px solid #ffffff17;border-radius:99px;background:#ffffff05;color:var(--muted);font-size:11px;white-space:nowrap}.dyb-order-filters button.is-active{border-color:#dfcb9155;background:#d6c28e15;color:#ead9ab}.dyb-order-list,.dyb-record-list{display:grid;gap:10px;margin:10px 0 14px}.dyb-order h3,.dyb-record h3{margin:0 0 5px;color:#f0eadb;font-family:serif;font-size:16px;font-weight:500;letter-spacing:.05em}.dyb-order p,.dyb-record p{margin:0;color:var(--muted);font-size:12px}.dyb-order-foot{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:10px}.dyb-tag{display:inline-block;padding:3px 8px;border:1px solid #9ac9c332;border-radius:99px;color:#b5d6d0;font-size:10px}.dyb-order-details{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,185px),1fr));gap:7px;margin-top:10px}.dyb-order-detail{padding:8px;border:1px solid #ffffff0b;border-radius:8px;background:#080e1715;color:var(--muted);font-size:11px;overflow-wrap:anywhere}.dyb-order-detail strong{display:block;margin-bottom:3px;color:#d6c38f;font-size:10px;letter-spacing:.05em}.dyb-order-actions{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}.dyb-order-actions button,.dyb-order button{min-height:44px;padding:7px 10px;border:1px solid #dfcc8b53;border-radius:8px;background:#d6c28e10;color:#e6d39f;transition:transform .15s ease,background .15s ease,border-color .15s ease}.dyb-order-actions button:hover,.dyb-order button:hover{transform:translateY(-1px);border-color:#dfcc8b9c;background:#d6c28e19}.dyb-order-actions button[data-order-action=\"拒绝委托\"],.dyb-order-actions button[data-order-action=\"放弃委托\"]{border-color:#ffffff20;background:#ffffff05;color:var(--muted)}\n  .dyb-pending{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:10px;padding:11px;border:1px solid #dfcc8b44;border-radius:10px;color:#ebd8a6;background:#d6c28e0d;font-size:12px}.dyb-pending[hidden]{display:none}.dyb-pending button{flex:0 0 auto;min-height:40px;border:1px solid #ffffff20;border-radius:8px;padding:7px 9px;background:#ffffff08;color:var(--ink)}.dyb-dialog{width:min(92vw,460px);padding:0;border:1px solid #d6c28e70;border-radius:15px;background:linear-gradient(145deg,#1a2a3b,#0d1622);color:var(--ink);box-shadow:0 22px 65px #000b,inset 0 1px #ffffff0b}.dyb-dialog::backdrop{background:#020711bd;backdrop-filter:blur(3px)}.dyb-dialog-inner{padding:clamp(18px,4vw,25px)}.dyb-dialog h2{margin-bottom:10px}.dyb-risk{margin:10px 0;padding:10px;border-left:2px solid var(--jade);background:#9ac9c30d;color:#d0c8ad;font-size:12px}.dyb-dialog-actions{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:8px;margin-top:16px}.dyb-live{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}\n  @media(max-width:680px){.dyb-skill-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.dyb-hero{min-height:150px}.dyb-hero-mark{flex-basis:76px;width:76px;height:76px}.dyb-hero-mark span{font-size:31px}}\n  @media(max-width:480px){.dyb-root{padding:12px;border-radius:15px}.dyb-header{display:block;min-height:132px;padding:19px 16px;border-radius:13px}.dyb-header-sigil{top:31px;right:23px;width:48px;height:48px;font-size:27px}.dyb-header-meta{display:inline-flex;margin-top:14px}.dyb-tabs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px}.dyb-tabs button{min-width:0;min-height:44px;padding:7px 3px;font-size:10px;letter-spacing:.02em}.dyb-section-head{align-items:flex-end;margin-top:16px}.dyb-section-head h2{font-size:19px}.dyb-count{padding:4px 7px;font-size:9px}.dyb-hero{min-height:0;padding:17px 14px}.dyb-hero h3{font-size:20px}.dyb-hero-copy>p:not(.dyb-kicker){font-size:11px}.dyb-hero-tags{gap:6px;margin-top:12px;font-size:9px}.dyb-hero-mark{flex-basis:55px;width:55px;height:55px;margin-right:3px}.dyb-hero-mark span{font-size:22px}.dyb-hero-mark b{bottom:-14px;font-size:8px}.dyb-skill-grid{grid-template-columns:minmax(0,1fr);gap:7px}.dyb-skill{min-height:96px;padding:11px 12px}.dyb-skill-meta{margin-top:9px}.dyb-order-foot{align-items:flex-start;flex-direction:column}.dyb-order-details{grid-template-columns:minmax(0,1fr)}.dyb-order-actions button{flex:1 1 calc(50% - 6px)}.dyb-pending{align-items:flex-start;flex-direction:column}.dyb-material-list{gap:5px}.dyb-dialog-actions>*{flex:1 1 100%}}\n  @media(prefers-reduced-motion:reduce){.dyb-skill,.dyb-primary,.dyb-secondary,.dyb-order-actions button{transition:none}.dyb-skill:hover,.dyb-primary:hover,.dyb-secondary:hover,.dyb-order-actions button:hover{transform:none}}\n  .dyb-header-sigil{transform:translateY(-50%)}.dyb-hero-mark span{transform:rotate(-45deg)}.dyb-skill-seal{transform:none;border-radius:50%}\n  .dyb-skill-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px}\n  .dyb-skill-focus{display:block;margin:8px 0 0 41px;color:#c5b989;font-size:10px;letter-spacing:.08em}\n  .dyb-practice-path{margin:0 0 17px;padding:13px 15px 12px;border:1px solid #d6c28e27;border-radius:13px;background:linear-gradient(100deg,#182638,#101b29 62%,#12222a);box-shadow:inset 0 1px #ffffff08}\n  .dyb-path-heading{display:flex;align-items:baseline;gap:10px;margin:0 0 11px}.dyb-path-heading>span{color:#ead8a9;font-family:serif;font-size:14px;letter-spacing:.12em}.dyb-path-heading small{color:#aebbc3;font-size:10px}\n  .dyb-path-steps{position:relative;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px;margin:0;padding:0;list-style:none}.dyb-path-steps::before{position:absolute;top:13px;left:7%;right:7%;height:1px;background:linear-gradient(90deg,#d6c28e15,#d6c28e88,#91c9c255);content:\"\"}.dyb-path-steps li{position:relative;display:grid;grid-template-columns:27px 1fr;grid-template-rows:25px auto;align-items:center;column-gap:6px;min-width:0}.dyb-path-steps li>b{z-index:1;display:grid;place-items:center;width:25px;height:25px;border:1px solid #d6c28e55;border-radius:50%;background:#142232;color:#e6d49b;font-family:serif;font-size:10px;font-weight:500}.dyb-path-steps li>span{color:#e2e5e2;font-family:serif;font-size:11px;letter-spacing:.06em;white-space:nowrap}.dyb-path-steps li>small{grid-column:2;color:#95a5b2;font-size:9px;white-space:nowrap}\n  .dyb-skill[data-choose-profession=\"炼丹\"]{--art:#e8aa74}.dyb-skill[data-choose-profession=\"炼器\"]{--art:#a9c1d3}.dyb-skill[data-choose-profession=\"制符\"]{--art:#e2c67f}.dyb-skill[data-choose-profession=\"布阵\"]{--art:#c4afd9}.dyb-skill[data-choose-profession=\"灵植\"]{--art:#a4cf9b}.dyb-skill[data-choose-profession=\"御兽\"]{--art:#8cc7b6}.dyb-skill[data-choose-profession=\"傀儡\"]{--art:#bac3cb}.dyb-skill[data-choose-profession=\"医修\"]{--art:#9ed0c7}.dyb-skill[data-choose-profession=\"灵食\"]{--art:#e2b875}\n  .dyb-practice-focus{display:flex;align-items:center;gap:9px;margin:13px 0 11px;padding:9px 10px;border:1px solid #d6c28e29;border-radius:9px;background:linear-gradient(90deg,#d6c28e0d,#ffffff03);color:#e0d2aa;font-size:11px;letter-spacing:.04em}.dyb-practice-focus span:first-child{display:grid;place-items:center;width:27px;height:27px;flex:0 0 27px;border:1px solid #e0cc8b55;border-radius:50%;color:#eddbab;font-family:serif;font-size:14px}.dyb-guidance-title{margin:7px 0 -5px;color:#d2d8d5;font-family:serif;font-size:12px;letter-spacing:.1em}.dyb-guidance{counter-reset:practice}.dyb-guidance-item{position:relative}.dyb-guidance-item::before{position:absolute;top:8px;right:9px;counter-increment:practice;content:\"0\" counter(practice);color:#c7b47a55;font-family:serif;font-size:10px;letter-spacing:.08em}\n  @media(max-width:680px){.dyb-skill-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}\n  @media(max-width:480px){.dyb-skill-grid{grid-template-columns:minmax(0,1fr)}.dyb-path-heading{align-items:flex-start;flex-direction:column;gap:3px}.dyb-path-steps{grid-template-columns:repeat(5,94px);overflow:auto;padding-bottom:6px}.dyb-skill{min-height:123px}.dyb-skill-focus{margin-top:7px}}\n  /* 修持道场视觉：山门、灵脉、艺业牌与行功笺，强化技艺练习而不虚构修为数值。 */\n  .dyb-root{--ink:#f0e8d6;--muted:#b7b09d;--line:#ceb87932;--moon:#dfd1a6;--jade:#91c4a9;--gold:#e2c27b;--night:#0b100e;background:radial-gradient(ellipse at 50% -5%,#d5c0781a,transparent 31%),radial-gradient(ellipse at 0% 42%,#507e6b1c,transparent 34%),linear-gradient(155deg,#171b17,#0c120f 52%,#090d0c);border-color:#d1b96842;box-shadow:0 22px 70px #0009,inset 0 1px #f8e9bd12}\n  .dyb-root.is-collapsed .dyb-panel-content{display:none}\n  .dyb-header-copy{position:relative;z-index:1}.dyb-collapse-toggle{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;margin-top:11px;padding:8px 13px;border:1px solid #dcc4777d;border-radius:8px;background:linear-gradient(135deg,#d7bd6e24,#8eb79c14);color:#eee0b5;font-family:serif;font-size:11px;letter-spacing:.08em;box-shadow:inset 0 1px #ffffff0c;transition:background .18s ease,border-color .18s ease,transform .18s ease}.dyb-collapse-toggle:hover{transform:translateY(-1px);border-color:#edd889;background:linear-gradient(135deg,#dbc6773b,#8eb79c22)}.dyb-collapse-toggle:focus-visible{outline:2px solid var(--jade);outline-offset:3px}.dyb-collapse-toggle [data-collapse-icon]{display:grid;place-items:center;width:20px;height:20px;border:1px solid #e3cc83a3;border-radius:50%;font-family:system-ui,sans-serif;font-size:14px;line-height:1}\n  .dyb-header{border-color:#d9c27b45;background:radial-gradient(circle at 74% 22%,#f0d794 0 1px,transparent 2px),radial-gradient(circle at 81% 34%,#f0d794 0 1px,transparent 2px),radial-gradient(ellipse at 78% 12%,#e2cc8b25,transparent 36%),linear-gradient(110deg,#18231c,#18251d 52%,#1e2c22);box-shadow:inset 0 1px #fff2,inset 0 -22px 42px #060b0990,0 8px 24px #0004}\n  .dyb-header::before{top:-135px;right:13%;width:300px;height:300px;border-color:#ead9a65c;background:radial-gradient(circle,#f2e5bf 0 1.5%,#d8c98f 2% 3%,#c6d8b8 4% 12%,#a4bea021 13% 38%,transparent 39%);box-shadow:0 0 0 12px #e8dcbd0b,0 0 0 34px #e8dcbd07,0 0 58px #dfd09c24}\n  .dyb-header::after{height:65%;background:linear-gradient(160deg,transparent 36%,#101914 36.5% 100%);opacity:.78}\n  .dyb-header-sigil{border-color:#e6c9799c;color:#efda9e;background:#111a13a8;box-shadow:0 0 0 7px #e1d19812,0 0 32px #d6b95a24}.dyb-header-sigil::after{border-color:#e8dfbd65}\n  .dyb-kicker{color:#dbc27b}.dyb-tabs{border-color:#ddc77f24;background:#080d0bc9}.dyb-tabs button.is-active{border-color:#d6b85c70;background:linear-gradient(135deg,#c9a84427,#668e6420);color:#f1dfaa;box-shadow:inset 0 1px #ffffff0e,0 4px 16px #0005}\n  .dyb-section-head h2,.dyb-dialog h2{color:#f0e3bd}.dyb-count{border-color:#d2bd7a35;background:#d1b96b0a;color:#d7caab}\n  .dyb-hero{border-color:#ddc77f50;background:radial-gradient(circle at 83% 18%,#f0d794 0 1px,transparent 2px),radial-gradient(circle at 91% 70%,#e5f0ca 0 1px,transparent 2px),radial-gradient(ellipse at 78% 12%,#d9c07823,transparent 36%),linear-gradient(115deg,#20291e,#17251e 58%,#233027);box-shadow:inset 0 1px #fff2,0 8px 24px #0003}\n  .dyb-hero::before{background:linear-gradient(155deg,transparent 44%,#0d1711 44.5% 100%);opacity:.8}.dyb-hero::after{border-color:#eddfb866;background:radial-gradient(circle,#f4e7bd 0 2%,#dbd1a3 3% 4%,#b7cfb0 5% 14%,#c3d9b91a 15% 50%,transparent 51%);box-shadow:0 0 0 9px #dae9ed0c,0 0 42px #dbc4772a}\n  .dyb-hero h3{color:#f2e4bd}.dyb-hero-copy>p:not(.dyb-kicker){color:#d0cebd}.dyb-hero-tags{color:#e7d39a}.dyb-hero-tags i{background:#e0bf5c}.dyb-hero-mark{border-color:#e5cf8c8c;color:#ecd99d;background:#10181150;box-shadow:0 0 0 7px #e1d19810,0 0 32px #d6c06824,inset 0 0 20px #e1d19812}.dyb-hero-mark::before,.dyb-hero-mark::after{border-color:#e5d5a85c}.dyb-hero-mark b{background:#1a2a20;color:#d6dfbd}\n  .dyb-path-heading>span{color:#efdb9c}.dyb-practice-path{border-color:#d4b85e55;background:linear-gradient(105deg,#1c261d,#131b16 58%,#1a281f);box-shadow:inset 0 1px #fff2,0 5px 18px #0003}.dyb-path-steps::before{background:linear-gradient(90deg,#d6c28e20,#e2c36b9c,#91c9a677)}.dyb-path-steps li>b{border-color:#ddc47a88;background:#151e17;color:#f0d78b;box-shadow:0 0 0 3px #ddc47a0d}.dyb-path-steps li>span{color:#e7e1cd}.dyb-path-steps li>small{color:#b8b69f}\n  .dyb-grid-heading{display:flex;align-items:baseline;gap:10px;margin:0 2px 9px;padding:0 0 8px;border-bottom:1px solid #d6c28e33}.dyb-grid-heading>span{color:#ead9a5;font-family:serif;font-size:15px;letter-spacing:.16em}.dyb-grid-heading>small{color:#aaa990;font-size:10px;letter-spacing:.08em}\n  .dyb-skill{min-height:122px;border-color:#d2bd7835;border-radius:7px;background:linear-gradient(145deg,#202a20,#141c17);box-shadow:inset 0 1px #fff2,inset 0 -16px 28px #080d0b70,0 4px 12px #0003}\n  .dyb-skill::before{position:absolute;inset:5px;border:1px solid #d6c28e14;border-radius:4px;content:\"\";pointer-events:none}.dyb-skill::after{top:12px;bottom:12px;width:3px;background:linear-gradient(transparent,var(--art,#d8bd71),transparent);opacity:.8}\n  .dyb-skill:hover,.dyb-skill:focus-visible{border-color:#dfc271a3;background:linear-gradient(145deg,#293728,#19251d);box-shadow:0 9px 24px #0005,inset 0 1px #ffffff12}\n  .dyb-skill-seal{transform:none;border:1px solid color-mix(in srgb,var(--art,#dfc474) 70%,transparent);border-radius:50%;color:var(--art,#e8d6a5);background:radial-gradient(circle,#d9c27316,#101810 70%);box-shadow:inset 0 0 0 3px #d8c27410,0 0 12px #d8c2740d}\n  .dyb-skill-name{color:#f0e5c9;font-size:16px}.dyb-rank{border-color:#ccb56d59;background:#d0b96413;color:#e2d19e}.dyb-skill-focus{margin-top:10px;color:var(--art,#dfcf9c);font-family:serif;font-size:11px;letter-spacing:.12em}.dyb-skill-meta{margin-top:11px;color:#b8b6a5}.dyb-progress{height:5px;background:#e5e1d10f;box-shadow:inset 0 1px 2px #0008}.dyb-progress span{background:linear-gradient(90deg,#557c5d,#9fbe7a 55%,#e4c66e);box-shadow:0 0 9px #cdbb6b69}\n  .dyb-note{border-color:#d6c28e36;background:linear-gradient(90deg,#c2a94e13,#ffffff03);color:#c8c5b2}.dyb-note-mark{color:#e7ca70}.dyb-materials{border-color:#d7c27435}.dyb-materials h3{color:#e8ddc2}.dyb-material-list .dyb-material{border-color:#a6c8a33e;background:#779c6b12;color:#d0d4bb}\n  .dyb-practice-card,.dyb-order,.dyb-record{border-color:#d3bb7045;border-radius:8px;background:linear-gradient(145deg,#20291f,#141c17);box-shadow:inset 0 1px #fff2,inset 0 -18px 28px #080d0b55,0 5px 16px #0003}.dyb-practice-card h3{color:#f0dfaf}.dyb-practice-card p{color:#cfcebd}.dyb-practice-focus{border-color:#d9bd6856;background:linear-gradient(90deg,#c2a74b20,#6e9c7012);color:#e7d59f}.dyb-practice-focus span:first-child{border-color:#ddc47a99;color:#f0da98;background:#131c15}.dyb-guidance-item{border-color:#d6c28e30;border-radius:5px;background:linear-gradient(135deg,#d6c28e0b,#ffffff03)}.dyb-guidance-item strong{color:#e5ca79}.dyb-guidance-item span{color:#c6c6b5}.dyb-guidance-item::before{color:#dbbc5e77}.dyb-guidance-title{color:#e1d4ac}.dyb-known-techniques{border-color:#d8c47732;color:#c4c1ae}\n  .dyb-field{color:#e0d4b3}.dyb-field input,.dyb-field select{border-color:#d3bd7040;background:#111812;color:#eee6cf}.dyb-field input:hover,.dyb-field select:hover{border-color:#dfc271a3}\n  .dyb-skill-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px;margin:12px 0}.dyb-skill-field{display:flex;justify-content:space-between;gap:8px;padding:8px 10px;border:1px solid #d8c47735;border-radius:6px;background:#0e1510;color:#c6c2af;font-size:11px}.dyb-skill-field strong{color:#f0dfaf;font-weight:600}\n</style>\n\n<script>\n(() => {\n  const root = document.querySelector('[data-dyb-root]');\n  if (!root || root.dataset.ready === '1') return;\n  root.dataset.ready = '1';\n\n  const api = new Proxy({}, { get: (_target, key) => globalThis.TavernHelper?.[key] ?? globalThis[key] });\n  const readVariables = api.getVariables;\n  const insertVariables = api.insertOrAssignVariables;\n  const runSlash = api.triggerSlash;\n  const listen = api.eventOn;\n  const professions = ['炼丹','炼器','制符','布阵','灵植','御兽','傀儡','医修','灵食'];\n  const professionMarks = {炼丹:'丹',炼器:'器',制符:'符',布阵:'阵',灵植:'植',御兽:'兽',傀儡:'傀',医修:'医',灵食:'膳'};\n  const professionFocus = {炼丹:'辨药性 · 控丹火',炼器:'识灵材 · 磨器胚',制符:'认符纹 · 练落笔',布阵:'观地势 · 推阵眼',灵植:'辨灵性 · 察生长',御兽:'察习性 · 建信任',傀儡:'识机括 · 调关节',医修:'察症候 · 谨辨证',灵食:'辨食性 · 候火味'};\n  const stateKey = 'daoyuan_baiyi_v1';\n  const pendingKey = 'daoyuan_baiyi_pending';\n  const emptyState = () => ({schemaVersion:3,revision:0,艺业:{},委托:[],履历:[]});\n  const practiceGuides = {\n    炼丹:['辨识当前可用药材与药性','研读已拥有丹方或安全演练','按核心卡规则核对炉具与消耗'],\n    炼器:['检查图谱、材料与工具','先做结构推演或低风险打磨','成品与材料变化走核心卡规则'],\n    制符:['辨认符纸、符墨与符笔','临摹已拥有符样并观察笔势','实作前核对灵力承受与用途'],\n    布阵:['研读现有阵图或勘察地势','推演阵位、阵眼与节点呼应','布设规模受阵具和场地限制'],\n    灵植:['观察已拥有或获准照料的植株','记录土、水、光照与灵气变化','生长与成熟需要剧情时间'],\n    御兽:['观察灵兽习性与当下状态','从安抚、喂养等低风险互动开始','尊重灵兽自主性与安全距离'],\n    傀儡:['检查现有傀儡或获准拆解旧件','练习识别结构、驱动与故障','制作须核对图纸、部件和精度'],\n    医修:['收集症状并核对已有医案','先辨证再提出审慎处置方案','尊重患者意愿，不保证疗效'],\n    灵食:['辨识食材性味与新鲜状况','依已有食谱练刀工、搭配和火候','观察食用者体质反馈，不代替丹药'],\n  };\n  const $ = (sel) => root.querySelector(sel);\n  let state = null;\n  let core = null;\n  let draft = null;\n  let orderFilter = 'all';\n\n  function readModuleState() {\n    const all = readVariables?.({type:'chat'}) ?? {};\n    return all[stateKey] && all[stateKey].schemaVersion === 3 ? all[stateKey] : null;\n  }\n  function readCoreSnapshot() {\n    if (typeof api.getLastMessageId !== 'function') return null;\n    const last = api.getLastMessageId();\n    if (!Number.isInteger(last)) return null;\n    for (let id = last; id >= Math.max(0,last-12); id--) {\n      const vars = readVariables?.({type:'message',message_id:id});\n      const protagonist = vars?.stat_data?.主角;\n      if (protagonist && typeof protagonist === 'object' && ['炼丹','炼器','储物袋'].some(key => Object.prototype.hasOwnProperty.call(protagonist,key))) return protagonist;\n    }\n    return null;\n  }\n  const safeText = (value, fallback='—') => typeof value === 'string' && value.trim() ? value.slice(0,120) : fallback;\n  function getSkill(name) {\n    if (name === '炼丹' || name === '炼器') {\n      const row = core?.[name];\n      const hasProgress = row?.熟练度 !== undefined && row?.熟练度 !== null && row?.熟练度 !== '' && Number.isFinite(Number(row.熟练度));\n      const proficiency = hasProgress ? Math.max(0,Math.min(100,Number(row.熟练度))) : null;\n      const rank = row && typeof row === 'object' ? safeText(row.阶级,'暂不可读取') : '暂不可读取';\n      const hasRate=row?.成功率!==undefined&&row?.成功率!==null&&row?.成功率!==''&&Number.isFinite(Number(row.成功率));\n      const hasCount=row?.次数!==undefined&&row?.次数!==null&&row?.次数!==''&&Number.isFinite(Number(row.次数));\n      return {rank,proficiency,successRate:hasRate?Math.max(0,Math.min(100,Number(row.成功率))):null,count:hasCount?Math.max(0,Number(row.次数)):null,source:rank === '暂不可读取' || proficiency === null ? '核心卡 · 暂不可读' : '核心卡修习'};\n    }\n    const row = state?.艺业?.[name] ?? {};\n    return {rank:safeText(row.阶级,'未入门'),proficiency:Number.isFinite(Number(row.熟练度)) ? Math.max(0,Math.min(100,Number(row.熟练度))) : 0,successRate:Number.isFinite(Number(row.成功率))?Math.max(0,Math.min(100,Number(row.成功率))):0,count:Number.isFinite(Number(row.次数))?Math.max(0,Number(row.次数)):0,source:'百艺修习记录'};\n  }\n  function announce(message) { $('[data-live]').textContent = message; $('[data-dyb-status]').textContent = message; }\n  function renderSkills() {\n    const grid = $('[data-skill-grid]');\n    grid.replaceChildren();\n    let count = 0;\n    professions.forEach(name => {\n      const skill = getSkill(name);\n      if ((skill.rank !== '未入门' && skill.rank !== '暂不可读取') || (skill.proficiency !== null && skill.proficiency > 0)) count++;\n      const button = document.createElement('button');\n      button.type = 'button'; button.className = 'dyb-skill'; button.dataset.chooseProfession = name;\n      button.setAttribute('aria-label', `${name}，${skill.rank}，熟练度 ${skill.proficiency === null ? '暂不可读取' : `${skill.proficiency}%`}，成功率 ${skill.successRate === null ? '暂不可读取' : `${skill.successRate}%`}，次数 ${skill.count === null ? '暂不可读取' : skill.count}`);\n      const head = document.createElement('div'); head.className='dyb-skill-head';\n      const seal=document.createElement('span');seal.className='dyb-skill-seal';seal.setAttribute('aria-hidden','true');seal.textContent=professionMarks[name]||'艺';\n      const title = document.createElement('span'); title.className='dyb-skill-name'; title.textContent=name;\n      const rank = document.createElement('span'); rank.className='dyb-rank'; rank.textContent=skill.rank;\n      const titleGroup=document.createElement('span');titleGroup.className='dyb-skill-title-group';titleGroup.append(seal,title);\n      head.append(titleGroup,rank);\n      const focus=document.createElement('span');focus.className='dyb-skill-focus';focus.textContent=professionFocus[name]||'循序研习 · 亲身实作';\n      const meta=document.createElement('div');meta.className='dyb-skill-meta';\n      const source=document.createElement('span');source.textContent=skill.source;\n      const percent=document.createElement('span');percent.textContent=`熟练 ${skill.proficiency === null ? '—' : `${skill.proficiency}%`} · 成功 ${skill.successRate === null ? '—' : `${skill.successRate}%`} · ${skill.count === null ? '—' : `${skill.count} 次`}`;\n      meta.append(source,percent);\n      button.append(head,focus,meta);\n      if(skill.proficiency === null){const unavailable=document.createElement('div');unavailable.className='dyb-progress-unavailable';unavailable.textContent='核心卡数据暂不可读取';button.append(unavailable);}\n      else {const progress=document.createElement('div');progress.className='dyb-progress';progress.setAttribute('role','progressbar');progress.setAttribute('aria-valuemin','0');progress.setAttribute('aria-valuemax','100');progress.setAttribute('aria-valuenow',String(skill.proficiency));const fill=document.createElement('span');fill.style.width=`${skill.proficiency}%`;progress.append(fill);button.append(progress);}\n      grid.append(button);\n    });\n    $('[data-skill-count]').textContent=`${count} 门已有记录`;\n    const select=$('[data-profession]');\n    const previous=select.value;\n    select.replaceChildren(...professions.map(name=>{const option=document.createElement('option');option.value=name;option.textContent=name;return option;}));\n    if (professions.includes(previous)) select.value=previous;\n    renderPractice();\n  }\n  function renderPractice() {\n    const name=$('[data-profession]').value || professions[0];\n    const skill=getSkill(name);\n    const card=$('[data-practice-card]');card.replaceChildren();\n    const h=document.createElement('h3');h.textContent=`${name} · ${skill.rank}`;\n    const isCoreProfession=name==='炼丹'||name==='炼器';\n    const fields=document.createElement('div');fields.className='dyb-skill-fields';\n    [['阶级',skill.rank],['熟练度',skill.proficiency===null?'暂不可读取':`${skill.proficiency}%`],['成功率',skill.successRate===null?'暂不可读取':`${skill.successRate}%`],['制作/施艺次数',skill.count===null?'暂不可读取':skill.count]].forEach(([label,value])=>{const item=document.createElement('div');item.className='dyb-skill-field';const key=document.createElement('span');key.textContent=label;const val=document.createElement('strong');val.textContent=String(value);item.append(key,val);fields.append(item);});\n    const p=document.createElement('p');p.textContent=isCoreProfession?(skill.rank==='暂不可读取'||skill.proficiency===null?'未能从 stat_data.主角 读取完整核心卡字段；不推断为无记录。':'四项数据读取自核心卡；本面板不复制或修改其材料、成品与进度。'):`DLC 修习记录沿用原卡四项字段与成长口径；成功率由当前阶级、配方/方法难度及实际条件判断，不在面板套固定公式。`;\n    const focus=document.createElement('div');focus.className='dyb-practice-focus';const focusSeal=document.createElement('span');focusSeal.textContent=professionMarks[name]||'艺';const focusText=document.createElement('span');focusText.textContent=`本门行功要诀 · ${professionFocus[name]||'循序研习 · 亲身实作'}`;focus.append(focusSeal,focusText);\n    const guidanceTitle=document.createElement('div');guidanceTitle.className='dyb-guidance-title';guidanceTitle.textContent='修习时可循此三步';\n    const guidance=document.createElement('div');guidance.className='dyb-guidance';\n    (practiceGuides[name]||[]).forEach((tip,index)=>{const item=document.createElement('div');item.className='dyb-guidance-item';const strong=document.createElement('strong');strong.textContent=['修习侧重','可尝试','实践边界'][index]||'提示';const span=document.createElement('span');span.textContent=tip;item.append(strong,span);guidance.append(item);});\n    const tech=document.createElement('div');tech.className='dyb-known-techniques';\n    const techniques=Array.isArray(state?.艺业?.[name]?.技法)?state.艺业[name].技法.filter(value=>typeof value==='string'&&value.trim()).slice(0,20):[];\n    tech.textContent=`已记录技法：${techniques.length?techniques.map(value=>safeText(value)).join('、'):'尚无已确认技法'}`;\n    card.append(h,fields,p,focus,guidanceTitle,guidance,tech);\n  }\n  function renderOrders() {\n    const list=$('[data-order-list]');list.replaceChildren();\n    const orders=Array.isArray(state?.委托)?state.委托:[];\n    const visible=orders.map((order,index)=>({order,index})).filter(({order})=>{\n      if(orderFilter==='available')return order.状态==='待接取';\n      if(orderFilter==='active')return ['进行中','待交付'].includes(order.状态);\n      if(orderFilter==='archive')return ['已完成','已失败','已放弃','已拒绝'].includes(order.状态);\n      return true;\n    });\n    if (!visible.length) { const p=document.createElement('p');p.className='dyb-copy';p.textContent=orders.length?'这个分类暂时没有委托。':'目前没有委托。你可以先专心修习，也可以请角色按当前地点和因果寻找一个合适机会。';list.append(p);return; }\n    visible.forEach(({order,index})=>{\n      const article=document.createElement('article');article.className='dyb-order';\n      const title=document.createElement('h3');title.textContent=safeText(order?.名称,'未命名委托');\n      const body=document.createElement('p');body.textContent=safeText(order?.要求,'委托要求待补充');\n      const foot=document.createElement('div');foot.className='dyb-order-foot';\n      const badge=document.createElement('span');badge.className='dyb-tag';badge.textContent=safeText(order?.状态,'待查看');\n      const discipline=document.createElement('span');discipline.className='dyb-count';discipline.textContent=`${safeText(order?.艺业,'未指定')} · ${safeText(order?.难度,'难度未说明')}`;\n      foot.append(badge,discipline);\n      const details=document.createElement('div');details.className='dyb-order-details';\n      const detailRows=[['委托人 / 缘由',`${safeText(order?.委托人,'未说明')} · ${safeText(order?.缘由,'未说明')}`],['所需条件',(Array.isArray(order?.所需条件)?order.所需条件:[]).map(value=>safeText(value)).join('、')||'未说明'],['缺少条件',(Array.isArray(order?.缺少条件)?order.缺少条件:[]).map(value=>safeText(value)).join('、')||'暂无已知缺项'],['期限',safeText(order?.期限,'无明确期限')],['报酬',safeText(order?.报酬说明,'未说明')],['失败代价',safeText(order?.失败代价,'未说明')],['当前进展',safeText(order?.当前进展,'待接取')]];\n      detailRows.forEach(([label,value])=>{const cell=document.createElement('div');cell.className='dyb-order-detail';const strong=document.createElement('strong');strong.textContent=label;const span=document.createElement('span');span.textContent=value;cell.append(strong,span);details.append(cell);});\n      const actions=document.createElement('div');actions.className='dyb-order-actions';\n      const available=order?.状态==='待接取';\n      const active=['进行中','待交付'].includes(order?.状态);\n      const choices=available?['接取委托','议价委托','拒绝委托']:active?(order?.状态==='待交付'?['交付委托','推进委托','放弃委托']:['推进委托','交付委托','放弃委托']):[];\n      choices.forEach(kind=>{const button=document.createElement('button');button.type='button';button.dataset.orderIndex=String(index);button.dataset.orderAction=kind;button.textContent=`预览${kind.replace('委托','')}`;actions.append(button);});\n      if(!choices.length){const closed=document.createElement('span');closed.className='dyb-count';closed.textContent='该委托已归档';actions.append(closed);}\n      article.append(title,body,foot,details,actions);list.append(article);\n    });\n  }\n  function renderRecords() {\n    const list=$('[data-record-list]');list.replaceChildren();\n    const rows=Array.isArray(state?.履历)?state.履历.slice(-30).reverse():[];\n    $('[data-revision]').textContent=`记录 ${Number(state?.revision)||0}`;\n    if(!rows.length){const p=document.createElement('p');p.className='dyb-copy';p.textContent='尚无修习记录。实作与委托完成后会逐次收录。';list.append(p);return;}\n    rows.forEach(row=>{const item=document.createElement('article');item.className='dyb-record';const h=document.createElement('h3');h.textContent=safeText(row?.标题,'修习记录');const p=document.createElement('p');p.textContent=safeText(row?.摘要);item.append(h,p);list.append(item);});\n  }\n  function renderMaterials() {\n    const box=$('[data-material-list]');box.replaceChildren();\n    const bag=core?.储物袋;\n    if(!core||!Object.prototype.hasOwnProperty.call(core,'储物袋')||!bag||typeof bag!=='object'||Array.isArray(bag)){const empty=document.createElement('span');empty.className='dyb-empty';empty.textContent='核心卡储物袋数据暂不可读取，未判断是否持有材料。';box.append(empty);return;}\n    const items=Object.entries(bag).slice(0,40);\n    if(!items.length){const empty=document.createElement('span');empty.className='dyb-empty';empty.textContent='核心卡储物袋当前为空。';box.append(empty);return;}\n    box.className='dyb-material-list';\n    items.forEach(([name,item])=>{const chip=document.createElement('span');chip.className='dyb-material';const quantity=item?.数量!==undefined&&item?.数量!==null&&item?.数量!==''?Number(item.数量):NaN;chip.textContent=`${safeText(name)} × ${Number.isFinite(quantity)?quantity:'数量未注明'}`;box.append(chip);});\n  }\n  function refresh() {\n    state=readModuleState();core=readCoreSnapshot();\n    const pending=readVariables?.({type:'chat'})?.[pendingKey];\n    const pendingBox=$('[data-pending]');pendingBox.hidden=!pending;\n    if(pending)$('[data-pending-text]').textContent=`待发送：${safeText(pending.action?.类型,'百艺行动')}。行动文本已填入输入框，请检查后自行发送。`;\n    if(!state){announce('尚未初始化');return;}\n    announce('状态已同步');renderSkills();renderOrders();renderRecords();renderMaterials();\n    if(readVariables && insertVariables && runSlash) root.dataset.available='1';\n    else {root.dataset.available='0';announce('缺少酒馆助手接口');}\n  }\n  function makeDraft(action) {\n    draft=action;\n    const text=[`行动：${action.类型}`,`艺业：${action.艺业||'不限'}`,`目标：${action.目标||'请结合当前剧情判断'}`,`委托：${action.委托名||'无'}`,action.委托人?`委托人：${action.委托人}`:'',action.委托编号?`委托编号：${action.委托编号}`:'',action.附注?`玩家附注：${action.附注}`:''].filter(Boolean).join('；');\n    $('[data-confirm-summary]').textContent=text;\n    $('[data-confirm-risk]').textContent='确认后只会把行动文本填入酒馆输入框，并保留当前草稿后附加行动内容；不会发送消息或触发生成。请检查、修改后由你自行决定是否发送。界面不会预先扣除材料或增加熟练度。';\n    $('[data-confirm-dialog]').showModal();\n  }\n  async function confirmDraft() {\n    if(!draft||!state||root.dataset.available!=='1') return;\n    if(readVariables({type:'chat'})?.[pendingKey]) { announce('已有百艺行动正在等待结算');$('[data-confirm-dialog]').close();return; }\n    const latest=readModuleState();\n    if(!latest||latest.revision!==state.revision){$('[data-confirm-dialog]').close();refresh();announce('百艺记录已变化，请重新查看后再确认');return;}\n    state=latest;\n    const confirmButton=$('[data-confirm]');\n    if(confirmButton.disabled)return;\n    confirmButton.disabled=true;\n    const actionId=globalThis.crypto?.randomUUID?.() ?? `dyb-${Date.now()}-${Math.random().toString(16).slice(2)}`;\n    const pending={actionId,expectedRevision:state.revision,action:draft};\n    const message=`【百艺行动｜待结算】行动编号：${actionId}；百艺记录版本：${state.revision}；类型：${draft.类型}；艺业：${draft.艺业||'不限'}；目标：${draft.目标||'请结合当前剧情判断'}；委托：${draft.委托名||'无'}；委托编号：${draft.委托编号||'无'}；委托人：${draft.委托人||'未指定'}${draft.附注?`；玩家附注：${draft.附注}`:''}。请按《道渊》原有境界、因果、材料和 MVU 规则叙事，不保证成功或成长，不要凭空增减核心卡资源；委托状态只在剧情明确支持时更新，奖励仅在已交付后结算。完成后按百艺模块规则输出完整状态传输块。`;\n    try {\n      const existingInput=await runSlash('/pass {{input}}');\n      if(typeof existingInput!=='string')throw new Error('Current composer content was not returned as text');\n      const combined=existingInput ? `${existingInput}${existingInput.endsWith('\\n')?'':'\\n'}${message}` : message;\n      // Escape STscript control syntax so user text remains literal input.\n      const literal=combined.replace(/\\\\/g,'\\\\\\\\').replace(/\\|/g,'\\\\|').replace(/\\{\\{/g,'\\\\{\\\\{');\n      await insertVariables({[pendingKey]:pending},{type:'chat'});\n      await runSlash(`/parser-flag STRICT_ESCAPING on | /setinput ${literal}`);\n      $('[data-confirm-dialog]').close();announce('行动文本已填入输入框，请检查后自行发送');draft=null;refresh();\n    } catch(error) { console.error('[道渊百艺] composer fill failed',error);announce('填入失败；行动待处理记录已保留，可撤销后重试'); }\n    finally { confirmButton.disabled=false; }\n  }\n  root.addEventListener('click',async event=>{\n    const button=event.target.closest('button');if(!button||!root.contains(button))return;\n    if(button.hasAttribute('data-collapse-toggle')){const expanded=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(expanded));button.setAttribute('aria-label',expanded?'收纳面板下方内容':'展开面板下方内容');button.querySelector('[data-collapse-label]').textContent=expanded?'收纳下方内容':'展开下方内容';button.querySelector('[data-collapse-icon]').textContent=expanded?'⌃':'⌄';root.classList.toggle('is-collapsed',!expanded);return;}\n    if(button.dataset.tab){root.querySelectorAll('[data-tab]').forEach(x=>{const active=x===button;x.classList.toggle('is-active',active);x.setAttribute('aria-pressed',String(active));});root.querySelectorAll('[data-view]').forEach(x=>x.classList.toggle('is-active',x.dataset.view===button.dataset.tab));return;}\n    if(button.dataset.orderFilter){orderFilter=button.dataset.orderFilter;root.querySelectorAll('[data-order-filter]').forEach(x=>{const active=x===button;x.classList.toggle('is-active',active);x.setAttribute('aria-pressed',String(active));});renderOrders();return;}\n    if(button.dataset.chooseProfession){$('[data-profession]').value=button.dataset.chooseProfession;renderPractice();root.querySelector('[data-tab=\"practice\"]').click();return;}\n    if(button.hasAttribute('data-preview-practice')){makeDraft({类型:$('[data-action-kind]').value,艺业:$('[data-profession]').value,目标:$('[data-action-note]').value.trim()});return;}\n    if(button.hasAttribute('data-find-order')){makeDraft({类型:'寻觅委托',目标:'请根据当前地点、境界和已有艺业寻找一项合理委托'});return;}\n    if(button.hasAttribute('data-cancel-pending')){await api.deleteVariable(pendingKey,{type:'chat'});announce('待处理行动已撤销；输入框内容保留');refresh();return;}\n    if(button.dataset.orderIndex){const order=state?.委托?.[Number(button.dataset.orderIndex)];const kind=button.dataset.orderAction;if(order&&kind)makeDraft({类型:kind,艺业:order.艺业,委托名:order.名称,委托编号:order.id,委托人:order.委托人,目标:kind==='接取委托'?`请评估条件后决定是否接取：${order.要求}`:kind==='议价委托'?`玩家提出议价请求；结合当前委托条件与关系协商，未获同意前不得视为已变更：${order.要求}`:kind==='拒绝委托'?`请叙述玩家礼貌拒绝此委托，是否产生影响依当前关系与剧情裁定：${order.要求}`:kind==='放弃委托'?`请叙述玩家决定放弃并按剧情合理说明：${order.要求}`:kind==='交付委托'?`请核对是否已完成交付条件，再叙述交付与结算：${order.要求}`:`请叙述玩家如何推进委托并记录真实进度：${order.要求}`});return;}\n    if(button.hasAttribute('data-cancel')){$('[data-confirm-dialog]').close();draft=null;return;}\n    if(button.hasAttribute('data-confirm')){confirmDraft();}\n  });\n  $('[data-profession]').addEventListener('change',renderPractice);\n  function bindRefreshEvents(){\n    if(typeof listen==='function'&&globalThis.tavern_events?.MESSAGE_RECEIVED){\n      listen(globalThis.tavern_events.MESSAGE_RECEIVED,()=>setTimeout(refresh,60));\n    }\n  }\n  refresh();bindRefreshEvents();\n})();\n<\/script>\n</body>\n</html>\n\r\n\r\n\r\n";

const MODULE_KEY = 'daoyuan_baiyi_v1';
const PENDING_KEY = 'daoyuan_baiyi_pending';
const UI_KEY = 'daoyuan_baiyi_ui';
const BUTTON_NAME = '百艺面板';
const MODULE_TAG = 'baiyi_update';
const MAX_ORDERS = 80;
const ALL_PROFESSIONS = ['炼丹', '炼器', '制符', '布阵', '灵植', '御兽', '傀儡', '医修', '灵食'];
const OWNED_PROFESSIONS = ['制符', '布阵', '灵植', '御兽', '傀儡', '医修', '灵食'];
const ALLOWED_ORDER_STATES = ['待接取', '进行中', '待交付', '已完成', '已失败', '已放弃', '已拒绝'];

const api = new Proxy({}, { get: (_target, key) => globalThis.TavernHelper?.[key] ?? globalThis[key] });

function requireCapabilities() {
  const required = ['eventOn', 'getButtonEvent', 'getVariables', 'insertVariables', 'insertOrAssignVariables', 'deleteVariable', 'triggerSlash'];
  return required.filter(name => typeof api[name] !== 'function');
}

function defaultState() {
  return {
    schemaVersion: 3,
    revision: 0,
    艺业: Object.fromEntries(OWNED_PROFESSIONS.map(name => [name, {阶级: '未入门', 熟练度: 0, 成功率: 0, 次数: 0, 技法: []}])),
    委托: [],
    履历: [],
  };
}

function text(value, max = 120) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function textList(value, limit = 12, max = 100) {
  if (!Array.isArray(value)) return [];
  return value.slice(0, limit).map(item => text(item, max)).filter(Boolean);
}

function validTextList(value, limit, max) {
  return value === undefined || (Array.isArray(value) && value.length <= limit && value.every(item => typeof item === 'string' && item.length <= max));
}

function normalizeRank(value) {
  const rank = text(value, 24) || '未入门';
  const legacy = {'初阶':'一阶','初窥':'一阶','熟手':'二阶','精进':'三阶','专精':'四阶'};
  return legacy[rank] ?? rank;
}

function cleanState(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value) || ![1,2,3].includes(value.schemaVersion)) return null;
  if (!Number.isInteger(value.revision) || value.revision < 0) return null;
  if (!value.艺业 || typeof value.艺业 !== 'object' || Array.isArray(value.艺业)) return null;
  const skills = {};
  for (const name of OWNED_PROFESSIONS) {
    const hasSkill = Object.prototype.hasOwnProperty.call(value.艺业, name);
    const row = !hasSkill && name === '灵食'
      ? {阶段: '未入门', 阶级: '未入门', 熟练度: 0, 成功率: 0, 次数: 0, 技法: []}
      : value.艺业[name];
    if (!row || typeof row !== 'object' || Array.isArray(row)) return null;
    const rank = value.schemaVersion === 1 ? row.阶段 : row.阶级;
    if (rank !== undefined && typeof rank !== 'string') return null;
    if (!validTextList(row.技法, 20, 80)) return null;
    const proficiency = Number(row.熟练度);
    if (!Number.isInteger(proficiency) || proficiency < 0 || proficiency > 100) return null;
    const successRate = value.schemaVersion === 1 ? 0 : Number(row.成功率);
    const count = value.schemaVersion === 1 ? 0 : Number(row.次数);
    if (!Number.isFinite(successRate) || successRate < 0 || successRate > 100 || !Number.isFinite(count) || count < 0) return null;
    skills[name] = {
      阶级: normalizeRank(rank),
      熟练度: proficiency,
      成功率: successRate,
      次数: count,
      技法: Array.isArray(row.技法) ? row.技法.slice(0, 20).map(item => text(item, 80)).filter(Boolean) : [],
    };
  }
  if (!Array.isArray(value.委托) || value.委托.length > MAX_ORDERS) return null;
  const orderIds = new Set();
  const orders = [];
  for (const row of value.委托) {
    if (!row || typeof row !== 'object' || Array.isArray(row)) return null;
    if (!validTextList(row.所需条件, 8, 100) || !validTextList(row.缺少条件, 8, 100)) return null;
    const id = text(row.id, 48);
    if (!id || orderIds.has(id) || !ALLOWED_ORDER_STATES.includes(row.状态)) return null;
    orderIds.add(id);
    orders.push({
      id,
      名称:text(row.名称,80) || '未命名委托',
      委托人:text(row.委托人,80) || '未说明',
      缘由:text(row.缘由,180) || '未说明',
      艺业:ALL_PROFESSIONS.includes(row.艺业) ? row.艺业 : '未指定',
      要求:text(row.要求,240) || '待补充',
      难度:text(row.难度,40) || '未说明',
      所需条件:textList(row.所需条件,8,100),
      缺少条件:textList(row.缺少条件,8,100),
      期限:text(row.期限,80) || '无明确期限',
      报酬说明:text(row.报酬说明,160) || '未说明',
      失败代价:text(row.失败代价,160) || '未说明',
      当前进展:text(row.当前进展,200) || '待接取',
      状态:row.状态,
    });
  }
  if (!Array.isArray(value.履历) || value.履历.length > 60) return null;
  const history = value.履历.slice(-60).map(row => {
    if (!row || typeof row !== 'object' || Array.isArray(row)) return null;
    const title = text(row.标题, 80)
      || [text(row.艺业, 12), text(row.类型, 12)].filter(Boolean).join(' · ')
      || '修习记录';
    const detail = text(row.摘要, 240) || text(row.结果, 240) || text(row.过程, 240);
    const stamp = text(row.时间, 40);
    const summary = [stamp, detail].filter(Boolean).join('　');
    return {标题: title, 摘要: summary};
  });
  if (history.some(row => !row)) return null;
  return {schemaVersion:3, revision:value.revision, 艺业:skills, 委托:orders, 履历:history};
}

function notify(message, kind = 'info') {
  const fn = globalThis.toastr?.[kind];
  if (typeof fn === 'function') fn(message, '《道渊》百艺');
  else console.info(`[《道渊》百艺] ${message}`);
}

async function ensureState() {
  const variables = api.getVariables({type:'chat'}) ?? {};
  const current = variables[MODULE_KEY];
  const cleaned = cleanState(current);
  if (cleaned) {
    if (current.schemaVersion !== 3 || !Object.prototype.hasOwnProperty.call(current.艺业, '灵食')) {
      const migrated = {...cleaned, revision:current.revision};
      await api.insertOrAssignVariables({[MODULE_KEY]:migrated},{type:'chat'});
      return migrated;
    }
    return current;
  }
  if (current !== undefined) throw new Error('existing 百艺 state is malformed; refusing to replace it');
  const initial = defaultState();
  await api.insertVariables({[MODULE_KEY]:initial},{type:'chat'});
  return initial;
}

function makePanelMessage() {
  return `<baiyi_panel>\n\`\`\`html\n${PANEL_HTML}\n\`\`\`\n</baiyi_panel>`;
}

function resolveHostDocument() {
  const candidates = [];
  try { if (window.parent && window.parent !== window) candidates.push(window.parent); } catch (error) {}
  try { if (window.top && window.top !== window && window.top !== window.parent) candidates.push(window.top); } catch (error) {}
  for (const view of candidates) {
    try {
      const doc = view.document;
      if (doc && doc.body) return { doc, view };
    } catch (error) {}
  }
  return { doc: document, view: window };
}

function viewportSize(view) {
  const vv = view.visualViewport;
  const width = Math.round((vv && vv.width) || view.document.documentElement.clientWidth || view.innerWidth || 430);
  const height = Math.round((vv && vv.height) || view.document.documentElement.clientHeight || view.innerHeight || 800);
  return { width, height };
}

function flash(message) {
  try {
    const { doc } = resolveHostDocument();
    const bar = doc.createElement('div');
    bar.setAttribute('data-daoyuan-baiyi-flash', '1');
    bar.style.cssText = 'position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:2147483001;max-width:92vw;padding:10px 16px;border-radius:12px;border:1px solid #bdc8d566;background:#0e1826;color:#dfe7ef;font:13px/1.5 system-ui,sans-serif;box-shadow:0 10px 30px #0008';
    bar.textContent = '[道渊·百艺] ' + message;
    doc.body.appendChild(bar);
    setTimeout(() => { try { bar.remove(); } catch (error) {} }, 6000);
    return true;
  } catch (error) {
    return false;
  }
}

function makePanelOverlay() {
  const { doc, view } = resolveHostDocument();
  if (!view.TavernHelper && globalThis.TavernHelper) {
    try { view.TavernHelper = globalThis.TavernHelper; } catch (error) {}
  }
  const existing = doc.getElementById('daoyuan-baiyi-overlay');
  if (existing) existing.remove();

  const { width: vw, height: vh } = viewportSize(view);
  const mobile = vw < 560;

  const wrap = doc.createElement('div');
  wrap.id = 'daoyuan-baiyi-overlay';
  if (mobile) wrap.classList.add('dyb-mobile');
  wrap.style.cssText = 'position:fixed;left:0;top:0;width:' + vw + 'px;height:' + vh + 'px;z-index:2147483000;display:flex;align-items:flex-start;justify-content:center;overflow:auto;padding:' + (mobile ? '0' : '14px') + ';background:' + (mobile ? '#05090f' : 'rgba(4,9,16,.76)') + ';-webkit-overflow-scrolling:touch';

  const box = doc.createElement('div');
  box.className = 'daoyuan-baiyi-shell';
  box.style.cssText = 'width:' + Math.max(200, vw - (mobile ? 0 : 28)) + 'px;max-width:100%';

  const bar = doc.createElement('div');
  bar.style.cssText = 'display:flex;justify-content:flex-end;position:sticky;top:0;z-index:3;padding:' + (mobile ? '8px 10px' : '2px 0 8px') + ';background:' + (mobile ? '#05090f' : 'transparent');
  const close = doc.createElement('button');
  close.type = 'button';
  close.textContent = '✕ 关闭';
  close.style.cssText = 'cursor:pointer;border:1px solid #bdc8d566;border-radius:10px;background:#0e1826;color:#dfe7ef;font:13px/1 system-ui,sans-serif;padding:9px 14px';
  bar.appendChild(close);

  const style = doc.createElement('style');
  style.textContent = '#daoyuan-baiyi-overlay.dyb-mobile{padding:0}#daoyuan-baiyi-overlay .daoyuan-baiyi-shell{position:relative;width:100%}#daoyuan-baiyi-overlay .dyb-root{max-width:100%;overflow-x:hidden}#daoyuan-baiyi-overlay.dyb-mobile .dyb-root{width:100%;padding:10px;border-radius:0}#daoyuan-baiyi-overlay.dyb-mobile .dyb-header{display:block;min-height:0;padding:16px 14px;border-radius:12px}#daoyuan-baiyi-overlay.dyb-mobile .dyb-header-sigil{top:26px;right:16px;width:44px;height:44px;font-size:24px}#daoyuan-baiyi-overlay.dyb-mobile .dyb-header-meta{display:inline-flex;margin-top:12px}#daoyuan-baiyi-overlay.dyb-mobile .dyb-header h1{font-size:26px}#daoyuan-baiyi-overlay.dyb-mobile .dyb-tabs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px}#daoyuan-baiyi-overlay.dyb-mobile .dyb-tabs button{min-width:0;padding:7px 3px;font-size:10px;letter-spacing:0}#daoyuan-baiyi-overlay.dyb-mobile .dyb-skill-grid{grid-template-columns:minmax(0,1fr);gap:7px}#daoyuan-baiyi-overlay.dyb-mobile .dyb-skill-fields{grid-template-columns:minmax(0,1fr)}#daoyuan-baiyi-overlay.dyb-mobile .dyb-path-steps{grid-template-columns:repeat(5,94px);overflow:auto;padding-bottom:6px}#daoyuan-baiyi-overlay.dyb-mobile .dyb-hero{min-height:0;padding:16px 14px;gap:10px;flex-direction:column;align-items:flex-start}#daoyuan-baiyi-overlay.dyb-mobile .dyb-hero-mark{width:55px;height:55px;flex-basis:55px;align-self:flex-end;margin-top:-40px}#daoyuan-baiyi-overlay.dyb-mobile .dyb-hero h3{font-size:20px}#daoyuan-baiyi-overlay.dyb-mobile .dyb-order-details{grid-template-columns:minmax(0,1fr)}#daoyuan-baiyi-overlay.dyb-mobile .dyb-order-foot{align-items:flex-start;flex-direction:column}#daoyuan-baiyi-overlay.dyb-mobile .dyb-section-head{flex-wrap:wrap;gap:6px}#daoyuan-baiyi-overlay.dyb-mobile .dyb-dialog{width:min(94vw,460px)}#daoyuan-baiyi-overlay.dyb-mobile .dyb-guidance{grid-template-columns:minmax(0,1fr)}';
  wrap.appendChild(style);

  const holder = doc.createElement('div');
  holder.innerHTML = PANEL_HTML;
  for (const old of [...holder.querySelectorAll('script')]) {
    const s = doc.createElement('script');
    if (old.src) s.src = old.src; else s.textContent = old.textContent;
    old.replaceWith(s);
  }
  box.appendChild(bar);
  box.appendChild(holder);
  wrap.appendChild(box);

  function dismiss() {
    try { view.removeEventListener('keydown', onKey); } catch (error) {}
    try { view.removeEventListener('resize', onResize); } catch (error) {}
    try { wrap.remove(); } catch (error) {}
  }
  function onKey(event) { if (event.key === 'Escape') dismiss(); }
  function onResize() {
    const size = viewportSize(view);
    wrap.style.width = size.width + 'px';
    wrap.style.height = size.height + 'px';
    box.style.width = Math.max(200, size.width - (wrap.classList.contains('dyb-mobile') ? 0 : 28)) + 'px';
  }
  close.addEventListener('click', dismiss);
  wrap.addEventListener('click', event => { if (event.target === wrap) dismiss(); });
  try { view.addEventListener('keydown', onKey); } catch (error) {}
  try { view.addEventListener('resize', onResize); } catch (error) {}
  doc.body.appendChild(wrap);
  return doc === document ? 'own' : 'parent';
}

async function openPanel() {
  if (openPanel.__busy) return;
  openPanel.__busy = true;
  setTimeout(() => { openPanel.__busy = false; }, 500);
  flash('已收到点击，正在准备面板…');
  try {
    const missing = requireCapabilities();
    if (missing.length) {
      flash('缺少酒馆助手接口：' + missing.join(', '));
      notify(`缺少酒馆助手接口：${missing.join(', ')}`, 'warning');
      return;
    }
    try { await ensureState(); }
    catch (error) {
      flash('读取百艺记录失败：' + error.message);
      notify(`百艺记录无法读取，未覆盖现有数据：${error.message}`, 'warning');
      return;
    }
    let snapshot = null;
    try { snapshot = api.getVariables({ type: 'chat' }) || {}; } catch (error) {}
    const record = snapshot && snapshot['daoyuan_baiyi_v1'];
    console.info('[道渊·百艺] 记录状态：' + (record ? 'revision=' + record.revision : '未初始化'));
    const where = makePanelOverlay();
    if (where === 'own') flash('浮层建在当前脚本 iframe 里（拿不到酒馆页面），所以看不见');
    console.info('[道渊·百艺] 面板已渲染：' + where);
  } catch (error) {
    flash('打开面板出错：' + (error && error.message));
    console.error('[道渊·百艺] openPanel 失败', error);
  }
}

function parseUpdates(raw) {
  // 每个 <baiyi_update> 开头各自配它后面最近的结尾、逐个试解析；
  // 思维链里出现的「`<baiyi_update>`」这类伪造标签不会再把区间拉长。
  const source = String(raw || '');
  const lower = source.toLowerCase();
  const opener = /<baiyi_update>/gi;
  const closer = '</baiyi_update>';
  const out = [];
  let match;
  while ((match = opener.exec(source)) !== null) {
    const bodyStart = match.index + match[0].length;
    const bodyEnd = lower.indexOf(closer, bodyStart);
    if (bodyEnd < 0) continue;
    let body = source.slice(bodyStart, bodyEnd).trim();
    body = body.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '').trim();
    if (body.charAt(0) !== '{') continue;
    for (const attempt of [body, body.replace(/,\s*([}\]])/g, '$1')]) {
      try {
        const value = JSON.parse(attempt);
        if (value && typeof value === 'object') { out.push(value); break; }
      } catch (error) {}
    }
  }
  return out;
}

function parseUpdate(raw) {
  const list = parseUpdates(raw);
  return list.length ? list[list.length - 1] : null;
}

function commissionChangesAllowed(current, next, pending) {
  const before = new Map(current.委托.map(order => [order.id, order]));
  const after = new Map(next.委托.map(order => [order.id, order]));
  // Keep every record in the ledger so completed work cannot be replayed as a fresh order.
  for (const order of before.values()) if (!after.has(order.id)) return false;
  const action = pending.action ?? {};
  const kind = action.类型;
  const targetId = action.委托编号;
  const additions = [...after.keys()].filter(id => !before.has(id));
  if (kind === '寻觅委托') {
    if (additions.length > 1 || additions.some(id => after.get(id).状态 !== '待接取')) return false;
  } else if (additions.length) return false;

  const terminal = new Set(['已完成', '已失败', '已放弃', '已拒绝']);
  const transitions = {
    待接取: new Set(['待接取', '进行中', '已失败', '已放弃', '已拒绝']),
    进行中: new Set(['进行中', '待交付', '已完成', '已失败', '已放弃']),
    待交付: new Set(['待交付', '进行中', '已完成', '已失败', '已放弃']),
  };
  for (const [id, oldOrder] of before) {
    const updated = after.get(id);
    if (terminal.has(oldOrder.状态) && oldOrder.状态 !== updated.状态) return false;
    if (oldOrder.状态 !== updated.状态 && id !== targetId) return false;
    if (!transitions[oldOrder.状态]?.has(updated.状态)) return false;
    if (id !== targetId || oldOrder.状态 === updated.状态) continue;
    const allowedByAction = {
      接取委托: new Set(['进行中']),
      议价委托: new Set(['进行中']),
      拒绝委托: new Set(['已拒绝']),
      推进委托: new Set(['待交付', '已失败']),
      交付委托: new Set(['已完成', '进行中', '待交付', '已失败']),
      放弃委托: new Set(['已放弃']),
    }[kind];
    if (!allowedByAction?.has(updated.状态)) return false;
  }
  if (targetId && !before.has(targetId)) return false;
  return true;
}

function noLossAllowed(current, next) {
  const beforeIds = new Set((current.委托 || []).map(order => order.id));
  const afterIds = new Set((next.委托 || []).map(order => order.id));
  for (const id of beforeIds) if (!afterIds.has(id)) return false;
  if ((next.履历 || []).length < (current.履历 || []).length) return false;
  for (const name of Object.keys(current.艺业 || {})) {
    const before = ((current.艺业[name] || {}).技法 || []).length;
    const after = ((next.艺业[name] || {}).技法 || []).length;
    if (after < before) return false;
  }
  return true;
}

async function acceptAssistantUpdate(messageId) {
  if (!Number.isInteger(messageId)) return;
  const rows = api.getChatMessages(messageId,{role:'assistant'});
  const message = rows?.[0]?.message;
  if (typeof message !== 'string' || !message.includes(`<${MODULE_TAG}>`)) return;
  const variables = api.getVariables({type:'chat'}) ?? {};
  const pending = variables[PENDING_KEY];
  const candidates = parseUpdates(message);
  const matched = pending ? candidates.find(item => item.actionId === pending.actionId) : null;
  const update = matched || candidates[candidates.length - 1] || null;
  const current = cleanState(variables[MODULE_KEY]);
  if (!update) {
    notify('收到的百艺状态块无法解析；没有写入。', 'warning');
    return;
  }
  if (!current) {
    notify('还没有百艺记录：先点一次「百艺面板」初始化，再从面板里发起行动。', 'warning');
    return;
  }
  if (!pending) {
    const implicit = globalThis.__baiyiImplicit;
    if (!implicit || implicit.revision !== current.revision) {
      console.warn('[道渊·百艺] 收到状态块，但这次行动不是从面板发起的（没有待处理行动），已忽略；不影响剧情。');
      return;
    }
    globalThis.__baiyiImplicit = null;
    const next = cleanState(update.state);
    if (update.state?.schemaVersion !== 3 || !next) {
      notify('百艺状态结构不合法；没有写入。', 'warning');
      return;
    }
    if (!noLossAllowed(current, next)) {
      notify('状态块试图删除旧委托或回退履历/技法；没有写入。', 'warning');
      return;
    }
    next.revision = current.revision + 1;
    await api.insertOrAssignVariables({ [MODULE_KEY]: next }, { type: 'chat' });
    notify('百艺记录已结算并保存。', 'success');
    return;
  }
  if (update.actionId !== pending.actionId || update.expectedRevision !== pending.expectedRevision || pending.expectedRevision !== current.revision || update.revision !== current.revision + 1) {
    notify('百艺状态版本或行动编号不匹配；没有覆盖当前记录。', 'warning');
    return;
  }
  const next = cleanState(update.state);
  if (update.state?.schemaVersion !== 3 || !next || next.revision !== current.revision + 1) {
    notify('百艺状态结构不合法；没有写入。', 'warning');
    return;
  }
  if (!commissionChangesAllowed(current, next, pending)) {
    notify('委托变化与本次玩家行动不匹配，或试图删除/重开既有委托；没有写入。', 'warning');
    return;
  }
  await api.insertOrAssignVariables({[MODULE_KEY]:next},{type:'chat'});
  await api.deleteVariable(PENDING_KEY,{type:'chat'});
  notify('百艺记录已结算并保存。', 'success');
}

function attachDomFallback() {
  const { doc } = resolveHostDocument();
  const bind = () => {
    let bound = 0;
    for (const node of doc.querySelectorAll('button, .menu_button, [class*="menu_button"]')) {
      if (!node || node.dataset.daoyuanBaiyiBound === '1') continue;
      if ((node.textContent || '').trim() !== BUTTON_NAME) continue;
      node.dataset.daoyuanBaiyiBound = '1';
      node.addEventListener('click', () => { void openPanel(); });
      bound += 1;
    }
    return bound;
  };
  bind();
  try {
    const mo = new MutationObserver(() => { try { bind(); } catch (error) {} });
    mo.observe(doc.body, { childList: true, subtree: true });
  } catch (error) {}
}

function bootBaiyi() {
  let registered = false;
  try { api.eventOn(api.getButtonEvent(BUTTON_NAME), openPanel); registered = true; }
  catch (error) { flash('按钮事件注册失败：' + (error && error.message)); }
  try {
    const sentEvent = globalThis.tavern_events?.MESSAGE_SENT;
    const fallbackEvent = globalThis.tavern_events?.GENERATION_STARTED;
    const eventName = sentEvent || fallbackEvent;
    if (eventName) {
      api.eventOn(eventName, () => {
        try {
          const snapshot = api.getVariables({ type: 'chat' }) || {};
          const record = cleanState(snapshot[MODULE_KEY]);
          if (!record) return;
          if (snapshot[PENDING_KEY]) return;
          globalThis.__baiyiImplicit = { revision: record.revision, at: Date.now() };
        } catch (error) {}
      });
    }
  } catch (error) {}
  try { attachDomFallback(); } catch (error) {}
  try {
    if (globalThis.tavern_events?.MESSAGE_RECEIVED) api.eventOn(globalThis.tavern_events.MESSAGE_RECEIVED, acceptAssistantUpdate);
  } catch (error) {}
  console.info('[道渊·百艺] 已加载；按钮事件注册=' + registered);
}

const BAIYI_TOOLS = {
  // 只读：把某楼的状态块解析出来，与本地记录对比，不写入任何东西
  dump(messageId) {
    const lastId = api.getLastMessageId();
    const id = Number.isInteger(messageId) ? messageId : lastId;
    let raw = null;
    let via = 'assistant';
    try {
      const rows = api.getChatMessages(id, { role: 'assistant' });
      const first = rows && rows[0];
      if (first && typeof first.message === 'string') raw = first.message;
    } catch (error) {}
    if (!raw || raw.indexOf('<' + MODULE_TAG + '>') < 0) {
      try {
        const anyRows = api.getChatMessages(id);
        const alt = anyRows && anyRows[0];
        if (alt && typeof alt.message === 'string') { raw = alt.message; via = via + '+any'; }
      } catch (error) {}
    }
    const hasTag = typeof raw === 'string' && raw.indexOf('<' + MODULE_TAG + '>') >= 0;
    const blocks = typeof raw === 'string' ? parseUpdates(raw) : [];
    const variables = api.getVariables({ type: 'chat' }) || {};
    const out = {
      lastMessageId: lastId,
      messageId: id,
      via,
      role: (() => { try { const r = api.getChatMessages(id); return r && r[0] ? (r[0].is_user ? 'user' : 'assistant') : '?'; } catch (error) { return '?'; } })(),
      hasTag,
      blockCount: blocks.length,
      found: blocks.length > 0,
      block: blocks.length ? blocks[blocks.length - 1] : null,
      preview: typeof raw === 'string' ? raw.slice(0, 160) : String(raw),
      current: variables[MODULE_KEY] || null,
      pending: variables[PENDING_KEY] || null,
    };
    console.info('[道渊·百艺] dump', out);
    return out;
  },
  // 走完整校验重放某楼的状态块（等价于再收一次该楼），失败会照常提示原因
  replay(messageId) {
    const id = Number.isInteger(messageId) ? messageId : api.getLastMessageId();
    console.info('[道渊·百艺] 重放第 ' + id + ' 楼');
    return acceptAssistantUpdate(id);
  },
  state() {
    const variables = api.getVariables({ type: 'chat' }) || {};
    return variables[MODULE_KEY] || null;
  },
};

globalThis.DaoyuanBaiyi = BAIYI_TOOLS;
try {
  const hostView = (window.parent && window.parent !== window) ? window.parent : window;
  hostView.DaoyuanBaiyi = BAIYI_TOOLS;
} catch (error) {}

bootBaiyi();

  } catch (__baiyiErr) {
    try {
      const hostView = (window.parent && window.parent !== window && window.parent.document && window.parent.document.body) ? window.parent : window;
      const hostDoc = hostView.document;
      const box = hostDoc.createElement('div');
      box.setAttribute('data-daoyuan-baiyi-error', '1');
      box.style.cssText = 'position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:2147483002;max-width:92vw;padding:12px 16px;border-radius:12px;border:1px solid #c4665b;background:#2a1113;color:#ffd9d3;font:12px/1.5 ui-monospace,monospace;white-space:pre-wrap';
      box.textContent = '[道渊·百艺] 执行出错：\n' + (__baiyiErr && (__baiyiErr.stack || __baiyiErr.message));
      hostDoc.body.appendChild(box);
      setTimeout(function () { try { box.remove(); } catch (error) {} }, 30000);
    } catch (error) {}
    try { console.error('[道渊·百艺] 执行出错', __baiyiErr); } catch (error) {}
  }
})();
