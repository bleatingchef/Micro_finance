import React from 'react';
import offer_underline from "../assets/offer_underline.png";
import cardbg from "../assets/choosecard.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";

// Paths to your images
const iconPaths = [
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6
];

const cardDetails = [
  {
    title: 'LOWER INTEREST RATES',
    description: 'Get Loans For Multiple Purposes At Lower Interest Rates To Suit Your Needs',
    icon: iconPaths[0]
  },
  {
    title: 'FAST PROCESSING AND DISBURSAL',
    description: 'Apply Online, Check Your Eligibility And Get Money Directly In Your Bank In 10 Minutes',
    icon: iconPaths[1]
  },
  {
    title: 'EASY REPAYMENT OPTIONS',
    description: 'Repay The Loan Amount In Easy EMI With Flexible Tenure Options',
    icon: iconPaths[2]
  },
  {
    title: '100% PAPERLESS',
    description: 'No Paperwork Or Physical Documentation Is Required, And You Can Apply And Get A Personal Loan Completely Online.',
    icon: iconPaths[3]
  },
  {
    title: 'SAFE, SECURE AND TRANSPARENT',
    description: 'Our Loan Application Process Is Fully Secured And Safe. There Are No Hidden Charges.',
    icon: iconPaths[4]
  },
  {
    title: 'COLLATERAL FREE',
    description: 'No Collateral Is Required To Apply For Our Personal Loans.',
    icon: iconPaths[5]
  }
];

const WhyChooseUs = () => {
  return (
    <div className="p- mt-10">
      <div className="flex-grow">
        <h1 className="text-7xl text-slate-950 font-bold ml-20 ">WHY CHOOSE US?</h1>
        <img src={offer_underline} className="ml-20 pt-5 mb-10" alt="underline" />
      </div>
      <div className="flex flex-wrap justify-center mt-5">
        {cardDetails.map((card, index) => (
          <div 
            key={index} 
            className="relative m-2 my-10 rounded-lg flex-col items-center text-white" 
            style={{ 
              width: '30rem', 
              minWidth: '250px', 
              minHeight: '25rem', 
              backgroundImage: `url(${cardbg})`, 
              backgroundSize: 'contain', 
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }} // Adjusted background styles
          >
            <div className="absolute top-6 left-16 bg-white rounded-full p-3">
              <img src={card.icon} alt={`icon-${index}`} className="w-16 h-16" />
            </div>
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center px-">
              <h2 className="text-2xl  pb-5 text-start font-bold">{card.title}</h2>
              <p className="mt-2 text-start font-semibold">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
