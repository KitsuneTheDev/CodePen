import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './contexts/authContext.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
