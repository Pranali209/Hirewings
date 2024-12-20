import React from 'react'
import Box from '../Box'

import  Choose1 from '../../assets/chooseus1.svg'
import  Choose2 from '../../assets/chooseus2.svg'
import  Choose3 from '../../assets/chooseus3.svg'
import CircleStar from '../../assets/circlestar.svg'
import Heading from '../Heading'
function WhyUs() {
  return (
    <div className=' mt-16   '>
  <div className=' flex justify-center  '>
          <img src={CircleStar} alt="CircleStar" className='mr-2 animate-rotate' />
          <Heading txtsize = 'text-2xl max-md:text-xl' txt= "Why Choose HireWings?"/>

        </div>
           
            <div  className='flex justify-evenly mt-10 max-md:flex-col max-md:items-center'>
            <Box className=" bg-custombg w-[300px] h-[275px] max-md:mb-5 max-md:w-[280px]"
          src={Choose1}
          htxt="Hassle-Free Payroll"
          txt="We handle all contracts and compliance, giving you time to focus on expanding your business." />
            <Box className=" bg-custombg w-[300px] h-[275px] p-4  max-md:mb-5 max-md:w-[280px]"
              imageclass = " w-[200px] h-[150px]"
          src={Choose2}
          htxt="Slash Your Hiring Costs"
          txt="Say goodbye to YEL fees and inflated expenses. Save more with every hire." />
            <Box className=" bg-custombg w-[300px] h-[275px]  max-md:mb-5 max-md:w-[280px]"
            imageclass = " w-[200px] h-[170px]"
          src={Choose3}
          htxt="Lightning-fast Onboarding"
          txt="Get your new hires started in no time. Speed equals growth." />
            </div>
         
    </div>
  )
}

export default WhyUs