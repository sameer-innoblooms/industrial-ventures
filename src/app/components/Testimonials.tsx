// "use client"

// import { useState, useEffect } from "react"
// import { Box, Card, CardContent, Typography, Avatar, Rating, styled } from "@mui/material"
// import { keyframes } from "@mui/system"

// const testimonials = [
//   {
//     id: 1,
//     name: "John Doe",
//     role: "Customer",
//     rating: 4.5,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     avatar: "/placeholder.svg?height=60&width=60",
//   },
//   {
//     id: 2,
//     name: "Martin Fred",
//     role: "Customer",
//     rating: 5,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     avatar: "/placeholder.svg?height=60&width=60",
//   },
//   // Add more testimonials as needed
// ]

// const slideIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(100%);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `

// const StyledCard = styled(Card)(({ theme }) => ({
//   maxWidth: 400,
//   margin: "0 auto",
//   backgroundColor: "rgba(255, 255, 255, 0.9)",
//   animation: `${slideIn} 0.5s ease-out`,
// }))

// const TestimonialsSection = styled(Box)({
// //   backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-20%20145651-zmH18vUvSd0ZZN1BFJAUygVSo3Muo4.png')`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   padding: "80px 20px",
//   position: "relative",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
// })

// export default function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <TestimonialsSection>
//       <Box sx={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
//         <StyledCard elevation={3}>
//           <CardContent sx={{ textAlign: "center" }}>
//             <Avatar src={testimonials[currentIndex].avatar} sx={{ width: 80, height: 80, margin: "0 auto 16px" }} />
//             <Typography variant="h6" gutterBottom>
//               {testimonials[currentIndex].name}
//             </Typography>
//             <Typography color="textSecondary" gutterBottom>
//               {testimonials[currentIndex].role}
//             </Typography>
//             <Rating value={testimonials[currentIndex].rating} precision={0.5} readOnly sx={{ mb: 2 }} />
//             <Typography variant="body1">{testimonials[currentIndex].text}</Typography>
//           </CardContent>
//         </StyledCard>
//       </Box>
//     </TestimonialsSection>
//   )
// }


//@ts-check
// import * as React from 'react';
// import { Box, Typography, Button, Grid, Avatar } from '@mui/material';
// import { ArrowRight } from '@mui/icons-material';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// const TestimonialCarousel = () => {
//   const testimonials = [
//     {
//       text: '"Our experience with this company has been nothing short of exceptional. Their team has consistently delivered high-quality IT solutions, ensuring our systems run smoothly and efficiently. We couldn’t have asked for better support!"',
//       name: 'Amaira',
//       avatar: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=', // Placeholder for an image
//     },
//     {
//       text: '"The professionalism and expertise shown by this team were impressive from start to finish. They provided invaluable insights that helped optimize our operations. Highly recommended for anyone looking for top-tier IT services."',
//       name: 'Emily Johnson',
//       avatar: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=', // Placeholder for an image
//     },
//     {
//       text: '"Their innovative approach to solving complex IT challenges has made a huge difference to our company. The results speak for themselves, and we now feel more confident in our IT infrastructure and security."',
//       name: 'Carlos Martinez',
//       avatar: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=', // Placeholder for an image
//     },
//   ];

//   return (
//     <Grid container sx={{ height: '60vh', flexDirection: 'row' }}>
//       <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
//         <img
//           src="https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/business-people-working-in-the-office-scaled.jpg"
//           alt="img"
//           style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//         />
//         <Box
//           sx={{
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             backgroundColor: '#2E4A58',
//             color: 'white',
//             padding: 2,
//             width: '350px',
//           }}
//         >
//           <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
//             Since 2005
//           </Typography>
//           <Typography sx={{ marginBottom: 2 }}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et enim
//           </Typography>
//           <Button
//             color="inherit"
//             endIcon={<ArrowRight />}
//             sx={{
//               textTransform: 'none',
//               backgroundColor: '#2E4A58',
//               color: 'white',
//             }}
//           >
//             FIND YOUR SOLUTION
//           </Button>
//         </Box>
//       </Grid>
//       <Grid
//         item
//         xs={12}
//         md={6}
//         sx={{
//           backgroundColor: '#2E4A58',
//           color: 'white',
//           padding: 10,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundImage: `url('/background.png')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 6 }}>
//           What Client Say About Us
//         </Typography>
//         <Box sx={{ height: '300px', width: '100%' }}>
//           <Carousel
//             responsive={responsive}
//             infinite={true}
//             autoPlay={true}
//             autoPlaySpeed={3000}
//             showDots={false}
//             arrows={false}
//           >
//             {testimonials.map((testimonial, index) => (
//               <Box key={index} sx={{ textAlign: 'center', padding: 2 }}>
//                 <Typography
//                   variant="body1"
//                   sx={{
//                     fontSize: 18,
//                     marginBottom: 4,
//                     fontStyle: 'italic',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   {testimonial.text}
//                 </Typography>
//                 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                   <Avatar
//                     src={testimonial.avatar}
//                     alt="img"
//                     sx={{ width: 64, height: 64, marginRight: 2 }}
//                   />
//                   <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                     {testimonial.name}
//                   </Typography>
//                 </Box>
//               </Box>
//             ))}
//           </Carousel>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default TestimonialCarousel;



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

