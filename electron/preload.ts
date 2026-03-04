import { contextBridge } from "electron"

/** Electron 注入到渲染进程的桥接对象 */
export interface ElectronBridge {
    platform: NodeJS.Platform
}

/** 桥接对象 */
const electronBridge: ElectronBridge = {
    platform: process.platform,
}

contextBridge.exposeInMainWorld("electron", electronBridge)
