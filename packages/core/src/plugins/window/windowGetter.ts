import { PORXY_HANDLER_PROPERTIES } from '../../constants/proxy'
import { simpleJsBeforeLoader } from '../../utils/base'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WindowGetterPluginOptions {}

export const WindowGetterPlugin = (config: WindowGetterPluginOptions = {}) => {

    return simpleJsBeforeLoader((appWindow) => {
        const rawWindowProxy = appWindow.__WUJIE.proxy
        const handler = PORXY_HANDLER_PROPERTIES.reduce((handler, property) => {
            if (property !== 'get') {
                handler[property] = function (target: any, ...args) {
                    return (<any>Reflect[property]).apply(null, [rawWindowProxy, ...args])
                }
            } else {
                handler[property] = function (target, p, receiver) {
                    if (p?.match?.(/^window$|^self$/)) return appWindow.__WUJIE.proxy
                    return Reflect.get(rawWindowProxy, p, receiver)
                }
            }
            return handler
        }, {})

        appWindow.__WUJIE.proxy = new Proxy({}, handler) as Window

    })
}
