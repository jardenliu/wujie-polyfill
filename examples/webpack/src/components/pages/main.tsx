import React, { useState } from 'react'
import Wujie from 'wujie-react'
import { DocFullScrollPlugin } from 'wujie-polyfill'
console.log('DocFullScrollPlugin :', DocFullScrollPlugin)

export default function App () {
    //
    return (<Wujie width={'100vw'} name="app1" height={'100vh'} url={'./app1.html'} plugins={[DocFullScrollPlugin()]}></Wujie>)
}