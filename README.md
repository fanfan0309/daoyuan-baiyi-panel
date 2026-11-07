# 《道渊》百艺修习面板

《道渊》工坊 DLC 的 Tavern Helper 远程面板脚本仓库。此仓库托管面板脚本与远程导入入口；世界书和角色局部正则属于 DLC 的独立导入内容，不会由远程脚本自动导入。

## 当前版本

当前面板脚本为 **v0.3.2**。本版内容见 [发布说明](发布说明-v0.3.2.md)，版本变化见 [更新日志](CHANGELOG.md)。

## Tavern Helper 远程导入

在 Tavern Helper 脚本管理中导入仓库里的 `TavernHelper-远程导入.json`。入口会从 jsDelivr 动态读取本仓库的 `index.js`：

`https://cdn.jsdelivr.net/gh/fanfan0309/daoyuan-baiyi-panel@main/index.js`

也可以在酒馆助手脚本中使用：

```js
import('https://cdn.jsdelivr.net/gh/fanfan0309/daoyuan-baiyi-panel@main/index.js')
  .catch(error => console.error('[道渊百艺] 远程面板加载失败：', error));
```

面板操作只会将制作或委托请求整理到输入栏草稿，由玩家自行检查和发送。丹药、炼器与储物袋字段只读原卡；新增技艺状态由本组件单独记录。

## 导入次序

1. 先将 DLC 随附的世界书文件导入《道渊工坊》草稿。
2. 选择“追加”，逐个导入 DLC 随附的四个正则文件。
3. 在 Tavern Helper 脚本库中导入仓库里的 `TavernHelper-远程导入.json`，由它加载 `index.js`；或直接导入 DLC 随附的面板脚本 JSON。
4. 按 DLC 的导入说明核对导入预览。识别失败或条目数为 0 时取消导入。

## 兼容要求与状态

需要支持 ES 模块动态 `import()`、消息渲染器、脚本按钮、聊天变量和 `MESSAGE_RECEIVED` 事件的 Tavern Helper 版本。本版已通过本地构建和静态结构检查；真实工坊导入和实际酒馆运行仍需使用者在副本中验收。

本仓库暂未附加开源许可证；公开可见不等于已授予再分发或改作许可。
