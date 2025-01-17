'use client'

import { Box, Container, TextField, Button, Typography, ThemeProvider, createTheme } from '@mui/material'

// Create a custom theme with the blue color scheme
const theme = createTheme({
  palette: {
    primary: {
      main: '#0288d1',
    },
    background: {
      default: '#0288d1',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'white',
          },
          '& .MuiOutlinedInput-input': {
            color: 'white',
          },
        },
      },
    },
  },
})

export default function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission here
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: 'background.default',
          minHeight: '100vh',
          py: 8,
          color: 'white',
        }}
      >
        <Container maxWidth="sm">
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}
              >
                Talk to us, were on your side!
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  mb: 2,
                }}
              >
                We Welcome All
                <br />
                Types of Projects
                <br />
                Big or Small
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                If you are interested in our services, please feel free to send us an email and we will get in touch as soon as possible.
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr 1fr' }}>
              <TextField
                required
                label="First Name"
                variant="outlined"
                fullWidth
              />
              <TextField
                required
                label="Last Name"
                variant="outlined"
                fullWidth
              />
            </Box>

            <TextField
              required
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
            />

            <TextField
              required
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: '#0277bd',
                color: 'white',
                py: 1.5,
                '&:hover': {
                  bgcolor: '#0266a2',
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

