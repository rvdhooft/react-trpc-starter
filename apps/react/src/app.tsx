import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './providers/auth-provider'
import FallbackErrorBoundary from './providers/fallback-error-boundary'
import ImpersonationProvider from './providers/impersonation-provider'
import QueryProvider from './providers/query-provider'
import TRPCProvider from './providers/trpc-provider'
import Routing from './routing'
import theme from './theme/theme'

function App() {
  return (
    <AuthProvider>
      <FallbackErrorBoundary>
        <QueryProvider>
          <TRPCProvider>
            <ImpersonationProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                  <Routing />
                </BrowserRouter>
              </ThemeProvider>
            </ImpersonationProvider>
          </TRPCProvider>
        </QueryProvider>
      </FallbackErrorBoundary>
    </AuthProvider>
  )
}

export default App
