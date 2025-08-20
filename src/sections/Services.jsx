import React from "react";
import { FaIndustry, FaCubes, FaTruck } from "react-icons/fa";

export default function Services() {
  return (
    <section
      className="w-full py-16 px-4 sm:px-8 lg:px-16 space-y-8"
      id="products"
    >
      <div className="relative mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold pb-4">What We Supply</h2>
        <span className="absolute left-0 bottom-0 h-1 w-12 bg-yellow-500"></span>
      </div>

      {/* Heavy Machinery - Left */}
      <div className="bg-neutral-900 text-neutral-200 p-6 rounded-md max-w-2xl space-y-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
        <FaIndustry size={40} className="text-yellow-500" />
        <h3 className="text-lg font-bold text-white">Heavy Machinery Supply</h3>
        <p className="mb-6">
          We source and supply rugged, industrial-grade machinery designed to
          meet the demands of mining, construction and civil engineering
          environments. All equipment is procured from trusted manufacturers and
          delivered across the UK with full logistics support.
        </p>
        <a
          href="#contact"
          className="bg-yellow-500 text-black py-2 px-6 rounded-md font-semibold transition duration-150 hover:bg-yellow-400 cursor-pointer"
        >
          Get a Quote
        </a>
      </div>

      {/* Construction Materials - Right */}
      <div className="bg-neutral-900 text-neutral-200 p-6 rounded-md max-w-2xl ml-auto space-y-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
        <FaCubes size={40} className="text-yellow-500" />
        <h3 className="text-lg font-bold text-white">
          Construction Material Supply
        </h3>
        <p className="mb-6">
          From aggregates and concrete products to structural materials, we
          provide bulk construction supplies tailored to both domestic and
          commercial building projects. No matter the scale, we deliver the
          right materials where and when you need them.
        </p>
        <a
          href="#contact"
          className="bg-yellow-500 text-black py-2 px-6 rounded-md font-semibold transition duration-150 hover:bg-yellow-400 cursor-pointer"
        >
          Get a Quote
        </a>
      </div>

      {/* Procurement & Logistics - Left */}
      <div className="bg-neutral-900 text-neutral-200 p-6 rounded-md max-w-2xl space-y-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
        <FaTruck size={40} className="text-yellow-500" />
        <h3 className="text-lg font-bold text-white">
          Procurement & Logistics Support
        </h3>
        <p className="mb-6">
          Acting as trusted intermediaries, we manage the entire supply chain
          between suppliers and contractors — from sourcing and negotiation to
          transportation and on-site delivery — ensuring a seamless and
          efficient procurement experience.
        </p>
        <a
          href="#contact"
          className="bg-yellow-500 text-black py-2 px-6 rounded-md font-semibold transition duration-150 hover:bg-yellow-400 cursor-pointer"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
}
