import React from "react";
import Navbar from "./component/navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Banner from "./sections/Banner.jsx";
import About from "./sections/About.jsx";
import WhyChooseUs from "./sections/Whychooseus.jsx";
import Expertise from "./sections/Expertise.jsx";
import Testimonial from "./sections/Testimonial.jsx";
import Services from "./sections/Services.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <About />
      <Services />
      <WhyChooseUs />
      <Expertise />
      <Testimonial />
      <Contact />
      <Footer />
      {/* Add other sections as needed */}
    </div>
  );
}

export default App;
