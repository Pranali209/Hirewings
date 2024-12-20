import React from 'react'
import Heading from '../Heading'
import StarIcon from '../../assets/starIcon.svg'
import Button from '../Button'
function Pricing({title ,price,features}) {
  return (
    <div class=" bg-custombox p-6 rounded-[2rem] shadow-md m-4 w-[43%] max-md:w-full ">
    <div class=" mb-4">
      <button class="bg-black text-white px-4 py-2 rounded-full">One-time Plan</button>
      <h3 class="text-gray-300 text-xl   mt-2">{title}</h3>
    </div>
    <div class=" mb-4">
      <h1 class="text-white text-5xl max-md:text-4xl font-semibold">{price}</h1>
    </div>
    <ul className="list-none text-[#EEEEEE]"> 
        {features.map((feature, index) =>
        ( <li key={index}  className=' leading-loose'> 
        <img src={StarIcon} alt="starIcon" className=' inline-block mr-4' />
         {feature} </li> ))}
     </ul>
     <Button className="mt-12 bg-customButton shadow-glow transition-transform transform hover:scale-105" />
  </div>
  )
}

export default Pricing