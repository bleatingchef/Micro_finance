import React from 'react'

const Eligibilty = () => {
  return (
    <div className='flex '>
        <div className='flex flex-col p-20 w-1/2 justify-center items-center '>
            <h1 className='bg-slate-950 p-8 pl-10 mb-10 w-full pr-10 text-center text-yellow-500 text-5xl rounded-2xl hover:bg-white hover:text-slate-950 hover:outline hover:outline-slate-950'>CHECK ELEIGIBILTY</h1>
            <p className='text-slate-950 p-16 text-2xl font-semibold '>Empower yourself to handle life's financial uncertainties. You can now easily manage your monthly expenses using our Flexi Personal Loan  your premier choice for flexible borrowing solutions. Available in amounts ranging from ₹1,000 to ₹80,000, this loan is designed to streamline your budget and accommodate unforeseen expenses with ease. You can use these funds for almost everything, from buying groceries and settling utility bills to treating yourself to something special. Choose a Flexi Loan amount that best suits your specific requirements and select a repayment plan that works for you.Discover the financial liberation and assurance that our Flexi Personal Loan offers, making it a valuable addition to your fiscal kit. </p>
            <h1 className='bg-slate-950 p-8 pl-10 pr-10 w-full text-center text-yellow-500 text-5xl rounded-2xl hover:bg-white hover:text-slate-950 hover:outline hover:outline-slate-950'>APPLY NOW</h1>

        </div>

        <div className='flex flex-col justify-center items-center p-20 w-1/2'>
        <h1 className='bg-slate-950 p-8 pl-10 pr-10 text-center w-full text-yellow-500 text-5xl rounded-2xl hover:bg-white hover:text-slate-950 hover:outline hover:outline-slate-950'>APPLY FOR LOANS</h1>
        
        <form action="" className='mt-4 mb-8 border-4 border-slate-950 p-16 rounded-3xl w-2/3' method="post">
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
          </div>          
        </form>
        <button
            type="submit"
            className="bg-slate-950 p-8 pl-10 w-full pr-10 text-center text-yellow-500 text-5xl rounded-2xl hover:bg-white hover:text-slate-950 hover:outline hover:outline-slate-950">
            Submit
          </button>
        </div>

    </div>
  )
}

export default Eligibilty