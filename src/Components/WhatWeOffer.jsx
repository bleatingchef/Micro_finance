import React from 'react';
import offer_underline from "../assets/offer_underline.png";
import personal_loan_icon from "../assets/personal.png";
import flexi_loan_icon from "../assets/flexi.png";
import salaried_loan_icon from "../assets/salaried.png";
import business_loan_icon from "../assets/buisness.png"; // Ensure the file name is correct

const OfferCard = ({ icon, title, description }) => {
  return (
    <div className="flex outline rounded-xl hover:bg-slate-950 hover:text-white text-slate-950 space-x-5 p-8 m-4" style={{ width: '558px', height: '266px',top:'1216px', left:'55px' }}>
      <div className="mr-4 flex-shrink-0 rounded-full flex items-center justify-center" style={{ width: '6rem', height: '6rem',backgroundColor:" rgb(2 6 23)", }}>
        <img src={icon} alt={title} className="h-16 w-16" />
      </div>
      <div className=''>
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className='mt-10 text-md font-semibold'>{description}</p>
      </div>
    </div>
  );
};

const WhatWeOffer = () => {
  return (
    <div className="p-10">
      <div className="flex-col ml-20 pb-10 items-center">
        <h1 className='text-7xl text-slate-950 hover:text-white font-bold'>WHAT WE OFFER?</h1>
        <img src={offer_underline} className='pt-5 pl-10' alt="Underline" />
      </div>
      <div className="flex space-x-16 flex-wrap justify-center mt-10">
        <OfferCard 
          icon={personal_loan_icon} 
          title="PERSONAL LOAN FOR SELF-EMPLOYED" 
          description="Personal Loans For Business Owners To Fulfill Credit Needs Of ₹10,000 To ₹2 Lakhs With Repayment Tenures Ranging Between 4 To 24 Months."
        />
        <OfferCard 
          icon={flexi_loan_icon} 
          title="FLEXI PERSONAL LOAN" 
          description="Instant Personal Loans For Urgent Credit Between ₹1,000 To ₹80,000 With Flexible Tenures Between 3 To 10 Months."
        />
      </div>
      <div className="flex space-x-16 flex-wrap justify-center mt-10">
        <OfferCard 
          icon={salaried_loan_icon} 
          title="PERSONAL LOAN FOR SALARIED" 
          description="Quick Personal Loans For Salaried Individuals With Repayment Terms Between 3 To 36 Months For A Loan Amount Of ₹10,000 To ₹5 Lakhs."
        />
        <OfferCard 
          icon={business_loan_icon} 
          title="BUSINESS LOAN" 
          description="Flexible Business Loans Specially Tailored To Meet Your Entrepreneurial Needs. Access Funds For Various Purposes, Such As Expansion, Operations, Or Investment, With Competitive Interest Rates."
        />
      </div>
    </div>
  );
}

export default WhatWeOffer;
