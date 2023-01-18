import { isFunc, simpleJsBeforeLoader } from '../../utils/base'

export const DocFullScrollPlugin = () => {
    return simpleJsBeforeLoader((appWindow) => {
        const requestFuncList = ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen']
        // wujie已经代理了'exitFullscreen'
        const cancelFuncList = ['mozCancelFullScreen', 'webkitCancelFullScreen', 'msExitFullscreen']
        const elementlist = ['fullscreenElement', 'webkitFullscreenElement', 'mozFullScreenElement', 'msFullscreenElement']
        const enabledList = ['fullscreenEnabled', 'webkitFullscreenEnabled', 'mozFullScreenEnabled', 'msFullscreenEnabled']

        const propList = [...elementlist, ...enabledList]

        const hasSetter = function (o: any, p: PropertyKey) {
            const desc = appWindow.Object.getOwnPropertyDescriptor(o, p)
            return !desc || desc.set
        }

        const mainDoc = appWindow.parent.document
        const appDoc = appWindow.__WUJIE.proxy.document
        const appDocElement = appDoc.documentElement

        requestFuncList.forEach((fnName) => {
            const mainDocElement = mainDoc.documentElement
            if (isFunc(appDocElement[fnName]) && isFunc(mainDocElement[fnName])) {
                try {
                    appDocElement[fnName] = function (...args) {
                        return mainDocElement[fnName](...args)
                    }
                } catch (error) {
                    //
                    console.warn('[wujie-polyfill]: ', `子应用 ${fnName} ${error}`)
                }
            }
        })

        cancelFuncList.forEach((fnName) => {
            if (appDoc[fnName] && hasSetter(appDoc, fnName)) {
                try {
                    appDoc[fnName] = function (...args) {
                        return mainDoc[fnName](...args)
                    }
                } catch (error) {
                    //
                    console.warn('[wujie-polyfill]: ', `子应用 ${fnName} ${error}`)
                }
            }
        })

        propList.forEach((prop) => {
            if (appDoc[prop] !== undefined) {
                appWindow.Object.defineProperty(appDoc, prop, {
                    get () {
                        return mainDoc[prop]
                    },
                })
            }
        })

    })
}