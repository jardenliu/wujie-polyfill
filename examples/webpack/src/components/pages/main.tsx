import React, { useState } from 'react'
import Wujie from 'wujie-react'
import WujiePolyFill from 'wujie-polyfill'
console.log(WujiePolyFill)
export default function App () {
    return (<Wujie width={'100vw'} name="app1" height={'100vh'} url={'./app1.html'}></Wujie>)
}