import React from 'react';
import ourproductline from "../assets/ourproductline.png";
import coin from "../assets/coin.png"; // Import the coin image

const OurProduct = () => {
  return (
    <div className="flex-grow pt-20 pb-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-950 font-bold ml-4 sm:ml-8 md:ml-12 lg:ml-20">
        OUR PRODUCTS
      </h1>
      <img src={ourproductline} className="ml-4 sm:ml-8 md:ml-12 lg:ml-20 pt-5 mb-10 w-1/2 sm:w-1/3 lg:w-auto" alt="underline" />
      <h3 className="ml-4 sm:ml-8 md:ml-12 lg:ml-20 text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-10">
        Get Instant Loan Upto ₹5 Lakhs
      </h3>

      {/* Product Cards */}
      <div className="flex flex-col md:space-x-5 ml-5 mr-5 sm:flex-row sm:justify-around mb-10">
        <div className="bg-slate-950 text-white p-6 sm:p-8 rounded-2xl w-full sm:w-1/3 mb-6 sm:mb-0 flex flex-col justify-between">
          <div className="flex items-center mb-6">
            <img src={coin} className="h-8 sm:h-12 w-8 sm:w-12 mr-4" alt="coin" />
            <h2 className="text-xl sm:text-2xl font-bold">Up To ₹500000</h2>
          </div>
          <p className="text-base sm:text-lg mb-4">Personal Loan - Salaried</p>
          <div className="flex justify-between items-center">
            <p className="text-sm sm:text-base">Tenure Upto 36 Months</p>
            <button className="text-yellow-500 font-bold p-2 rounded text-sm sm:text-base">KNOW MORE</button>
          </div>
        </div>

        <div className="bg-slate-950 text-white p-6 sm:p-8 rounded-2xl w-full sm:w-1/3 mb-6 sm:mb-0 flex flex-col justify-between">
          <div className="flex items-center mb-6">
            <img src={coin} className="h-8 sm:h-12 w-8 sm:w-12 mr-4" alt="coin" />
            <h2 className="text-xl sm:text-2xl font-bold">Up To ₹800000</h2>
          </div>
          <p className="text-base sm:text-lg mb-4">Flexi Personal Loan</p>
          <div className="flex justify-between items-center">
            <p className="text-sm sm:text-base">Tenure Upto 10 Months</p>
            <button className="text-yellow-500 font-bold p-2 rounded text-sm sm:text-base">KNOW MORE</button>
          </div>
        </div>

        <div className="bg-slate-950 text-white p-6 sm:p-8 rounded-2xl w-full sm:w-1/3 flex flex-col justify-between">
          <div className="flex items-center mb-6">
            <img src={coin} className="h-8 sm:h-12 w-8 sm:w-12 mr-4" alt="coin" />
            <h2 className="text-xl sm:text-2xl font-bold">Up To ₹400000</h2>
          </div>
          <p className="text-base sm:text-lg mb-4">Business Loan</p>
          <div className="flex justify-between items-center">
            <p className="text-sm sm:text-base">Tenure Upto 24 Months</p>
            <button className="text-yellow-500 font-bold p-2 rounded text-sm sm:text-base">KNOW MORE</button>
          </div>
        </div>
      </div>

      <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-20 mr-4 sm:mr-8 md:mr-12 lg:mr-20 bg-white p-6 sm:p-10 rounded">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black">
          For Example, If You Are A Salaried Individual Taking A Loan Amount Of ₹50,000 At The Rate Of 20% P.A. And With A Tenure Of 12 Months; The Amount Disbursed To Your Account Would Be ₹48,289 After Deducting The Following Applicable Fees And Charges:
        </p>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">Processing Fee: ₹1,250 (2.5%)</p>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">Onboarding Fee For New Customers: ₹200</p>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">GST On Onboarding And Processing Fee: ₹261</p>
        <p className="mt-10 text-base sm:text-lg md:text-xl lg:text-2xl">
          Your EMI Will Be ₹4,632 For Months With A Total Repayment Amount Of ₹55,580. The Total Interest Will Be ₹5,580 At An Annual Percentage Rate (APR) Of 26.92%
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-10">
          * The Exact Tenure And Interest Rate May Vary As Per The Policies Of The Company In Vogue, Based On And Not Limited To The Customer Profile, Past Track Record, Loan Amount, Etc.
        </p>
      </div>
    </div>
  );
};

export default OurProduct;
