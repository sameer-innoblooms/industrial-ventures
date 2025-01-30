"use client"

import Image from "next/image"
import Link from "next/link"
import { Box, Container, Grid, Typography, IconButton, Stack, useMediaQuery } from "@mui/material"
import { Facebook, Twitter, Instagram, YouTube, Phone, Email, LocationOn, LinkedIn } from "@mui/icons-material"
import { ThemeProvider } from "@emotion/react"
import theme from "../theme"

export default function Footer() {

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
        {isMobile ? (
      <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "black", color: "white", py: 6 }}>
         <Container maxWidth="lg">
            <Grid container spacing={4} sx={{ textAlign: "center" }}>
               
               {/* Center Section (Always on Top) */}
               <Grid item xs={12} md={12} sx={{ order: { xs: 1, md: 0 } }}>
                  <Box sx={{ mb: 2 }}>
                     <Link href="/">
                        <Image
                           src="/Logo.png"
                           alt="Ezectric Logo"
                           width={100}
                           height={80}
                           style={{ filter: "brightness(0) invert(1)", marginLeft: 5,  }}
                        />
                        <Typography variant="h4" color="white">
                           Industrial Ventures
                        </Typography>
                     </Link>
                  </Box>
                  <Typography sx={{ mb: 3, maxWidth: 400, mx: "auto" }}>
                     Our company is dedicated to providing high-quality
                     mechanical and electrical products that meet the diverse
                     needs of our clients.
                  </Typography>
                  <Stack direction="row" spacing={2} justifyContent="center">
                     <Link href="https://www.facebook.com/people/Innoblooms-Info-Services-Pvt-Ltd/100095194770163/" target="_blank">
                     
                     <IconButton  aria-label="Facebook"sx={{
                        color: 'white'
                     }}>
                        <Facebook  />
                     </IconButton>
                     </Link>
                     <Link href="https://x.com/services21256" target="_blank">
                     <IconButton  aria-label="Twitter" 
                     sx={{
                        color: 'white'
                     }}
                     >
                        <Twitter />
                     </IconButton>
                     </Link>
                     <Link href="https://www.instagram.com/innoblooms_info/" target="_blank">
                     
                     <IconButton  aria-label="Instagram" sx={{
                        color: 'white'
                     }}>
                        <Instagram />
                     </IconButton>
                     </Link>
                     <Link href="https://in.linkedin.com/company/innoblooms-info-services-pvt-ltd" target="_blank">
                     <IconButton  aria-label="YouTube" sx={{
                        color: 'white'
                     }}>
                        <LinkedIn />
                     </IconButton>
                     </Link>
                     
                  </Stack>
               </Grid>

               {/* Left & Right Sections (Side by Side in Desktop, Stacked in Mobile) */}
               <Grid 
                  container 
                  item 
                  xs={12} 
                  md={12} 
                  spacing={0} 
                  sx={{ order: { xs: 2, md: 1 }, display: "grid", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", gridTemplateColumns: "1fr 1fr" }}
               >
                  {/* Left Section */}
                  <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" }, height: "50px",
                  //  border: '1px solid white'
                    }}>
                     <Typography variant="h6" sx={{ mb: 2 }}>
                        Useful Links
                     </Typography>
                     <Stack spacing={1}>
                        <Link href="#" style={{ color: "white", textDecoration: "none" }}>Privacy Policy</Link>
                        <Link href="#" style={{ color: "white", textDecoration: "none" }}>Terms and Conditions</Link>
                        <Link href="#" style={{ color: "white", textDecoration: "none" }}>Disclaimer</Link>
                        {/* <Link href="#" style={{ color: "white", textDecoration: "none" }}>Support</Link> */}
                        {/* <Link href="#" style={{ color: "white", textDecoration: "none" }}>FAQ</Link> */}
                     </Stack>
                  </Grid>

                  {/* Right Section */}
                  <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "right" }, 
                  // border: '1px solid pink'
                   }}>
                     <Typography variant="h6" sx={{ mb: 2 }}>
                        Quick Links
                     </Typography>
                     <Stack spacing={1}>
                        <Link href="/about" style={{ color: "white", textDecoration: "none" }}>About Us</Link>
                        <Link href="/product" style={{ color: "white", textDecoration: "none" }}>Product</Link>
                        <Link href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
                     </Stack>
                  </Grid>
               </Grid>
            </Grid>

            {/* Contact Information */}
            <Box
               sx={{
                  mt: 5,
                  display: {xs: "flex", sm: "grid", },
                  justifyContent: "center",
                  gap: 2,
                  flexWrap: "wrap",
                  gridTemplateColumns: "1fr 1fr 1fr",
               }}
            >
               <Stack direction="row" alignItems="center" spacing={1} component="a" href="https://www.google.com/maps/place/Innoblooms:+Website+Designing+%7C+Web+Development+%7C+Digital+Marketing+%7C+Software+Development/@28.6227474,77.3932646,17z/data=!3m1!4b1!4m22!1m15!4m14!1m6!1m2!1s0x390cef34aad0c8e5:0xac55a4bbdbb9f0f1!2sInnoblooms:+Website+Designing+%7C+Web+Development+%7C+Digital+Marketing+%7C+Software+Development,+Sector+63+A,+Noida,+Uttar+Pradesh!2m2!1d77.3958306!2d28.622817!1m6!1m2!1s0x390cef34aad0c8e5:0xac55a4bbdbb9f0f1!2sC-47(SH-120,+Sector+63+A,+Noida,+Chotpur,+Uttar+Pradesh+201307!2m2!1d77.3958306!2d28.622817!3m5!1s0x390cef34aad0c8e5:0xac55a4bbdbb9f0f1!8m2!3d28.6227427!4d77.3958395!16s%2Fg%2F11w234mhjf?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" sx={{
            color: "white"
           }}>
           <LocationOn />
           <Typography width={200} >Fourth Floor 5227, Nigam Market G.B Road, Ajmeri Gate, Delhi-110006</Typography>
         </Stack>
         <Stack direction="row" alignItems="center" spacing={1} component="a" href="mailto:industrialventures21@gmail.com" sx={{
            color: 'white'
           }}>
           <Email />
           <Typography >industrialventures21@gmail.com</Typography>
         </Stack>
         <Stack direction="row" alignItems="center" spacing={1} component="a" href="tel: +91 8272833134" sx={{color: 'white'}}>
           <Phone />
           <Typography >(+91) 8272833134</Typography>
         </Stack>
            </Box>
            <Box
               sx={{
                  mt: 4,
                  height: "1px",
                  width: "100%",
                  bgcolor: "rgb(109, 109, 109)",
               }}
            />

            {/* Copyright */}
            <Box
               sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: { xs: "center", md: "space-between" },
                  flexWrap: "wrap",
                  gap: 2,
               }}
            >
               <Typography variant="body2">
                  Industrial Ventures Company
               </Typography>
               <Typography variant="body2">
                  Copyright © 2024. All rights reserved.
               </Typography>
            </Box>
         </Container>
      </Box>
   </ThemeProvider>

        ) : ( 
         <ThemeProvider theme={theme}>
         <Box sx={{ bgcolor: "black", color: "white", py: 6  }}>
     <Container maxWidth="lg">
       <Grid container spacing={4}>
         {/* Left Column */}
         <Grid item xs={12} md={3} sx={{  }}>
           <Typography variant="h6" sx={{ mb: 2, pt: 1 }}>
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
             {/* <Link href="#" style={{ color: 'white', textDecoration: "none" }}>
               Support
             </Link>
             <Link href="#" style={{ color: 'white', textDecoration: "none" }}>
               FAQ
             </Link> */}
           </Stack>
         </Grid>

         {/* Center Column */}
         <Grid item xs={12} md={6} sx={{ textAlign: "center",  p: 2, borderRadius: 2 }}>
           <Box sx={{ mb:2, display:'flex', justifyContent: 'center', alignItems: 'center' }}>
             <Link href="/">
             <Image

               src="/Logo.png"
               alt="Ezectric Logo"
               width={100}
               height={80}
               style={{ filter: "brightness(0) invert(1)" }}
             />
             <Typography variant="h4" color="white" sx={{
               
             }}>
               Industrial Ventures
             </Typography>
             </Link>
             
           </Box>
           <Typography sx={{ mb: 3, maxWidth: 400, mx: "auto" }}>
           Our company is dedicated to providing high-quality mechanical and electrical products that meet the diverse needs of our clients.
           </Typography>
           <Stack direction="row" spacing={2} justifyContent="center">
           <Link href="https://www.facebook.com/people/Innoblooms-Info-Services-Pvt-Ltd/100095194770163/" target="_blank">
                     
                     <IconButton  aria-label="Facebook"sx={{
                        color: 'white'
                     }}>
                        <Facebook  />
                     </IconButton>
                     </Link>
                     <Link href="https://x.com/services21256" target="_blank">
                     <IconButton  aria-label="Twitter" 
                     sx={{
                        color: 'white'
                     }}
                     >
                        <Twitter />
                     </IconButton>
                     </Link>
                     <Link href="https://www.instagram.com/innoblooms_info/" target="_blank">
                     
                     <IconButton  aria-label="Instagram" sx={{
                        color: 'white'
                     }}>
                        <Instagram />
                     </IconButton>
                     </Link>
                     <Link href="https://in.linkedin.com/company/innoblooms-info-services-pvt-ltd" target="_blank">
                     <IconButton  aria-label="YouTube" sx={{
                        color: 'white'
                     }}>
                        <LinkedIn />
                     </IconButton>
                     </Link>
           </Stack>
         </Grid>

         {/* Right Column */}
         <Grid item xs={12} md={3} sx={{

         }}>
           <Typography variant="h6" sx={{ mb: 2, textAlign: 'right', pt:1 }}>
             Quick Links
           </Typography>
           <Stack spacing={1} textAlign='right'>
             <Link href="/about" style={{ color: "white", textDecoration: "none" }}>
               About Us
             </Link>
             <Link href="/product" style={{ color: "white", textDecoration: "none" }}>
               Product
             </Link>
             {/* <Link href="#" style={{ color: "white", textDecoration: "none" }}>
               Blog
             </Link> */}
             {/* <Link href="#/faq" style={{ color: "white", textDecoration: "none" }}>
               FAQ
             </Link> */}
             <Link href="/contact" style={{ color: "white", textDecoration: "none" }}>
               Contact
             </Link>
           </Stack>
         </Grid>
       </Grid>

       {/* Contact Information */}
       <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap" }}>
         <Stack direction="row" alignItems="center" spacing={1} component="a" href="https://www.google.com/maps/place/Innoblooms:+Website+Designing+%7C+Web+Development+%7C+Digital+Marketing+%7C+Software+Development/@28.6227474,77.3932646,17z/data=!3m1!4b1!4m22!1m15!4m14!1m6!1m2!1s0x390cef34aad0c8e5:0xac55a4bbdbb9f0f1!2sInnoblooms:+Website+Designing+%7C+Web+Development+%7C+Digital+Marketing+%7C+Software+Development,+Sector+63+A,+Noida,+Uttar+Pradesh!2m2!1d77.3958306!2d28.622817!1m6!1m2!1s0x390cef34aad0c8e5:0xac55a4bbdbb9f0f1!2sC-47(SH-120,+Sector+63+A,+Noida,+Chotpur,+Uttar+Pradesh+201307!2m2!1d77.3958306!2d28.622817!3m5!1s0x390cef34aad0c8e5:0xac55a4bbdbb9f0f1!8m2!3d28.6227427!4d77.3958395!16s%2Fg%2F11w234mhjf?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" sx={{
            color: "white"
           }} >
           <LocationOn />
           <Typography width={200}   >Fourth Floor 5227, Nigam Market G.B Road, Ajmeri Gate, Delhi-110006</Typography>
         </Stack>
         <Stack direction="row" alignItems="center" spacing={1} component="a" href="mailto:industrialventures21@gmail.com" sx={{
            color: 'white'
           }}>
           <Email />
           <Typography >industrialventures21@gmail.com</Typography>
         </Stack>
         <Stack direction="row" alignItems="center" spacing={1}>
           <Phone />
           <Typography 
         //   component="a" href="tel: +91 8272833134" sx={{color: 'white'}}
           >(+91) 8272833134</Typography>
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
       <Box sx={{ mt: 2, display: "flex", justifyContent: {xs: "center", md: "space-between"}, flexWrap: "wrap", gap: 2 }}>
         <Typography variant="body2">Industrial Ventures Company</Typography>
         <Typography variant="body2">Copyright © 2024. All rights reserved.</Typography>
       </Box>
     </Container>
   </Box>
   </ThemeProvider>
      )}
    </>
  )
}

