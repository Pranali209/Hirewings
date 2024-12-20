
import Heading from '../Heading'
import CircleStar from '../../assets/circlestar.svg'
import React, { useState } from 'react';


function HiringWho() {
  const [hoveredText, setHoveredText] = useState(null);

  const handleMouseEnter = (text) => {
    setHoveredText(text);
  };

  const handleMouseLeave = () => {
    setHoveredText(null);
  };

  return (
    <div className='mt-10 px-4 max-md:px-2 '>
      <div className='flex justify-center'>
        <img src={CircleStar} alt="CircleStar" className='mr-2 animate-rotate' />
        <Heading txtsize='text-2xl' txt='Who we are' />
      </div>

      <p className='text-customgray px-5 max-md:px-2  text-center text-xl w-[50rem] m-auto 
      leading-loose max-md:text-center
      max-md:p-2 max-md:text-wrap max-md:w-fit  '>
        "HireWings is your partner in smart hiring solutions
        Founded with the mission to simplify workforce expansion, we specialize in connecting Finnish companies with top-tier talent. 
        Our services cover hiring, onboarding, and payroll management
         allowing you to grow without limits or logistical headaches"
      </p>
    </div>
  );
}

export default HiringWho;
