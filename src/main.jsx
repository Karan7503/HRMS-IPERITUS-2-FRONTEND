import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import "./styles/theme.css"
import "./styles/theme4.css"
import "./styles/RequestTheme.css"

import "./styles/datePickerTheme.css"
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>

        <App />
        
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
