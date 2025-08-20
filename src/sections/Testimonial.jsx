import React from "react";

const testimonials = [
  {
    quote:
      "Fast and reliable supply. The machinery was delivered exactly when we needed it and in perfect working condition. Excellent service from start to finish.",
    author: "J. Thompson, Site Manager",
  },
  {
    quote:
      "Great communication throughout the entire process. They sourced the exact equipment we needed and handled all the logistics with no issues.",
    author: "S. Murphy, Procurement Lead",
  },
  {
    quote:
      "Professional, knowledgeable and very easy to work with. Their experience in the industry really shows. Highly recommended for any industrial supply needs.",
    author: "A. Patel, Project Engineer",
  },
];

export default function Testimonial() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-gray-100">
      {/* Heading + underline block */}
      <div className="relative mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold pb-4">Client Reviews</h2>
        <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 h-1 w-10 bg-yellow-500"></span>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-md shadow-sm"
            data-aos="fade-up"
          >
            <div className="text-yellow-500 mb-2 text-center">★★★★★</div>
            <p>{`“${t.quote}”`}</p>
            <span className="block mt-4 font-semibold">— {t.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
