// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

const CardVerticalRatings = (props) => {

  const formattedAmount = new Intl.NumberFormat('pt-MZ', { style: 'currency', currency: 'MZN' }).format(props.total);


  return (
    <Card>
      <CardContent>
        <Typography variant='h6' sx={{ mb: 2 }}>
          {props.title}
        </Typography>
        <Box sx={{ py: 1, mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <Rating readOnly value={4} name='read-only' sx={{ mr: 2 }} />
          <Typography variant='body2'>4 Raised | {formattedAmount}</Typography>
        </Box>
        <Typography variant='body2' sx={{ mb: 2 }}>
          {props.summary}
        </Typography>
        
      </CardContent>
      <CardActions className='card-action-dense'>
        <Button>Funding</Button>
        <Button>Contact</Button>
      </CardActions>
    </Card>
  )
}

export default CardVerticalRatings
