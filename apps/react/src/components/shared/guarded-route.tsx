import useCurrentUserRoles from '@/hooks/use-current-user-roles'
import { useMsal } from '@azure/msal-react'
import { useEffect, useState } from 'react'
import Unauthorized from '../layout/_unauthorized'

interface props {
  roles: string[]
  element?: JSX.Element
  children?: any
}

const GuardedRoute = ({ roles, element, children }: props) => {
  const { instance } = useMsal()
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [initialized, setInitialized] = useState(false)
  const userRoles = useCurrentUserRoles()

  useEffect(() => {
    const onLoad = async () => {
      if (!userRoles) return

      // If the current user has every role required for the route, they are authorized to view that component
      setIsAuthorized(roles.every((role) => userRoles.includes(role)))
    }

    onLoad()
    setInitialized(true)
  }, [instance, roles, userRoles])

  if (!initialized) {
    return null // Prevent flash of Unauthorized on initial page load
  }

  return isAuthorized ? <>{element || children}</> : <Unauthorized />
}

export default GuardedRoute
