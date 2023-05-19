import React, { useState } from 'react'

export default function App () {
    const [msg, setMsg] = useState('App1')
    const input2 = document.createElement('input')
    input2.id = 'input'
    document.body.appendChild(input2)
    setTimeout(() => {
        const input = document.querySelector('#input')
        // input.addEventListener('input', (event) => {
        //     setTimeout(() => {
        //         console.log(1, event.target)
        //     }, 1000)
        // })

        input.oninput = function (event) {
            console.log(3, event.target)
            setTimeout(() => {
                console.log(2, event.target)
            }, 1000)
        }

        // window.addEventListener('keydown', (event) => {
        //     setTimeout(() => {
        //         console.log(2, event.srcElement)
        //     }, 1000)
        // } )

        console.log('input :', input)
    }, 2000)
    return (<div>
        <input></input>
    </div>)
}