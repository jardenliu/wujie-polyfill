import React, { useState } from 'react'

export default function App () {
    const [msg, setMsg] = useState('App1')
    console.log('window2 :', window.window.location)
    return (<div>
        <input></input>
    </div>)
}