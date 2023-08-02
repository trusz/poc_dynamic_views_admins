import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


function init(){
  ReactDOM.createRoot(document.getElementById('view-root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

export default init 