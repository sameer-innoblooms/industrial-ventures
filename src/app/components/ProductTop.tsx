"use client"
import { Box, Typography, useMediaQuery } from "@mui/material"
import { usePathname } from "next/navigation"
import React from "react"
import theme from "../theme"
import { Breadcrumb } from "./Breadcrumb"
import AnimationUp from "./AnimationUp"
import AnimationLeft from "./AnimationLeft"




export default function ProductTop() {
  const pathname = usePathname()

  // Function to return dynamic text based on the route
  const getDynamicText = () => {
    if (pathname === "/product") {
      return "Product"
    }
    if (pathname === "/about") {
      return "About Us"
    }
    if (pathname === "/contact") {
      return "Contact"
    }
    if (pathname === "/blog") {
      return "Blog"
    }
    return "Welcome"
  }


  

  // Function to generate breadcrumb items
  const getBreadcrumbItems = () => {
    const items = [{ label: "Home", href: "/" }]

    if (pathname !== "/") {
      items.push({
        label: getDynamicText(),
        href: pathname,
      })
    }

    return items
  }

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
    
      {isMobile ? (
     
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
          flexDirection: "column",
          height: { xs: "50vh", sm: "60vh", md: "30vh" },
          width: "100wh",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          transition: "background-size 0.5s ease",
          position: "relative",
          objectFit: "cover",
          maxHeight: "1500px",
          backgroundImage: `url(./Background.jpg)`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))",
            zIndex: 1,
          },
        }}
      >
        <Typography
          variant="h1"
          color="white"
          align="center"
          sx={{
            zIndex: 9,
            mb: 2,
            fontSize: { xs: "2.5rem", sm: "3rem", md: "5rem" },
          }}
        >
          {getDynamicText()}
        </Typography>
        <Box sx={{ zIndex: 9, mt: 2 }}>
          <Breadcrumb items={getBreadcrumbItems()} />
        </Box>
      </Box>
   
    ):(
      <AnimationUp>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
          flexDirection: "column",
          height: { xs: "50vh", sm: "60vh", md: "30vh" },
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          transition: "background-size 0.5s ease",
          position: "relative",
          objectFit: "cover",
          maxHeight: "1500px",
          backgroundImage: `url(./Background.jpg)`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))",
            zIndex: 1,
          },
        }}
      >
        <Typography
          variant="h1"
          color="white"
          align="center"
          sx={{
            zIndex: 9,
            mb: 2,
            fontSize: { xs: "2.5rem", sm: "3rem", md: "5rem" },
          }}
        >
          <AnimationLeft>{getDynamicText()}</AnimationLeft>
        </Typography>
        <Box sx={{ zIndex: 9, mt: 2 }}>
          <Breadcrumb items={getBreadcrumbItems()} />
        </Box>
      </Box>
    </AnimationUp>
    )}
    </>
   

  )
}

