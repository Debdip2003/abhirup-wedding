import React from "react";
import image3 from "../asset/image3.jpg";

const OurStory = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-100 py-16 px-4 lg:py-24 lg:px-6 relative">
      {/* Image Container with Brown Border */}
      <div className="relative w-full lg:w-1/2 flex justify-center mb-8 lg:mb-8">
        {" "}
        {/* Main Image */}
        <img
          src={image3}
          alt="Wedding couple"
          className="w-[90%] max-w-lg rounded-lg shadow-lg relative z-10" // Increased width for mobile
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-2/3 px-4 lg:px-6 text-center lg:text-left">
        {" "}
        {/* Added text-center for mobile */}
        <h3 className="text-[#c7a17a] font-serif text-lg italic font-sans">
          Our Love.
        </h3>
        <h2 className="text-3xl md:text-4xl font-serif font-bold my-4 font-cursive">
          OUR STORY
        </h2>
        <p className="text-gray-700 mb-4 font-sans">
          Curabit aliquet orci elit genes tristique lorem commodo vitae. Tuliaum
          tincidunt nete sede gravida aliquam, neque libero hendrerit magna, sit
          amet mollis lacus ithe maurise. Dunya erat volutpat edat themo the
          druanye semper.
        </p>
        <p className="text-gray-700 mb-4 font-sans">
          Luality fringilla duiman at elit vinibus viverra nec a lacus themo the
          druanye sene sollicitudin mi suscipit non sagie the fermen.
        </p>
        <p className="text-gray-700 mb-4 font-sans">
          Phasellus viverra tristique justo duis vitae diam neque nivamus ac est
          augue artine aringilla dui at elit finibus viverra nec a lacus. Nedana
          themo eros odio semper soe suscipit non.
        </p>
        {/* Engagement Date */}
        <h3 className="text-xl font-semibold mt-6 font-cursive">
          Dec 5th, 2023, We Said Yes!
        </h3>
        <p className="text-gray-700 font-sans">
          Luality fringilla duiman at elit finibus viverra nec a lacus themo the
          druanye sene sollicitudin mi suscipit non sagie the fermen.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
