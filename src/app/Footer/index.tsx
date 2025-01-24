"use client"

import Image from "next/image"
import Link from "next/link"
import { Box, Container, Grid, Typography, IconButton, Stack } from "@mui/material"
import { Facebook, Twitter, Instagram, YouTube, Phone, Email, LocationOn } from "@mui/icons-material"
import { ThemeProvider } from "@emotion/react"
import theme from "../theme"

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
          <Box sx={{ bgcolor: "black", color: "white", py: 6  }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Useful Links
            </Typography>
            <Stack spacing={1} sx={{
            }}>
              <Link href="#" style={{ color: 'white',  textDecoration: "none" }}>
                Privacy Policy
              </Link>
              <Link href="#" style={{ color: 'white', textDecoration: "none" }}>
                Terms and Conditions
              </Link>
              <Link href="#" style={{ color: 'white', textDecoration: "none" }}>
                Disclaimer
              </Link>
              <Link href="#" style={{ color: 'white', textDecoration: "none" }}>
                Support
              </Link>
              <Link href="#" style={{ color: 'white', textDecoration: "none" }}>
                FAQ
              </Link>
            </Stack>
          </Grid>

          {/* Center Column */}
          <Grid item xs={12} md={6} sx={{ textAlign: "center",  p: 2, borderRadius: 2 }}>
            <Box sx={{ mb:2, display:'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                src="/Logo.png"
                alt="Ezectric Logo"
                width={100}
                height={80}
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <Typography variant="h4" color="white">
                Industrial Ventures
              </Typography>
            </Box>
            <Typography sx={{ mb: 3, maxWidth: 400, mx: "auto" }}>
            Our company is dedicated to providing high-quality mechanical and electrical products that meet the diverse needs of our clients.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <IconButton color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="YouTube">
                <YouTube />
              </IconButton>
            </Stack>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={3} sx={{
          }}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'right' }}>
              Quick Links
            </Typography>
            <Stack spacing={1} textAlign='right'>
              <Link href="#" style={{ color: "white", textDecoration: "none" }}>
                About Us
              </Link>
              <Link href="#" style={{ color: "white", textDecoration: "none" }}>
                Product
              </Link>
              <Link href="#" style={{ color: "white", textDecoration: "none" }}>
                Blog
              </Link>
              {/* <Link href="#/faq" style={{ color: "white", textDecoration: "none" }}>
                FAQ
              </Link> */}
              <Link href="#" style={{ color: "white", textDecoration: "none" }}>
                Contact
              </Link>
            </Stack>
          </Grid>
        </Grid>

        {/* Contact Information */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap" }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <LocationOn />
            <Typography width={200}>Fourth Floor 5227, Nigam Market G.B Road, Ajmeri Gate, Delhi-110006</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Email />
            <Typography>industrialventures21@gmail.com</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Phone />
            <Typography>(+91) 8272833134</Typography>
          </Stack>
        </Box>
        <Box
        sx={{
          mt: 4,
          height:'1px',
          width: '100%',
          bgcolor: 'rgb(109, 109, 109)',
          alignContent: 'center',
          alignSelf: 'center',
          justifySelf:'center'
        }}
        />

        {/* Copyright */}
        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
          <Typography variant="body2">Industrial Ventures Company</Typography>
          <Typography variant="body2">Copyright © 2024. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
    </ThemeProvider>

  )
}

