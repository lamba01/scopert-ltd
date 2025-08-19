import React from "react";
import heroimg from "../assets/Rectangle.png";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-no-repeat bg-cover bg-center max-h-[85vh] sm:max-h-[93vh] sm:min-h-[90vh] overflow-hidden mt-10"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="absolute left-0 top-0 h-full w-full backdrop-blur-md sm:backdrop-blur-sm bg-black/70 sm:bg-black/70 z-10" />
      <div className="absolute inset-0 bg-black/20 sm:bg-transparent z-10" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 space-y-4">
        <div className="relative">
          <h1 className="text-center text-2xl sm:text-4xl font-bold pl-6">
            Reliable Supplier of Mining & Construction Machinery
          </h1>
          {/* Yellow block */}
          <span className="absolute left-0 top-0 h-full w-2 bg-yellow-500"></span>
        </div>

        <p className="max-w-xl text-center px-4">
          We connect construction and engineering companies with high-quality
          heavy equipment and bulk materials — backed by trusted suppliers and
          efficient UK-wide logistics.
        </p>

        <button className="bg-yellow-500 text-black py-2 px-6 rounded-md font-semibold">
          Get Started
        </button>
      </div>
    </section>
  );
}
