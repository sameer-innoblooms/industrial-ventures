'use client'

import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
  Chip
} from '@mui/material'
import { useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  image: string
  sale?: boolean
  salePercentage?: number
}

const products: Product[] = [
  { id: 1, name: 'Lightings', price: 30.00, image: '/Light.png', sale: true, salePercentage: 20 },
  { id: 2, name: 'Ionizer', price: 100.00, image: '/Ionizer.png', sale: true, salePercentage: 25 },
  { id: 3, name: 'Motor', price: 20.00, image: '/Motor.jpeg' },
  { id: 4, name: 'Boiler Mounting', price: 5.00, image: '/BoilerMountings.png', sale: true, salePercentage: 20 },
  { id: 5, name: 'Water Meter', price: 5.00, image: '/WaterMeter.png', sale: true, salePercentage: 20 },
  { id: 6, name: 'V Belts', price: 30.00, image: '/Vbelts.png', sale: true, salePercentage: 20 },
  { id: 7, name: 'Capacitors', price: 30.00, image: '/Capacitors.png', sale: true, salePercentage: 40 },
  { id: 8, name: 'Pvc, Upvc Pipes', price: 8.00, image: '/PvcPipes.png' }
]

export default function BestSeller() {
  const [sorting, setSorting] = useState('default')

  const handleSortChange = (event: SelectChangeEvent) => {
    setSorting(event.target.value)
  }

  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="subtitle1" gutterBottom sx={{
            color: "#1C4B84"
}}>
            Our Product
          </Typography>
          <Typography variant="h4" component="h2" fontWeight="bold">
            Best Seller Product
          </Typography>
        </Box>
        <FormControl sx={{ minWidth: 200 }}>
          <Select
            value={sorting}
            onChange={handleSortChange}
            displayEmpty
   
          
          >
            <MenuItem value="default">Default sorting</MenuItem>
            <MenuItem value="price-low">Price: Low to High</MenuItem>
            <MenuItem value="price-high">Price: High to Low</MenuItem>
            <MenuItem value="name">Sort by Name</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                {product.sale && (
                  <Chip
                    label={`${product.salePercentage}% SALE`}
                    color="primary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                        bgcolor: '#1C4B84',
                    }}
                  />
                )}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h3">
                  {product.name}
                </Typography>
                {/* <Typography variant="h6" color="primary" fontWeight="bold">
                  ${product.price.toFixed(2)}
                </Typography> */}
              </CardContent>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 0,
                  py: 1.5,
                  bgcolor: "#1C4B84"
                }}
              >
                ADD TO CART
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}