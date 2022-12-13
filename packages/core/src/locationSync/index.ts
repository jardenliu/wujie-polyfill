import { simpleJsBeforeLoader } from '../utils/base'

// eslint-disable-next-line no-unused-vars
export type LocationSyncSearch = string | RegExp | ((path: string) => string)

export interface LocationSyncPluginOptions {
    search?: [LocationSyncSearch, LocationSyncSearch],
}

export const LocationSyncPlugin = (config: LocationSyncPluginOptions = {}) => {
    return simpleJsBeforeLoader((appWindow) => {
        console.log('LocationSyncPlugin', appWindow.__WUJIE.id)
    })
}
