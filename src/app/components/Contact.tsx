'use client'
import { Box, Button, TextField, ThemeProvider, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import "./globls.css"
import AnimationUp from "./AnimationUp";
import theme from "../theme";

const Contact = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); 
  return (
    <ThemeProvider theme={theme}>
      {isMobile?(
                 
                  <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Box
                    sx={{
                      width: {xs:"100%", md: "50%"},
                      height: {xs: "500px", md: "auto"},
                      bgcolor: "red",
                     
                      backgroundImage: "url(/Contact.png)",
                      backgroundSize: "cover",
                      backgroundPositionY: "center",
                      backgroundPositionX: "center",
                    }}
                  >
                    {/* <Image
                        src="/contact.jpg"
                        alt='Contact'
                        width={1200}
                        height={500}
            
                        /> */}
                        {/* <Typography variant="h2" color="green">
                          Image
                        </Typography> */}
                  </Box>
                  <Box
                    sx={{
                      // width: {xs:"100%", md: "50%"},
                      height: "auto",
                      // bgcolor: "#0085cb",
                      bgcolor: "primary.main",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingBlock: 10,
                      padding: {xs: 4},
                    }}
                  >
                    <Box
                      sx={{
                        justifyContent: "center",
                        width: "550px",
                        height: "auto",
                        // backgroundColor: 'green',
                        // border: '2px solid white',
                        alignContent: "center",
            
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{ textAlign: "left", color: "white", mb: 1,  }}
                      >
                        TALK WITH US TO GET THE BEST DEALS IN THE MARKET
                      </Typography>
                      <Typography
                        variant="h5"
                        component="h2"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ textAlign: "left", mb: 1, color: "white" }}
                      >
                          WE WELCOME ALL TYPES OF QUERY RELATED TO PRODUCTS
                        </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ textAlign: "left", color: "white", mb: 1 }}
                      >
                        WE ARE HERE TO SOLVE ALL TYPE OF DOUBTS
                      </Typography>
            
                      <Box
                        sx={{
                          display: "grid",
                          gap: 2,
                          gridTemplateColumns: "1fr 1fr",
                          mt: 2,
                        }}
                      >
                        <TextField
                          required
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          sx={{
                            bgcolor: "white",
                            borderRadius: 1,
                          }}
                        />
                        <TextField
                          required
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          sx={{
                            bgcolor: "white",
                            borderRadius: 1,
                          }}
                        />
                        <TextField
                          required
                          label="Mobile"
                          variant="outlined"
                          fullWidth
                          sx={{
                            gridColumn: "1 / 3",
                            bgcolor: "white",
                            borderRadius: 1,
                          }}
                        />
                        {/* <TextField
                          required
                          label="Email"
                          variant="outlined"
                          fullWidth
                          sx={{
                            bgcolor: "white",
                            borderRadius: 1,
                          }}
                        /> */}
                        <TextField
                          required
                          label="Email"
                          variant="outlined"
                          sx={{ gridColumn: "1 / 3", bgcolor: "white", borderRadius: 1 }}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            border: "1px solid white",
                            // bgcolor: "#0277bd",
                            // bgcolor: "rgb(0, 73, 113)",
                            bgcolor: "primary.main",
                            py: 1.5,
                            // "&:hover": {
                            //   bgcolor: "#007bff",
                            // },
            
                            gridColumn: "1/3",
                            ":hover":{
                              bgcolor: 'white',
                              color: 'primary.main'
                            }
                          }}
                        >
                          Submit
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>

      ):(
        <AnimationUp>
        <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, 
        }}
      >
        <Box
          sx={{
            width: {xs:"100%", md: "49%"},
            height: {xs: "500px", md: "auto"},
            bgcolor: "red",
            backgroundImage: "url(/Contact.png)",
            backgroundSize: "cover",
            backgroundPositionY: "center",
            backgroundPositionX: "center",
          }}
        >
          {/* <Image
              src="/contact.jpg"
              alt='Contact'
              width={1200}
              height={500}
  
              /> */}
              {/* <Typography variant="h2" color="green">
                Image
              </Typography> */}
        </Box>
        <Box
          sx={{
            width: {xs:"100%", md: "51%"},
            height: "auto",
            // bgcolor: "#0085cb",
            bgcolor: "primary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBlock: 10,
            // padding: 10,
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              width: "550px",
              height: "auto",
              // backgroundColor: 'green',
              alignContent: "center",
  
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", color: "white", mb: 1 }}
            >
              TALK WITH US TO GET THE BEST DEALS IN THE MARKET
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              sx={{ mb: 2, fontWeight: "bold", textAlign: 'left', color: 'white' }}
            >
                WE WELCOME ALL TYPES OF QUERY RELATED TO PRODUCTS
              </Typography>
            <Typography
              variant="subtitle2"
              sx={{ textAlign: "left", color: "white", mb: 1 }}
            >
              WE ARE HERE TO SOLVE ALL TYPE OF DOUBTS
            </Typography>
  
            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: "1fr 1fr",
                mt: 2,
              }}
            >
              <TextField
                required
                label="First Name"
                variant="outlined"
                fullWidth
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                }}
              />
              <TextField
                required
                label="Last Name"
                variant="outlined"
                fullWidth
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                }}
              />
              <TextField
                required
                label="Mobile"
                variant="outlined"
                fullWidth
                sx={{
                  gridColumn: "1 / 3",
                  bgcolor: "white",
                  borderRadius: 1,
                }}
              />
              {/* <TextField
                required
                label="Email"
                variant="outlined"
                fullWidth
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                }}
              /> */}
              <TextField
                required
                label="Email"
                variant="outlined"
                sx={{ gridColumn: "1 / 3", bgcolor: "white", borderRadius: 1 }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  border: "1px solid white",
                  // bgcolor: "#0277bd",
                  // bgcolor: "rgb(0, 73, 113)",
                  bgcolor: "primary.main",
                  py: 1.5,
                  // "&:hover": {
                  //   bgcolor: "#007bff",
                  // },
  
                  gridColumn: "1/3",
                  ":hover":{
                    bgcolor: 'white',
                    color: 'primary.main'
                  }
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      </AnimationUp>
      )}
    </ThemeProvider>

  );
};

export default Contact;
