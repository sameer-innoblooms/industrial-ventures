// 'use client'

// import { useState } from 'react'
// import Slider from 'react-slick'
// import { Box, Typography, Container } from '@mui/material'
// import { styled } from '@mui/material/styles'
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// const StyledSlider = styled(Slider)(({ theme }) => ({
//   '& .slick-dots': {
//     bottom: '-50px',
//     '& li': {
//       margin: '0 4px',
//     },
//     '& li button:before': {
//       fontSize: '8px',
//       color: '#ddd',
//       opacity: 1,
//     },
//     '& li.slick-active button:before': {
//       color: theme.palette.primary.main,
//       opacity: 1,
//     },
//   },
// }))

// const NewsContainer = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(8, 0, 12),
//   background: `
//     linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)),
//     url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23f0f0f0'/%3E%3C/svg%3E")
//   `,
//   backgroundSize: '20px 20px',
//   position: 'relative',
// }))

// const TitleUnderline = styled('div')({
//   width: '40px',
//   height: '3px',
//   backgroundColor: '#1976d2',
//   margin: '16px auto 48px',
// })

// const NewsCard = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   maxWidth: '900px',
//   margin: '0 auto',
//   '& img': {
//     width: '100%',
//     height: 'auto',
//     marginBottom: theme.spacing(3),
//   },
// }))

// const LearnMoreLink = styled(Typography)({
//   color: '#666',
//   fontSize: '14px',
//   cursor: 'pointer',
//   display: 'inline-flex',
//   alignItems: 'center',
//   '&:hover': {
//     color: '#1976d2',
//   },
// })

// const newsItems = [
//   {
//     title: 'Submersible sewage pumps are widely used',
//     description: 'Submersible sewage pumps are suitable for chemical, petroleum, pharmaceutical, mining, paper industry, cement plants, steel plants...',
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20144104-LlXNgd2Hh78KzxuYSyDzTd9WydPZRW.png',
//   },
//   {
//     title: 'Method for removing scale of stainless steel submersible pump',
//     description: 'Stainless steel submersible pumps can cause scale formation after a long time of use, especially for submersible pumps used in some po...',
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20144104-LlXNgd2Hh78KzxuYSyDzTd9WydPZRW.png',
//   },
//   {
//     title: 'Frequent starting of submersible pumps is not a good phenomenon',
//     description: 'The equipment always starts frequently. If there is no other reason, it is easy for us to think that someone is playing a prank, but sometim...',
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-14%20144104-LlXNgd2Hh78KzxuYSyDzTd9WydPZRW.png',
//   },
// ]

// export default function NewsCarousel() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: false,
//   }

//   return (
//     <NewsContainer>
//       <Container maxWidth="lg">
//         <Typography
//           variant="h2"
//           component="h1"
//           align="center"
//           sx={{
//             fontSize: '42px',
//             fontWeight: 500,
//             color: '#333',
//           }}
//         >
//           NEWS
//         </Typography>
//         <TitleUnderline />
        
//         <StyledSlider {...settings}>
//           {newsItems.map((item, index) => (
//             <NewsCard key={index}>
//               <Box
//                 component="img"
//                 src={item.image}
//                 alt={item.title}
//                 sx={{
//                   width: '100%',
//                   height: 'auto',
//                   maxHeight: '400px',
//                   objectFit: 'cover',
//                 }}
//               />
//               <Typography
//                 variant="h5"
//                 component="h2"
//                 sx={{
//                   fontSize: '20px',
//                   fontWeight: 500,
//                   color: '#333',
//                   mb: 1.5,
//                 }}
//               >
//                 {item.title}
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   color: '#666',
//                   mb: 2,
//                   fontSize: '15px',
//                   lineHeight: 1.6,
//                 }}
//               >
//                 {item.description}
//               </Typography>
//               <LearnMoreLink variant="button">
//                 LEARN MORE →
//               </LearnMoreLink>
//             </NewsCard>
//           ))}
//         </StyledSlider>
//       </Container>
//     </NewsContainer>
//   )
// }


