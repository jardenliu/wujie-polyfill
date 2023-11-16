import { AppWindow } from '../../types/window'
import { simpleJsBeforeLoader } from '../../utils/base'

export interface LocationHrefPluginOptions {
    [x: string]: any
}

export const LocationHrefPlugin = (config: LocationHrefPluginOptions = {}) => {
    return simpleJsBeforeLoader((appWindow) => {
        const rawProxyLocation = appWindow.__WUJIE.proxyLocation as Location

        appWindow.__WUJIE.proxyLocation = new Proxy (rawProxyLocation, {
            set (target, p, newValue, receiver) {
                if (p === 'href') {
                    const newUrl = new URL(newValue, target.href)
                    if (newUrl.origin !== target.origin) {
                        // @ts-ignore
                        window.top.location.href = newUrl.href
                        return true
                    }
                }
                return appWindow.Reflect.set(target, p, newValue, receiver)
            },
        })

    })
}