import { Box, Button, makeStyles, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import "./globls.css"

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "auto",
          bgcolor: "red",
          backgroundImage: "url(/Store.jpg)",
          backgroundSize: "cover",
          backgroundPositionY: "center",
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
          // bgcolor: "#0085cb",
          bgcolor: "#1C4B84",
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
            variant="subtitle1"
            sx={{ textAlign: "left", color: "white", mb: 1 }}
          >
            TALK WITH US TO GET THE BEST DEALS IN THE MARKET
          </Typography>
          <Typography
            variant="h4"
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
                bgcolor: "white",
                borderRadius: 1,
              }}
            />
            <TextField
              required
              label="Email"
              variant="outlined"
              fullWidth
              sx={{
                bgcolor: "white",
                borderRadius: 1,
              }}
            />
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
                bgcolor: "#1C4B84",
                py: 1.5,
                // "&:hover": {
                //   bgcolor: "#007bff",
                // },

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
