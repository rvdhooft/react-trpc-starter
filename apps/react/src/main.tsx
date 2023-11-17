import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import RootProvider from './providers/providers.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootProvider>
      <App />
    </RootProvider>
  </React.StrictMode>
)
