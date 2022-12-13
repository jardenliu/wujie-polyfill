import type Wujie from 'wujie/esm/sandbox'
/* eslint-disable no-unused-vars */
export type MainWindow = typeof globalThis
export type AppWindow = typeof globalThis & {$wujie: Wujie['provide'], __WUJIE: Wujie }

export type AppWindowCallback = (appWindow: AppWindow) => void