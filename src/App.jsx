import React from "react";
import Navbar from "./component/navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Banner from "./sections/Banner.jsx";
import About from "./sections/About.jsx";
import WhyChooseUs from "./sections/Whychooseus.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <About />
      <WhyChooseUs />
    </div>
  );
}

export default App;
