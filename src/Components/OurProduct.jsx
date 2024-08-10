import React from 'react';
import ourproductline from "../assets/ourproductline.png";
import coin from "../assets/coin.png"; // Import the coin image

const OurProduct = () => {
  return (
    <>
      <div className="flex-grow pt-20 pb-20">
        <h1 className="text-7xl text-slate-950 font-bold ml-20">OUR PRODUCTS</h1>
        <img src={ourproductline} className="ml-20 pt-5 mb-10" alt="underline" />
        <h3 className="ml-20 text-4xl mb-10">Get Instant Loan Upto ₹5 Lakhs</h3>

        {/* Product Cards */}
        <div className="flex justify-around mb-10">
          <div className="bg-slate-950 text-white p-8 rounded-2xl w-1/4 flex flex-col justify-between">
            <div className="flex items-center mb-6">
              <img src={coin} className="h-12 w-12 mr-4" alt="coin" />
              <h2 className="text-2xl font-bold">Up To ₹500000</h2>
            </div>
            <p className="text-lg mb-4">Personal Loan - Salaried</p>
            <div className="flex justify-between items-center">
              <p className="text-sm">Tenure Upto 36 Months</p>
              <button className="text-yellow-500 font-bold p-2 rounded">KNOW MORE</button>
            </div>
          </div>

          <div className="bg-slate-950 text-white p-8 rounded-2xl w-1/4 flex flex-col justify-between">
            <div className="flex items-center mb-6">
              <img src={coin} className="h-12 w-12 mr-4" alt="coin" />
              <h2 className="text-2xl font-bold">Up To ₹800000</h2>
            </div>
            <p className="text-lg mb-4">Flexi Personal Loan</p>
            <div className="flex justify-between items-center">
              <p className="text-sm">Tenure Upto 10 Months</p>
              <button className="text-yellow-500 font-bold p-2 rounded">KNOW MORE</button>
            </div>
          </div>

          <div className="bg-slate-950 text-white p-8 rounded-2xl w-1/4 flex flex-col justify-between">
            <div className="flex items-center mb-6">
              <img src={coin} className="h-12 w-12 mr-4" alt="coin" />
              <h2 className="text-2xl font-bold">Up To ₹400000</h2>
            </div>
            <p className="text-lg mb-4">Business Loan</p>
            <div className="flex justify-between items-center">
              <p className="text-sm">Tenure Upto 24 Months</p>
              <button className="text-yellow-500 font-bold p-2 rounded">KNOW MORE</button>
            </div>
          </div>
        </div>

        <div className="ml-20 mr-20 bg-white p-10">
          <p className="text-3xl text-black">
            For Example, If You Are A Salaried Individual Taking A Loan Amount Of ₹50,000 At The Rate Of 20% P.A. And With A Tenure Of 12 Months; The Amount Disbursed To Your Account Would Be ₹48,289 After Deducting The Following Applicable Fees And Charges:
          </p>
          <p className="mt-4 text-3xl">Processing Fee: ₹1,250 (2.5%)</p>
          <p className="mt-4 text-3xl">Onboarding Fee For New Customers: ₹200</p>
          <p className="mt-4 text-3xl">GST On Onboarding And Processing Fee: ₹261</p>
          <p className="mt-10 text-2xl">
            Your EMI Will Be ₹4,632 For Months With A Total Repayment Amount Of ₹55,580. The Total Interest Will Be ₹5,580 At An Annual Percentage Rate (APR) Of 26.92%
          </p>
          <p className="text-2xl mt-10">
            * The Exact Tenure And Interest Rate May Vary As Per The Policies Of The Company In Vogue, Based On And Not Limited To The Customer Profile, Past Track Record, Loan Amount, Etc.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurProduct;
