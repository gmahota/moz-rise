// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// Styled Box component
const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const CardMembership = (props) => {
  const formattedAmount = new Intl.NumberFormat('pt-MZ', { style: 'currency', currency: 'MZN' }).format(props.total);

  return (
    <Card>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={7}>
          <CardContent sx={{ p: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
            <Typography variant='h6' sx={{ mb: 2 }}>
              {props.title}
            </Typography>
            <Typography variant='body2'>
             {props.summary}
            </Typography>
            <Divider sx={{ my: theme => `${theme.spacing(7)} !important` }} />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={5}>
                <StyledBox>
                  <Box
                    sx={{
                      py: 1.25,
                      mb: 4,
                      display: 'flex',
                      alignItems: 'center',
                      '& svg': { color: 'primary.main', mr: 2.5 }
                    }}
                  >
                    <Icon icon='mdi:home' fontSize={20} />
                    <Typography variant='body2'>{props.category}</Typography>
                  </Box>
                  <Box
                    sx={{
                      py: 1.25,
                      display: 'flex',
                      alignItems: 'center',
                      '& svg': { color: 'primary.main', mr: 2.5 }
                    }}
                  >
                    <Icon icon='mdi:account-outline' fontSize={20} />
                    <Typography variant='body2'>{props.members} Members</Typography>
                  </Box>
                </StyledBox>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Box
                  sx={{
                    py: 1.25,
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                    '& svg': { color: 'primary.main', mr: 2.5 }
                  }}
                >
                  <Icon icon='mdi:star-outline' fontSize={20} />
                  <Typography variant='body2'>Access all Features</Typography>
                </Box>
                <Box
                  sx={{ py: 1.25, display: 'flex', alignItems: 'center', '& svg': { color: 'primary.main', mr: 2.5 } }}
                >
                  <Icon icon='mdi:trending-up' fontSize={20} />
                  <Typography variant='body2'>{props.duration_months} Meses</Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid
          item
          sm={5}
          xs={12}
          sx={{ pt: ['0 !important', '1.5rem !important'], pl: ['1.5rem !important', '0 !important'] }}
        >
          <CardContent
            sx={{
              height: '100%',
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'action.hover'
            }}
          >
            <div>
              <Box sx={{ mb: 2, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>

                <Typography variant='h3' sx={{ lineHeight: 0.9334, fontSize: '1.55rem !important' }}>
                {formattedAmount}
                </Typography>

              </Box>
              <Typography variant='body2' sx={{ mb: 7, display: 'flex', flexDirection: 'column' }}>
                <span>5 Tips For Offshore</span>
                <span>Software Development</span>
              </Typography>
              <Button variant='contained'>Invest Now</Button>
            </div>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardMembership
