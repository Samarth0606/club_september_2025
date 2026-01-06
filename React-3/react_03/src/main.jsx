import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import {App} from './App.jsx' //obj. destructuring
// import App from './App.jsx' //default

// import App, {Kashish,Maverick,Sam} from './App.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Sam />
    <Maverick />
    <Kashish /> */}
  </StrictMode>,
)
