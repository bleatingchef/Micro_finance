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
    <>
      <div className="flex-grow pt-20 pb-20">
        <h1 className="text-7xl text-slate-950 font-bold ml-20">Frequently Asked Questions</h1>
        <img src={questionLine} className="ml-20 pt-5 mb-10" alt="underline" />
        
        <div className="ml-20">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center p-6 mr-16 border border-gray-300 rounded-lg mb-4 bg-slate-950 text-white"
            >
              <span className='text-xl'>{faq}</span>
              <span className="bg-white rounded-full p-4">
                <img src={plusIcon} alt="plus icon" className="w-6 h-6" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Question;
