import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'
import Fallback from './_error-fallback'
import Navigation from './_navigation'
import Unauthenticated from './_unauthenticated'

const Layout = () => (
  <>
    <Navigation />

    <main>
      <ErrorBoundary FallbackComponent={Fallback}>
        <AuthenticatedTemplate>
          <Outlet />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <Unauthenticated />
        </UnauthenticatedTemplate>
      </ErrorBoundary>
    </main>
  </>
)

export default Layout
