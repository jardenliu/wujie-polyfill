import { simpleJsBeforeLoader } from '../../utils/base'

type DocumentElementGetters = Pick<Document['documentElement'], 'getBoundingClientRect'>

export const DocElementRectPlugin = () => {
    return simpleJsBeforeLoader((appWindow) => {
        const rawWindowProxy = appWindow.__WUJIE.proxy
        const documentElement: HTMLElement = rawWindowProxy.parent?.document?.documentElement
        const propertyList: string[] = ['clientHeight', 'clientWidth', 'clientTop', 'clientLeft', 'scrollHeight', 'scrollWidth', 'scrollTop', 'scrollLeft', 'offsetHeight', 'offsetWidth', 'offsetTop', 'offsetLeft']
        const getters: DocumentElementGetters = {
            getBoundingClientRect: () => documentElement.getBoundingClientRect(),
        }
        // 获取子应用的document的根元素
        const rawDocElement = appWindow.document.documentElement
        // 创建一个代理来拦截对documentElement的所有操作
        const proxy = new Proxy(rawDocElement, {
            get (target, property, receiver) {
                if (typeof property === 'string' && propertyList.includes(property)) {
                    return documentElement[property]
                }
                if (getters.hasOwnProperty(property)) {
                    return getters[property]
                }
                // 直接在目标上调用Reflect.get，不传递receiver参数
                const value = Reflect.get(target, property)
                // 如果是函数，绑定到原始对象
                if (typeof value === 'function') {
                    return value.bind(target)
                }
                return value
            },
            set(target, property, value, receiver) {
                if (typeof property === 'string' && propertyList.includes(property)) {
                    documentElement[property] = value // 设置到主应用的 documentElement
                    return true
                }
                return Reflect.set(target, property, value)
            },
        })
        propertyList.concat(Object.keys(getters)).forEach((key) => {
            // 注意：这种做法并不推荐，因为它可能会引起不可预见的问题
            Object.defineProperty(rawDocElement, key, {
                configurable: true,
                get () {
                    return Reflect.get(proxy, key)
                },
                set(value) {
                    Reflect.set(proxy, key, value) // 将赋值操作传递到代理
                }
            })
        })
    })
}