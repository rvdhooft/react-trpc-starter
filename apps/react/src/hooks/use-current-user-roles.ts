import { useAccount } from '@azure/msal-react'
import useImpersonationRoles from './use-impersonation-roles'

const useCurrentUserRoles = () => {
  const account = useAccount()
  const impersonationRoles = useImpersonationRoles()
  if (!account?.idTokenClaims) return null
  return impersonationRoles || account?.idTokenClaims?.roles
}

export default useCurrentUserRoles
