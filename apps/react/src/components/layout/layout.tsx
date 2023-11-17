import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Fallback from './_error-fallback'
import Navigation from './_navigation'

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Navigation />

    <ErrorBoundary FallbackComponent={Fallback}>
      <main>{children}</main>
    </ErrorBoundary>
  </>
)

export default Layout
