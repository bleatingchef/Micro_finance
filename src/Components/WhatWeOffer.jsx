import React from 'react';
import offer_underline from "../assets/offer_underline.png";
import personal_loan_icon from "../assets/personal.png";
import flexi_loan_icon from "../assets/flexi.png";
import salaried_loan_icon from "../assets/salaried.png";
import business_loan_icon from "../assets/buisness.png";

const OfferCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col sm:flex-row outline rounded-xl hover:bg-slate-950 hover:text-white text-slate-950 p-6 sm:p-8 m-4 w-full sm:w-80 md:w-96 lg:w-[558px]">
      <div className="mr-0 sm:mr-4 mb-4 sm:mb-0 flex-shrink-0 rounded-full flex items-center outline outline-white justify-center w-20 h-20 sm:w-24 sm:h-24 bg-slate-950">
        <img src={icon} alt={title} className="h-10 w-10 sm:h-16 sm:w-16" />
      </div>
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h2>
        <p className='text-sm sm:text-md mt-4 sm:mt-10 font-semibold'>{description}</p>
      </div>
    </div>
  );
};

const WhatWeOffer = () => {
  return (
    <div className="p-4 lg:p-10">
      <div className="flex flex-col items-center lg:items-start ml-0 lg:ml-20 pb-5">
        <h1 className='text-3xl sm:text-5xl md:mt-0 mt-5 lg:text-7xl text-slate-950 font-bold'>WHAT WE OFFER?</h1>
        <img src={offer_underline} className='pt-3 lg:pt-5' alt="Underline" />
      </div>
      <div className="flex flex-col md:mr-0 mr-6 sm:flex-row sm:flex-wrap justify-center sm:justify-start gap-4 mt-4 lg:mt-10">
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
