# 项目介绍

格数科技 `Electron + Rsbuild + React + TypeScript` 项目模板

## 开发

```bash
pnpm run dev
```

开发模式会同时启动：

- `Rsbuild` 渲染进程开发服务器（默认地址为 `http://127.0.0.1:3060`）
- `Electron` 主进程应用窗口

## 构建

```bash
pnpm run build
```

构建输出目录：

- 渲染进程：`dist`
- Electron 主进程与预加载：`dist-electron`

## 仅启动 Electron（使用本地构建产物）

```bash
pnpm run start
```

## 开发端口

渲染进程开发服务、Electron 启动等待和窗口加载地址共同读取进程环境变量 `PORT`，未设置时使用 `3060`。PowerShell 中可这样指定端口：

```powershell
$env:PORT = "3061"
pnpm dev
```
