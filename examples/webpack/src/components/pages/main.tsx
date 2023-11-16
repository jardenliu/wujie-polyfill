import React, { useState } from 'react'
import Wujie from 'wujie-react'
import { EventTargetPlugin, SelectionPlugin, LocationHrefPlugin } from 'wujie-polyfill'

export default function App () {
    //
    return (<Wujie width={'100vw'} name="app1" height={'100vh'} url={'./app1.html'} plugins={[EventTargetPlugin(), SelectionPlugin(), LocationHrefPlugin()]}></Wujie>)
}