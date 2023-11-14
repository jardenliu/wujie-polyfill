import { simpleJsBeforeLoader } from '../../utils/base'

export const SelectionPlugin = () => {
    return simpleJsBeforeLoader((appWindow) => {
        // @ts-ignore
        if (!Selection.prototype.__IS_PATCHED_IS_COLLAPSED__) {
            Object.defineProperty(Selection.prototype, 'isCollapsed', {
                get () {
                    return this.anchorNode === this.focusNode && this.anchorOffset === this.focusOffset
                },
            })
            // @ts-ignore
            Selection.prototype.__IS_PATCHED_IS_COLLAPSED__ = true
        }
    })
}