import React from 'react'
import Flexi_hero from '../Components/Flexi_hero'
import Eligibilty from '../Components/Eligibilty'
import Features from '../Components/Features'
import MobileImage from '../Components/MobileImage'
import PurposeAndUses from '../Components/PurposeAndUses'
// import Testimonial from '../Components/Loans_Testimonial'
import Testimonial from '../Components/Testimonial'
import Question from '../Components/Question'

const Loans = () => {
  return (
    <div>
      <Flexi_hero/>
      <Eligibilty/>
      <Features/>
      <MobileImage/>
      <PurposeAndUses/>
      <Testimonial/>
      <Question/>
    </div>
  )
}

export default Loans