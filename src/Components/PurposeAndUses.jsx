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
    <div>
      <div className="flex-grow pt-20 pb-20">
        <h1 className="text-7xl text-slate-950 font-bold ml-20">PURPOSE AND USES</h1>
        <img src={offer_underline} className="ml-20 pt-5 mb-10" alt="underline" />
        <p className="text-xl text-slate-950 mb-10 ml-20 text-start">
          Find the loan that’s right for your unique needs. Choose from a range of loan options below:
        </p>
        <div className="grid grid-cols-4 gap-6 ml-20 mr-20">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-slate-950 text-white hover:bg-white hover:text-slate-950 hover:outline hover:outline-slate-950 rounded-lg pl- p-4"
            >
              <div className="bg-white rounded-full p-4 outline outline-slate-950">
                <img src={item.icon} alt={item.label} className="w-10 h-10" />
              </div>
              <span className="ml-8 text-xl text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurposeAndUses;
