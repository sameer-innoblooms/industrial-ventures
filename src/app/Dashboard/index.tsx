"use client"
import { Box } from "@mui/material";

import Contact from "../components/Contact";
import Hero from "../components/Hero";

import BestSeller from "../components/BestSeller";
import ChooseUs from "../components/ChooseUs";
import Promotions from "../components/Promotion";
import Membership from "../components/Membership";
import Aboutus from "../components/Aboutus";
import AdditionalProducts from "../components/AditionalProducts";
import Clients from "../components/Clients";
import CustomDivider from "../components/ComponentDivider";

function Dashboard() {
  return (
    <Box sx={{
      
    }}>
      
      <Hero />
        
      <CustomDivider variant="wave1" height="100px" color="primary.main"  />

      <Aboutus />
      <CustomDivider variant="wave" height="100px" color="black" />
      <BestSeller />
      <CustomDivider variant="wave1" color="primary.main" height="100px" />
      
      

      <ChooseUs />
      <CustomDivider variant="wave" color="primary.main" height="100px" />
      <AdditionalProducts />
      
      <Promotions />
      {/* <CustomDivider variant="wave" color="primary.main" height="100px" /> */}
        <Membership />
      <CustomDivider variant="wave1" color="primary.main" height="100px" />
      <Clients/>
      <CustomDivider variant="wave" color="#2d2022" height="100px" />
      <Contact />
      {/* <CustomDivider variant="wave1" color="#2d2022" height="100px" /> */}
      {/* <CustomDivider variant="wave" color="#2d2022" height="100px" /> */}
      
      <CustomDivider variant="wave1" color="#2d2022" backgroundColor="black" height="100px" />

      


    </Box>
  );
}

export default Dashboard;
