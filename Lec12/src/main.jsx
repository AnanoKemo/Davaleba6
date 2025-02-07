import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BasicContextProvider from './BasicContextProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BasicContextProvider>
    <App />
    </BasicContextProvider>
  </StrictMode>,
)
