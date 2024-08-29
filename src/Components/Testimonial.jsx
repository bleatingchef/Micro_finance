import React, { useState } from 'react';
import testi_bg from '../assets/testimonialbg.png';
import offer_underline from '../assets/offer_underline.png';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import googlePlay from "../assets/gbg.png"
import mob from "../assets/app.png"
import total from "../assets/total.png"
import goplay from "../assets/googleplay.png"
import line from "../assets/line.png"

const testimonials = [
  {
    id: 1,
    name: 'Vipin Kumar',
    location: 'Delhi, (India)',
    text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.',
    image: person1
  },
  {
    id: 2,
    name: 'Vipin ',
    location: 'Delhi, (India)',
    text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.',
    image: person2
  },
  {
    id: 3,
    name: 'Vipin kushwaha',
    location: 'Delhi, (India)',
    text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.',
    image: person3
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="flex-grow pt-10 md:pt-20 pb-10 md:pb-20">
        <h1 className="text-4xl md:text-7xl text-slate-950 font-bold text-center md:text-left md:ml-20">TESTIMONIALS</h1>
        <img src={offer_underline} className="mx-auto md:ml-20 pt-3 md:pt-5 mb-5 md:mb-10" alt="underline" />
      </div>
      <div className="relative" style={{ backgroundImage: `url(${testi_bg})`, backgroundSize: 'cover', minHeight: '20rem', padding: '20px', color: 'white' }}>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <button onClick={handlePrev} className="mb-4 md:mb-0 bg-transparent border-none cursor-pointer text-white">
            <FaChevronLeft size={24} />
          </button>
          <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
            <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="rounded-full w-48 h-48 md:w-64 md:h-64 mb-4 md:mb-0 md:mr-8" />
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl mb-2 md:mb-4">{testimonials[currentIndex].name}</h2>
              <p className="text-xl font-semibold mb-2 md:mb-4">{testimonials[currentIndex].location}</p>
              <p className="text-sm md:text-base">{testimonials[currentIndex].text}</p>
            </div>
          </div>
          <button onClick={handleNext} className="mt-4 md:mt-0 bg-transparent border-none cursor-pointer text-white">
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="relative mb-10 md:mb-20">
        <img src={googlePlay} className="w-full" alt="" />
        <div className="absolute inset-0 flex flex-col md:flex-row justify-center md:justify-between items-center p-4">
          <div className="hidden md:flex text-white items-center mb-4 md:mb-0">
            <img src={mob} className="w-16 h-16 ml-16 md:w-24 md:h-24 mr-5" alt="" />
            <p className="text-xl">
              OVER
              <span className="block text-2xl font-bold">11 Crore</span>
              App Downloads
            </p>
            <img src={line} className="ml-80" alt="" />
          </div>
          <div className="hidden md:flex mr-40 text-white items-center mb-4 md:mb-0">
            <img src={total} className="w-16 h-16  md:w-24 md:h-24 mr-5" alt="" />
            <p className="text-xl">
              OVER
              <span className="block text-2xl font-bold">₹54,000 Crores</span>
              Total Credit Given
            </p>
            <img src={line} className="ml-20" alt="" />
          </div>
          <div className="text-white md:mt-0 mt-10">
            <a href="https://play.google.com/store/games?hl=en&pli=1" className="inline-block">
              <img src={goplay} alt="Google Play" className="w-40 mr-0 md:mr-32 md:w-auto" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;