import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

import { app, BrowserWindow } from "electron"

/** 当前文件绝对路径 */
const filename = fileURLToPath(import.meta.url)

/** 当前文件目录 */
const currentDirname = dirname(filename)

/** 解析渲染进程 URL */
function queryRendererUrl() {
    const rendererArg = process.argv.find(function findRendererArg(arg) {
        return arg.startsWith("--renderer-url=")
    })

    if (!rendererArg) return undefined

    return rendererArg.replace("--renderer-url=", "")
}

/** 加载窗口内容 */
async function loadMainWindow(window: BrowserWindow) {
    const rendererUrl = queryRendererUrl()

    if (rendererUrl) {
        await window.loadURL(rendererUrl)
        return
    }

    await window.loadFile(join(currentDirname, "../dist/index.html"))
}

/** 创建主窗口 */
async function createMainWindow() {
    const window = new BrowserWindow({
        width: 1280,
        height: 800,
        minWidth: 1024,
        minHeight: 640,
        show: false,
        webPreferences: {
            preload: join(currentDirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false,
        },
    })

    await loadMainWindow(window)

    window.once("ready-to-show", function onReadyToShow() {
        window.show()
    })
}

app.whenReady().then(function onAppReady() {
    void createMainWindow()

    app.on("activate", function onActivate() {
        if (BrowserWindow.getAllWindows().length > 0) return

        void createMainWindow()
    })
})

app.on("window-all-closed", function onWindowAllClosed() {
    if (process.platform === "darwin") return

    app.quit()
})
