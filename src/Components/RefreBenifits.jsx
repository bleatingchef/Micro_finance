import React from 'react';
import coinImage from '../assets/coinImg.png';  // Update this path as per your project structure
import underlineImage from '../assets/referLine.png';  // Update this path as per your project structure
import whiteline from "../assets/whiteline.png"
import pointline from "../assets/pointline.png"
import redeemline from "../assets/redeemline.png"
import howBg from "../assets/howBg.png"

const RefreBenefits = () => {
  return (
    <div className="  mb-48">
      <div className="text mt-32">
      <h1 className="text-7xl text-slate-950 font-bold ml-20">BENEFITS FOR REFERRER AND REFERRED</h1>
        <img src={underlineImage} alt="Underline" className="ml-20 my-2" />
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-20 ml-20 mr-20">
          <div className="bg-slate-950 text-white p-16 rounded-3xl w-full md:w-1/3">
            <h3 className="text-4xl text-center font-semibold">Benefits For Referrer</h3>
            <img src={whiteline} className='pl-16 p-5' alt="" />
            <ul className="list-disc text-lg mt-2">
              <li>Earn 25 Encashable Points Each Time A Referred Friend Gets Confirmed On The App</li>
              <li>Earn 50 Encashable Points Each Time A Referred Friend Takes A Loan</li>
              <li>You Can Redeem The Earned Points And Transfer Them Directly To Your Bank Account</li>
            </ul>
          </div>
          <div className="bg-slate-950 text-white p-16 rounded-3xl w-full md:w-1/3 " >
            <h3 className="text-4xl text-center font-semibold">Benefits for Referred</h3>
            <img src={whiteline} className='pl-16 p-5' alt="" />
            <ul className="list-disc text-lg mt-2">
              <li>Earn 25 encashable points when your profile is confirmed</li>
              <li>Earn 50 encashable points when you take your first loan</li>
              <li>Hassle-free loan disbursal within 10 mins</li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" bg-gray-800 text-white p-20 mt-20">
      <h1 className="text-5xl text-white font-bold ml-20">HOW TO EARN UNLIMITED REFER POINTS</h1>
        <img src={underlineImage} alt="Underline" className="ml-20 my-5" />
        <div className="flex flex-col md:flex-row justify-start space-y-4 md:space-y-20 md:space-x-80 mt-6 ml-60">
          <img src={coinImage} alt="Coin" className="w-64 h-64" />
          <div>
            <h1 className="text-left text-3xl">
              Here’s How You Can Earn Unlimited Points:
            </h1>
            <ul className="list-disc list-inside text-xl text-left mt-2">
              <li>Go To The “Refer” Page On Your App</li>
              <li>Copy Your Unique Referral Code</li>
              <li>Share It With Your Friends</li>
              <li>Wait And Earn!</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text- bg-slate-950 text-white p-20">
      <h1 className="text-5xl text-white font-bold ml-20">HOW TO CHECK YOUR REFERRAL POINTS</h1>
      <img src={underlineImage} alt="Underline" className="ml-20 my-5" />
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-80 mt-6 items-center">
          <p className="text-left text-3xl max-w-2xl">
            Your KreditBee Points Are Available On The App. Click On The “Refer” Icon On The Home Page And Check All Your Referral Details In One Place.
          </p>
          <img src={coinImage} alt="Coin" className="w-64 h-64" />
        </div>
      </div>


      <div className=" bg-gray-800 text-white p-20">
      <h1 className="text-5xl text-white font-bold ml-20">HOW TO USE YOUR POINTS?</h1>
        <img src={pointline} alt="Underline" className="ml-20 my-5" />
        <div className="flex flex-col md:flex-row justify-start space-y-4 md:space-y-20 md:space-x-80 mt-6 ml-60">
          <img src={coinImage} alt="Coin" className="w-64 h-64" />
          <div>
            <h1 className="text-left text-3xl">
            You Can Use The Points:
            </h1>
            <ul className="list-disc list-inside text-xl text-left mt-2">
            <li>To Reduce Your Processing Fee On Loans</li>
              <li>To Transfer It To Your Bank Account</li>
              <li>To Invest In KreditBee 24k Gold</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text- bg-slate-950 text-white p-20">
      <h1 className="text-5xl text-white font-bold ml-20">HOW TO REDEEM?</h1>
      <img src={redeemline} alt="Underline" className="ml-20 my-5" />
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-80 mt-6 items-center">
          <p className="text-left text-3xl max-w-2xl">
          You Can Click On “Redeem Points” In The Referral Window To Redeem Your Points.
          </p>
          <img src={coinImage} alt="Coin" className="w-64 h-64" />
        </div>
      </div>
    
    </div>
  );
};

export default RefreBenefits;
