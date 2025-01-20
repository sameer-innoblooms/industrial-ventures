"use client";
import React from "react";
import { Box } from "@mui/material";
// import Carousel from "react-material-ui-carousel";
// import SliderCard from "./SliderCard";
import CarouselSlider from "./Carousel/Carousel";

function Home() {
  const SliderDetails: any = [
    {
      image:
        "/Background1.jpg",
      tabContent: {
        text1: "A green environment is ",
        text2: "responsible for the future",
        // text3: "Browse an incredible range of high quality organic",
        // text4: "food and drink, delivered direct to your door",
        buttonType: "Learn more.."
      },
    },
    {
      image:
        "/Background2.png",
      tabContent: {
        text1: "Create A Green Environment ",
        text2: "And Take Responsibility For",
        text3: "The Future",
        text4: "but also one which is guilt free",
        buttonType: "Learn more..",
      },
    },
  ];

  return (
    <Box id="home" sx={{ scrollSnapAlign: "start", height: "100vh", fontFamily: 'sans-serif', textTransform: 'uppercase' }}>
      {/* <Carousel animation="slide" autoPlay={false} interval={2000} indicators={false}  >
        {SliderDetails.map((item, i) => (
          <Box key={i}>
            <SliderCard item={item} index={i} />
          </Box>
        ))}
      </Carousel> */}
      <CarouselSlider SliderDetails={SliderDetails} />
    </Box>
  );
}
export default Home;  
