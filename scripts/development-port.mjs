// @ts-check

import process from "node:process"

export function getDevelopmentPort() {
    const value = process.env.PORT?.trim()
    if (!value) return 3060

    const port = Number(value)

    if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error(`PORT 必须是 1 到 65535 之间的整数，当前值为 ${JSON.stringify(value)}`)

    return port
}
