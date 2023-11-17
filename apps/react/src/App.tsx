import { Box, Button, Container, Typography } from '@mui/material'
import { useState } from 'react'
import Layout from './components/layout/layout'
import trpc from './utils/trpc'

function App() {
  const [count, setCount] = useState(0)
  const { isLoading, data, error } = trpc.user.byId.useQuery(1)

  return (
    <Layout>
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
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
        </Box>
      </Container>
    </Layout>
  )
}

export default App
