import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

interface props {
  title?: string
  text?: string
  children?: any
}

const InfoCard = ({ title, text, children }: props) => {
  return (
    <Container>
      <Card variant="padded">
        {title && (
          <Typography variant="h1" align="center" gutterBottom>
            {title}
          </Typography>
        )}
        {text && (
          <Typography variant="body1" align="center">
            {text}
          </Typography>
        )}
        {children}
      </Card>
    </Container>
  )
}

export default InfoCard
