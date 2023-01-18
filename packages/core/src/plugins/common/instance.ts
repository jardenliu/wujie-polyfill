import { simpleJsBeforeLoader } from '../../utils/base'
import { uniq } from 'ramda'
import { HTML_ELEMENT_CONSTRUCTORS, UIEVENT_OBJECT_CONSTRUCTORS, DOCUMENT_OBJECT_CONSTRUCTORS } from '../../constants/base'
export interface InstanceofPluginOptions {
    patchList?: string[]
}

const DefaultInstanceofPatchList: string[] = [...HTML_ELEMENT_CONSTRUCTORS, ...UIEVENT_OBJECT_CONSTRUCTORS, ...DOCUMENT_OBJECT_CONSTRUCTORS]

export const InstanceofPlugin = (config: InstanceofPluginOptions = {}) => {
    const patchList = uniq([...DefaultInstanceofPatchList, ...(config.patchList || [])])

    return simpleJsBeforeLoader((appWindow) => {
        const global = appWindow.__WUJIE.proxy as unknown as typeof globalThis
        const rawHasInstance = global.Object[global.Symbol.hasInstance]

        const patchInstanceof = (prop, rawHasInstance) => {
            const target = global[prop]

            if (!target) return

            global[prop] = new Proxy(target, {
                get (target, p, receiver) {
                    if (p === global.Symbol.hasInstance) {
                        return (element) => {
                            if (rawHasInstance.call(target, element)) return true
                            if (element instanceof (global.parent as unknown as typeof globalThis)[prop]) return true
                            return false
                        }
                    }

                    return Reflect.get(target, p, receiver)
                },
            })
        }

        patchList.forEach((prop) => patchInstanceof(prop, rawHasInstance))
    })
}