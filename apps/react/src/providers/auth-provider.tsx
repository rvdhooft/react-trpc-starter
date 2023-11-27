import { msalConfig } from '@/auth-config'
import {
  AuthenticationResult,
  EventMessage,
  EventType,
  PublicClientApplication,
} from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'

export const msalInstance = new PublicClientApplication(msalConfig)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const accounts = msalInstance.getAllAccounts()
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0])
  }

  msalInstance.addEventCallback((event: EventMessage) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      const payload = event.payload as AuthenticationResult
      const account = payload.account
      msalInstance.setActiveAccount(account)
    }
  })

  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>
}

export default AuthProvider
