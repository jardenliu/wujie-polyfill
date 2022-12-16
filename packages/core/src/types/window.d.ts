import type Wujie from 'wujie/esm/sandbox'
/* eslint-disable no-unused-vars */
export type MainWindow = typeof globalThis
export type AppWindow = typeof globalThis & {$wujie: Wujie['provide'], __WUJIE: Wujie, parent: MainWindow }

export type AppWindowCallback = (appWindow: AppWindow) => void

export interface MatchUrlConfig<T extends AppWindow | MainWindow> {
    window: T
    isMain: Boolean
}