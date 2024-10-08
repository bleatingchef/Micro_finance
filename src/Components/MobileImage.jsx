import React from 'react';
import featureLine from '../assets/featureLine.png';
import mobile from '../assets/mobile.png';
import mobline from '../assets/mobline.png';
import dot from '../assets/dot.png';

const steps = [
  "Sign Up Using Mobile Number.",
  "Enter Basic Information & Check Eligibility.",
  "Verify Your Profile By Uploading KYC Documents.",
  "Provide Bank Account Details.",
  "Choose Your Loan Amount And Tenure.",
  "Get Loan Disbursed Directly Into Your Bank Account."
];

const MobileImage = () => {
  return (
    <>
      <div>
        <h1 className='text-4xl md:text-7xl text-slate-950 ml-4 md:ml-16 mt-8 md:mt-16 font-bold mb-5 text-start'>
          How to Apply for a Flexi Personal Loan Online?
        </h1>
        <img src={featureLine} className='mb-8 pl-4 md:pl-16 mt-2' alt="" />
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/3 flex flex-col items-center md:items-start'>
          <img src={mobile} className='mt-10 md:mt-20 ml-0 md:ml-32' alt="" />
          {/* Button visible only on smaller screens */}
          <button
            type="submit"
            className="block md:hidden bg-slate-950 p-4 mt-6 mb-10 text-center text-white text-xl rounded-2xl hover:outline hover:outline-slate-950 hover:bg-white hover:text-slate-950">
            Check Eligibility
          </button>
        </div>
        <div className='w-full md:w-1/3 relative flex-col hidden md:block'>
          <img src={mobline} className="ml-0 md:ml-48 mt-10 md:mt-40" style={{ height: "650px" }} alt="" />
          {steps.map((step, index) => (
            <div key={index} className='flex items-center mt-10 md:mt-28 ml-0 md:ml-20 absolute' style={{ top: `${(index + 1) * 10}%`, left: '50%', transform: 'translateX(-50%)' }}>
              <div className='relative'>
                {/* <img src={dot} style={{ height: '40px', width: '40px' }} alt="" /> */}
                <span className='absolute' style={{ top: '10px', left: '12px', color: 'white', fontWeight: 'bold' }}>{index + 1}</span>
              </div>
              <p className='ml-6 text-lg font-medium text-slate-950'>{step}</p>
            </div>
          ))}
          {/* Button visible only on larger screens */}
          <button
            type="submit"
            className="hidden md:block bg-slate-950 p-6 pr-20 pl-20 ml-48 mt-10 mb-10 text-center text-white text-2xl rounded-2xl hover:outline hover:outline-slate-950 hover:bg-white hover:text-slate-950">
            Check Eligibility
          </button>
        </div>
      </div>
    </>
  );
}

export default MobileImage;
