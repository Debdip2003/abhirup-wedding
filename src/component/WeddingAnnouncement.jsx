import React from "react";
import { motion } from "framer-motion";
import image1 from "../asset/image1.jpg";

const WeddingAnnouncement = () => {
  return (
    <div
      className="relative w-screen h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-cursive font-bold drop-shadow-2xl tracking-wide transform translate-y-[-500%] md:translate-y-[-35%]">
          Abhirup & Avishri
        </h1>
        <p className="text-xl sm:text-2xl md:text-4xl mt-4 tracking-wide drop-shadow-lg font-light font-sans  transform translate-y-[-350%] md:translate-y-[-35%]">
          20 FEBRUARY, 2025 - BARDHAMAN
        </p>
      </div>

      {/* Heart at the Bottom */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 text-4xl sm:text-5xl md:text-6xl drop-shadow-lg text-white"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        ♡
      </motion.div>
    </div>
  );
};

export default WeddingAnnouncement;
