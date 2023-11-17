import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../theme/theme'
import FallbackErrorBoundary from './_fallback-error-boundary'
import QueryProvider from './_query-provider'
import TRPCProvider from './_trpc-provider'

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <FallbackErrorBoundary>
      <QueryProvider>
        <TRPCProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </TRPCProvider>
      </QueryProvider>
    </FallbackErrorBoundary>
  )
}

export default RootProvider
