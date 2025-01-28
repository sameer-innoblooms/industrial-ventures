"use client"

import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import { useEffect, useState } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import AnimationRight from "./AnimationRight"
import theme from "../theme"
import AnimationLeft from "./AnimationLeft"

const features = [
  { label: "Money Back Guarantee", value: 90 },
  { label: "Trusted Company", value: 94 },
]

const benefits = ["Many Brands", "Best Quality Product", "Commitment to Customers"]

const Animation: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 })
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ y: -50, opacity: 0 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

const ProgressWithLabel = ({ label, value }: { label: string; value: number }) => {
  const [progress, setProgress] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === value) {
            clearInterval(timer)
            return value
          }
          const diff = value - oldProgress
          return Math.min(oldProgress + Math.max(diff / 10, 1), value)
        })
      }, 50)

      return () => {
        clearInterval(timer)
      }
    }
  }, [inView, value])

  return (
    <Box sx={{ mb: 3 }} ref={ref}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          {label}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 500, color: "gray" }}>
          {Math.round(progress)}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          color: '#00000099',
          height: 8,
          borderRadius: 5,
          
          "& .MuiLinearProgress-bar": {
            background: "primary.main",
            transition: "transform 0.4s linear",
          },
        }}
      />
    </Box>
  )
}

export default function ChooseUs() {

  const isMobile = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <ThemeProvider theme={theme}>
       {isMobile ? (
              <Box sx={{ bgcolor: "#f8f9fa", py: 8 }}>
              <Container maxWidth="xl">

                  <Grid container spacing={4}>
                    
                    <Grid item xs={12} md={6}>
                  
                      <Box
                        sx={{
                          height: "100%",
                          minHeight: 400,
                          backgroundImage: `url(/Contact.png)`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          borderRadius: 2,
                        }}
                      />
                         
                    </Grid>
                
      
                    <Grid item xs={12} md={6} height="100%">
                  
                        <Typography
                          variant="h5"
                          
                          gutterBottom
                          sx={{
                            color: "primary.main",
                            fontWeight: "bold",
                          }}
                        >
                          Why Choose Us
                        </Typography>
                        <Typography variant="h4" component="h2" fontWeight="bold" color="text.primary" gutterBottom>
                          We Are Best Electrical and Mechanical Store in Town
                        </Typography>
                        <Typography color="text.secondary" paragraph>
                          We provide the best quality products at the best price. We have a wide range of products from many
                          brands. We are committed to providing the best service to our customers.
                        </Typography>
                 
                      <Box sx={{ bgcolor: "primary.main", p: 3, borderRadius: 2, color: "white", mb: 4 }}>
                        <VerifiedUserIcon sx={{ fontSize: 40, mb: 2 }} />
                        <Typography variant="h6" gutterBottom>
                          We Provide The Best Guarantee For You Loyal Customers
                        </Typography>
                      </Box>
      
                      <Box sx={{ mb: 4, color: '#00000099' }}>
                        {features.map((feature) => (
                          <ProgressWithLabel key={feature.label} label={feature.label} value={feature.value} />
                        ))}
                      </Box>
      
                      <List>
                        {benefits.map((benefit) => (
                          <ListItem key={benefit} disableGutters>
                            <ListItemIcon>
                              <CheckCircleIcon
                                sx={{
                                  color: "primary.main",
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText primary={benefit} />
                          </ListItem>
                        ))}
                      </List>
      
                      <Button variant="contained" size="large" sx={{ mt: 4, bgcolor: "primary.main" }}>
                        VISIT US
                      </Button>
                    </Grid>
                  </Grid>

              </Container>
            </Box>
       ):(
        <Box sx={{ bgcolor: "#f8f9fa", py: 8 }}>
        <Container maxWidth="xl">
          <Animation>
            <Grid container spacing={4}>
              
              <Grid item xs={12} md={6}>
            
                <Box
                  sx={{
                    height: "100%",
                    minHeight: 400,
                    backgroundImage: `url(/Contact.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 2,
                  }}
                />
                   
              </Grid>
          

              <Grid item xs={12} md={6}>
                <AnimationRight>
                  <Typography
                    variant="h5"
                    
                    gutterBottom
                    sx={{
                      color: "primary.main",
                      fontWeight: "bold",
                    }}
                  >
                    Why Choose Us
                  </Typography>
                  <Typography variant="h4" component="h2" fontWeight="bold" color="text.primary" gutterBottom>
                    We Are Best Electrical and Mechanical Store in Town
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    We provide the best quality products at the best price. We have a wide range of products from many
                    brands. We are committed to providing the best service to our customers.
                  </Typography>
                </AnimationRight>
                <Box sx={{ bgcolor: "primary.main", p: 3, borderRadius: 2, color: "white", mb: 4 }}>
                  <VerifiedUserIcon sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    We Provide The Best Guarantee For You Loyal Customers
                  </Typography>
                </Box>

                <Box sx={{ mb: 4, color: '#00000099' }}>
                  {features.map((feature) => (
                    <ProgressWithLabel key={feature.label} label={feature.label} value={feature.value} />
                  ))}
                </Box>

                <List>
                  {benefits.map((benefit) => (
                    <ListItem key={benefit} disableGutters>
                      <ListItemIcon>
                        <CheckCircleIcon
                          sx={{
                            color: "primary.main",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={benefit} />
                    </ListItem>
                  ))}
                </List>

                <Button variant="contained" size="large" sx={{ mt: 4, bgcolor: "primary.main" }}>
                  VISIT US
                </Button>
              </Grid>
            </Grid>
          </Animation>
        </Container>
      </Box>
       )}
    </ThemeProvider>
  )
}

