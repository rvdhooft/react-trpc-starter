import useCurrentUserRoles from './use-current-user-roles'

const useUserHasRole = (role: string) => {
  const roles = useCurrentUserRoles()
  return roles?.includes(role)
}

export default useUserHasRole
