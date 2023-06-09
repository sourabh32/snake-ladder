import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GameProvider from './context/Game.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GameProvider>
    <App />
    </GameProvider>
  
)
