'use client'

import React, { useEffect, useRef, useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/system';

// const HeroContainer = styled(Box)(({ theme }) => ({
// //   minHeight: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   textAlign: 'center',
// //   backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url(${process.env.NEXT_PUBLIC_VERCEL_URL}/A28nM.png)`,
// backgroundImage: 'url(/Image3.jpg)',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// //   padding: theme.spacing(10),
// paddingBlock: "100px"
// }));



const ReadMoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#0088cc',
  color: 'white',
  '&:hover': {
    backgroundColor: '#006699',
  },
  alignContent:'center',
  borderRadius: '999999px',
  padding: theme.spacing(1.5, 4),
}));

interface StatProps {
  end: number;
  suffix?: string;
  label: string;
}

const AnimatedStat: React.FC<StatProps> = ({ end, suffix = "", label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) /2000; // 2 seconds duration

      if (progress < 1) {
        setCount(Math.min(Math.floor(end * progress), end));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end]);

  return (
    <Box ref={ref} textAlign="center">
      <Typography variant="h3" component="div" fontWeight="bold" color="#0088cc">
        {count}{suffix}
      </Typography>
      <Typography variant="body1" color="white">
        {label}
      </Typography>
    </Box>
  );
};

const WhyChooseUs: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
            height: { xs: "50vh", sm: "60vh", md: "70vh" },
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transition: "background-size 0.5s ease",
            position: "relative",
            objectFit: "cover",
            maxHeight: "1500px",
            backgroundImage: `url(/Image3.jpg)`,
            backgroundPositionY: -70, 
            // "&::before": {
            //   content: '""',
            //   position: "absolute",
            //   top: 0,
            //   left: 0,
            //   right: 0,
            //   bottom: 0,
            //   // backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
            // //   background:
            //     // "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))", // Gradient overlay
  
            //   zIndex: 1, // Ensure the overlay is above the background image
            // },
          }}>
        <Container maxWidth="lg">
        <Box mb={4}>
          <Typography variant="h6" component="h2" color="white" gutterBottom textAlign="center">
            WHO WE ARE
          </Typography>
          <Typography variant={isMobile ? 'h3' : 'h2'} component="h1" fontWeight="bold" color="white" gutterBottom textAlign="center">
            WHY CHOOSE INDUSTRIAL VENTURES
          </Typography>
          <Typography variant="body1" color="white" textAlign="center">
            As a manufacturer of submersible sewage pumps and agitators, after years of development, 
            it has now formed the mass production capacity of pump products, complete sets of special 
            water treatment machinery and equipment, mining equipment and high and low voltage electronic 
            control products, and can produce more than 70% of the equipment for sewage treatment plants 
            and pumping stations by itself.
          </Typography>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <ReadMoreButton variant="contained" size="large">
            Read More
          </ReadMoreButton>
          </Box>
          
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={6} md={3}>
            <AnimatedStat end={140} label="National Patent" />
          </Grid>
          <Grid item xs={6} md={3}>
            <AnimatedStat end={40} suffix="+" label="Country and economic sector" />
          </Grid>
          <Grid item xs={6} md={3}>
            <AnimatedStat end={1600} suffix=" KW" label="The world's largest mixed flow pump" />
          </Grid>
          <Grid item xs={6} md={3}>
            <AnimatedStat end={35} suffix="+" label="Export Area" />
          </Grid>
        </Grid>
      </Container>
        </Box>
      
    
  );
};

export default WhyChooseUs;

