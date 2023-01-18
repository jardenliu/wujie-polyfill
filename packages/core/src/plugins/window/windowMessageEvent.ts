import { plugin } from 'wujie'
export const WindowMessagePlugin = (): plugin => {
    return {
        windowAddEventListenerHook (iframeWindow, type, handler, options) {
            if (type === 'message') {
                window.addEventListener.call(iframeWindow, type, handler, options)
            }
        },
        windowRemoveEventListenerHook (iframeWindow, type, handler, options) {
            if (type === 'message') {
                window.removeEventListener.call(iframeWindow, type, handler, options)
            }
        },
    }
}