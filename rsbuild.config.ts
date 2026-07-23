import { defineConfig } from "@rsbuild/core"
import { pluginReact } from "@rsbuild/plugin-react"
import { pluginSvgr } from "@rsbuild/plugin-svgr"
import { sdrrRsbuildPlugin } from "sdrr/rsbuild"

import { getDevelopmentPort } from "./scripts/development-port.mjs"

export default defineConfig({
    source: {
        entry: {
            index: "./index.tsx",
        },
    },
    html: {
        title: "格数科技",
        meta: {
            description: "powered by geshu",
        },
        mountId: "root",
    },
    plugins: [
        pluginReact({
            reactCompiler: true,
        }),
        pluginSvgr(),
        sdrrRsbuildPlugin(),
    ],
    server: {
        port: getDevelopmentPort(),
        strictPort: true,
    },
    output: {
        polyfill: "entry",
        assetPrefix: "./",
    },
})
