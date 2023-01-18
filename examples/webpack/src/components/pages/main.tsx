import React, { useState } from 'react'
import Wujie from 'wujie-react'
import { WindowGetterPlugin } from 'wujie-polyfill'
console.log('WindowGetterPlugin :', WindowGetterPlugin)

export default function App () {
    //
    return (<Wujie width={'100vw'} name="app1" height={'100vh'} url={'./app1.html'} plugins={[WindowGetterPlugin()]}></Wujie>)
}