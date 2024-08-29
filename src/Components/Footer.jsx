import React from 'react';
import logo from '../assets/logo.png';
// import Link from 'link-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='my-0'>
            <div className="bg-slate-950 text-white">
                <div className="container mx-auto px-4 py-8 md:py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center sm:items-start">
                           <NavLink to="/"> <img src={logo} alt="Logo" className="mb-4 w-32 h-20" /></NavLink>
                            <div className="space-y-2 text-center sm:text-left">
                                <a href="#" className="block hover:underline">Contact Us</a>
                                <a href="#" className="block hover:underline">FAQ</a>
                                <a href="#" className="block hover:underline">Responsible Lending</a>
                                <a href="#" className="block hover:underline">Instant Personal Loan</a>
                                <a href="#" className="block hover:underline">Careers</a>
                                <a href="#" className="block hover:underline">Sitemap</a>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-center sm:text-left">Services</h3>
                            <div className="space-y-2 text-center sm:text-left">
                                <a href="#" className="block hover:underline">Flexi Personal Loan</a>
                                <a href="#" className="block hover:underline">Personal Loan For Self-Employed</a>
                                <a href="#" className="block hover:underline">Personal Loan For Salaried</a>
                                <a href="#" className="block hover:underline">Salary On Demand</a>
                                <a href="#" className="block hover:underline">Loan Against Property</a>
                                <a href="#" className="block hover:underline">Business Loan</a>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-center sm:text-left">Our Company</h3>
                            <div className="space-y-2 text-center sm:text-left">
                                <a href="#" className="block hover:underline">About Us</a>
                                <a href="#" className="block hover:underline">Partner With Us</a>
                                <a href="#" className="block hover:underline">Digital Lending Partners</a>
                                <a href="#" className="block hover:underline">Digital Lead Partners</a>
                                <a href="#" className="block hover:underline">Blog</a>
                                <a href="#" className="block hover:underline">Awards</a>
                                <a href="#" className="block hover:underline">News Board</a>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-center sm:text-left">Legal</h3>
                            <div className="space-y-2 text-center sm:text-left">
                                <a href="#" className="block hover:underline">Terms And Conditions</a>
                                <a href="#" className="block hover:underline">Privacy Policy</a>
                                <a href="#" className="block hover:underline">Grievance Redressal</a>
                                <a href="#" className="block hover:underline">Corporate Social Responsibility Policy</a>
                                <a href="#" className="block hover:underline">Security Centre</a>
                                <a href="#" className="block hover:underline">Corporate Information</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-950 py-4 sm:py-8">
                <div className="bg-white text-black text-center p-4 text-sm sm:text-base lg:text-xl">
                    Copyright © 2024 | Powered By Markletechandmedia.com
                </div>
            </div>
        </div>
    );
}

export default Footer;