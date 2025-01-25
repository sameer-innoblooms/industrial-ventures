import { Box, Typography } from '@mui/material';
import React from 'react';
import { usePathname } from 'next/navigation';  // Import the hook
import AnimationUp from '../components/AnimationUp';
import AnimationLeft from '../components/AnimationLeft';

export default function ProductTop() {
  const pathname = usePathname();  // Get the current route

  // Function to return dynamic text based on the route
  const getDynamicText = () => {
    if (pathname === '/product') {
      return 'Product';
    }
    if (pathname === '/about') {
      return 'About Us';
    }
    if (pathname === '/contact') {
      return 'Contact';
    }
    if (pathname === '/blog') {
      return 'Blog';
    }
    return 'Welcome';  // Default text if no route matches
  };

  return (
    <AnimationUp>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
          flexDirection: "column",
          height: { xs: "50vh", sm: "60vh", md: "70vh" },
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          transition: "background-size 0.5s ease",
          position: "relative",
          objectFit: "cover",
          maxHeight: "1500px",
          backgroundImage: `url(/Store.jpg)`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))",
            zIndex: 1,
          },
        }}
      >
        <Typography
          variant="h1"
          color="white"
          align="center"
          sx={{
            zIndex: 100,
            mb: 2,
            fontSize: { xs: "2.5rem", sm: "3rem", md: "5rem" },
          }}
        >
          <AnimationLeft>
            {getDynamicText()}  {/* Dynamically set the text */}
          </AnimationLeft>
        </Typography>
      </Box>
    </AnimationUp>
  );
}
