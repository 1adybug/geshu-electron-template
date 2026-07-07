import config from "@1adybug/eslint"

export default [
    {
        ignores: ["dist/**", "dist-electron/**"],
    },
    ...config,
]
