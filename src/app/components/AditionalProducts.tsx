
"use client";

import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

import AnimationUp from "./AnimationUp";
import theme from "../theme";

const arrow = {
  initial: { rotate: 0, scale: 1 },
  animate: { rotate: 90, scale: 1.5 },
};

export default function AdditionalProducts() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
<>
{isMobile ? (
        <Container
          maxWidth="lg"
          sx={{
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateAreas: {
                xs: '"b1 b1 " "b3 b4 " " b3 b4"  "b2 b2  " ',
                md: '"b1 b1 b2" "b3 b4 b2" "b3 b4 b2"',
              },

              gap: 2, // Optional gap between grid items
            }}
          >
            <Box
              sx={{
                gridArea: "b1",
                // border: "2px solid red",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "primary.main",
                  // fontSize: "0.875rem",
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                Additional Product
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  color: "text.primary",
                }}
              >
                Best Quality Product
              </Typography>
            </Box>

            <Box
              sx={{
                gridArea: "b2",
                // border: "2px solid red",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  p: 4,
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { md: "center" },
                  color: "white",
                  bgcolor: "primary.main",
                  backgroundImage: "url(/Light.png)",
                  backgroundPositionY: 73,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(45, 32, 34, 0.81)",
                    zIndex: 0,
                    borderRadius: 5,
                  },
                  borderRadius: 5,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ mb: 2, textAlign: "center", zIndex: 1 }}
                >
                  Best Product Deals
                </Typography>
                <Typography sx={{ mb: 3, textAlign: "center", zIndex: 1 }}>
                  We have the best deals on the best products.
                  <br /> Check them out!
                </Typography>

                <Button
                  href="/product"
                  variant="outlined"
                  sx={{
                    color: "primary.main",
                    bgcolor: "white",
                    borderColor: "white",
                    alignSelf: "center",
                    "&:hover": {
                      borderColor: "white",
                      color: "white",
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  SEE PRODUCT
                </Button>
                <motion.div
                  initial="initial"
                  animate="initial"
                  whileHover="animate"
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                  }}
                ></motion.div>
                <motion.div variants={arrow}>
                  <Box
                    sx={{
                      position: "absolute",
                      zIndex: 1,
                      height: "100px",
                      width: "100px",
                      bottom: 20,

                      right: 200,
                    }}
                  >
                    <Image
                      src="./FloodLight.png"
                      alt="Cables"
                      height={200}
                      width={200}
                    />
                  </Box>
                </motion.div>
              </Box>
            </Box>

            <Box
              sx={{
                gridArea: "b3",
                // border: "2px solid red",
              }}
            >
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  boxShadow: 1,
                  p: 2,
                  height: "90%",
                  display: "flex",
                  flexDirection: "column",
                  maxHeight: 300,
                }}
              >
                <Box
                  component="img"
                  src="./Light.png"
                  alt="Light"
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "contain",
                    mb: 2,
                  }}
                />
                <Box sx={{ textAlign: "center", mb: 0 }}>
                  <Typography variant="h6" sx={{ mb: 0, pt: 2 }}>
                    Light
                  </Typography>
                </Box>
                {/* <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                  }}
                >
                  ADD TO CART
                </Button> */}
              </Box>
            </Box>

            <Box
              sx={{
                gridArea: "b4",
                // border: "2px solid red",
              }}
            >
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  boxShadow: 1,
                  p: 2,
                  height: "90%",
                  display: "flex",
                  flexDirection: "column",
                  maxHeight: 300,
                }}
              >
                <Box
                  component="img"
                  src="./Motor1.jpeg"
                  alt="Light"
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "contain",
                    mb: 2,
                  }}
                />
                <Box sx={{ textAlign: "center", mb: 0 }}>
                  <Typography variant="h6" sx={{ mb: 0, pt: 2 }}>
                    Motor
                  </Typography>
                </Box>
                {/* <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                  }}
                >
                  ADD TO CART
                </Button> */}
              </Box>
            </Box>
          </Box>
        </Container>
      ) : (
        <Container
          maxWidth="lg"
          sx={{
            // p: 2,
            pt: 5,
          }}
        >
          <AnimationUp>
            <Box
              sx={{
                display: "grid",
                gridTemplateAreas: '"b1 b1 b2" "b3 b4 b2" "b3 b4 b2"',
                gap: 2, // Optional gap between grid items
              }}
            >
              <Box
                sx={{
                  gridArea: "b1",
                  // border: "2px solid red",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "primary.main",
                    // fontSize: "0.875rem",
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  Additional Product
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    mb: 3,
                    color: "text.primary",
                  }}
                >
                  Best Quality Product
                </Typography>
              </Box>

              <Box
                sx={{
                  gridArea: "b2",
                  // border: "2px solid red",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    p: 4,
                    height: "95%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "white",
                    bgcolor: "primary.main",
                    backgroundImage: "url(/Light.png)",
                    backgroundPositionY: 73,
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(45, 32, 34, 0.81)",
                      zIndex: 0,
                      borderRadius: 5,
                    },
                    borderRadius: 5,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ mb: 2, textAlign: "center", zIndex: 1 }}
                  >
                    Best Product Deals
                  </Typography>
                  <Typography sx={{ mb: 3, textAlign: "center", zIndex: 1 }}>
                    We have the best deals on the best products.
                    <br /> Check them out!
                  </Typography>

                  <Button
                    href="/product"
                    variant="outlined"
                    sx={{
                      color: "primary.main",
                      bgcolor: "white",
                      borderColor: "white",
                      alignSelf: "center",
                      "&:hover": {
                        borderColor: "white",
                        color: "white",
                        bgcolor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    SEE PRODUCT
                  </Button>
                  <motion.div
                    initial="initial"
                    animate="initial"
                    whileHover="animate"
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      alignItems: "center",
                    }}
                  ></motion.div>
                  <motion.div variants={arrow}>
                    <Box
                      sx={{
                        position: "absolute",
                        zIndex: 1,
                        height: "100px",
                        width: "100px",
                        bottom: 20,

                        right: 200,
                      }}
                    >
                      <Image
                        src="./FloodLight.png"
                        alt="Cables"
                        height={200}
                        width={200}
                      />
                    </Box>
                  </motion.div>
                </Box>
              </Box>

              <Box
                sx={{
                  gridArea: "b3",
                  // border: "2px solid red",
                }}
              >
                <Box
                  component="a"
                  href="/product"
                  sx={{
                    bgcolor: "white",
                    borderRadius: 1,
                    boxShadow: 2,
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: 300,
                    border: "1px solid #ddd",
                  }}
                >
                  <Box
                    component="img"
                    src="./Light.png"
                    alt="Light"
                    sx={{
                      width: "100%",
                      height: 200,
                      objectFit: "contain",
                      mb: 2,
                    }}
                  />
                  <Box sx={{ textAlign: "center", mb: 0 }}>
                    <Typography
                      variant="h6"
                      sx={{ mb: 0, pt: 2, color: "text.primary" }}
                    >
                      Light
                    </Typography>
                  </Box>
                  {/* <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                  }}
                >
                  ADD TO CART
                </Button> */}
                </Box>
              </Box>

              <Box
                sx={{
                  gridArea: "b4",
                  // border: "2px solid red",
                }}
              >
                <Box
                component="a"
                  href="/product"
                  sx={{
                    bgcolor: "white",
                    borderRadius: 1,
                    boxShadow: 2,
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: 300,
                    border: "1px solid #ddd",
                  }}
                >
                  <Box
                    component="img"
                    src="./Motor1.jpeg"
                    alt="Light"
                    sx={{
                      width: "100%",
                      height: 200,
                      objectFit: "contain",
                      mb: 2,
                    }}
                  />
                  <Box sx={{ textAlign: "center", mb: 0 }}>
                    <Typography variant="h6" sx={{ mb: 0, pt: 2, color: 'text.primary' }}>
                      Motor
                    </Typography>
                  </Box>
                  {/* <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                  }}
                >
                  ADD TO CART
                </Button> */}
                </Box>
              </Box>
            </Box>
          </AnimationUp>
        </Container>
      )}
</>

  );
}
