import { Box } from "@mui/material";
import Footer from "../Footer";
import Home from "../Home";
import Products from "../components/Products";

import ProductSlider from "../components/HotProducts";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import OurPartners from "../components/Partners";
import Hero from "../components/Hero";
import ProjectsPage from "../(LandingPage)/shop/page";
import AdditionalProducts from "../components/AditionalProducts";
import BestSeller from "../components/BestSeller";
import ChooseUs from "../components/ChooseUs";
import Promotions from "../components/Promotion";
// import Testimonials from "../components/testimonials";
import Membership from "../components/Membership";
import Blog from "../components/Blogs";
import TestimonialCarousel from "../components/Testimonials";
import Testimonials from "../components/Testimonials";

function Dashboard() {
  return (

    <Box>
      {/* <Home /> */}
      {/* <Navbar/> */}
      <Hero/>
     
      {/* <ProjectsPage/> */}
      <BestSeller/>
      <ChooseUs/>
       <AdditionalProducts/>
       <Promotions/>
      {/* <Products/> */}
      {/* <ProductSlider/> */}
      {/* <Projects/> */}
      {/* <WhyChooseUs/> */}
      
      {/* <OurPartners/> */}
      {/* <Testimonials/> */}
      {/* <Testimonials/> */}
      <Membership/>
      <Blog/>
      <Contact/>
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
