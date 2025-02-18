import React from "react";
import image5 from "../asset/image5.jpg";
import image6 from "../asset/image6.jpg";

const BrideandGroom = () => {
  return (
    <div className="bg-[#f9f6f3] min-h-screen flex flex-col items-center justify-between px-6 py-24">
      {/* Bride & Groom Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12 relative">
        {/* Bride Card */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 sm:p-10 text-center w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] transition-all duration-300 hover:scale-105 hover:shadow-3xl">
          <img
            src={image6}
            alt="Bride"
            className="w-32 sm:w-40 h-32 sm:h-40 mx-auto rounded-full object-cover border-4 border-[#b08968] shadow-md"
          />
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mt-6 text-gray-900 font-cursive">
            Subhashri Kundu
          </h2>
          <p className="italic text-[#b08968] font-semibold text-xl sm:text-2xl mt-2 font-sans">
            The Bride
          </p>
          <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed px-2 sm:px-4 font-sans">
            Olivia fringilla dui at elit finibus viverra thenec a lacus seda
            themo the miss druane semper non the fermen.
          </p>
        </div>

        {/* Beating Heart Centered Correctly */}
        <div className="flex items-center justify-center">
          <span className="text-[#b08968] text-[80px] sm:text-[100px] md:text-[120px] animate-heartbeat">
            ♡
          </span>
        </div>

        {/* Groom Card */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 sm:p-10 text-center w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] transition-all duration-300 hover:scale-105 hover:shadow-3xl">
          <img
            src={image5}
            alt="Groom"
            className="w-32 sm:w-40 h-32 sm:h-40 mx-auto rounded-full object-cover border-4 border-[#b08968] shadow-md"
          />
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mt-6 text-gray-900 font-cursive">
            Abhirup Das
          </h2>
          <p className="italic text-[#b08968] font-semibold text-xl sm:text-2xl mt-2 font-sans">
            The Groom
          </p>
          <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed px-2 sm:px-4">
            Enrico fringilla dui at elit finibus viverra thenec a lacus seda
            themo the miss druane semper non the fermen.
          </p>
        </div>
      </div>

      {/* Wedding Announcement at the Bottom */}
      <div className="text-center pt-16 sm:pt-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-cursive text-[#b08968] drop-shadow-lg">
          Are getting married!
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mt-2">
          February 20, 2025 — Bardhaman, West Bengal
        </p>
      </div>

      {/* Tailwind Custom Animation */}
      <style>
        {`
          @keyframes heartbeat {
            0% { transform: scale(1); }
            30% { transform: scale(1.2); }
            50% { transform: scale(1); }
            70% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }

          .animate-heartbeat {
            animation: heartbeat 1.3s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default BrideandGroom;
