import React from 'react';
import about_img from "../assets/about_us_img.png";
import about_underline from "../assets/about_us_underline.png";

const About_us = () => {
  return (
    <div className="flex p-10">
      <div className="flex-grow">
        <h1 className='text-7xl text-slate-950 font-bold ml-20 '>ABOUT US</h1>
        <img src={about_underline} className='ml-20 pt-5' alt="" />
        <p className='max-w-3xl pl-20 pt-10 text-slate-950 pb-10 font-semibold text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p className='max-w-3xl pl-20 pt-10 text-slate-950 pb-10 font-semibold text-xl'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div>
        <img src={about_img} className="w-full h-full pr-8 pt-36" alt="About Us" />
      </div>
    </div>
  );
}

export default About_us;
