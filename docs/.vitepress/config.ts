import { defineConfig } from 'vitepress'
const base = process.env.NODE_ENV === 'production' ? '/' : ''

export default defineConfig({
    title: '无界 Polyfill',
    description: '极致的微前端框架的polyfill',
    base,
    vue: {},
    lastUpdated: true,
    themeConfig: {
        logo: 'https://wujie-micro.github.io/docs/wujie.svg',
    },
})