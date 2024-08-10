import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className='my-'>
            <div className="bg-slate-950 text-white flex flex-col md:flex-row justify-between p-5 md:p-10">
                <div className="flex flex-col text-lg items-center md:items-start">
                    <img src={logo} alt="Logo" className="mb-2 w-32 h-20" />
                    <a href="#" className="mb-2 hover:underline">Contact Us</a>
                    <a href="#" className="mb-2 hover:underline">FAQ</a>
                    <a href="#" className="mb-2 hover:underline">Responsible Lending</a>
                    <a href="#" className="mb-2 hover:underline">Instant Personal Loan</a>
                    <a href="#" className="mb-2 hover:underline">Careers</a>
                    <a href="#" className="mb-2 hover:underline">Sitemap</a>
                </div>
                <div className="flex flex-col text-lg">
                    <h3 className="mb-2 text-5xl font-semibold pb-10">Services</h3>
                    <a href="#" className="mb-2 hover:underline">Flexi Personal Loan</a>
                    <a href="#" className="mb-2 hover:underline">Personal Loan For Self-Employed</a>
                    <a href="#" className="mb-2 hover:underline">Personal Loan For Salaried</a>
                    <a href="#" className="mb-2 hover:underline">Salary On Demand</a>
                    <a href="#" className="mb-2 hover:underline">Loan Against Property</a>
                    <a href="#" className="mb-2 hover:underline">Business Loan</a>
                </div>
                <div className="flex flex-col text-lg">
                    <h3 className="mb-2 text-5xl font-semibold pb-10">Our Company</h3>
                    <a href="#" className="mb-2 hover:underline">About Us</a>
                    <a href="#" className="mb-2 hover:underline">Partner With Us</a>
                    <a href="#" className="mb-2 hover:underline">Digital Lending Partners</a>
                    <a href="#" className="mb-2 hover:underline">Digital Lead Partners</a>
                    <a href="#" className="mb-2 hover:underline">Blog</a>
                    <a href="#" className="mb-2 hover:underline">Awards</a>
                    <a href="#" className="mb-2 hover:underline">News Board</a>
                </div>
                <div className="flex flex-col text-lg">
                    <h3 className="mb-2 text-5xl font-semibold pb-10">Legal</h3>
                    <a href="#" className="mb-2 hover:underline">Terms And Conditions</a>
                    <a href="#" className="mb-2 hover:underline">Privacy Policy</a>
                    <a href="#" className="mb-2 hover:underline">Grievance Redressal</a>
                    <a href="#" className="mb-2 hover:underline">Corporate Social Responsibility Policy</a>
                    <a href="#" className="mb-2 hover:underline">Security Centre</a>
                    <a href="#" className="mb-2 hover:underline">Corporate Information</a>
                </div>
            </div>
            <div className="bg-slate-950 py-8">
                <div className="bg-white text-black text-center p-4 text-2xl">
                    Copyright © 2024 | Powered By Markletechandmedia.com
                </div>
            </div>

        </div>
    );
}

export default Footer;
