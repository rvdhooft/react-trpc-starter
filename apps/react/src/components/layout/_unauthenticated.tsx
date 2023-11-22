import { Typography } from '@mui/material'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import AuthButton from './_auth-button'

const Unauthenticated = () => {
  return (
    <Container>
      <Card
        variant="padded"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography align="center" mb={2}>
          You are not signed in.
        </Typography>
        <AuthButton />
      </Card>
    </Container>
  )
}

export default Unauthenticated
