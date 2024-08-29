import React from 'react';
import about_img from "../assets/about_us_img.png";
import about_underline from "../assets/about_us_underline.png";

const About_us = () => {
  return (
    <div className="flex flex-col lg:flex-row p-4 lg:p-10">
      <div className="flex-grow">
        <h1 className='text-4xl md:mt-0 mt-5 lg:text-7xl text-slate-950 font-bold ml-0 lg:ml-20 text-center lg:text-left'>ABOUT US</h1>

        {/* Hide the underline image on smaller screens and show on larger screens */}
        <img src={about_underline} className='lg:block ml-10 lg:ml-20 pt-5 mx-auto lg:mx-0' alt="Underline" />

        <p className='max-w-full lg:max-w-3xl pl-0 lg:pl-20 pt-10 text-slate-950 pb-4 lg:pb-10 font-semibold text-base lg:text-xl text-center lg:text-left'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p className='max-w-full lg:max-w-3xl pl-0 lg:pl-20 pt-4 lg:pt-10 text-slate-950 pb-4 lg:pb-10 font-semibold text-base lg:text-xl text-center lg:text-left'>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="flex justify-center lg:justify-end items-center">
        <img src={about_img} className="w-full lg:w-auto h-auto pr-0 lg:pr-8 pt-10 lg:pt-36 mx-auto" alt="About Us" />
      </div>
    </div>
  );
}

export default About_us;
