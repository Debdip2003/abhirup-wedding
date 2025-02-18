import React from "react";
import image4 from "../asset/image4.jpg";

const EngagementBanner = () => {
  return (
    <section
      className="relative w-full h-full flex items-center text-white text-center bg-cover bg-center px-4 py-16 md:py-24"
      style={{
        backgroundImage: `url('${image4}')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col md:flex-row w-full justify-between items-center transform translate-y-[-150%] md:translate-y-[-35%]">
        {" "}
        {/* Increased negative translateY */}
        <div className="text-left md:text-left max-w-lg mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-cursive mt-2 leading-relaxed">
            Looking forward to seeing you! ♡
          </h2>
        </div>
        <p className="text-xl md:text-4xl font-bold font-sans">20/02/2025</p>
      </div>
    </section>
  );
};

export default EngagementBanner;
