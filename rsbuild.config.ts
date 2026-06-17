import { defineConfig } from "@rsbuild/core"
import { pluginBabel } from "@rsbuild/plugin-babel"
import { pluginReact } from "@rsbuild/plugin-react"
import { pluginSvgr } from "@rsbuild/plugin-svgr"
import { sdrrRsbuildPlugin } from "sdrr/rsbuild"

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
        pluginReact(),
        pluginBabel({
            include: /\.(?:jsx|tsx)$/,
            babelLoaderOptions(config) {
                config.plugins ??= []
                config.plugins?.unshift("babel-plugin-react-compiler")
            },
        }),
        pluginSvgr(),
        sdrrRsbuildPlugin(),
    ],
    server: {
        port: 3060,
        strictPort: true,
    },
    output: {
        polyfill: "entry",
        assetPrefix: "./",
    },
})
