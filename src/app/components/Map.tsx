import { Box } from "@mui/material";
import React from "react";

export default function Map() {
  return (
    <>
      <Box
        sx={{
          flex: 1,
          height: { xs: "300px", md: "400px" },
          // borderRadius: "10px",
          mb: 8
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123456789012!2d77.3909686!3d28.6227427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef34aad0c8e5%3A0xac55a4bbdbb9f0f1!2sInnoblooms%3A%20Website%20Designing%20%7C%20Web%20Development%20%7C%20Digital%20Marketing%20%7C%20Software%20Development!5e0!3m2!1sen!2sin!4v1672531200000!5m2!1sen!2sin"
          width="100%"
          height="400px"
          style={{
            border: 0,
            //   borderRadius: "10px",
            //   filter: "invert(90%) hue-rotate(180deg)",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </>
  );
}
