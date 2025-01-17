import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <Box 
    sx={{
        display: 'flex',
    }}
    >
      <Box
        sx={{
          width: "50%",
          height: "auto",
          bgcolor: "red",
          backgroundImage: "url(/contact.jpg)",
          backgroundSize: "cover",
        }}
      >
        {/* <Image
            src="/contact.jpg"
            alt='Contact'
            width={1200}
            height={500}

            /> */}
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "auto",
          bgcolor: "#0099ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBlock: 10,
          
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
            textAlign={"left"}
            sx={{
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              height: "100%",
              color: "white",
              fontSize: "18px",
              textAlign: "left",
            }}
          >
            TALK TO US WE ARE IN YOU SIDE
          </Typography>
          <Typography
            textAlign={"left"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              color: "white",
              fontSize: "48px",
              textAlign: "left",
              lineHeight: 1.2

            }}
          >
            WE WELCOME ALL TYPES OF PROJECTS BIG OR SMALL
          </Typography>
          <Typography
            textAlign={"left"}
            sx={{
              height: "100%",
              color: "white",
              fontSize: "12px",
              textAlign: "left",
            }}
          >
           If you are interested in our products, please leave your email and we will contact you as soon as possible, thank you!
          </Typography>

          <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "1fr 1fr", mt: 2 }}>
            <TextField
              required
              label="First Name"
              variant="outlined"
              
              fullWidth
              sx={{
                bgcolor: 'white',
                borderRadius: 1
              }}
              
            />
            <TextField
              required
              label="Last Name"
              variant="outlined"
              fullWidth
              sx={{
                bgcolor: 'white'
              }}
            />
            <TextField required label="Mobile" variant="outlined" fullWidth sx={{
                bgcolor: 'white'
              }} />
            <TextField required label="Email" variant="outlined" fullWidth sx={{
                bgcolor: 'white'
              }} />
            <TextField
              required
              label="Email"
              variant="outlined"
              sx={{ gridColumn: "1 / 3", bgcolor: 'white' }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "#0277bd",
                color: "white",
                py: 1.5,
                "&:hover": {
                  bgcolor: "#007bff",
                },

                gridColumn: "1/3",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
