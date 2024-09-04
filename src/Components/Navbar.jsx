import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState('');
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

  const openPopup = (type) => {
    setPopupType(type);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white border-b shadow-2xl shadow-black z-10">
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-16 mr-4" />
          </NavLink>
        </div>

        <div className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FaTimes className="text-xl text-black" />
          ) : (
            <FaBars className="text-xl text-black" />
          )}
        </div>

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

        <div className="hidden md:flex items-center space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => openPopup('login')}
          >
            Login
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => openPopup('signup')}
          >
            Signup
          </button>
          {/* <div className="w-10 h-10 bg-pink-300 rounded-full cursor-pointer"></div> */}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed top-16 right-0 left-0 bg-white shadow-md border-t z-20">
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
            <button
              className="w-60 bg-blue-500  text-white py-2 rounded"
              onClick={() => {
                toggleMobileMenu();
                openPopup('login');
              }}
            >
              Login
            </button>
            <button
              className="w-60 bg-green-500 text-white py-2 rounded"
              onClick={() => {
                toggleMobileMenu();
                openPopup('signup');
              }}
            >
              Signup
            </button>
          </ul>
        </div>
      )}

      {isPopupOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40"
          onClick={closePopup}
        >
          <div
            className="bg-white p-10 rounded-lg w-full max-w-md"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
          >
            {popupType === 'login' && (
              <>
                <h2 className="text-3xl mb-10">Login</h2>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 mt-5 mb-8 border rounded"
                  id="email"
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 mt-5 mb-8 border rounded"
                  id="password"
                />
                <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
              </>
            )}
            {popupType === 'signup' && (
              <>
                <h2 className="text-3xl  mb-6">Signup</h2>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full p-2 mt-2 mb-4 border rounded"
                  id="username"
                />
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 mt-2 mb-4 border rounded"
                  id="email"
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 mt-2 mb-8 border rounded"
                  id="password"
                />
                <button className="w-full bg-blue-500 text-white py-2 rounded">Signup</button>
              </>
            )}
          </div>
        </div>
      )}

      <div className="pt-20"></div> {/* Pushes content down */}
    </>
  );
};

export default Navbar;
