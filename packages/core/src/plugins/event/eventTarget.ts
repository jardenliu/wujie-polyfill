// import { DOM_EVENTS } from '../../constants/base'
import { simpleJsBeforeLoader } from '../../utils/base'

const polyfillEventPath = (appWindow) => {
    // Object.keys(DOM_EVENTS).forEach((eventName) => {
    //     const events: string[] = DOM_EVENTS[eventName].split(' ').filter(Boolean)
    //     events.forEach((event) => {
    //         window.addEventListener(event, (e) => {
    //             if (e.composed) {
    //                 // @ts-ignore
    //                 e.path = e.composedPath()
    //             }
    //         })
    //     })

    // })

    function setupPath (e) {
        if (e?.composed) {
            // @ts-ignore
            e.path = e.composedPath()
        }
    }

    const rawAddEventListener = appWindow.EventTarget.prototype.addEventListener
    const rawRemoveEventListener = appWindow.EventTarget.prototype.removeEventListener

    function initEventListenerList (ctx: any, eventName: string) {
        ctx.__eventListeners = ctx.__eventListeners || {}
        ctx.__eventListeners[eventName] = ctx.__eventListeners[eventName] || []
    }

    appWindow.EventTarget.prototype.addEventListener = function (...args) {
        const eventName = args[0]
        initEventListenerList(this, eventName)
        const eventListeners = this.__eventListeners[eventName]

        if (eventListeners.length === 0) {
            rawAddEventListener.apply(this, [args[0], setupPath, args[2]])
        }
        this.__eventListeners[eventName].push(args[1])
        return rawAddEventListener.apply(this, args)
    }

    appWindow.EventTarget.prototype.removeEventListener = function (...args) {
        const eventName = args[0]
        initEventListenerList(this, eventName)
        const eventListeners = this.__eventListeners[eventName]

        const idx = eventListeners.findIndex((fn) => fn === args[1])
        ~idx && eventListeners.splice(idx, 1)

        if (this.__eventListeners[eventName].length === 0) {
            rawRemoveEventListener.apply(this, [args[0], setupPath, args[2]])
        }
        return rawRemoveEventListener.apply(this, args)
    }
}

const patchEventTarget = (appWindow) => {
    // @ts-ignore
    if (Event.prototype.__WUJIE_POLYFILL_EVENT_TARGET_PATCHED__) return
    // @ts-ignore
    Event.prototype.__WUJIE_POLYFILL_EVENT_TARGET_PATCHED__ = true

    const originEventTargetGetter = Object.getOwnPropertyDescriptor(Event.prototype, 'target')?.get

    Object.defineProperty(Event.prototype, '__WUJIE_POLYFILL_TARGET__', {
        get: originEventTargetGetter,
    })

    if (!Object.getOwnPropertyDescriptor(Event.prototype, 'path')) {
        polyfillEventPath(appWindow)
    }

    const getTargetFormPath = (path: Element[], type: string) => {
        const shadowRoots = path.filter((dom) => dom.shadowRoot)

        if (shadowRoots.length > 1) { // 第一个肯定是 wujie-app
            const idx = shadowRoots.findIndex((dom) => dom.tagName === 'WUJIE-APP')
            return shadowRoots[idx - 1] // 取的wujie前一个shadowRoot

        }

        return path[0]
    }

    function targetGet () {
        // @ts-ignore
        const that = this
        if (that.composed && that.composedPath() && that.composedPath()[0]) {
            return getTargetFormPath(that.composedPath(), that.type)
        }

        if (that.path && that.path[0]) {
            return getTargetFormPath(that.path, that.type)
        }

        return that.__WUJIE_POLYFILL_TARGET__
    }

    Object.defineProperty(Event.prototype, 'target', {
        get: targetGet,
    })

    Object.defineProperty(Event.prototype, 'srcElement', {
        get: targetGet,
    })

}

export const EventTargetPlugin = () => {
    return simpleJsBeforeLoader((appWindow) => {
        patchEventTarget(appWindow)
    })
}