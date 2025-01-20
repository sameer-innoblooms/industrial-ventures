'use client'

import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Box
} from '@mui/material'

const promotions = [
  {
    title: 'New Years Sale',
    subtitle: '50% Off Discount From Online Shop',
    image: '/placeholder.svg',
    buttonColor: '#9dff00'
  },
  {
    title: 'Black Friday Sale',
    subtitle: 'Free Shipping For This Month',
    image: '/placeholder.svg',
    buttonColor: '#9dff00'
  }
]

export default function Promotions() {
  return (
    <Container sx={{ py: 8, marginBlock: 4 }}>
      <Grid container spacing={4}>
        {promotions.map((promo, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              sx={{
                p: 4,
                height: '100%',
                bgcolor: '#1C4B84',
                color: 'white',
                backgroundImage: `url(${promo.image})`,
                backgroundSize: '30%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
              }}
            >
              <Box sx={{ maxWidth: '60%' }}>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  {promo.title}
                </Typography>
                <Typography variant="h6" paragraph>
                  {promo.subtitle}
                </Typography>
                <Button sx={{
                    color: '#c3b024',
                    fontSize: '1rem',
                }}>
                    SHOP NOW
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

