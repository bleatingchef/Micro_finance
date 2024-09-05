import React, { useState } from 'react';
import axios from 'axios';

const Eligibilty = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pan: '',
    email: ''
  });

  const [detailsForm, setDetailsForm] = useState({
    name: '',
    mobile: '',
    amount: ''
  });

  const [isEligibilityModalOpen, setIsEligibilityModalOpen] = useState(false);
  const [eligibilityformData, setEligibilityformData] = useState({
    name: '',
    mobile: '',
    pan: '',
    email: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setSuccessMessage('');
  };

  const EligibilitytoggleModal = () => {
    setIsEligibilityModalOpen(!isEligibilityModalOpen);
    setSuccessMessage('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setDetailsForm((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const ELigibilityhandleChange = (e) => {
    const { name, value } = e.target;
    setEligibilityformData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/loan/loanApply', formData, { withCredentials: true });
      console.log('Loan application submitted successfully:', response.data);
      setSuccessMessage('Loan application submitted successfully!');
      setFormData({ name: '', mobile: '', pan: '', email: '' });
      toggleModal(); // Close the modal after submission
    } catch (error) {
      console.error('Error submitting loan application:', error);
      // Handle the error
    }
  };

  const hanldeEligibilitySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/eligible/eligibility', eligibilityformData, { withCredentials: true });
      console.log('Eligibility data submitted successfully:', response.data);
      setSuccessMessage('Eligibility data submitted successfully!');
      setEligibilityformData({ name: '', mobile: '', pan: '', email: '' });
      EligibilitytoggleModal();
    } catch (error) {
      console.error('Error submitting eligibility check:', error);
    }
  };

  const handleDetails = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/moreDetails/details', detailsForm, { withCredentials: true });
      console.log('Details submitted successfully:', response.data);
      setSuccessMessage('Details submitted successfully!');
      setDetailsForm({ name: '', mobile: '', amount: '' });
    } catch (error) {
      console.error('Error submitting details:', error);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center px-4 sm:px-10 md:px-20 py-10 sm:py-20'>
      {/* Buttons Section */}
      <div className='flex flex-col w-full p-6 sm:p-10 bg-gray-800 bg-opacity-100 rounded-3xl'>
        <div className='flex flex-col sm:flex-row w-full justify-between items-center' style={{ minHeight: '180px' }}>
          <div className='flex flex-col text-center sm:text-left'>
            <p className='text-white text-3xl sm:text-4xl md:text-5xl font-semibold'>Flexi Loan</p>
            <p className='text-white text-base sm:text-lg mt-2'>A loan as flexible as your needs</p>
          </div>
          <div className='flex flex-col sm:flex-row mt-4 sm:mt-0 ml-auto space-y-4 sm:space-y-0 sm:space-x-4'>
            <button
              className='bg-white p-3 sm:p-4 text-center text-slate-950 text-lg sm:text-xl rounded-full hover:bg-slate-950 hover:text-white hover:outline hover:outline-slate-950'
              onClick={EligibilitytoggleModal}
            >
              CHECK ELIGIBILITY
            </button>
            <button
              className='bg-yellow-500 p-3 sm:p-4 text-center text-slate-950 text-lg sm:text-xl rounded-full hover:bg-yellow-300'
              onClick={toggleModal}
            >
              APPLY FOR LOAN
            </button>
          </div>
        </div>

        {/* New White Background Section */}
        <div className='flex justify-center items-center bg-white rounded-lg mt-4 p-2 sm:p-4 shadow'>
          <ul className='flex flex-wrap justify-center space-x-4 sm:space-x-8 text-slate-950 text-sm sm:text-lg font-medium'>
            {/* Additional section */}
          </ul>
        </div>
      </div>

      {/* Text and Form Section */}
      <div className='flex flex-col md:flex-row w-full justify-center items-center space-y-6 md:space-y-0 md:space-x-6 mt-8'>
        <div className='flex flex-col w-full md:w-1/2'>
          <p className='text-slate-950 text-lg sm:text-xl md:text-2xl font-semibold'>
          Empower yourself to handle life's financial uncertainties. You can now easily manage your monthly expenses using our Flexi Personal Loan, your premier choice for flexible borrowing solutions. Available in amounts ranging from ₹1,000 to ₹80,000, this loan is designed to streamline your budget and accommodate unforeseen expenses with ease. You can use these funds for almost everything, from buying groceries and settling utility bills to treating yourself to something special. Choose a Flexi Loan amount that best suits your specific requirements and select a repayment plan that works for you. Discover the financial liberation and assurance that our Flexi Personal Loan offers, making it a valuable addition to your fiscal kit.
          </p>
        </div>

        <div className='flex flex-col w-full md:w-1/2'>
          <form action='' className='border-2 sm:border-4 border-slate-950 p-8 sm:p-16 rounded-3xl' onSubmit={handleDetails}>
            <h2 className='text-2xl sm:text-3xl md:text-4xl text-center font-semibold mb-6'>Need More Details?</h2>
            {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
            <div className='mb-4'>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Name*'
                className='w-full p-2 sm:p-3 mb-2 border rounded-3xl bg-slate-950 text-white placeholder-white'
                required
                value={detailsForm.name}
                onChange={handleChanges}
              />
            </div>
            <div className='mb-4'>
              <input
                type='text'
                id='mobile'
                name='mobile'
                placeholder='Mobile Number*'
                className='w-full p-2 sm:p-3 mb-2 border rounded-3xl bg-slate-950 text-white placeholder-white'
                required
                value={detailsForm.mobile}
                onChange={handleChanges}
              />
            </div>
            <div className='mb-4'>
              <input
                type='text'
                id='amount'
                name='amount'
                placeholder='Upto* 80,000'
                className='w-full p-2 sm:p-3 mb-2 border rounded-3xl bg-slate-950 text-white placeholder-white'
                required
                value={detailsForm.amount}
                onChange={handleChanges}
              />
            </div>
            <div className='mb-6 text-left'>
              <label className='inline-flex items-center text-xs'>
                <input type='checkbox' name='terms' className='form-checkbox h-6 w-6 sm:h-12 sm:w-12 text-black' required />
                <span className='ml-2 text-sm'>
                  By Continuing, You Agree To KreditBee's{' '}
                  <a href='#' className='text-black underline'>
                    Terms & Conditions
                  </a>{' '}
                  And{' '}
                  <a href='#' className='text-black underline'>
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>
            <div className='mb-4'>
              <button className='bg-slate-950 text-yellow-500 p-3 sm:p-4 w-full mt-4 sm:mt-10 rounded-full text-lg sm:text-xl font-semibold hover:bg-white hover:text-slate-950 hover:outline hover:outline-slate-950'>
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal for Apply for Loan */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg max-w-lg w-full'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-semibold'>Apply For Loan</h2>
              <button className='text-xl font-bold' onClick={toggleModal}>
                &times;
              </button>
            </div>
            {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Name*'
                  className='w-full p-2 border rounded-3xl bg-slate-950 text-white placeholder-white'
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className='mb-4'>
                <input
                  type='text'
                  id='mobile'
                  name='mobile'
                  placeholder='Mobile Number*'
                  className='w-full p-2 border rounded-3xl bg-slate-950 text-white placeholder-white'
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className='mb-4'>
                <input
                  type='text'
                  id='pan'
                  name='pan'
                  placeholder='PAN Number*'
                  className='w-full p-2 border rounded-3xl bg-slate-950 text-white placeholder-white'
                  required
                  value={formData.pan}
                  onChange={handleChange}
                />
              </div>
              <div className='mb-4'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email*'
                  className='w-full p-2 border rounded-3xl bg-slate-950 text-white placeholder-white'
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className='mt-6'>
                <button className='bg-yellow-500 text-slate-950 w-full py-3 rounded-full hover:bg-yellow-300'>SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Check Eligibility */}
      {isEligibilityModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-8 rounded-lg shadow-lg max-w-lg w-full'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-semibold'>Check Eligibility</h2>
              <button className='text-xl font-bold' onClick={EligibilitytoggleModal}>
                &times;
              </button>
            </div>
            {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
            <form onSubmit={hanldeEligibilitySubmit}>
              <div className='mb-4'>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Name*'
                  className='w-full p-2 border rounded-3xl bg-slate-950 text-white placeholder-white'
                  required
                  value={eligibilityformData.name}
                  onChange={ELigibilityhandleChange}
                />
              </div>
              <div className='mb-4'>
                <input
                  type='text'
                  id='mobile'
                  name='mobile'
                  placeholder='Mobile Number*'
                  className='w-full p-2 border rounded-3xl bg-slate-950 text-white placeholder-white'
                  required
                  value={eligibilityformData.mobile}
                  onChange={ELigibilityhandleChange}
                />
              </div>
              <div className='mb-4'>
                <input
                  type='text'
                  id='pan'
                  name='pan'
                  placeholder='PAN Number*'
                  className='w-full p-2 border rounded-3xl bg-slate-950 text-white placeholder-white'
                  required
                  value={eligibilityformData.pan}
                  onChange={ELigibilityhandleChange}
                />
              </div>
              <div className='mb-4'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email*'
                  className='w-full p-2 border rounded-3xl bg-slate-950 text-white placeholder-white'
                  required
                  value={eligibilityformData.email}
                  onChange={ELigibilityhandleChange}
                />
              </div>
              <div className='mt-6'>
                <button className='bg-yellow-500 text-slate-950 w-full py-3 rounded-full hover:bg-yellow-300'>SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Eligibilty;
