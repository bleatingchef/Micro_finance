import React from 'react';
import referBg from "../assets/referBg.png";
import referline1 from "../assets/referline1.png";
import moneySack from "../assets/moneySack.png";
import circleImage1 from "../assets/circleimg1.png";
import arcimg from "../assets/arc.png";
import downarc from "../assets/downarc.png";
import orangeCircleImg from "../assets/orangecircleimg.png";
import ss from "../assets/ssimg2.png"
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
        <div className="relative">
          <img src={referBg} className="w-full h-auto" alt="" />
        </div>
        <div className="relative flex-grow pt-20 pb-20">
          <h1 className="text-7xl text-slate-950 font-bold ml-20">More the referrals, more the rewards!</h1>
          <img src={referline1} className="ml-20 pt-5 mb-10" alt="underline" />
          <h3 className="ml-20 text-4xl">Earn Unlimited Points With Your Friends.</h3>
          <div className="ml-20 mt-10">
            <p className="text-5xl font-semibold">Refer 1 = Earn ₹75</p>
            <p className="mt-10 text-5xl font-semibold">Refer 5 = Earn ₹375</p>
            <p className="mt-10 text-5xl font-semibold">Refer 10 = Earn ₹750</p>
          </div>
          <img src={moneySack} className="absolute right-20 bottom-0 h-auto" alt="Money Sack" />
        </div>
        <div>
          <h1 className="text-7xl text-slate-950 font-bold ml-20">How Refer and Earn Works</h1>
          <img src={referline1} className="ml-20 pt-5 mb-10" alt="underline" />
          <img src={ss} className='ml-64' style={{width:'1350px'}} alt="" />

          {/* <div className="flex justify-around ml-20 mr-20">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex items-center justify-center"
                style={{
                  height: '300px',
                  width: '300px',
                  marginTop: index % 2 === 0 ? '0px' : '20px', 
                }}
              >
                <img
                  src={step.arc}
                  className="absolute"
                  style={{ height: '300px', width: '300px' }}
                  alt={`Arc for Step ${step.id}`}
                />

                <img
                  src={step.image}
                  className={`absolute rounded-full ${step.isActive ? '' : ''}`}
                  style={{ height: '240px', width: '240px' }}
                  alt={`Step ${step.id}`}
                />

                <div
                  className="absolute flex items-center justify-center rounded-full"
                  style={{
                    height: '80px',
                    width: '80px',
                    backgroundImage: `url(${step.orangeCircle})`,
                    backgroundSize: 'cover',
                    top: '-40px',
                  }}
                >
                  <span className="text-black text-3xl font-bold">{step.id}</span>
                </div>

                <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold text-center px-2">
                  {step.text}
                </span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ReferHero;
