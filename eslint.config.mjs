import config from "@1adybug/eslint"

export default [
    {
        ignores: ["dist/**", "dist-electron/**"],
    },
    ...config,
    {
        files: ["electron/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
        rules: {
            "prefer-arrow-callback": "off",
        },
    },
]
