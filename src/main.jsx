import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Preline from './components/Preline.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preline />
    <App />
  </StrictMode>,
)
