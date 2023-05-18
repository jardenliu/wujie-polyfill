import { DOM_EVENTS } from '../../constants/base'
import { simpleJsBeforeLoader } from '../../utils/base'

const polyfillEventPath = () => {
    Object.keys(DOM_EVENTS).forEach((eventName) => {
        const events: string[] = DOM_EVENTS[eventName].split(' ').filter(Boolean)
        events.forEach((event) => {
            window.addEventListener(event, (e) => {
                if (e.composed) {
                    // @ts-ignore
                    e.path = e.composedPath()
                }
            })
        })

    })
}

const patchEventTarget = () => {
    // @ts-ignore
    if (Event.prototype.__WUJIE_POLYFILL_EVENT_TARGET_PATCHED__) return
    // @ts-ignore
    Event.prototype.__WUJIE_POLYFILL_EVENT_TARGET_PATCHED__ = true

    const originEventTargetGetter = Object.getOwnPropertyDescriptor(Event.prototype, 'target')?.get

    Object.defineProperty(Event.prototype, '__WUJIE_POLYFILL_TARGET__', {
        get: originEventTargetGetter,
    })

    if (!Object.getOwnPropertyDescriptor(Event.prototype, 'path')) {
        polyfillEventPath()
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
        patchEventTarget()
    })
}