import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Fallback from './_ErrorFallback'
import Navigation from './_Navigation'

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Navigation />

    <ErrorBoundary FallbackComponent={Fallback}>
      <main>{children}</main>
    </ErrorBoundary>
  </>
)

export default Layout
