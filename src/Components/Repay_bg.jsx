import React from 'react'
import bg_repay from "../assets/repayBg.png"

const Repay_bg = () => {
  return (
    <div>
        <div className="relative">
        <img src={bg_repay} className="w-full h-auto" alt="" />
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center p-8">
          <h1 className="text-7xl max-w-3xl text-start font-bold mb-4">Grow Your Family</h1>
          <h4 className="text-5xl max-w-2xl text-start mt-5 mb-8">Not Just Your Debt: Smart Family Loans</h4>
          
        </div>
      </div>
    </div>
  )
}

export default Repay_bg