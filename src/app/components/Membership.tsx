"use client";
import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import Animation from "./AnimationUp";
import theme from "../theme";

// const MembershipSection = styled(Box)({
//   backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-20%20145725-9152K2NcMWinfcd4KKX4NbxgJrG4pn.png')`,
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   padding: "80px 20px",
//   position: "relative",
//   textAlign: "center",
//   color: "white",
//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(0, 0, 0, 0.6)",
//   },
// })

// const ContentWrapper = styled(Box)({
//   position: "relative",
//   maxWidth: 800,
//   margin: "0 auto",
// })

export default function Membership() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={theme}>
      {isMobile?(
             
              <Box
                sx={{
                  backgroundImage: `url(/Image1.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  padding: "80px 20px",
                  position: "relative",
                  textAlign: "center",
                  color: "white",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    maxWidth: 800,
                    margin: "0 auto",
                  }}
                >
                  <Typography variant="subtitle1" sx={{ color: "white", mb: 2 }}>
                    Our Company
                  </Typography>
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{ mb: 3, fontWeight: "bold" }}
                  >
                    Get 50% Discount by Becoming a Member
                  </Typography>
                  <Typography sx={{ mb: 4 }}>
                    The best deal in market, book your membership now and get 50%
                    discount on all products.
                  </Typography>
                  <Button
                    href="/contact"
                    variant="contained"
                    sx={{
                      backgroundColor: "white",
                      color: "primary.main",
      
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                      },
                    }}
                  >
                    JOIN US
                  </Button>
                </Box>
              </Box>
        
      ):(
        <Animation>
        <Box
          sx={{
            backgroundImage: `url(/Image1.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "80px 20px",
            position: "relative",
            textAlign: "center",
            color: "white",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "white", mb: 2 }}>
              Our Company
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{ mb: 3, fontWeight: "bold" }}
            >
              Get 50% Discount by Becoming a Member
            </Typography>
            <Typography sx={{ mb: 4 }}>
              The best deal in market, book your membership now and get 50%
              discount on all products.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "primary.main",

                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              JOIN US
            </Button>
          </Box>
        </Box>
      </Animation>
      )}
    </ThemeProvider>
  );
}
