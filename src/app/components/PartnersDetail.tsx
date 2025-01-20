import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
export default function Partners({ partnerDetails }: any) {
  return (
    <Box sx={{ display: "flex"

     }}>
      <Box
        sx={{
          height: "150px",
          width: "400px",
          backgroundImage: `url(${partnerDetails?.image})`,
          backgroundSize: "100% 100%", 
          backgroundPosition: "center",
          objectFit: "cover",
          opacity: 1, 
          mx: 1,
          // marginInline: "5px",
        //   bgcolor: 'red'
        }}
      >
       
      </Box>
    </Box>
  );
}