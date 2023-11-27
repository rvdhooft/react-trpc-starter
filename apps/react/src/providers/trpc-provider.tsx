import { loginRequest } from '@/auth-config'
import {
  AccountInfo,
  AuthenticationResult,
  InteractionRequiredAuthError,
} from '@azure/msal-browser'
import { httpBatchLink } from '@trpc/client'
import { jwtDecode, JwtPayload } from 'jwt-decode'
import trpc from '../utils/trpc'
import { msalInstance } from './auth-provider'
import { queryClient } from './query-provider'

const getAccessToken = (): string | null => {
  return localStorage.getItem('token')
}

const storeAccessToken = (token: string) => {
  localStorage.setItem('token', token)
}

const storeUserInfo = (auth: AuthenticationResult) => {
  localStorage.setItem(
    'user',
    JSON.stringify({ id: auth.uniqueId, name: auth.account?.name })
  )
}

async function acquireToken(): Promise<AuthenticationResult> {
  try {
    const accessTokenResponse = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account: msalInstance.getActiveAccount() as AccountInfo,
    })
    return accessTokenResponse
  } catch (e: any) {
    if (e instanceof InteractionRequiredAuthError) {
      msalInstance.acquireTokenPopup({
        ...loginRequest,
        account: msalInstance.getActiveAccount() as AccountInfo,
      })
    }
    throw e
  }
}

function tokenNeedsRefresh(token: string) {
  const { exp } = jwtDecode<JwtPayload>(token)
  if (!exp) return true
  // If it's expired or expiring within the next 2 minutes, get a new token
  const millisecondsUntilExpiration = exp * 1000 - Date.now()
  const minutesUntilExpiration = millisecondsUntilExpiration / 60000
  return minutesUntilExpiration < 2
}

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `${import.meta.env.VITE_TRPC_SERVER_URL}`,
      async headers() {
        let token = getAccessToken()

        if (!token || tokenNeedsRefresh(token)) {
          const authResponse = await acquireToken()
          token = authResponse.accessToken
          storeAccessToken(token)
          storeUserInfo(authResponse)
        }

        return {
          Authorization: `Bearer ${token}`,
        }
      },
    }),
  ],
})

const TRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      {children}
    </trpc.Provider>
  )
}

export default TRPCProvider
