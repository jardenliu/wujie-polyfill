import React from 'react'
import { createRoot } from 'react-dom/client'
import App from 'components/pages/app1'

const root = createRoot(document.querySelector('#app'))
root.render(<App />)
