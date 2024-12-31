import React, { useState, useEffect } from 'react'
import Heading from '../Heading'
import StarIcon from '../../assets/starIcon.svg'
import Button from '../Button'
import Slider from '../Slider'
function Pricing({ title, price, features }) {
  return (
    <div className=" bg-custombox p-6 rounded-[2rem] shadow-md m-4 w-[43%] max-md:w-full  lg:block max-md:hidden">
      <div className=" mb-4">
        <button className="bg-black text-white px-4 py-2 rounded-full">One-time Plan</button>
        <h3 className="text-gray-300 text-xl   mt-2">{title}</h3>
      </div>
      <div className=" mb-4">
        <h1 className="text-white text-5xl max-md:text-4xl font-semibold">{price}</h1>
      </div>
      <ul className="list-none text-[#EEEEEE]">
        {features.map((feature, index) =>
        (<li key={index} className=' leading-loose'>
          <img src={StarIcon} alt="starIcon" className=' inline-block mr-4' />
          {feature} </li>))}
      </ul>
      <Button className="mt-12 bg-customButton shadow-glow transition-transform transform hover:scale-105" />
    </div>
  )
}

export function MobilePrice({ id, title, price, features }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 3000);
    return () => clearInterval(interval);
  }, [])


  return (


    <div className=" bg-custombox p-6 rounded-[2rem] shadow-md m-4 max-sm:w-[43%]
      lg:hidden max-md:flex-col   custom-pricing-box slider-container"
      style={{ transform: `translateX(-${currentIndex * 110}%)` }}>
      <div className=" mb-4">
        <button className="bg-black text-white px-4 py-2 rounded-full">One-time Plan</button>
        <h3 className="text-gray-300 text-xl   mt-2">{title}</h3>
      </div>
      <div className=" mb-4">
        <h1 className="text-white text-5xl max-md:text-4xl font-semibold">{price}</h1>
      </div>
      <ul className="list-none text-[#EEEEEE]">
        {features.map((feature, index) =>
        (<li key={index} className=' leading-loose'>
          <img src={StarIcon} alt="starIcon" className=' inline-block mr-4' />
          {feature} </li>))}
      </ul>
      

      <Button className="mt-12 bg-customButton shadow-glow transition-transform transform hover:scale-105" />
    </div>




  )
}
export default Pricing