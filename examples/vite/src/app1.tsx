import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/pages/app1'
import './styles/reset.css'
const root = createRoot(document.querySelector('#app'))
root.render(<App />)
