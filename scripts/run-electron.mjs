/* eslint-disable */

// @ts-check

import { spawn } from "node:child_process"
import { createRequire } from "node:module"

/** CommonJS require */
const require = createRequire(import.meta.url)

/** Electron 可执行文件路径 */
/** @type {string} */
const electronBinary = require("electron")

/** 透传给 Electron 的参数 */
const args = process.argv.slice(2)

/** 启动环境变量 */
const env = { ...process.env }

delete env.ELECTRON_RUN_AS_NODE

const child = spawn(electronBinary, args, {
    stdio: "inherit",
    env,
})

child.on("exit", function onExit(code, signal) {
    if (signal) {
        process.kill(process.pid, signal)
        return
    }

    process.exit(code ?? 0)
})
