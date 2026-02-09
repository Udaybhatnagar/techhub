import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Footer from "../components/Footer.jsx";
import About from "../components/About.jsx";
import CaseStudiesSlider from "../components/CaseStudies.jsx";
import Testimonials from "../components/Testimonials.jsx";
import WeOffering from "../components/WeOffering.jsx";
import BlogSection from "../components/BlogSection.jsx";
import AdvancedCursor from "../components/AdvancedCursor.jsx";
import TeamSection from "../components/TeamSection.jsx";

const Home = () => {
  return (
    <>
      <AdvancedCursor />
      <Navbar />
      <Hero />
      <WeOffering />
      <About />
      <Services />
      <CaseStudiesSlider />
      <BlogSection />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
