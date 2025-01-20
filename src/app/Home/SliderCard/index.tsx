"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface TabContent {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  buttonType: string;
}

interface SliderCardProps {
  item: {
    image: string;
    tabContent: TabContent;
  };
}

const SliderCard: React.FC<SliderCardProps> = ({ item, index }: any) => {
  const [showText, setShowText] = useState(false);

  // Set a delay before showing the text
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);  // Show text after delay
    }, 1000);  // Adjust the delay here (1000ms = 1 second)

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: "white",
        display: "flex",
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        // backgroundPositionY: item.image.includes("Background2") ? 50 : "center",
        backgroundRepeat: "no-repeat",
        transition: "background-size 0.5s ease",
        position: "relative",
        margin: "0 auto",
        // borderBottom: "2px solid rgb(252, 247, 247)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          left: "45%",
        }}
      >
        <Image src="/Scroll.png" alt="Scroll" height={100} width={100} style={{ filter: 'brightness(0) invert(1)' }}        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // background: "rgba(0, 0, 0, 0.5)",
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          maxWidth: "1600px",
          margin: "0 auto",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: { xs: 1, sm: "90%" },
          pl: { xs: 1, sm: 1, md: 2 },
          pr: { xs: 1, sm: 1, md: 2 },
          // borderBottom: "2px solid rgb(252, 247, 247)",
        }}
      >
        <Box
          sx={{
            textAlign: { md: index % 2 === 0 ? "right" : "left" },
            width: 0.9,
            // borderBottom: "2px solid rgb(252, 247, 247)",
          }}
        >
          {/* Fade-In Animations */}
          {showText && (
            <>
              <Typography
                variant="h1"
                sx={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: { xs: "32px", sm: "32px", md: "64px" },
                  lineHeight: 1.2,
                  mb: 1,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  opacity: 0,
                  animation: "fadeIn 1s forwards",  // Animation style
                  animationDelay: "0.5s", // Delay before animation starts
                }}
              >
                {item.tabContent.text1}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  fontSize: { xs: "28px", sm: "32px", md: "64px" },
                  lineHeight: 1.2,
                  mb: { xs: 3 },
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  opacity: 0,
                  animation: "fadeIn 1.5s forwards",  // Animation style
                  animationDelay: "0.7s", // Delay before animation starts
                }}
              >
                {item.tabContent.text2}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  fontSize: { xs: "28px", sm: "32px", md: "64px" },
                  lineHeight: 1.2,
                  mb: { xs: 3, sm: 4 },
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  // borderBottom: "2px solid rgb(252, 247, 247)",
                  opacity: 0,
                  animation: "fadeIn 1s forwards",  // Animation style
                  animationDelay: "1s", // Delay before animation starts
                }}
              >
                {item.tabContent.text3}
              </Typography>
            </>
          )}
        </Box>
      </Box>
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default SliderCard;
