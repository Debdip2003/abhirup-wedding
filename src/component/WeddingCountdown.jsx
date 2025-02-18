import React from "react";
import Countdown from "react-countdown";
import image2 from "../asset/image2.jpg";

const WeddingCountdown = () => {
  // Set wedding date (February 20, 2025, 11:48 PM)
  const weddingDate = new Date(2025, 1, 20, 23, 48, 0).getTime();

  // Renderer function for custom countdown display
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <div
        className="h-screen w-screen flex flex-col items-center justify-center text-white relative bg-cover bg-center px-4 py-8"
        style={{
          backgroundImage: `url('${image2}')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {completed ? (
          <span className="relative z-10 text-center text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg px-6">
            Congratulations! You're Married! ♡
          </span>
        ) : (
          <>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold drop-shadow-lg relative z-10 text-center font-cursive">
              We will become a family in
            </h2>

            {/* Countdown Container */}
            <div className="relative z-10  p-6 sm:p-10  mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                {[
                  { label: "DAYS", value: days },
                  { label: "HOURS", value: hours },
                  { label: "MINUTES", value: minutes },
                  { label: "SECONDS", value: seconds },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white bg-opacity-20 px-4 py-6 rounded-md"
                  >
                    <span className="text-5xl sm:text-6xl font-bold drop-shadow-md">
                      {item.value}
                    </span>
                    <span className="text-sm sm:text-lg uppercase font-medium tracking-wide">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return <Countdown date={weddingDate} renderer={renderer} />;
};

export default WeddingCountdown;
