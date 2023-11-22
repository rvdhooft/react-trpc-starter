import { createContext } from 'react'

const ImpersonationContext = createContext<string[] | undefined>(undefined)

export default ImpersonationContext
