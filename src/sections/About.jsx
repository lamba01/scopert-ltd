import React from "react";

export default function About() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16" id="about">
      {/* Heading + underline block */}
      <div className="relative mb-8 ">
        <h2 className="text-2xl sm:text-3xl font-bold pb-4">About Us</h2>
        <span className="absolute left-0 bottom-0 h-1 w-10 bg-yellow-500"></span>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Left side (first two paragraphs) */}
        <div className="space-y-4">
          <p>
            <strong>SCOPERT LIMITED</strong> is a wholesale supplier
            specialising in heavy-duty mining, construction, and civil
            engineering machinery. We focus on sourcing and distributing
            high-performance equipment in large quantities to meet the demanding
            needs of industrial projects across the country. Working closely
            with trusted manufacturers and approved suppliers, we ensure every
            unit we deliver meets the strict standards required by today’s
            professional operators.
          </p>

          <p>
            Beyond machinery supply, we support clients through an end-to-end
            procurement process — acting as a reliable intermediary between
            suppliers and buyers. Our team manages the complete logistics cycle,
            from sourcing and negotiation to nationwide delivery, ensuring a
            smooth and efficient transaction every time.
          </p>
        </div>

        {/* Right side (third paragraph) */}
        <div>
          <p>
            In addition to machinery, we also supply a wide range of bulk
            construction materials and support the delivery of both domestic and
            commercial building projects. Whether you’re overseeing a mining
            operation, civil engineering development or housing project, we
            provide the equipment and materials you need to keep your operations
            running safely, efficiently, and on schedule.
          </p>
        </div>
      </div>
    </section>
  );
}
