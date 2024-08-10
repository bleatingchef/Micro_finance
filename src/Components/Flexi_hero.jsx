import React from 'react'
import flexi_bg from "../assets/flexiLoanBg.png"

const Hero = () => {
  return (
    <div className=''>
      <div className="relative">
        <img src={flexi_bg} className="w-full h-auto" alt="" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-7xl p-5 text-white font-bold">FLEXI LOAN</h1>
          <h4 className="text-5xl text-white">A LOAN AS FLEXIBLE AS YOUR NEEDS</h4>
        </div>
      </div>
    </div>
  )
}

export default Hero
