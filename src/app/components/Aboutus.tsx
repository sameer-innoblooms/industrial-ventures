"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Container from "@mui/material/Container"
import { Box, Grid, ThemeProvider, Typography } from "@mui/material"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import theme from "../theme"

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

const AnimatedHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 })
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ x: -500, opacity: 0 }}
      animate={controls}
      transition={{ duration:1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export default function Aboutus() {
  return (
    <>

    <ThemeProvider theme={theme}>
    <Container
        maxWidth="lg"
        sx={{
          p: 2,
          mt: 15,
          mb: 5,
        }}
      >
        <AnimatedHeading>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            About us
          </Typography>
        
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mt: 3,
            fontWeight: "bold",
            color: 'text.primary'
          }}
        >
          5000+ Clients Across The Country
        </Typography>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            mt: 4,
          }}
        >
          <Grid item xs={6} md={3}>
            <AnimatedStat end={789} suffix="+" label="Happy Customers" />
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            sx={{
              color: "black",
            }}
          >
            <AnimatedStat end={20} suffix="+" label="Branch Store" />
          </Grid>
          <Grid item xs={6} md={3}>
            <AnimatedStat end={899} suffix="+" label="Our Products" />
          </Grid>
        </Grid>
        </AnimatedHeading>
      </Container>
    </ThemeProvider>

    </>
  )
}

