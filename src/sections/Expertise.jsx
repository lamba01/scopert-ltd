import React from "react";
import Expertiseimg from "../assets/expertise.png";

function Expertise() {
  return (
    <section
      className="relative w-full mt-10 h-[70vh] sm:h-[70vh] py-0 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${Expertiseimg})` }}
    >
      <div className="absolute left-0 top-0 h-full w-full backdrop-blur-md sm:backdrop-blur-sm bg-black/50 sm:bg-black/70 z-10" />
      <div className="z-20 text-white text-center space-y-4 sm:w-2/3 w-full">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Built for Contractors. Trusted by Engineers.
        </h1>
        <p className="text-[#D1D1D1]">
          We delivers dependable industrial supply services, connecting you with
          high-performance machinery and construction materials. Whether you’re
          managing a civil engineering project or coordinating large-scale
          construction works, we provide the expertise and logistics to keep
          your operations moving without interruption.
        </p>
        <button className="bg-yellow-500 text-black py-4 px-14 rounded-md font-semibold capitalize cursor-pointer hover:bg-yellow-400 transition-colors">
          about us
        </button>
      </div>
    </section>
  );
}

export default Expertise;
