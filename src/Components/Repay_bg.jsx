import React from 'react';
import bg_repay from "../assets/repayBg.png";

const Repay_bg = () => {
  return (
    <div className="relative">
      <img src={bg_repay} className="w-full h-auto md:mt-0 mt-4" alt="Background" />

      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center p-8 text-black">
        <h1 className="text-xl sm:text-5xl md:text-6xl lg:text-7xl max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl font-bold  text-start">
          Grow Your Family
        </h1>
        <h4 className="text-xs sm:text-3xl md:text-4xl lg:text-5xl sm:max-w-md md:max-w-lg lg:max-w-2xl text-start md:mt-8 mt-0 mb-8">
          Not Just Your Debt: Smart Family Loans
        </h4>
      </div>
    </div>
  );
};

export default Repay_bg;
