import UserRoles from '@/enums/user-roles'
import useUserHasRole from '@/hooks/use-user-has-role'
import trpc from '@/utils/trpc'
import { Box, Button, Container, Typography } from '@mui/material'
import { useState } from 'react'

const Dashboard = () => {
  const [count, setCount] = useState(0)
  const { isLoading, data, error } = trpc.user.byId.useQuery(1)
  const canEdit = useUserHasRole(UserRoles.Edit)

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Users
      </Typography>
      <Typography>
        {error ? (
          <>{JSON.stringify(error)}</>
        ) : isLoading ? (
          'Loading...'
        ) : (
          <>{JSON.stringify(data)}</>
        )}
      </Typography>
      <Box mt={3}>
        <Button
          variant="contained"
          disabled={!canEdit}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </Box>
    </Container>
  )
}

export default Dashboard
