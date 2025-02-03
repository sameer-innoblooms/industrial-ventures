"use client";

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  useMediaQuery,
} from "@mui/material";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import theme from "../theme";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  sale?: boolean;
  salePercentage?: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Lightings",
    price: 30.0,
    image: "./FloodLight.png",
    sale: true,
    salePercentage: 20,
  },
  {
    id: 2,
    name: "Ionizer",
    price: 100.0,
    image: "./Ionizer.png",
    sale: true,
    salePercentage: 25,
  },
  { id: 3, name: "Motor", price: 20.0, image: "./Motor.png" },
  {
    id: 4,
    name: "Boiler Mounting",
    price: 5.0,
    image: "./BoilerMountings.png",
    sale: true,
    salePercentage: 20,
  },
  {
    id: 5,
    name: "Water Meter",
    price: 5.0,
    image: "./WaterMeter.png",
    sale: true,
    salePercentage: 20,
  },
  {
    id: 6,
    name: "V Belts",
    price: 30.0,
    image: "./Vbelt.png",
    sale: true,
    salePercentage: 20,
  },
  {
    id: 7,
    name: "Capacitors",
    price: 30.0,
    image: "./Capacitors.png",
    sale: true,
    salePercentage: 40,
  },
  { id: 8, name: "Pvc, Upvc Pipes", price: 8.0, image: "./PvcPipes.png" },
];

const Animation: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: -50, opacity: 0 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function BestSeller() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));



  return (
    <>
         {isMobile? (
            <Container
            sx={{
              pt: 6,
              pb: 8,
            }}
          >

              <Box
                sx={{
                  // display: "flex",
                  // justifyContent: "space-between",
                  alignItems: "center",
                  mb: 5,
                }}
              >
                <Box sx={{}}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      textAlign: "center",
                      color: "primary.main",
                      fontWeight: "bold",
                    }}
                  >
                    Our Product
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h2"
                    fontWeight="bold"
                    color="text.primary"
                    textAlign="center"
                  >
                    Best Seller Product
                  </Typography>
                </Box>
                {/* <FormControl sx={{ minWidth: 200 }}>
                <Select value={sorting} onChange={handleSortChange} displayEmpty>
                  <MenuItem value="default">Default sorting</MenuItem>
                  <MenuItem value="price-low">Top seller</MenuItem>
                  <MenuItem value="price-high">Price: High to Low</MenuItem>
                  <MenuItem value="name">Sort by Name</MenuItem>
                </Select>
              </FormControl> */}
              </Box>
    
              <Grid container spacing={3}>
                {products.map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Card
                      sx={{
                        boxShadow: 4,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        border: "0.5px solid gray",
                      }}
                    >
                      {product.sale && (
                        <Chip
                          label={`${product.salePercentage}% SALE`}
                          color="primary"
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            bgcolor: "primary.main",
                            zIndex: 1
                          }}
                        />
                      )}
                      <CardContent
                        sx={{
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            paddingTop: "100%",
                            position: "relative",
                            // mb: 2,
                          }}
                        >
                          <Box
                            component="img"
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: 1,
                            }}
                          />
                        </Box>
                        <Typography
                          variant="subtitle1"
                          component="h3"
                          align="center"
                        >
                          {product.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

          </Container>
     ):(
      <Container
      sx={{
        pt: 6,
        pb: 8,
      }}
    >
      <Animation>
        <Box
          sx={{
            // display: "flex",
            // justifyContent: "space-between",
            alignItems: "center",
            mb: 5,
          }}
        >
          <Box sx={{}}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "primary.main",
                fontWeight: "bold",
              }}
            >
              Our Product
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              color="text.primary"
              textAlign="center"
            >
              Best Seller Product
            </Typography>
          </Box>
          {/* <FormControl sx={{ minWidth: 200 }}>
          <Select value={sorting} onChange={handleSortChange} displayEmpty>
            <MenuItem value="default">Default sorting</MenuItem>
            <MenuItem value="price-low">Top seller</MenuItem>
            <MenuItem value="price-high">Price: High to Low</MenuItem>
            <MenuItem value="name">Sort by Name</MenuItem>
          </Select>
        </FormControl> */}
        </Box>

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  boxShadow: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  border: "0.5px solid gray",
                }}
              >
                {product.sale && (
                  <Chip
                    label={`${product.salePercentage}% SALE`}
                    color="primary"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      bgcolor: "primary.main",
                      zIndex: 1
                    }}
                  />
                )}
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      paddingTop: "100%",
                      position: "relative",
                      // mb: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 1,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    align="center"
                  >
                    {product.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Animation>
    </Container>
     )}
    </>

  );
}
