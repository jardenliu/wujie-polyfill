import type { AppWindowCallback } from '../types/window'

export const simpleJsBeforeLoader = (callback: AppWindowCallback) => {
    return {
        jsBeforeLoaders: [
            {
                callback,
            }
        ],
    }
}