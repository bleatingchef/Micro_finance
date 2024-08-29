import React from 'react';
import questionLine from '../assets/questionLine.png';
import plusIcon from '../assets/+.png';

const faqs = [
  "What Is A Flexi Loan Or A Flexi Personal Loan?",
  "What Is The Repayment Tenure Offered For The Flexi Personal Loan Product?",
  "How Long Does It Take For The Flexi Personal Loan Amount To Be Disbursed?",
  "My Application For A Flexi Personal Loan Did Not Get Approved. Why?",
  "What Documents Are Required To Apply For A Flexi Personal Loan?"
];

const Question = () => {
  return (
    <div className="px-4 md:px-20 py-10">
      <h1 className="text-3xl md:text-5xl lg:text-7xl text-slate-950 font-bold text-center md:text-left">
        Frequently Asked Questions
      </h1>
      <img src={questionLine} className="mx-auto md:ml-0 pt-5 mb-10" alt="underline" />
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="flex items-center p-4 md:p-6 border-2 border-slate-950 rounded-lg bg-slate-950 text-white hover:bg-white hover:text-slate-950 transition-colors"
          >
            <span className='text-base md:text-xl font-semibold flex-grow'>{faq}</span>
            <span className="bg-white rounded-full p-2 md:p-4 border-2 border-slate-950 flex-shrink-0">
              <img src={plusIcon} alt="plus icon" className="w-5 h-5 md:w-6 md:h-6" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
