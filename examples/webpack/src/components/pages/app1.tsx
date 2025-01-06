import React, { useState } from 'react'

export default function App () {

    console.log(window.getSelection().isCollapsed)
    console.log(document.getSelection().isCollapsed)

    console.log(' window.innerHeight', window.innerHeight)
    console.log(' window.innerWidth', window.innerWidth)
    console.log(' window.outerWidth', window.outerWidth)
    console.log(' window.outerHeight', window.outerHeight)

    setTimeout(() => {
        console.log(' window.innerHeight', window.innerHeight)
        console.log(' window.innerWidth', window.innerWidth)
        console.log(' window.outerWidth', window.outerWidth)
        console.log(' window.outerHeight', window.outerHeight)
    }, 3000)

    window.addEventListener('resize', () => {
        console.log(' window.innerWidth', window.innerWidth)
    })

    const [msg, setMsg] = useState('App1')
    const input2 = document.createElement('input')
    input2.id = 'input'
    document.body.appendChild(input2)
    setTimeout(() => {
        const input = document.querySelector('#input') as HTMLElement
        input.addEventListener('input', (event) => {
            setTimeout(() => {
                console.log(1, event.target)
            }, 1000)
        })

        input.oninput = function (event) {
            console.log(3, event.target)
            setTimeout(() => {
                console.log(2, event.target)
            }, 1000)
        }

        // location.href = 'http://www.baidu.com'

        // window.onmouseover = function (event) {
        //     console.log(4, event.target)
        //     setTimeout(() => {
        //         console.log(5, event.target)
        //     }, 1000)
        // }

        // document.onmouseover = function (event) {
        //     console.log(6, event.target)
        //     setTimeout(() => {
        //         console.log(7, event.target)
        //     }, 1000)
        // }

        // window.addEventListener('keydown', (event) => {
        //     setTimeout(() => {
        //         console.log(2, event.srcElement)
        //     }, 1000)
        // } )

        console.log('input :', input)

        const scrollBox = document.querySelector('#scrollBox') as HTMLElement
        scrollBox.addEventListener('scroll', (event) => {
            setTimeout(() => {
                console.log(8, event)
                console.log(8, event.target)
            }, 1000)
        })

    }, 2000)

    return (<div>12312312313
        <input></input>
        <div id="scrollBox" style={{
            height: '300px',
            width: '300px',
            overflow: 'auto',
        }}>
            <div style={{
                height: '800px',
                width: '600px',
                backgroundColor: 'red',
            }}>2</div>
        </div>
    </div>)
}
