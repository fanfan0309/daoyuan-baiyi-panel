# 《道渊》百艺修习面板

《道渊》工坊 DLC 的 Tavern Helper 远程面板脚本仓库。世界书和角色局部正则随导入包单独提供，不会由远程脚本自动导入。

## v0.3.2 下载

- [工坊导入包](道渊百艺修习-v0.3.2-工坊导入包.zip)：一条世界书、四条独立正则、Helper 脚本文件和导入说明。
- [源码与展示包](道渊百艺修习-v0.3.2-源码与展示包.zip)：源码、面板预览、展示图片和导入文件。
- [版本说明](发布说明-v0.3.2.md)

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

1. 在《道渊工坊》草稿中导入包里的 Tavern JSON 世界书文件。
2. 选择“追加”，逐个导入四个正则 JSON 文件。
3. 在 Tavern Helper 脚本库中单独导入 Helper 脚本文件；或安装上面的远程导入入口。
4. 按包内 `导入顺序.md` 核对导入预览。识别失败或条目数为 0 时取消导入。

## 兼容要求与状态

需要支持 ES 模块动态 `import()`、消息渲染器、脚本按钮、聊天变量和 `MESSAGE_RECEIVED` 事件的 Tavern Helper 版本。当前本地构建及静态结构检查已通过；真实工坊导入和实际酒馆运行仍需使用者在副本中验收。

本仓库暂未附加开源许可证；公开可见不等于已授予再分发或改作许可。
