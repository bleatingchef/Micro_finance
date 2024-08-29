import React from 'react';
import bg_nav from "../assets/nav_below_bg.png";

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <img src={bg_nav} className="w-full h-auto mt-4" alt="" />
        <div className="absolute right-0 top-0 bottom-0 flex flex-col items-end justify-center p-8
          lg:right-0 lg:p-8 md:max-w-full sm:max-w-md sm:left-0 sm:right-0 sm:p-4">

          {/* Apply text size reduction and color for smaller screens */}
          <h1 className="text-lg sm:text-7xl mt-2 ml-5 font-bold md:mb-4 text-black ">
            APPLY NOW
          </h1>
          <h4 className="text-xs sm:text-5xl md:mt-5 md:mb-8 text-black text-end">
            GET FUNDED FAST
          </h4>

          {/* Paragraph is hidden on smaller screens */}
          <p className="text-lg max-w-3xl font-semibold text-black hidden sm:block text-end">
            Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled it To Make A Type Specimen Book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
