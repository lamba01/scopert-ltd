import React from "react";
import Navbar from "./component/navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Banner from "./sections/Banner.jsx";
import About from "./sections/About.jsx";
import WhyChooseUs from "./sections/Whychooseus.jsx";
import Expertise from "./sections/Expertise.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <About />
      <WhyChooseUs />
      <Expertise />
      {/* Add other sections as needed */}s
    </div>
  );
}

export default App;
