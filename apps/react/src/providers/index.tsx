import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../theme'
import FallbackErrorBoundary from './_FallbackErrorBoundary'
import QueryProvider from './_QueryProvider'
import TRPCProvider from './_TRPCProvider'

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
