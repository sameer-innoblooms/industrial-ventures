import { Box } from "@mui/material";
import Footer from "../Footer";

import Contact from "../components/Contact";
import Hero from "../components/Hero";

import BestSeller from "../components/BestSeller";
import ChooseUs from "../components/ChooseUs";
import Promotions from "../components/Promotion";
import Membership from "../components/Membership";
import Blog from "../components/Blogs";
import Aboutus from "../components/Aboutus";
import AdditionalProducts from "../components/AditionalProducts";
import Animation from "../components/AnimationUp";
import Clients from "../components/Clients";

function Dashboard() {
  return (
    <Box sx={{
      
    }}>
      {/* <Home /> */}
      {/* <Navbar/> */}
      <Hero />
      <Aboutus />
      {/* <ProjectsPage/> */}
      <BestSeller />
      <ChooseUs />
      {/* <AdditionalProduct/> */}
      <AdditionalProducts />
      <Promotions />
      {/* <Products/> */}
      {/* <ProductSlider/> */}
      {/* <Projects/> */}
      {/* <WhyChooseUs/> */}

      {/* <OurPartners/> */}
      {/* <Testimonials/> */}
      {/* <Testimonials/> */}
      <Membership />
      <Clients/>

      <Contact />

      {/* <Blog /> */}
      {/* <NewsCarousel/> */}
      {/* <ProductCarousel/> */}
      {/* <Services /> */}
      {/* <BackgroundImage /> */}
      {/* <ClientsSay /> */}
      {/* <OurPartners /> */}

      {/* <Partners /> */}
      {/* <Feedbackform /> */}
      {/* <ContactPage /> */}
      {/* <ServicesAccordion /> */}
      <Footer />
    </Box>
  );
}

export default Dashboard;
