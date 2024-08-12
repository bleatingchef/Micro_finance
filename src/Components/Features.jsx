import React from 'react';
import featureLine from '../assets/featureLine.png';
import online_process_icon from '../assets/onlineProcess.png';
import loan_amount_icon from '../assets/loanFrom.png';
import availability_icon from '../assets/24x7.png';
import documentation_icon from '../assets/hassleFree.png';
import disbursal from '../assets/disbursal.png';
import interest from '../assets/interestRate.png';
import flexible from '../assets/paymentOption.png';
import transparent from '../assets/transparent.png';
import icon1 from '../assets/eligiLine.png';

const OfferCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center bg-slate-950 text-white hover:bg-white hover:text-slate-950 hover:border-4 hover:border-slate-950 rounded-3xl p-8 m-4" style={{ width: '546px', height: '318px' }}>
            <div className="flex-shrink-0 rounded-full flex items-center outline outline-slate-950 justify-center mb-6" style={{ width: '6rem', height: '6rem', backgroundColor: "white" }}>
                <img src={icon} alt={title} className="h-16 w-16" />
            </div>
            <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className='font-semibold'>{description}</p>
            </div>
        </div>
    );
};
const Eligibility =({title1,description1,icon1})=>{
    return(
        <div className="flex flex-col items-start pl-20 bg-slate-950 text-white  rounded-3xl p-8 m-4" style={{ width: '546px', height: '318px' }}>
            
            <div className="flex flex-col items-start text-start">
                <h2 className="text-3xl text-start font-bold mb-5">{title1}</h2>
                <div className="flex flex items-center justify-center mb-6" style={{ width: '16rem', height: '0.3rem', backgroundColor: "" }}>
                <img src={icon1} alt="" className="h-1 w-64" />
            </div>
                <p className='text-lg text-start py-5'>{description1}</p>
            </div>
        </div>
    );
}

const Features = () => {
    return (
        <div className="flex flex-col items-center p-10">
            <h1 className='text-7xl text-slate-950 font-bold mb-5 text-center'>FEATURES & BENEFITS OF FLEXI PERSONAL LOAN</h1>
            <img src={featureLine} className='mb-10' alt="" />
            <p className='text-xl mt-10 text-slate-950 mb-10 text-center'>Our Flexible Personal Loan Is An Excellent Solution For Both Salaried And Self-Employed Individuals In Need Of Financial Assistance.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <OfferCard 
                    icon={online_process_icon} 
                    title="100% ONLINE PROCESS" 
                    description="Experience The Convenience Of Our Seamless Online Process, From Application To Disbursement, Without The Need For Any Physical Branch Visits."
                />
                <OfferCard 
                    icon={loan_amount_icon} 
                    title="LOANS FROM ₹1,000 TO ₹80,000" 
                    description="Access A Wide Range Of Loan Amounts Tailored To Meet Your Specific Financial Needs, Whether Big Or Small."
                />
                <OfferCard 
                    icon={availability_icon} 
                    title="24/7 AVAILABILITY" 
                    description="Apply For Your Flexi Personal Loan Whenever You Need It—Day Or Night. We're Always Here To Help."
                />
                <OfferCard 
                    icon={documentation_icon} 
                    title="HASSLE-FREE DOCUMENTATION PROCESS" 
                    description="Benefit From A Simplified Documentation Process That Makes Obtaining Your Loan Quick And Easy."
                />
                <OfferCard 
                    icon={disbursal} 
                    title="Loan Disbursal in just 10 Minutes" 
                    description="Receive your approved loan amount quickly, with funds disbursed in your preferred bank account within 10 minutes."
                />
                <OfferCard 
                    icon={interest} 
                    title="Interest Rates" 
                    description="Take advantage of competitive interest rates ranging from 24% to 29.95% (p.a.), allowing you to pay off your loan affordably."
                />
                <OfferCard 
                    icon={flexible} 
                    title="Flexible Repayment Options" 
                    description="Choose repayment terms that suit your financial situation, with options ranging from 3 to 10 months."
                />
                <OfferCard 
                    icon={transparent} 
                    title="Transparent Processing Fees" 
                    description="Avail of clear, upfront processing fees that vary depending on your loan amount, ranging from ₹65 to ₹5,560 flat."
                />
            </div>
            <h1 className='text-6xl text-slate-950 ml-16 mt-16  font-bold mb-5 text-start'>FLEXI LOAN ELIGIBILITY CRITERIA AND DOCUMENTATION</h1>
            <img src={featureLine} className='mb-8 mt-2' alt="" />
            <p className='text-xl text-slate-950 mb-10 text-start'>Learn about the eligibility requirements and necessary documentation for quick loan approval.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-64">
                <Eligibility   
                    title1="Eligibility Criteria" 
                    icon1={icon1} 
                    description1={<ul className='list-disc'>
                        <li className='py-2'>Indian Citizen</li>
                        <li className='py-2'>Age Limit: 21 - 60 years</li>
                        <li className='py-2'>Monthly Income: minimum ₹10,000</li>
                    </ul>}
        
                />
                <Eligibility
                    title1="Documents Required"
                    icon1={icon1} 
                    description1={<ul className='list-disc '>
                        <li className='py-2'>Photograph (Selfie)</li>
                        <li className='py-2'>Identity Proof (PAN)</li>
                        <li className='py-2'>Address Proof (Aadhaar, Passport)</li>
                    </ul>}
                />
                </div>
        </div>
    );
};

export default Features;
