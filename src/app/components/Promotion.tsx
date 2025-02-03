"use client";

import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import Animation from "./AnimationUp";
import theme from "../theme";

const promotions = [
  {
    title: "Competitive Prices",
    subtitle: "Big Discounts",
    image: "./Ionizer.png",
    buttonColor: "#9dff00",
  },
  {
    title: "Trusted Brands",
    subtitle: "Grab Yours Now",
    image: "./Cable2.png",
    buttonColor: "#9dff00",
  },
];

export default function Promotions() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
          {isMobile ? (
        <Container sx={{ pb: 8, pt: {md: 2}, marginBlock: {md: 4} }}>

            <Grid container spacing={4}>
              {promotions.map((promo, index) => (
                <Grid item xs={12} md={6} key={index} marginBlock={2.5}>
                  <Paper
                    sx={{
                      p: 4,
                      height: "100%",
                      bgcolor: "primary.main",
                      color: "white",
                      backgroundImage: `url(${promo.image})`,
                      backgroundSize: index === 1 ? "40%" : "45%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right center",
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: {
                          xs: index === 1 ? "80%" : "70%",
                          md: "60%",
                        },
                      }}
                    >
                      <Typography variant="h5" gutterBottom fontWeight="bold">
                        {promo.title}
                      </Typography>
                      <Typography variant="h6" paragraph>
                        {promo.subtitle}
                      </Typography>

                      <Button
                      href="/product"
                        sx={{
                          color: "white",
                          fontSize: "1rem",
                          border: "1px white solid",
                          ":hover": {
                            bgcolor: "white",
                            color: "primary.main",
                          },
                        }}
                      >
                        GET THE BEST DEALS
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>

        </Container>
      ) : (
        <Container sx={{ pb: 8, pt: 2, marginBlock: 4 }}>
          <Animation>
            <Grid container spacing={4}>
              {promotions.map((promo, index) => (
                <Grid item xs={12} md={6} key={index} marginBlock={2.5}>
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
                    <Box
                      sx={{
                        maxWidth: {
                          xs: index === 1 ? "80%" : "60%",
                          md: "60%",
                        },
                      }}
                    >
                      <Typography variant="h5" gutterBottom fontWeight="bold">
                        {promo.title}
                      </Typography>
                      <Typography variant="h6" paragraph>
                        {promo.subtitle}
                      </Typography>

                      <Button
                      href="/product"
                        sx={{
                          color: "white",
                          fontSize: "1rem",
                          border: "1px white solid",
                          ":hover": {
                            bgcolor: "white",
                            color: "primary.main",
                          },
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
      )}
    </>


  );
}
