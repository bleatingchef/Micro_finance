import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for burger and close menu

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white border-b shadow-2xl shadow-black z-10">
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-16 mr-4" />
          </NavLink>
        </div>

        {/* Burger Icon for Mobile Menu */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FaTimes className="text-xl text-black" />
          ) : (
            <FaBars className="text-xl text-black" />
          )}
        </div>

        {/* Main Menu for larger screens */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-8">
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

        <div className="hidden md:flex items-center">
          <div className="w-10 h-10 bg-pink-300 rounded-full"></div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 right-0 left-0 bg-white shadow-md border-t z-20">
          <div className="flex justify-end p-4">
            {/* <FaTimes className="text-xl text-black cursor-pointer" onClick={toggleMobileMenu} /> */}
          </div>
          <ul className="flex flex-col items-center space-y-4 pb-4">
            <NavLink to='/' onClick={toggleMobileMenu}>
              <li className="text-black cursor-pointer text-xl hover:text-gray-700">Home</li>
            </NavLink>
            <li
              className="text-black cursor-pointer text-xl hover:text-gray-700"
              onClick={() => {
                toggleMobileMenu();
                handleLoansClick();
              }}
            >
              Loans
            </li>
            <NavLink to='/refer' onClick={toggleMobileMenu}>
              <li className="text-black cursor-pointer text-xl hover:text-gray-700">Refer & Earn</li>
            </NavLink>
            <NavLink to='/repay' onClick={toggleMobileMenu}>
              <li className="text-black cursor-pointer text-xl hover:text-gray-700">Repayment</li>
            </NavLink>
          </ul>
        </div>
      )}

      <div className="pt-20"></div> {/* This div is added to push content down so it doesn't get hidden behind the navbar */}
    </>
  );
};

export default Navbar;
