import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleLoansClick = () => {
    navigate('/loans');
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white border-b relative z-10">
        <div className="flex items-center">
         <NavLink to="/"><img src={logo} alt="Logo" className="h-16 mr-96" /></NavLink> 
        </div>
        <div className="flex-grow flex justify-center">
          <ul className="flex space-x-8 ml-60">
            <NavLink to='/'><li className="text-black cursor-pointer text-xl hover:text-gray-700">Home</li></NavLink>
            <li 
              className="relative text-black cursor-pointer text-xl hover:text-gray-700"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Loans
              {isDropdownOpen && (
                <ul className="absolute pl-10 rounded-2xl top-full bg-white border rounded shadow-lg z-20 w-60 p-4 text-slate-950">
                  <li className="font-bold text-2xl pl-3 mb-2">Personal Loan</li>
                  <li 
                    className="pl-4 mb-2 cursor-pointer text-sm list-disc hover:text-gray-700"
                    onClick={handleLoansClick}
                  >
                    Flexi Personal Loan
                  </li>
                  <li className="pl-4 cursor-pointer text-sm list-disc hover:text-gray-700">N/A</li>
                </ul>
              )}
            </li>
            <NavLink to='/refer'><li className="text-black cursor-pointer text-xl hover:text-gray-700">Refer & Earn</li></NavLink>
            <NavLink to='/repay'><li className="text-black cursor-pointer text-xl hover:text-gray-700">Repayment</li></NavLink>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-black rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
