# Qianwen Web Sidebar

一个 DSH 插件：在会话输入区显示 **千问 Web** 按钮，点击后在右侧 Sidebar 打开 `https://www.qianwen.com/`。

## 行为

- 按 DSH 当前语言显示按钮：中文为“千问”，英文为“Qianwen Web”。
- 使用 DSH Desktop 已有的 Browser/webview 容器；不新增 API 请求。
- 使用千问网页账号登录和网页服务，不消耗 DSH 配置的 API token。
- 插件不读取、转发或保存网页聊天内容。
- 当前版本保留 Browser 的网页容器能力，入口按钮做了专用化；如果 Browser 插件未启用，按钮不会打开页面。

## 安装

将此目录作为本地 DSH bundle 安装，或把目录复制到当前 profile 的插件目录后，在插件管理器中启用 `qianwen-web-sidebar`。安装后重载当前 profile；首次点击按钮后在右侧网页面板登录千问。

## 限制

该版本依赖 `@deepseek-ai/dsh-client-ui-sidebar-browser`。如果当前 DSH profile 没有 Desktop Browser/webview 能力，不能仅靠这个 Client 插件绕过 Electron 宿主限制。
