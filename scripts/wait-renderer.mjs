// @ts-check

import waitOn from "wait-on"

import { getDevelopmentPort } from "./development-port.mjs"

const port = getDevelopmentPort()

await waitOn({
    resources: [`tcp:127.0.0.1:${port}`],
})
