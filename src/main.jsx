import React from 'react'
import ReactDOM from 'react-dom/client'
//import { AppAPI } from './AppAPI.jsx'
import { AppSocket } from './AppSocket.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppSocket />
  </React.StrictMode>,
)
