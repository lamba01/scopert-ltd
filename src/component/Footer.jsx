import React from "react";
import footerlogo from "../assets/scopert-logo.png";

export default function Footer() {
  return (
    <footer
      className="bg-black text-white pt-8 pb-2 px-6 mt-40 sm:mt-2"
      id="footer"
    >
      <main className="flex flex-col sm:flex-row gap-5 justify-between">
        {/* logo + tagline */}
        <div className="max-w-6xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <img src={footerlogo} alt="Scopert logo" className="w-20" />
          <div>
            <h4 className="text-xl font-semibold">Scopert Limited</h4>
            <span className="italic text-white/70">
              Supplying Industry. Delivering Reliability.
            </span>
          </div>
        </div>

        {/* contact info */}
        <div>
          <p className="text-white/70 capitalize">
            <strong className="text-white">Address :</strong> 7 ARLA PLACE,
            RUISLIP, UNITED KINGDOM, HA4 0FF
          </p>
          <p className="text-white/70">
            <strong className="text-white">Email :</strong>
            <a href="mailto:info@scopertltd.co.uk"> info@scopertltd.co.uk</a>
          </p>
          <p className="text-white/70">
            <strong className="text-white">Phone :</strong>
            <a href="tel:+447534382292" className="underline">
              {" "}
              +44-753-438-2292
            </a>{" "}
            ,{" "}
            <a href="tel:+442038452980" className="underline">
              +44-203-845-2980
            </a>
          </p>
        </div>
      </main>

      <div className="border-t border-gray-300 w-full mt-4"></div>
      <div className="w-full text-center pt-2 text-sm text-gray-200">
        &copy; {new Date().getFullYear()} Scopert Limited. All rights reserved.
      </div>
    </footer>
  );
}
