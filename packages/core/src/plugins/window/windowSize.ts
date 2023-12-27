import { simpleJsBeforeLoader } from '../../utils/base'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WindowSizePluginOptions {
    /**
     * @name 是否使用shadowDom的size获取
     */
    shadow?: boolean
}

export const WindowSizePlugin = (config: WindowSizePluginOptions = {}) => {

    return simpleJsBeforeLoader((appWindow) => {
        const rawWindowProxy = appWindow.__WUJIE.proxy
        const shadowRoot = appWindow.__WUJIE.shadowRoot as ShadowRoot

        const getters = {
            innerHeight: () => !config.shadow ? rawWindowProxy.parent.innerHeight : shadowRoot.ownerDocument.body.getBoundingClientRect().height,
            innerWidth: () => !config.shadow ? rawWindowProxy.parent.innerWidth : shadowRoot.ownerDocument.body.getBoundingClientRect().width,
            outerWidth: () => rawWindowProxy.parent.outerWidth,
            outerHeight: () => rawWindowProxy.parent.outerHeight,
        }

        appWindow.__WUJIE.proxy = new Proxy(rawWindowProxy, {
            get (target, p, receiver) {
                if (getters[p]) {
                    return getters[p]()
                }
                return Reflect.get(target, p, receiver)
            },
        }) as Window

    })
}
