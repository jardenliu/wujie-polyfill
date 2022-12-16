import type { As } from '../types/shared'
import type { AppWindow, MainWindow, MatchUrlConfig } from '../types/window'
import { simpleJsBeforeLoader } from '../utils/base'

// eslint-disable-next-line no-unused-vars
export type LocationSyncSearch<W extends AppWindow | MainWindow> = string | RegExp | ((path: string, config: MatchUrlConfig<W>) => string)
export type LocationSyncSearches = [LocationSyncSearch<MainWindow>, LocationSyncSearch<AppWindow>]

export interface LocationSyncPluginOptions {
    search?: LocationSyncSearches,
}

export const isSearch = (search: any) => typeof search === 'string' || search instanceof RegExp || typeof search === 'function'

export const getSearches = (search?: LocationSyncSearches) : LocationSyncSearches => {
    let searches: LocationSyncSearches = [/\//, /\//]
    if (!Array.isArray(search)) return searches

    isSearch(search[0]) ? search[0] : searches[0]
    isSearch(search[1]) ? search[1] : searches[1]
    return searches
}

export const matchUrl = <T extends AppWindow | MainWindow>(fullpath:string, search: LocationSyncSearch<T>, config: MatchUrlConfig<T>) => {
    const url = new URL(fullpath, location.href)
    const path = url.pathname + url.search + url.hash
    if (typeof search !== 'function') {
        return path.replace(search, '')
    }
    return search(fullpath, config)
}

const syncLocationFromParent = (appWindow: AppWindow, mainWindow: MainWindow, config: LocationSyncPluginOptions) => {
    const mainLocation = mainWindow.location
    const appLocation = appWindow.location

    const search = getSearches(config.search)
    const matchedMainUrl = matchUrl(mainLocation.href, search[0], {
        window: mainWindow,
        isMain: true,
    })

    const matchedAppUrl = matchUrl(appLocation.href, search[1], {
        window: appWindow,
        isMain: false,
    })

    // TODO: 匹配后替换

    console.log(matchedMainUrl)
    console.log(matchedAppUrl)

}

export const LocationSyncPlugin = (config: LocationSyncPluginOptions = {}) => {
    return simpleJsBeforeLoader((appWindow) => {
        syncLocationFromParent(appWindow, appWindow.parent, config)
    })
}
