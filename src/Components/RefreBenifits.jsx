import React from 'react';
import coinImage from '../assets/coinImg.png'; 
import underlineImage from '../assets/referLine.png'; 
import whiteline from "../assets/whiteline.png";
import pointline from "../assets/pointline.png";
import redeemline from "../assets/redeemline.png";
import howBg from "../assets/howBg.png";

const RefreBenefits = () => {
  return (
    <div className="mb-24">
      {/* Benefits Section */}
      <div className="mt-16 px-4 md:px-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-slate-950 font-bold text-center">BENEFITS FOR REFERRER AND REFERRED</h1>
        <img src={underlineImage} alt="Underline" className="mx-auto my-4" />
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          {/* Benefits for Referrer */}
          <div className="bg-slate-950 text-white p-8 md:p-12 rounded-3xl w-full md:w-1/2 lg:w-1/3">
            <h3 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold">Benefits For Referrer</h3>
            <img src={whiteline} className='mx-auto my-4' alt="" />
            <ul className="list-disc text-base md:text-lg mt-2 space-y-2">
              <li>Earn 25 Encashable Points Each Time A Referred Friend Gets Confirmed On The App</li>
              <li>Earn 50 Encashable Points Each Time A Referred Friend Takes A Loan</li>
              <li>You Can Redeem The Earned Points And Transfer Them Directly To Your Bank Account</li>
            </ul>
          </div>
          {/* Benefits for Referred */}
          <div className="bg-slate-950 text-white p-8 md:p-12 rounded-3xl w-full md:w-1/2 lg:w-1/3">
            <h3 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold">Benefits for Referred</h3>
            <img src={whiteline} className='mx-auto my-4' alt="" />
            <ul className="list-disc text-base md:text-lg mt-2 space-y-2">
              <li>Earn 25 encashable points when your profile is confirmed</li>
              <li>Earn 50 encashable points when you take your first loan</li>
              <li>Hassle-free loan disbursal within 10 mins</li>
            </ul>
          </div>
        </div>
      </div>

      {/* How To Earn Section */}
      <div className="bg-gray-800 text-white p-8 md:p-16 mt-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-bold">HOW TO EARN UNLIMITED REFER POINTS</h1>
        <img src={underlineImage} alt="Underline" className="mx-auto my-4" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
          <img src={coinImage} alt="Coin" className="w-40 md:w-64 h-40 md:h-64" />
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-left">Here’s How You Can Earn Unlimited Points:</h2>
            <ul className="list-disc list-inside text-base md:text-lg mt-2">
              <li>Go To The “Refer” Page On Your App</li>
              <li>Copy Your Unique Referral Code</li>
              <li>Share It With Your Friends</li>
              <li>Wait And Earn!</li>
            </ul>
          </div>
        </div>
      </div>

      {/* How To Check Referral Points Section */}
      <div className="bg-slate-950 text-white p-8 md:p-16 mt-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-bold">HOW TO CHECK YOUR REFERRAL POINTS</h1>
        <img src={underlineImage} alt="Underline" className="mx-auto my-4" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
          <p className="text-base md:text-lg lg:text-2xl max-w-xl text-center md:text-left">
            Your KreditBee Points Are Available On The App. Click On The “Refer” Icon On The Home Page And Check All Your Referral Details In One Place.
          </p>
          <img src={coinImage} alt="Coin" className="w-40 md:w-64 h-40 md:h-64" />
        </div>
      </div>

      {/* How To Use Points Section */}
      <div className="bg-gray-800 text-white p-8 md:p-16 mt-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-bold">HOW TO USE YOUR POINTS?</h1>
        <img src={pointline} alt="Underline" className="mx-auto my-4" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
          <img src={coinImage} alt="Coin" className="w-40 md:w-64 h-40 md:h-64" />
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-left">You Can Use The Points:</h2>
            <ul className="list-disc list-inside text-base md:text-lg mt-2">
              <li>To Reduce Your Processing Fee On Loans</li>
              <li>To Transfer It To Your Bank Account</li>
              <li>To Invest In KreditBee 24k Gold</li>
            </ul>
          </div>
        </div>
      </div>

      {/* How To Redeem Section */}
      <div className="bg-slate-950 text-white p-8 md:p-16 mt-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-bold">HOW TO REDEEM?</h1>
        <img src={redeemline} alt="Underline" className="mx-auto my-4" />
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
          <p className="text-base md:text-lg lg:text-2xl max-w-xl text-center md:text-left">
            You Can Click On “Redeem Points” In The Referral Window To Redeem Your Points.
          </p>
          <img src={coinImage} alt="Coin" className="w-40 md:w-64 h-40 md:h-64" />
        </div>
      </div>
    </div>
  );
};

export default RefreBenefits;
