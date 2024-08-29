import React from 'react';
import offer_underline from '../assets/offer_underline.png';
import travelIcon from '../assets/travel.png';
import educationIcon from '../assets/education.png';
import emergencyIcon from '../assets/emergency.png';
import shoppingIcon from '../assets/shopping.png';
import weddingIcon from '../assets/wedding.png';
import maternityIcon from '../assets/maternity.png';
import hobbiesIcon from '../assets/hobbies.png';
import occasionIcon from '../assets/occasion.png';
import giftingIcon from '../assets/gifting.png';
import opportunityIcon from '../assets/opportunity.png';
import lowSalaryIcon from '../assets/lowSalary.png';
import homeRenovationIcon from '../assets/homeReno.png';

const PurposeAndUses = () => {
  const items = [
    { icon: travelIcon, label: 'Travel' },
    { icon: educationIcon, label: 'Education' },
    { icon: emergencyIcon, label: 'Emergency' },
    { icon: shoppingIcon, label: 'Shopping' },
    { icon: weddingIcon, label: 'Wedding' },
    { icon: maternityIcon, label: 'Maternity' },
    { icon: hobbiesIcon, label: 'Hobbies' },
    { icon: occasionIcon, label: 'Occasion' },
    { icon: giftingIcon, label: 'Gifting' },
    { icon: opportunityIcon, label: 'Opportunity' },
    { icon: lowSalaryIcon, label: 'Low Salary' },
    { icon: homeRenovationIcon, label: 'Home Renovation' },
  ];

  return (
    <div className="px-4 md:px-20 py-10">
      <div className="flex-grow pt-10 pb-10">
        <h1 className="text-3xl md:text-7xl text-slate-950 font-bold text-center md:text-left">
          PURPOSE AND USES
        </h1>
        <img src={offer_underline} className="mx-auto md:ml-0 pt-5 mb-10" alt="underline" />
        <p className="text-lg md:text-xl text-slate-950 mb-10 text-center md:text-left">
          Find the loan that’s right for your unique needs. Choose from a range of loan options below:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:flex-row bg-slate-950 text-white hover:bg-white hover:text-slate-950 hover:outline hover:outline-slate-950 rounded-lg p-4"
            >
              <div className="bg-white rounded-full p-4 outline outline-slate-950 md:mr-5 mb-4 md:mb-0">
                <img src={item.icon} alt={item.label} className="w-10 h-10" />
              </div>
              <span className="text-sm md:text-xl text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurposeAndUses;
