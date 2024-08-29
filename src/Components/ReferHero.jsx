import React from 'react';
import referBg from "../assets/referBg.png";
import referline1 from "../assets/referline1.png";
import moneySack from "../assets/moneySack.png";
import circleImage1 from "../assets/circleimg1.png";
import arcimg from "../assets/arc.png";
import downarc from "../assets/downarc.png";
import orangeCircleImg from "../assets/orangecircleimg.png";
import ss from "../assets/ssimgnew.png";

const steps = [
  {
    id: 1,
    image: circleImage1,
    arc: arcimg,
    orangeCircle: orangeCircleImg,
    text: "Get Your Unique Referral Code On The App",
    isActive: true, // Indicates the active step
  },
  {
    id: 2,
    image: circleImage1,
    arc: downarc,
    orangeCircle: orangeCircleImg,
    text: "Share It With A Friend",
  },
  {
    id: 3,
    image: circleImage1,
    arc: arcimg,
    orangeCircle: orangeCircleImg,
    text: "Your Friend Takes A Loan",
  },
  {
    id: 4,
    image: circleImage1,
    arc: downarc,
    orangeCircle: orangeCircleImg,
    text: "Both You And Your Friend Earn ₹75 Each",
  },
];

const ReferHero = () => {
  return (
    <>
      <div>
        {/* Background Image */}
        <div className="relative md:mt-0 mt-4">
          <img src={referBg} className="w-full h-auto" alt="Background" />
        </div>

        {/* Main Content */}
        <div className="relative flex flex-col items-start px-4 md:px-20 py-10">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-slate-950 font-bold text-center md:text-left">
            More the referrals, more the rewards!
          </h1>
          <img src={referline1} className="mx-auto md:ml-0 pt-5 mb-10" alt="underline" />
          <h3 className="text-2xl md:text-4xl lg:text-5xl text-center md:text-left">
            Earn Unlimited Points With Your Friends.
          </h3>
          <div className="text-center md:text-left mt-10">
            <p className="text-3xl md:text-5xl font-semibold">Refer 1 = Earn ₹75</p>
            <p className="mt-4 text-3xl md:text-5xl font-semibold">Refer 5 = Earn ₹375</p>
            <p className="mt-4 text-3xl md:text-5xl font-semibold">Refer 10 = Earn ₹750</p>
          </div>
          <img src={moneySack} className="absolute hidden md:block right-4 bottom-0 md:right-20 md:bottom-10 h-auto w-32 md:w-auto" alt="Money Sack" />
        </div>

        {/* How Refer and Earn Works */}
        <div className="px-4 md:px-20 py-10">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-slate-950 font-bold text-center md:text-left">
            How Refer and Earn Works
          </h1>
          <img src={referline1} className="mx-auto md:ml-0 pt-5 mb-10" alt="underline" />
          <img src={ss} className='mx-auto mt-10 md:mt-24 w-full md:w-1350' alt="Steps Illustration" />
          {/* Uncomment below code if you want to include steps */}
          
        </div>
      </div>
    </>
  );
};

export default ReferHero;
