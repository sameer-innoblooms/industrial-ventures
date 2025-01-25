"use client"

import { Box, Container, Typography, Grid, TextField, Button, IconButton, Stack } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import YouTubeIcon from "@mui/icons-material/YouTube"
import { ThemeProvider } from "@emotion/react"
import theme from "@/app/theme"
import Map from "@/app/components/Map"

export default function ContactForm() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission
  }

  return (
    <ThemeProvider theme={theme}>
            <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Got Any Questions?
          </Typography>
          <Typography variant="h3" component="h2" color="text.primary" gutterBottom sx={{ fontWeight: "bold" }}>
            Get In Touch
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            Contact us to get more info on the profucts and get the best deal in the market.
          </Typography>

          <Stack spacing={3} sx={{ mt: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", bgcolor: "#f8f9fa", p: 2, borderRadius: 1 }}>
              <LocationOnIcon color="primary" sx={{ mr: 2 }} />
              <Typography>Fourth Floor 5227, Nigam Market G.B Road, Ajmeri Gate, Delhi-110006</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", bgcolor: "#f8f9fa", p: 2, borderRadius: 1 }}>
              <PhoneIcon color="primary" sx={{ mr: 2 }} />
              <Typography>(+91) 8272833134</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", bgcolor: "#f8f9fa", p: 2, borderRadius: 1 }}>
              <EmailIcon color="primary" sx={{ mr: 2 }} />
              <Typography>industrialventures21@gmail.com</Typography>
            </Box>

            {/* <Box sx={{ display: "flex", alignItems: "center", bgcolor: "#f8f9fa", p: 2, borderRadius: 1 }}>
              <AccessTimeIcon color="primary" sx={{ mr: 2 }} />
              <Typography>Mon- Sat 8:00 AM - 9:00 PM</Typography>
            </Box> */}
          </Stack>

          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle2" gutterBottom>
              OUR SOCIAL MEDIA
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="primary" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary" aria-label="YouTube">
                <YouTubeIcon />
              </IconButton>
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: 4,
              bgcolor: "white",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Stack spacing={3}>
              <TextField fullWidth label="Name" variant="outlined" placeholder="Your Name" />
              <TextField fullWidth label="Email Address" variant="outlined" placeholder="email@yourmail.com" required />
              <TextField fullWidth label="Subject" variant="outlined" placeholder="Subject" />
              <TextField
                fullWidth
                label="Comments / Questions"
                variant="outlined"
                multiline
                rows={4}
                placeholder="Your Message"
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.main",
                    border: '2px solid white',
                    
                  },
                }}
              >
                SEND MESSAGE
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
    <Map/>
    </ThemeProvider>

  )
}

