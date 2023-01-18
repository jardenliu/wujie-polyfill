import { plugin } from 'wujie'
import type { AppWindowCallback } from '../types/window'

export const simpleJsBeforeLoader = (callback: AppWindowCallback):plugin => {
    return {
        jsBeforeLoaders: [
            {
                callback: callback as any,
            }
        ],
    }
}