import { AppWindow } from '../../types/window'
import { simpleJsBeforeLoader } from '../../utils/base'

export interface LocationReloadPluginOptions {
    match?: (appWindow?: AppWindow) => boolean
}

export const LocationReloadPlugin = (config: LocationReloadPluginOptions = {}) => {
    return simpleJsBeforeLoader((appWindow) => {
        const rawLocation = appWindow.__WUJIE.proxyLocation

        appWindow.__WUJIE.proxyLocation = new Proxy(rawLocation, {
            get (target, p, receiver) {
                if (p === 'reload') {
                    let matched = true
                    if (typeof config?.match === 'function') {
                        matched = !!config.match(appWindow)
                    }
                    if (!matched) return () => void 0

                    return function () {
                        return appWindow.parent.location.reload()
                    }

                }
                return Reflect.get(target, p, receiver)
            },
        })
    })
}