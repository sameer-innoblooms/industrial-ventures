"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Image from "next/image";
import { ThemeProvider } from "@emotion/react";
import theme from "@/app/theme";
import Clients from "@/app/components/Clients";
import Membership from "@/app/components/Membership";
import { useEffect, useRef, useState } from "react";
import AnimationUp from "@/app/components/AnimationUp";
import Footer from "@/app/Footer";

export default function AboutSection() {
  const features = [
    { text: "International Brands" },
    { text: "Have heen certified" },
    { text: "Quality of our research" },
    { text: "Genuine Products" },
    { text: "Trustworthy" },
    { text: "High integrity" },
    { text: "Providing The best product" },
    { text: "Global reach of our business" },
  ];

  interface StatProps {
    end: number
    suffix?: string
    label: string
  }

  const AnimatedStat: React.FC<StatProps> = ({ end, suffix = "", label }) => {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        },
        { threshold: 0.1 },
      )
  
      if (ref.current) {
        observer.observe(ref.current)
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      }
    }, [])
  
    useEffect(() => {
      if (!isVisible) return
  
      let startTime: number | null = null
      let animationFrame: number
  
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = (timestamp - startTime) / 2000 // 2 seconds duration
  
        if (progress < 1) {
          setCount(Math.min(Math.floor(end * progress), end))
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
  
      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }, [isVisible, end])
  
    return (
      <Box ref={ref} textAlign="center">
        <Typography variant="h3" component="div" fontWeight="bold" color="text.primary">
          {count}
          <Box component="span" color="primary.main" fontSize="30px">
            {suffix}
          </Box>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
          }}
        >
          {label}
        </Typography>
      </Box>
    )
  }

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xl"));
  return (
    <>
    
    <ThemeProvider theme={theme}>
        {isMobile? (
              
              <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={5}>
                    <Box sx={{
                      display: "flex",
                    }}>
                      <Box
                      sx={{
                        bgcolor: "#f5f5f5",
                        p: 4,
                        textAlign: "center",
                        borderRadius: 1,
                        mb: 2,
                        
                      }}
                    >
                      {/* <Typography
                        variant="h2"
                        component="div"
                        sx={{
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 0.5,
                          color: "text.primary",
                        }}
                      >
                        10
                        <Typography
                          component="span"
                          variant="h2"
                          color="primary"
                          sx={{ fontWeight: "bold" }}
                        >
                          +
                        </Typography>
                      </Typography> */}
                      <AnimatedStat end={10} suffix="+" label="Years of Experience" />
                      {/* <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        sx={{ mt: 1 }}
                      >
                        Years Experience
                      </Typography> */}
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                        width: {xs: "100%",sm: "100%", md: "100%"},
                        height: "200px",
                        mb: 2,
                        ml:2,
                       
                      }}
                    >
                      {/*
                      const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Image
      src="/Image1.jpg"
      alt="Electrical supplies"
      width={isXsScreen ? 150 : 215}
      height={200}
    />
  );
                      */}
                        
                      <Image
                        objectPosition="relative"
                        src="/Image1.jpg"
                        alt="Electrical supplies"
                        
                        // style={{ objectFit: "cover" }}
                        // width={ 215}
                        // height={200}
                        fill
                      />
                    </Box>
                    </Box>
                    <Box
                      sx={{ position: "relative", width: "100%", height: "300px" }}
                    >
                      <Image
                        src="/Contact.png"
                        alt="Electrician working"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                  </Grid>
      
                  <Grid item xs={12} md={7}>
                    <Typography
                      variant="h5"
                      color="primary"
                      gutterBottom
                      sx={{ fontWeight: "bold" }}
                    >
                      About Us
                    </Typography>
                    <Typography
                      variant="h3"
                      component="h1"
                      gutterBottom
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "2rem", md: "2.5rem" },
                        color: "text.primary",
                      }}
                    >
                      We Are Best Electrical Store in Town Since 2010
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      paragraph
                      sx={{ mb: 4 }}
                    >
                      Our company is dedicated to providing high quality mechanical and electrical products that meet the diverse needs of our clients.
                    </Typography>
      
                    <Grid container spacing={2}>
                      {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <ListItem
                            disableGutters
                            sx={{
                              px: 0,
                              py: 0.5,
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: 40 }}>
                              <CheckCircleOutlineIcon
                                sx={{
                                  color: "primary.main",
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={feature.text}
                              primaryTypographyProps={{
                                sx: {
                                  fontSize: "1rem",
                                  color: "#333",
                                },
                              }}
                            />
                          </ListItem>
                        </Grid>
                      ))}
                    </Grid>
      
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        mt: 4,
                        px: 4,
                        py: 1.5,
                        bgcolor: "priamry.main",
                        "&:hover": {
                          bgcolor: "primary.main",
                          transform: "scale(1.02)",
                          transition: "all 0.2s ease-in-out",
                        },
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      About Us
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            
        ): (
          <AnimationUp>
          <Container maxWidth="lg" sx={{ py: 8 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={5}>
                <Box sx={{
                  display: "flex",
                }}>
                  <Box
                  sx={{
                    bgcolor: "#f5f5f5",
                    p: 4,
                    textAlign: "center",
                    borderRadius: 1,
                    mb: 2,
                    
                  }}
                >
                  {/* <Typography
                    variant="h2"
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 0.5,
                      color: "text.primary",
                    }}
                  >
                    10
                    <Typography
                      component="span"
                      variant="h2"
                      color="primary"
                      sx={{ fontWeight: "bold" }}
                    >
                      +
                    </Typography>
                  </Typography> */}
                  <AnimatedStat end={10} suffix="+" label="Years of Experience" />
                  {/* <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    Years Experience
                  </Typography> */}
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "200px",
                    mb: 2,
                    ml:2,
                  }}
                >
                  <Image
                    src="/Image1.jpg"
                    alt="Electrical supplies"
                    
                    // style={{ objectFit: "cover" }}
                    // width={300}
                    // height={200}
                    fill
                  />
                </Box>
                </Box>
                <Box
                  sx={{ position: "relative", width: "100%", height: "300px" }}
                >
                  <Image
                    src="/Contact.png"
                    alt="Electrician working"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>
  
              <Grid item xs={12} md={7}>
                <Typography
                  variant="h5"
                  color="primary"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  About Us
                </Typography>
                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    color: "text.primary",
                  }}
                >
                  We Are Best Electrical Store in Town Since 2010
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  paragraph
                  sx={{ mb: 4 }}
                >
                  Our company is dedicated to providing high quality mechanical and electrical products that meet the diverse needs of our clients.
                </Typography>
  
                <Grid container spacing={2}>
                  {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <ListItem
                        disableGutters
                        sx={{
                          px: 0,
                          py: 0.5,
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <CheckCircleOutlineIcon
                            sx={{
                              color: "primary.main",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature.text}
                          primaryTypographyProps={{
                            sx: {
                              fontSize: "1rem",
                              color: "#333",
                            },
                          }}
                        />
                      </ListItem>
                    </Grid>
                  ))}
                </Grid>
  
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 4,
                    px: 4,
                    py: 1.5,
                    bgcolor: "priamry.main",
                    "&:hover": {
                      bgcolor: "primary.main",
                      transform: "scale(1.02)",
                      transition: "all 0.2s ease-in-out",
                    },
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  About Us
                </Button>
              </Grid>
            </Grid>
          </Container>
          </AnimationUp>
        )}
      </ThemeProvider>


      <Membership />
      <Clients />
      {/* <Footer/> */}
    </>
  );
}
