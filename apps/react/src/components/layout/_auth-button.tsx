import { loginRequest, logoutRequest } from '@/auth-config'
import { IPublicClientApplication } from '@azure/msal-browser'
import { useIsAuthenticated, useMsal } from '@azure/msal-react'
import { Link } from '@mui/material'

const AuthButton = (props: any) => {
  const isAuthenticated = useIsAuthenticated()
  const { instance } = useMsal()

  const handleLogout = (instance: IPublicClientApplication) => {
    instance.logout({ onRedirectNavigate: logoutRequest }).catch((e: any) => {
      console.error(e)
    })
  }

  const handleLogin = (instance: IPublicClientApplication) => {
    instance.loginPopup(loginRequest).catch((e: any) => {
      console.error(e)
    })
  }

  if (isAuthenticated) {
    return (
      <Link
        {...props}
        component="button"
        onClick={() => handleLogout(instance)}
      >
        Sign Out
      </Link>
    )
  }

  return (
    <Link {...props} component="button" onClick={() => handleLogin(instance)}>
      Sign In
    </Link>
  )
}

export default AuthButton
