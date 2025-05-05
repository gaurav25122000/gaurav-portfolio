import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './theme.css' // Import the theme CSS
import { ThemeProvider } from './contexts/ThemeContext.jsx' // Import the ThemeProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> {/* Wrap App with ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
