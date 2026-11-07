# 《道渊》百艺修习面板

这是《道渊》工坊 DLC 的 Tavern Helper 面板脚本独立托管仓库。角色卡内容（世界书与正则）不在此仓库。

[查看更新日志](CHANGELOG.md)

## Tavern Helper 远程导入

在 Tavern Helper 脚本管理中导入仓库中的 `TavernHelper-远程导入.json`。该入口使用动态 `import()` 从 jsDelivr 读取 `index.js`：

`https://cdn.jsdelivr.net/gh/fanfan0309/daoyuan-baiyi-panel@main/index.js`

也可以在酒馆助手脚本里直接使用：

```js
import('https://cdn.jsdelivr.net/gh/fanfan0309/daoyuan-baiyi-panel@main/index.js')
  .catch(error => console.error('[道渊百艺] 远程面板加载失败：', error));
```

面板动作只生成输入栏草稿，是否发送由玩家决定。丹器和储物袋只读原卡；新增技艺状态由本组件单独记录。

## 兼容要求

需使用支持 ES 模块动态 `import()` 的 Tavern Helper 版本，并具备消息渲染器、脚本按钮、聊天变量及 `MESSAGE_RECEIVED` 事件。酒馆助手的脚本 API 说明见 <https://n0vi028.github.io/JS-Slash-Runner-Doc/>。

该仓库暂未附加开源许可证；公开可见不等于已授予再分发或改作许可。