'use client'

import { useState } from 'react'
import Slider from 'react-slick'
import { Box, Typography, Button, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from 'next/image'

const StyledSlider = styled(Slider)(({ theme }) => ({
  '.slick-dots': {
    bottom: '-40px',
    '& li': {
      margin: '0 3px',
    },
    '& li button:before': {
      fontSize: '12px',
      color: '#ccc',
    },
    '& li.slick-active button:before': {
      color: theme.palette.primary.main,
    },
  },
}))

// const BackgroundPattern = styled(Box)({
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   // backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23f0f0f0'/%3E%3C/svg%3E")`,
//   opacity: 0.3,
//   zIndex: -1,
// })

const NewsCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  '& img': {
    width: '100%',
    height: '100%',
    marginBottom: theme.spacing(2),
  },
}))

const newsItems = [
  {
    id: 1,
    image: "/Image1.jpg",
    title: "Submersible sewage pumps are widely used",
    description: "Submersible sewage pumps are suitable for chemical, petroleum, pharmaceutical, mining, paper industry, cement plants, steel plants...",
  },
  {
    id: 2,
    image: "/Image2.jpg",
    title: "Method for removing scale of stainless steel submersible pump",
    description: "Stainless steel submersible pumps can cause scale formation after a long time of use, especially for submersible pumps used in some po...",
  },
  {
    id: 3,
    image: "/Image3.jpg",
    title: "Frequent starting of submersible pumps is not a good phenomenon",
    description: "The equipment always starts frequently. If there is no other reason, it is easy for us to think that someone is playing a prank, but sometim...",
  },
  {
    id: 4,
    image: "/Image1.jpg",
    title: "Submersible sewage pumps are widely used",
    description: "Submersible sewage pumps are suitable for chemical, petroleum, pharmaceutical, mining, paper industry, cement plants, steel plants...",
  },
  {
    id: 5,
    image: "/Image2.jpg",
    title: "Method for removing scale of stainless steel submersible pump",
    description: "Stainless steel submersible pumps can cause scale formation after a long time of use, especially for submersible pumps used in some po...",
  },
  {
    id: 6,
    image: "/Image3.jpg",
    title: "Frequent starting of submersible pumps is not a good phenomenon",
    description: "The equipment always starts frequently. If there is no other reason, it is easy for us to think that someone is playing a prank, but sometim...",
  },
  {
    id: 7,
    image: "/Image1.jpg",
    title: "Submersible sewage pumps are widely used",
    description: "Submersible sewage pumps are suitable for chemical, petroleum, pharmaceutical, mining, paper industry, cement plants, steel plants...",
  },
  {
    id: 8,
    image: "/Image2.jpg",
    title: "Method for removing scale of stainless steel submersible pump",
    description: "Stainless steel submersible pumps can cause scale formation after a long time of use, especially for submersible pumps used in some po...",
  },
  {
    id: 9,
    image: "/Image3.jpg",
    title: "Frequent starting of submersible pumps is not a good phenomenon",
    description: "The equipment always starts frequently. If there is no other reason, it is easy for us to think that someone is playing a prank, but sometim...",
  },
]

export default function NewsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (current: number) => setCurrentSlide(current),
  }

  return (
    <Box sx={{ position: 'relative', py: 8 }}>
      
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          sx={{ mb: 6, fontWeight: 'bold' }}
        >
          NEWS
        </Typography>
        
        <StyledSlider {...settings}>
          {newsItems.map((item) => (
              <Box key={item.id} sx={{
                maxWidth: "300px"
              }}>
                <Image src={item.image} alt={item.title}

                height={400}
                width={400}
                />
              <Typography
                variant="h5"
                component="h2"
                sx={{ mb: 2, fontWeight: 'bold' }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                {item.description}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                sx={{ 
                  borderRadius: 0,
                  px: 3,
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                  }
                }}
              >
                LEARN MORE
              </Button>
              </Box>
              
          ))}
        </StyledSlider>
      </Container>
    </Box>
  )
}

