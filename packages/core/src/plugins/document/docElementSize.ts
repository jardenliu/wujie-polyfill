import { simpleJsBeforeLoader } from '../../utils/base'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DocumentElementSizePluginOptions {
    /**
     * @name 是否使用shadowDom的size获取
     */
    shadow?: boolean
}

export const DocumentElementSizePlugin = (config: DocumentElementSizePluginOptions = {}) => {
    return simpleJsBeforeLoader(appWindow => {
        const rawWindowProxy = appWindow.__WUJIE.proxy
        const documentElement: HTMLElement = rawWindowProxy.parent && rawWindowProxy.parent.document.documentElement
        const propertyList: string[] = ['clientHeight', 'clientWidth', 'clientTop', 'clientLeft', 'scrollHeight', 'scrollWidth', 'scrollTop', 'scrollLeft', 'offsetHeight', 'offsetWidth', 'offsetTop', 'offsetLeft']
        const getters = {
            getBoundingClientRect: () => documentElement.getBoundingClientRect()
        }
        // 获取子应用的document的根元素
        const originalRootElement = appWindow.document.documentElement
        // 创建一个代理来拦截对documentElement的所有操作
        const proxy = new Proxy(originalRootElement, {
        get: function (target, property, receiver) {
            if (!config.shadow) {
                if (typeof property === 'string' && propertyList.includes(property)) {
                    return documentElement[property]
                }
                if (getters.hasOwnProperty(property)) {
                    return getters[property]
                }
            }
            // 直接在目标上调用Reflect.get，不传递receiver参数
            const value = Reflect.get(target, property)
            // 如果是函数，绑定到原始对象
            if (typeof value === 'function') {
                return value.bind(target)
            }
            return value
        },
        set: function (target, property, value, receiver) {
            return Reflect.set(target, property, value)
        }
        })
        // 将代理对象赋值给document.documentElement
        // 注意：这种做法并不推荐，因为它可能会引起不可预见的问题
        Object.defineProperty(appWindow.document, 'documentElement', {
            get: function () {
                return proxy
            },
            set: function (value) {
                // 这里可以处理赋值操作，但通常不需要这样做
                console.error('[wujie-polyfill]: 尝试修改document.documentElement是不允许的')
            }
        })
    })
}