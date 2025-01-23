"use client";

import { Container, Grid, Paper, Typography, Button, Box, ThemeProvider } from "@mui/material";
import Animation from "./AnimationUp";
import Image from "next/image";
import theme from "../theme";
import AnimationLeft from "./AnimationLeft";

const promotions = [
  {
    title: "New Years Sale",
    subtitle: "Up To 50% Off Sales",
    image: "/Ionizer.png",
    buttonColor: "#9dff00",
  },
  {
    title: "Black Friday Sale",
    subtitle: "Free Shipping For This Month",
    image: "/Cables.png",
    buttonColor: "#9dff00",
  },
];

export default function Promotions() {
  return (
    <ThemeProvider theme={theme}>
          <Container sx={{ py: 8, marginBlock: 4 }}>
      <Animation>
        <Grid container spacing={4}>
          {promotions.map((promo, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                sx={{
                  p: 4,
                  height: "100%",
                  bgcolor: "primary.main",
                  color: "white",
                  backgroundImage: `url(${promo.image})`,
                  backgroundSize: "45%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right center",
                }}
              >
                <Box sx={{ maxWidth: "60%" }}>
                  <Typography variant="h5" gutterBottom fontWeight="bold">
                    {promo.title}
                  </Typography>
                  <Typography variant="h6" paragraph>
                    {promo.subtitle}
                  </Typography>
                  
                  <Button
                    sx={{
                      color: "white",
                      fontSize: "1rem",
                      border: '1px white solid',
                      ":hover":{
                        bgcolor: 'white',
                        color: 'primary.main'
                      }

                    }}
                  >
                    GET THE BEST DEALS
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Animation>
    </Container>

    </ThemeProvider>

  );
}
