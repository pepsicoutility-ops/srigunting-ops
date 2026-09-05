import React from 'react'
import ReactDOM from 'react-dom/client'
import News from './pages/News.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <News />
    </LanguageProvider>
  </React.StrictMode>,
)
