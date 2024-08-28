import { defineConfig } from 'vitepress'
const base = process.env.NODE_ENV === 'production' ? '/doc/' : ''

export default defineConfig({
    title: '无界 Polyfill',
    description: '极致的微前端框架的polyfill',
    base,
    vue: {},
    lastUpdated: true,
    themeConfig: {
        logo: 'https://wujie-micro.github.io/doc/wujie.svg',
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/jardenliu/wujie-polyfill',
            }
        ],
        editLink: {
            pattern: 'https://github.com/jardenliu/wujie-polyfill/tree/main/docs/:path',
            text: '编辑本页',
        },
        footer: {
            message: 'Released the MIT License.',
        },
        nav: [
            {
                text: '指南',
                link: '/guide/',
                activeMatch: '/guide/',
            },
            {
                text: '插件',
                link: '/plugins/',
                activeMatch: '/plugins/',
            }

        ],
        sidebar: {
            '/guide/': [
                {
                    text: '入门',
                    collapsible: true,
                    items: [
                        {
                            text: '介绍',
                            link: '/guide/',
                        },
                        {
                            text: '快速上手',
                            link: '/guide/start',
                        }
                    ],
                },
                {
                    text: '指南',
                    collapsible: true,
                    items: [
                        {
                            text: '配置',
                            link: '/guide/config',
                        },
                        {
                            text: '场景限制',
                            link: '/guide/limit',
                        }
                    ],
                }
            ],
            '/plugins/': [
                {
                    text: '插件',
                    collapsible: true,
                    items: [
                        // {
                        //     text: 'LocationSyncPlugin',
                        //     link: '/plugins/locationSync',
                        // },
                        {
                            text: 'LocationReloadPlugin',
                            link: '/plugins/locationReload',
                        },
                        {
                            text: 'LocationHrefPlugin',
                            link: '/plugins/locationHref',
                        },
                        {
                            text: 'EventTargetPlugin',
                            link: '/plugins/eventTarget',
                        },
                        {
                            text: 'WindowGetterPlugin',
                            link: '/plugins/windowGetter',
                        },
                        {
                            text: 'WindowMessagePlugin',
                            link: '/plugins/windowMessage',
                        },
                        {
                            text: 'DocFullscreenPlugin',
                            link: '/plugins/docFullscreen',
                        },
                        {
                            text: 'DocElementRectPlugin',
                            link: '/plugins/docElementRect',
                        },
                        {
                            text: 'InstanceofPlugin',
                            link: '/plugins/instanceof',
                        },
                        {
                            text: 'SelectionPlugin',
                            link: '/plugins/selection',
                        }
                    ],
                }
            ],
        },
    },
})