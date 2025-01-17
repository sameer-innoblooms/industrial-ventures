
//@ts-check
"use client"
import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import Partners from "./PartnersDetail";
interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  initialSlide: number;
  responsive: any;
  autoplay:boolean;
  autoplaySpeed:number;
  cssEase:any;

  
}


// function SampleNextArrow(props:any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "none" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props:any) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "none" }}
//       onClick={onClick}
//     />
//   );
// }

const OurPartners: React.FC = () => {
  const partnerDetails = [
{
  image: '/Innoblooms.png'
},
{
  image: '/Innoblooms.png'
},
{
  image: '/Innoblooms.png'
},
{
  image: '/Innoblooms.png'
},
{
  image: '/Innoblooms.png'
},
{
  image: '/Innoblooms.png'
},
{
  image: '/Innoblooms.png'
},
{
  image: '/Innoblooms.png'
},
{
  image: '/Innoblooms.png'
},
{
  image: '/Innoblooms.png'
},
  ];
  //@ts-expect-error : should expect a string
  const settings: SliderSettings = {
 
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    
  };

  return (
    <Box sx={{
      height:"100%",
      width:"1600px",
      margin:"auto",
      position: "relative",
      marginBlock: 12,
    }}>
      <Box>
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
                Our Partners
              </Typography>
      </Box>

      <Box sx={{ mt: 5, mb: 5 }}>
          <Slider {...settings}
          >
            {partnerDetails.map((item, index) => {
              return (
                <Partners partnerDetails ={item}/>
              );
            })}
          </Slider>
       
      </Box>
    </Box>
  );
};

export default OurPartners; 



