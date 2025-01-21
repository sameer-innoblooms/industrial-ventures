// 'use client'

// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   styled
// } from '@mui/material'

// const HeroContainer = styled(Box)({
//   background: '#0066b3',
//   minHeight: '80vh',
//   display: 'flex',
//   alignItems: 'center',
//   position: 'relative',
//   overflow: 'hidden'
// })

// const KnowMoreButton = styled(Button)({
//   background: '#00a3e0',
//   color: 'white',
//   padding: '12px 32px',
//   fontSize: '16px',
//   '&:hover': {
//     background: '#0093c9'
//   }
// })

// const LeafShape = styled(Box)({
//   position: 'absolute',
//   right: '10%',
//   top: '50%',
//   transform: 'translateY(-50%)',
//   width: '500px',
//   height: '500px',
//   background: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-18%20142503-oqfR3kVdc8rffdx8rePMChwEPTgDku.png)',
//   backgroundSize: 'cover',
//   clipPath: 'path("M 0,100 C 40,10 60,10 100,100 L 50,200 Z")',
// })

// export default function Hero() {
//   return (
//     <HeroContainer>
//       <Container maxWidth="xl" sx={{mx: { xs: 2, md: 12 }}}>
//         <Box sx={{
//           display: 'flex',
//           alignItems: 'center',
//           position: 'relative',
//           zIndex: 1
//         }}>
//           <Box sx={{ maxWidth: '600px' }}>
//             <Typography
//               variant="h1"
//               sx={{
//                 color: 'white',
//                 fontSize: { xs: '2.5rem', md: '3.5rem' },
//                 fontWeight: 700,
//                 marginBottom: 3,
//                 lineHeight: 1.2
//               }}
//             >
//             Industrial Ventures: Making Water Accessible for All!
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 color: 'white',
//                 marginBottom: 4,
//                 fontSize: '1.1rem',
//                 lineHeight: 1.6
//               }}
//             >
//               We have in-house design, engineering, and execution capabilities. We possess a rare combination of financial power that the Industrial Ventures wields. Largest manufacturers of high performance bore-well submersible pumps in India.
//               Known for reliability in the toughest working conditions
//             </Typography>
//             <KnowMoreButton variant="contained">
//               Know More
//             </KnowMoreButton>
//           </Box>
//         </Box>
//       </Container>

//       {/* Decorative elements */}
//       <Box sx={{
//         position: 'absolute',
//         right: 0,
//         top: 0,
//         width: '50%',
//         height: '100%',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}>
//         <Box component="img"
//         //   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-18%20142503-oqfR3kVdc8rffdx8rePMChwEPTgDku.png"
//           sx={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'contain'
//           }}
//         />
//       </Box>
//     </HeroContainer>
//   )
// }

"use client";

import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Box,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MoneyIcon from "@mui/icons-material/Money";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentsIcon from "@mui/icons-material/Payments";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Hero() {
  const images = [
    {
      url: "/Virus.png",
      title: "Virus killer",
      description: "A life-saving Device that effectively neutralizes the Coronavirus family of viruses by up to 99.9%.",
    },
    {
      url: "/Motor.jpeg",
      title: "Motor",
      description: "A high-quality motor that provides efficient and reliable performance.",
    },
    {
      url: "/Cables.png",
      title: "Cables",
      description: "A range of high-quality cables that provide reliable and efficient connectivity.",
    },
    // Add more image objects as needed
  ];

  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#f8f9fa",
        pt: 8,
        // pb: 20,
        
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              variant="h2"
              color="text.primary"
              gutterBottom
              fontWeight="bold"
            >
              Building Lives
              <br />
              And Excellence
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Our company is dedicated to providing high-quality mechanical and
              electrical products that meet the diverse needs of our clients.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" size="large" sx={{
                bgcolor:"#1C4B84"
              }}>
                SHOP NOW
              </Button>
              <Button
                sx={{
                 color:"#1C4B84",
                 border: "1px solid #1C4B84"
                }}
                variant="outlined"
                size="large"
                endIcon={<ArrowForwardIcon sx={{
                  color:"#1C4B84"
                }} />}
                
              >
                VIEW PRODUCT
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            {/*@ts-ignore*/}
          <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} showDots={false} arrows={false} 
          
          > 

              {images.map((obj,index)=>(
                <Card
                key={index}
                sx={{ maxWidth: 400, mx: "auto", backgroundColor: "transparent" }}>
                  <Image
                  src={obj.url}
                  alt="Product Image"
                  width={400}
                  height={300}
                  objectFit="fit"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {obj.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {obj.description}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Best Price
                    </Typography>
                    {/* <Typography variant="h4" color="primary" fontWeight="bold">
                      $30.00
                    </Typography> */}
                  </CardContent>
                  </Card>
              )                
              )}
              </Carousel>
              {/* <CardMedia
              
                component="img"
                height="300"
                image={images[currentImageIndex]}
                alt="Product Image"
                sx={{ objectFit: "fit", backgroundPositionY: 20,
                  background: 'transpareny'
                 }}
              /> */}
              
           
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4, mb: 4 }}>
          {[
            {
              icon: <MoneyIcon sx={{ fontSize: 40, color: "#1C4B84" }} />,
              title: "Big Cashback",
              description: "Over 40% Cashback",
            },
            {
              icon: <LocalShippingIcon sx={{ fontSize: 40, color: "#1C4B84" }} />,
              title: "Fast Shipping",
              description: "Order Over  ₹5000",
            },
            {
              icon: <PaymentsIcon sx={{ fontSize: 40, color: "#1C4B84" }} />,
              title: "Quick Payment",
              description: "100% Secure",
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  p: 3,
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ color: "primary.main" }}>{feature.icon}</Box>
                  <Box>
                    <Typography variant="h6" component="h3">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
