# 项目介绍

格数科技 `Electron + Rsbuild + React + TypeScript` 项目模板

## 开发

```bash
pnpm run dev
```

开发模式会同时启动：

- `Rsbuild` 渲染进程开发服务器（`http://127.0.0.1:5173`）
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
