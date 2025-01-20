// 'use client'

// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Button,
//   Box,
//   Paper
// } from '@mui/material'
// import Image from 'next/image'

// const products = [
//   { id: 1, name: 'Domestic Light', description: 'Electrical Domestic Lights', image: '/Light.png' },
//   { id: 2, name: 'Water Pump', description: 'Electrical Water pump', image: '/pump2.png', sale: true, salePercentage: 40 },
// ]

// export default function AdditionalProducts() {
//   return (
//     <Container sx={{ py: 8 }}>
//       <Grid container spacing={4}>
//         <Grid item xs={12}>
//           <Typography variant="subtitle1"  gutterBottom sx={{
//             color: "#1C4B84"
//           }}>
//             Additional Product
//           </Typography>
//           <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
//             Best Quality Product
//           </Typography>
//         </Grid>
        
//         <Grid item xs={12} md={8}>
//           <Grid container spacing={3}>
//             {products.map((product) => (
//               <Grid item xs={12} sm={6} key={product.id}>
//                 <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
//                   <Image
//                   style={{}}
//                   src={product.image}
//                   alt={product.name}
//                   width={200}
//                   height={200}
//                   objectPosition='center center'
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h6" component="h3" >
//                       {product.name}
//                     </Typography>
//                     <Typography variant="body1">
//                       {product.description}
//                     </Typography>
                    
//                   </CardContent>
//                   <Button
//                     variant="contained"
//                     fullWidth
//                     sx={{
//                       borderRadius: 0,
//                       py: 1.5,
//                       bgcolor: "#1C4B84"
//                     }}
//                   >
//                     ADD TO CART
//                   </Button>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>

//         <Grid item xs={12} md={4}>
//           <Paper
//             sx={{
//               p: 4,
//               height: '280px',
//                 bgcolor: '#1C4B84',
//               color: 'white',
//               backgroundImage: 'url(/placeholder.svg)',
//               backgroundSize: '50%',
//               backgroundRepeat: 'no-repeat',
//               backgroundPosition: 'bottom right',
//             }}
//           >
//             <Typography variant="h4" gutterBottom fontWeight="bold">
//               Best Product Deals
//             </Typography>
//             <Typography paragraph>
//               Quality Electrical and Mechanical Proucts at Best Price in Market
//             </Typography>
//             <Button
//               variant="outlined"
//               color="inherit"
//               sx={{ mt: 2 }}
//             >
//               SEE PRODUCT
//             </Button>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   )
// }


"use client"

import { Box, Typography, Button, Card, CardContent, CardMedia, CardActions } from "@mui/material"
import { styled } from "@mui/material/styles"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(1),
}))

const SaleTag = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
}))

const ProductDealsCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  height: "100%",
  position: "relative",
  overflow: "hidden",
}))

const products = [
  {
    id: 1,
    name: "Minimalist Bulb",
    price: 5.0,
    originalPrice: 10.0,
    image: "/Light.png",
    sale: "50%",
  },
  {
    id: 2,
    name: "Table Lamp Purple",
    price: 30.0,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RtSs0WKgJQKtpLvHcqjRUUfvyQFWMS.png",
  },
  // Add more products as needed
]

export default function Testimonials() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: 3 }}>
      <Typography color="primary" gutterBottom>
        Additional Product
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Best Quality Product
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
          >
            {products.map((product) => (
              <StyledCard key={product.id}>
                {product.sale && (
                  <SaleTag>
                    <Typography variant="caption">{product.sale} SALE</Typography>
                  </SaleTag>
                )}
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: "contain", p: 2 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h3">
                    {product.name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="h6" color="primary">
                      ${product.price.toFixed(2)}
                    </Typography>
                    {product.originalPrice && (
                      <Typography variant="body2" sx={{ textDecoration: "line-through" }}>
                        ${product.originalPrice.toFixed(2)}
                      </Typography>
                    )}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button variant="contained" fullWidth>
                    ADD TO CART
                  </Button>
                </CardActions>
              </StyledCard>
            ))}
          </Carousel>
        </Box>

        <ProductDealsCard sx={{ minWidth: 300 }}>
          <CardContent>
            <Typography variant="h4" component="h3" gutterBottom>
              Best Product Deals
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </Typography>
            <Button variant="contained" color="secondary">
              SEE PRODUCT
            </Button>
          </CardContent>
          <Box
            component="img"
            src={products[0].image}
            alt="Decorative bulb"
            sx={{
              position: "absolute",
              right: -50,
              bottom: -50,
              width: 200,
              opacity: 0.2,
              transform: "rotate(45deg)",
            }}
          />
        </ProductDealsCard>
      </Box>
    </Box>
  )
}

