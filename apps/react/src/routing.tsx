import { Route, Routes } from 'react-router-dom'
import Admin from './components/features/admin/admin'
import Dashboard from './components/features/dashboard/dashboard'
import NotFound from './components/features/not-found/not-found'
import Layout from './components/layout/layout'
import GuardedRoute from './components/shared/guarded-route'
import UserRoles from './enums/user-roles'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Dashboard />} />

        <Route
          path="/admin"
          element={
            <GuardedRoute roles={[UserRoles.Admin]} element={<Admin />} />
          }
        />
      </Route>
    </Routes>
  )
}

export default Routing
