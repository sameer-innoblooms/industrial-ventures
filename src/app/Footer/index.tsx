'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Box, Container, Grid, Typography, Stack, IconButton, styled } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}))

const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#2b2b2b',
  color: '#fff',
  padding: theme.spacing(4, 0),
}))

const FooterBottom = styled(Box)(({ theme }) => ({
  // borderTop: '1px solid rgba(255, 255, 255, 0.53)',
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(2),
  color: '#888',
}))

export default function Footer() {
  const menuItems = {
    PRODUCTS: ['Industrial Pumps', 'Sewage Treatment Equipment', 'Electric Appliance Control Equipment'],
    PROJECTS: ['Municipal Project', 'Subway, Airport', 'Water Conservancy'],
    NEWS: ['Company News', 'Industry News'],
    ABOUT: ['Company Profile', 'Development History', 'Contact'],
  }

  return (
    <FooterSection>
      <Container maxWidth="xl" sx={{
      }}>
        <Grid container spacing={2} justifyContent="center" sx={{
          paddingInline: 10
        }}>
          {/* Logo and Contact Section */}
          <Grid item xs={12} md={3} sx={{
          }}>
            <Stack spacing={2}>
              <Image
                src="/Innoblooms.png"
                alt="Lanshen Group"
                width={200}
                height={60}
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <Typography variant="body2">
                Email: trade@industrialventures.com
              </Typography>
              <Typography variant="body2">
                Address: C-47(SH-120), Sector 63 A, Noida, Chotpur, Uttar Pradesh 201301
              </Typography>
              <Box>
                <IconButton color="inherit" aria-label="Facebook">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn">
                  <LinkedInIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Twitter">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Pinterest">
                  <PinterestIcon />
                </IconButton>
              </Box>
            </Stack>
          </Grid>

          {/* Menu Sections */}
          {Object.entries(menuItems).map(([category, items]) => (
            <Grid item xs={6} md={2} key={category}
            sx={{  
            }}
            >
              <Typography variant="h6" gutterBottom>
                {category}
              </Typography>
              <Stack spacing={1}>
                {items.map((item) => (
                  <FooterLink href="#" key={item}>
                    <Typography variant="body2">
                      {item}
                    </Typography>
                  </FooterLink>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Section */}
        
        <FooterBottom sx={{
          
        }}>
          <Box sx={{
                display: 'block',
                mx: "auto",  
                mb: 2,
                width: "80%",
                height: '.5px',
                backgroundColor: 'rgba(255, 255, 255, 0.51)',
              
              }}/>
          <Grid container 
          // justifyContent="space-between"
          justifyContent="center"
          alignItems="center">
            <Grid item>
              
              <Typography variant="body2">
                Copyright©2024 Industrial Ventures All rights reserved.
              </Typography>
            </Grid>
            {/* <Grid item>
              <Typography variant="body2">
                Business License 苏ICP备17050687号-1
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Powered by: www.300.cn
              </Typography>
            </Grid> */}
          </Grid>
        </FooterBottom>
        
        
      </Container>
    </FooterSection>
  )
}

