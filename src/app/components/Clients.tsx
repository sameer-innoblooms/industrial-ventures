"use client";

import { ThemeProvider } from "@emotion/react";
import {
   Box,
   Card,
   CardContent,
   Typography,
   Avatar,
   Rating, Container,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import theme from "../theme";

const testimonials = [
   {
      id: 1,
      name: "Harish Tyagi",
      role: "Customer",
      rating: 5,
      text: "I've been a loyal customer of Industrial Ventures Products for over three years now, and I can't recommend them enough! I once had an issue with a delivery, and they resolved it within hours. Truly a company that puts its customers first. - Harish Tyagi, Mumbai, India",
      avatar: "/Client1.jpg?height=40&width=40",
   },
   {
      id: 2,
      name: "Shaurya Mala",
      role: "Customer",
      rating: 5,
      text: "As a small business owner, finding reliable suppliers is crucial for my success. Industrial Ventures Products has consistently delivered high-quality items that keep my customers happy and coming back for more- Shaurya Mala, Delhi, India",
      avatar: "/Client2.jpg?height=40&width=40",
   },
   {
    id: 3,
    name: "Raj Shukla",
    role: "Customer",
    rating: 4,
    text: "I was initially skeptical about ordering online, but Industrial Ventures Products changed my perspective entirely. The ease of ordering, prompt delivery, and excellent product quality have made me a regular customer. - Raj Shukla, Bangalore, India",
    avatar: "/Client3.png?height=40&width=40",
   }
   // Add more testimonials as needed
];

const responsive = {
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
   },
   tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
   },
   mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
   },
};

export default function Clients() {
   return (
    
      
   <ThemeProvider theme={theme}>
          <Box 
         sx={{         
            position: "relative",
            height: { xs: "600px", md: "400px" },
            overflow: "hidden",
            bgcolor: "#f5f5f5",
            // border: "2px solid red",
            // paddingBlock: 7,
            // pl: 50,
            pt: 5,
            pb: 10,
            // margin: '50px auto',
            Width: '80%',
     

         }}
      >
        <Container maxWidth="lg">
            {/* Background Image */}
         <Box
            component="img"
            src="/Clientbg.jpg"
            alt="Background"
            sx={{
               position: "absolute",
            //    left: 0,

            // ml: 10,
            //    top: 70,
               width: "700px",
               height: "85%",
               objectFit: "cover",
               display: { xs: "none", md: "block" },
               borderRadius: 2,
               mb: 10

               
            }}
         />

         {/* Testimonials Carousel */}
         <Box
            sx={{
               position: "relative",
               width: { xs: "100%", md: "700px" },
               ml: { xs: 0, md: "420px" },
               top: 22,
               p: 4,
               zIndex: 1,
            //    border: "2px solid red",
            }}
         >
            <Carousel
                   responsive={responsive}
                   showDots={false}
               infinite={true}
               autoPlay={true}
               autoPlaySpeed={2000}
               keyBoardControl={true}
               customTransition="transform 500ms ease-in-out"
               transitionDuration={500}
               containerClass="carousel-container"
               removeArrowOnDeviceType={["tablet", "mobile", 'desktop']}
               dotListClass="custom-dot-list-style"
               itemClass="carousel-item-padding-40-px"
            >
               {testimonials.map((testimonial) => (
                  <Card
                     key={testimonial.id}
                     sx={{
                        maxWidth: 345,
                        m: 2,
                        height: "300px",
                        // mr: { xs: 1, sm: 2, md: 5 },
                        // height: '300px',
                        boxShadow: 3,
                        borderRadius: 2,
                        "&:hover": {
                           boxShadow: 6,
                           transform: "translateY(-4px)",
                           transition: "all 0.3s ease-in-out",
                        },
                     }}
                  >
                     <CardContent>
                        <Rating
                           value={testimonial.rating}
                           readOnly
                           sx={{ mb: 2, color: 'primary.main' }}
                        />
                        <Box
                           sx={{ display: "flex", alignItems: "center", mb: 2 }}
                        >
                           <Avatar
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              sx={{ mr: 2 }}
                           />
                           <Box>
                              <Typography variant="h6" component="div" color="text.primary">
                                 {testimonial.name}
                              </Typography>
                              <Typography
                                 variant="body2"
                                 color="text.secondary"
                              >
                                 {testimonial.role}
                              </Typography>
                           </Box>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                           {testimonial.text}
                        </Typography>
                     </CardContent>
                  </Card>
               ))}
            </Carousel>
         </Box>
        </Container>
         
      </Box>
   </ThemeProvider>

   );
}
