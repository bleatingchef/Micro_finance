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
  // Add more testimonials here
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
    <div className="flex-grow pt-20 pb-20">
        <h1 className="text-7xl text-slate-950 font-bold ml-20 ">TESTIMONIALS</h1>
        <img src={offer_underline} className="ml-20 pt-5 mb-10" alt="underline" />
      </div>
    <div style={{ backgroundImage: `url(${testi_bg})`, backgroundSize: 'cover',height:'30rem', padding: '20px', borderRadius: '', color: 'white' }}>
        
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={handlePrev} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
          <FaChevronLeft size={24} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', maxWidth: '1000px' }}>
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} style={{ borderRadius: '50%', width: '1000px', height: '300px', marginRight: '30px',marginTop:"80px", }} />
          <div>
            <h2 className='text-7xl pt-16 pl-20 justify-start'>{testimonials[currentIndex].name}</h2>
            <p className='text-2xl font-semibold pt-8 pl-28'>{testimonials[currentIndex].location}</p>
            <p className='text-lg pt-5 pl-28'>{testimonials[currentIndex].text}</p>
           
          </div>
        </div>
        <button onClick={handleNext} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
    <div className="relative mb-20">
    <img src={googlePlay} className="w-full" alt="" />
    <div className="absolute col-md-3 inset-0 flex justify-between items-center p-4">
        <div className="text-white flex ">
            <img src={mob} className='w-24 h-24 ml-16  mr-5 ' alt="" />
            <p className='text-xl'>OVER<p className="text-2xl font-bold">11 Crore</p>App Downloads</p>
            <img src={line} className="ml-80" alt="" />
        </div>
        <div className="text-white flex ">
            <img src={total} className='w-24 h-24 mr-10' alt="" />
            <p className='text-xl'>OVER<p className="text-2xl pr-10 font-bold">₹54,000 Crores</p>Total Credit Given</p>
            <img src={line}className='ml-40' alt="" />
        </div>
        <div className="text-white">
            <a href="https://play.google.com/store/games?hl=en&pli=1"><img src={goplay} className='pr-40' alt="" /></a>
            
        </div>
    </div>
</div>
    
    </>
  );
};

export default Testimonial;
