import ImpersonationContext from '@/contexts/impersonation-context'
import UserRoles from '@/enums/user-roles'
import { Button, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'

const ImpersonationProvider = ({ children }: { children: any }) => {
  const [roles, setRoles] = useState<string[] | undefined>()
  const [roleName, setRoleName] = useState<string | undefined>()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  if (!import.meta.env.DEV) return <>{children}</>

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleImpersonate = (roleOption?: RoleOption) => {
    setRoles(roleOption?.roles)
    setRoleName(roleOption?.name)
    setAnchorEl(null)
  }

  return (
    <ImpersonationContext.Provider value={roles}>
      <Button
        sx={{ position: 'fixed', bottom: 0, left: 0, zIndex: 1000 }}
        id="impersonate-button"
        aria-controls={open ? 'impersonate-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {roleName ? `Impersonating ${roleName}` : 'Impersonate'}
      </Button>
      <Menu
        id="impersonate-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          'aria-labelledby': 'impersonate-button',
        }}
      >
        {roleOptions?.map((option) => (
          <MenuItem key={option.name} onClick={() => handleImpersonate(option)}>
            {option.name}
          </MenuItem>
        ))}
        {roleName && (
          <MenuItem onClick={() => handleImpersonate()}>
            End Impersonation
          </MenuItem>
        )}
      </Menu>
      {children}
    </ImpersonationContext.Provider>
  )
}

interface RoleOption {
  name: string
  roles: string[] | undefined
}

const roleOptions: RoleOption[] = [
  { name: 'Read Only', roles: [UserRoles.Read] },
  { name: 'Edit', roles: [UserRoles.Read, UserRoles.Edit] },
  {
    name: 'Admin',
    roles: [UserRoles.Read, UserRoles.Edit, UserRoles.Admin],
  },
  { name: 'No Roles', roles: [] },
]

export default ImpersonationProvider
