import React, { useState } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.submit(); // send to Formspree
    e.target.reset(); // clear the form
    setSubmitted(true); // show thank-you message
  };

  return (
    <section
      className="w-full py-16 flex flex-col sm:flex-row gap-0"
      id="contact"
    >
      <div className="bg-yellow-500 sm:px-14 px-4 py-6 sm:w-1/2 w-full">
        <div className="relative mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold pb-4">Contact Us</h2>
          <span className="absolute left-0 bottom-0 h-1 w-12 bg-black"></span>
        </div>

        <form
          action="https://formspree.io/f/mgvzjleb"
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border-[1px] border-solid bg-white border-white p-2 w-full sm:w-1/2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-[1px] border-solid bg-white border-white p-2 w-full sm:w-1/2"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            className="border-[1px] border-solid bg-white border-white p-2 mb-4 w-full h-28"
          />

          <button
            type="submit"
            className="border-2 border-solid border-white text-white py-2 px-6 font-semibold transition duration-150 hover:bg-yellow-400 cursor-pointer"
          >
            Send Message
          </button>

          {submitted && (
            <p className="mt-3 text-sm text-white/90">
              Thank you for getting in touch — we’ll respond as soon as
              possible.
            </p>
          )}
        </form>
      </div>

      <aside className="sm:w-1/2 w-full">
        <div className="bg-black w-full h-24"></div>
        <div className="sm:py-8 sm:px-14 p-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaLocationDot />
            10 GRAPHITE COURT, 7 ARLA PLACE, RUISLIP, HA4 0FF
          </h3>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaPhone />
            +44 753 438 2292
          </h3>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <IoMdMail />
            info@scopertltd.co.uk
          </h3>
        </div>
      </aside>
    </section>
  );
}
