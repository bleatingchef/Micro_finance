import React from 'react';

const Eligibilty = () => {
  return (
    <div className='justify-center items-center p-20'>
      {/* Buttons Section */}
      <div className='flex flex-col w-full p-10 bg-gray-800 bg-opacity-100 rounded-3xl'>
        {/* Text Section */}
        <div className='flex w-full justify-between items-center' style={{ height: '180px' }}>
          <div className='flex flex-col'>
            <p className='text-white text-5xl font-semibold'>Flexi Loan</p>
            <p className='text-white text-lg mt-2'>A loan as flexible as your needs</p>
          </div>
          {/* Buttons Section */}
          <div className='flex ml-auto space-x-4'>
            <button className='bg-white p-4 text-center text-slate-950 text-xl rounded-full hover:bg-slate-950 hover:text-white hover:outline hover:outline-slate-950'>
              CHECK ELIGIBILITY
            </button>
            <button className='bg-yellow-500 p-4 text-center text-slate-950 text-xl rounded-full hover:bg-yellow-300 '>
              APPLY FOR LOAN
            </button>
          </div>
        </div>

        {/* New White Background Section */}
        <div className='flex justify-center items-center bg-white rounded-lg mt-4  p-4 shadow'>
          {/* Links */}
          <ul className='flex space-x-8 text-slate-950 text-lg font-medium'>
            <li>About</li>
            <li>Features</li>
            <li>Eligibility</li>
            <li>How to Apply</li>
            <li>Purposes</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>

      {/* Text and Form Section */}
      <div className='flex w-full justify-center items-center space-y-10 space-x-6 mt-8'>
        {/* Text Section */}
        <div className='flex flex-col w-1/2'>
          <p className='text-slate-950 text-2xl font-semibold'>
          Empower yourself to handle life's financial uncertainties. You can now easily manage your monthly expenses using our Flexi Personal Loan, your premier choice for flexible borrowing solutions. Available in amounts ranging from ₹1,000 to ₹80,000, this loan is designed to streamline your budget and accommodate unforeseen expenses with ease. You can use these funds for almost everything, from buying groceries and settling utility bills to treating yourself to something special. Choose a Flexi Loan amount that best suits your specific requirements and select a repayment plan that works for you. Discover the financial liberation and assurance that our Flexi Personal Loan offers, making it a valuable addition to your fiscal kit.            Empower yourself to handle life's financial uncertainties. You can now easily manage your monthly expenses using our Flexi Personal Loan, your premier choice for flexible borrowing solutions. Available in amounts ranging from ₹1,000 to ₹80,000, this loan is designed to streamline your budget and accommodate unforeseen expenses with ease. You can use these funds for almost everything, from buying groceries and settling utility bills to treating yourself to something special. Choose a Flexi Loan amount that best suits your specific requirements and select a repayment plan that works for you. Discover the financial liberation and assurance that our Flexi Personal Loan offers, making it a valuable addition to your fiscal kit.
          </p>
        </div>

        {/* Form Section */}
        <div className='flex flex-col w-1/2'>
          <form action="" className='border-4 border-slate-950 p-16 rounded-3xl' method="post">
            <h2 className="text-4xl text-center font-semibold mb-6">Need More Details?</h2>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
                className="w-full p-3 mb-2 border rounded-3xl bg-slate-950 text-white placeholder-white"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Mobile Number*"
                className="w-full p-3 mb-2 border rounded-3xl bg-slate-950 text-white placeholder-white"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="amount"
                name="amount"
                placeholder="Upto* 80,000"
                className="w-full p-3 mb-2 border rounded-3xl bg-slate-950 text-white placeholder-white"
                required
              />
            </div>
            <div className="mb-6 text-left">
              <label className="inline-flex items-center text-xs">
                <input
                  type="checkbox"
                  name="terms"
                  className="form-checkbox h-12 w-12 text-black"
                  required
                />
                <span className="ml-2 text-sm">
                  By Continuing, You Agree To KreditBee's{' '}
                  <a href="#" className="text-black underline">
                    Terms & Conditions
                  </a>{' '}
                  And{' '}
                  <a href="#" className="text-black underline">
                    Privacy Policy
                  </a>{' '}
                  And Receive Communication From KreditBee Via SMS, E-Mail And WhatsApp
                </span>
              </label>
              <div className="mb-4">
                <button className='bg-slate-950 text-yellow-500 p-4 w-full mt-10 rounded-full text-xl font-semibold hover:bg-white hover:text-slate-950 hover:outline hover:outline-slate-950'>
                  SUBMIT
                </button>
              </div>
            </div>          
          </form>
        </div>
      </div>
    </div>
  );
}

export default Eligibilty;
