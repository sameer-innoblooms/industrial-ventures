import { Box } from "@mui/material";
import Footer from "../Footer";
import Home from "../Home";
import Products from "../components/Products";
import WhyChooseUs from "../components/WhyChooseUs";

import ProductSlider from "../components/HotProducts";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import OurPartners from "../components/Partners";

function Dashboard() {
  return (
    <Box>
      <Home />
      <Products/>
      <ProductSlider/>
      <Projects/>
      <WhyChooseUs/>
      <OurPartners/>
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
