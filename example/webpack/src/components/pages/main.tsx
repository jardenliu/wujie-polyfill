import React, { useState } from 'react'

export default function App () {
    const [msg, setMsg] = useState('Hello World')

    const handleClick = (e) => {
        setMsg(`now ${Date.now()}`)
        console.log(e)
    }

    return (<button onClick={handleClick}>{msg}</button>)
}