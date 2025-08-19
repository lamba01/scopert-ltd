import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import chooseimg from "../assets/choose.png";

export default function WhyChooseUs() {
  return (
    <section className="w-full py-0 px-4 sm:px-8 lg:px-16">
      <div className="relative mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold pb-4">Only the best</h2>
        <span className="absolute left-0 bottom-0 h-1 w-10 bg-yellow-500"></span>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch justify-between">
        <ul className="space-y-4 sm:w-[35%] w-full bg-[#FFB400] px-4 py-12">
          <li className="flex items-start ">
            <FaAngleDoubleRight className="mt-1 mr-2 text-white" size={60} />
            <div className="">
              <span className="font-semibold">Trusted Supplier Network</span>
              <p>
                We work only with verified manufacturers and established
                partners to guarantee consistent quality.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <FaAngleDoubleRight className="mt-1 mr-2 text-white" size={60} />
            <div>
              <span className="font-semibold">
                End-to-End Logistics & Procurement Support
              </span>
              <p>
                From sourcing to delivery, we handle every step of the supply
                chain so you can focus on your core operations.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <FaAngleDoubleRight className="mt-1 mr-2 text-white" size={60} />
            <div>
              <span className="font-semibold">
                Large-Scale Machinery & Material Supply
              </span>
              <p>
                We have the capacity to supply large quantities of machinery and
                materials, ensuring you have what you need when you need it.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <FaAngleDoubleRight className="mt-1 mr-2 text-white" size={60} />
            <div>
              <span className="font-semibold">
                Reliable UK-Based Service and Delivery
              </span>
              <p>
                Registered and operating in the UK, we offer clear
                communication, accountability and timely delivery across the
                country.
              </p>
            </div>
          </li>
        </ul>
        <main className="flex flex-col items-center justify-center gap-0 w-full sm:w-[65%]">
          <img src={chooseimg} alt="Why Choose Us" />
          <div className="grid sm:grid-cols-2 font-bold w-full">
            <div className="bg-black text-white px-6 py-[20px] text-center">
              <h3 className="font-bold">2+</h3>
              <p className="uppercase text-sm">years established</p>
            </div>
            <div className=" bg-[#FFB400] text-black px-6 py-[20px] text-center">
              <h3 className="font-bold">20+</h3>
              <p className="uppercase text-sm">projects completed</p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
