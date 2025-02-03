"use client";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import theme from "../theme";
import AnimationUp from "./AnimationUp";



export default function Membership() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
          {isMobile?(
             
             <Box
               sx={{
                 backgroundImage: `url(./Image1.jpg)`,
                 backgroundSize: "cover",
                 backgroundPosition: "center",
                 padding: "80px 20px",
                 position: "relative",
                 textAlign: "center",
                 color: "white",
                 "&::before": {
                   content: '""',
                   position: "absolute",
                   top: 0,
                   left: 0,
                   right: 0,
                   bottom: 0,
                   backgroundColor: "rgba(0, 0, 0, 0.7)",
                 },
               }}
             >
               <Box
                 sx={{
                   position: "relative",
                   maxWidth: 800,
                   margin: "0 auto",
                 }}
               >
                 <Typography variant="subtitle1" sx={{ color: "white", mb: 2 }}>
                   Our Company
                 </Typography>
                 <Typography
                   variant="h3"
                   component="h2"
                   sx={{ mb: 3, fontWeight: "bold" }}
                 >
                   Get Discount by Becoming a Member
                 </Typography>
                 <Typography sx={{ mb: 4 }}>
                   The best deal in market, book your membership now and get
                   discount on all products.
                 </Typography>
                 <Button
                   href="/contact"
                   variant="contained"
                   sx={{
                     backgroundColor: "white",
                     color: "primary.main",
     
                     "&:hover": {
                       backgroundColor: "rgba(255, 255, 255, 0.9)",
                     },
                   }}
                 >
                   JOIN US
                 </Button>
               </Box>
             </Box>
       
     ):(
       <AnimationUp>
       <Box
         sx={{
           backgroundImage: `url(./Image1.jpg)`,
           backgroundSize: "cover",
           backgroundPosition: "center",
           padding: "80px 20px",
           position: "relative",
           textAlign: "center",
           color: "white",
           "&::before": {
             content: '""',
             position: "absolute",
             top: 0,
             left: 0,
             right: 0,
             bottom: 0,
             backgroundColor: "rgba(0, 0, 0, 0.7)",
           },
         }}
       >
         <Box
           sx={{
             position: "relative",
             maxWidth: 800,
             margin: "0 auto",
           }}
         >
           <Typography variant="subtitle1" sx={{ color: "white", mb: 2 }}>
             Our Company
           </Typography>
           <Typography
             variant="h3"
             component="h2"
             sx={{ mb: 3, fontWeight: "bold" }}
           >
             Get Discount by Becoming a Member
           </Typography>
           <Typography sx={{ mb: 4 }}>
             The best deal in market, book your membership now and get
             discount on all products.
           </Typography>
           <Button
           href="/contact"
             variant="contained"
             sx={{
               backgroundColor: "white",
               color: "primary.main",

               "&:hover": {
                 backgroundColor: "rgba(255, 255, 255, 0.9)",
               },
             }}
           >
             JOIN US
           </Button>
         </Box>
       </Box>
     </AnimationUp>
     )}
    </>

  );
}
