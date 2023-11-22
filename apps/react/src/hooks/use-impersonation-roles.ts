import ImpersonationContext from '@/contexts/impersonation-context'
import { useContext } from 'react'

const useImpersonationRoles = () => useContext(ImpersonationContext)

export default useImpersonationRoles
