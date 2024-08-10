import React from 'react'
import bg_nav from "../assets/nav_below_bg.png"

const Hero = () => {
  return (
    <div>
        <div className="relative">
        <img src={bg_nav} className="w-full h-auto" alt="" />
        <div className="absolute max-w-3xl right-0 top-0 bottom-0 flex flex-col justify-center p-8">
          <h1 className="text-7xl text-end font-bold mb-4">APPLY NOW</h1>
          <h4 className="text-5xl text-end mt-5 mb-8">GET FUNDED FAST</h4>
          <p className="text-lg text-end font-semibold">Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled it To Make A Type Specimen Book.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero