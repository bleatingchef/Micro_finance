import React from 'react'
import flexi_bg from "../assets/flexiLoanBg.png"

const Hero = () => {
  return (
    <div className=''>
      <div className="relative">
        <img src={flexi_bg} className="w-full h-auto md:mt-0 mt-4" alt="" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-xl  sm:text-5xl lg:text-7xl p-2 sm:p-3 lg:p-5 text-white font-bold mb-2 sm:mb-4">FLEXI LOAN</h1>
          <h4 className="text-sm sm:text-3xl lg:text-5xl text-white">A LOAN AS FLEXIBLE AS YOUR NEEDS</h4>
        </div>
      </div>
    </div>
  )
}

export default Hero