"use client";
import { useState } from "react";
import { Container, Typography, Grid, Box, Button, Slide, createTheme, ThemeProvider } from "@mui/material";
import WaterPumpIcon from "@mui/icons-material/Water";
import RecyclingIcon from "@mui/icons-material/Recycling";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface ProductCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string;
}


const categories: ProductCategory[] = [
  {
    id: "pump",
    title: "Pump Products",
    icon: <WaterPumpIcon sx={{ fontSize: 40 }} />,
    image: "/pump1.png?height=400&width=600",
    description:
      "Submersible Sewage Pump is the main products of lanshen group. We have been in the field of manufacturing and exporting Submersible Sewage Pumps for nearly ten years.",
  },
  {
    id: "sewage",
    title: "Sewage Treatment Equipment",
    icon: <RecyclingIcon sx={{ fontSize: 40 }} />,
    image: "/pump2.png?height=400&width=600",
    description:
      "Our sewage treatment equipment provides efficient and reliable solutions for waste water management. Using advanced technology for optimal performance.",
  },
  {
    id: "electrical",
    title: "Electrical Control Equipment",
    icon: <ElectricalServicesIcon sx={{ fontSize: 40 }} />,
    image: "/pump3.png?height=400&width=600",
    description:
      "High-quality electrical control systems designed for industrial applications. Featuring advanced monitoring and control capabilities.",
  },
  {
    id: "water",
    title: "Water Supply Equipment",
    icon: <LocalDrinkIcon sx={{ fontSize: 40 }} />,
    image: "/pump4.png?height=400&width=600",
    description:
      "Complete water supply solutions for industrial and municipal applications. Ensuring reliable water distribution and management.",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(
    categories[0]
  );
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true, // Ensures the transition happens only once
    delay: 1000
  });

  const theme = createTheme({
    typography: {
      // fontFamily: ["Train One", "cursive"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: 6,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 100,
            height: 4,
            backgroundColor: "#0288d1",
          },
        }}
      >
        PRODUCTS
      </Typography>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {categories.map((category: ProductCategory) => {
          return (
            <Grid item xs={6} sm={3} key={category.id}>
              <Box
                ref={ref}
                onClick={() => setActiveCategory(category)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  color:
                    activeCategory.id === category.id ? "#0288d1" : "#686868",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Slide direction="left" in={inView} mountOnEnter timeout={1000}>
                  <Box>{category.icon}</Box>
                </Slide>

                <Typography
                  variant="subtitle1"
                  align="center"
                  sx={{
                    mt: 1,
                    color:
                      activeCategory.id === category.id ? "#0288d1" : "inherit",
                  }}
                >
                  <Slide direction="left" in={inView} mountOnEnter timeout={1000} >
                    <Box>{category.title}</Box>
                  </Slide>
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative", width: "100%", height: 400 }}>
            <Slide direction="right" in={inView} timeout={1000}>
              <Image
                src={activeCategory.image}
                alt={activeCategory.title}
                fill
                style={{ objectFit: "contain" }}
              />
            </Slide>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          > 
            <Slide direction="right" in={inView} timeout={1000}>
              <Box>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ color: "#0288d1" }}
                >
                  {activeCategory.title}
                </Typography>
                <Typography variant="body1" sx={{
                  mt: 1
                }}>
                  {activeCategory.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#0288d1",
                    alignSelf: "flex-start",
                    "&:hover": {
                      bgcolor: "#01579b",
                    },
                    mt: 4,
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Slide>
          </Box>
        </Grid>
      </Grid>
    </Container>
    </ThemeProvider>
    
  );
}
