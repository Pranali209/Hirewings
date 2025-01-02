import React from 'react'
import Box from '../Box'
import Button from '../Button'
import FallingLine from '../../assets/fallingLine.svg'
import UpDash from '../../assets/Dashedline.svg'
import DownDashArrow from '../../assets/DownDashArrow.svg'
import Doodles1 from '../../assets/Doodles1.svg'
import Doodles2 from '../../assets/Doodles2.svg'
import Doodles3 from '../../assets/Doodles3.svg'
import Doodles4 from '../../assets/Doodles4.svg'
function MobileView() {
  return (
    <>

      <section className=' sm:flex md:hidden lg:hidden  mt-16 flex-wrap max-md:flex-col items-center '>
        <Box className=" bg-gradient-to-tl from-custombg  to-black custom-width  max-md:w-full"
          src={Doodles1}
          htxt="Tell Us Your Needs"
          txt="Share your hiring requirements—roles, skills, and team size."
          imageclass="w-[73px] h-[64px] custom-image-width"
          Htxtsize="text-[9px] custom-htxt-size "
          txtsize="text-[8px] custom-txt-size" />
        

        <div className='flex justify-end w-full  relative custom-top-margin-2 '>
          <Box className="bg-gradient-to-tl from-black  to-custombg   custom-width max-md:w-full "
            src={Doodles2}
            htxt="Scale with Confidence"
            txt="Ongoing management support to help your business thrive"
            imageclass="  custom-image-width"
            Htxtsize="custom-htxt-size"
            txtsize=" custom-txt-size" />
        
        </div>
        



        <Box className="bg-gradient-to-tl from-black  to-custombg   custom-top-margin  
        max-md:mr-10 custom-width max-md:w-full "
          src={Doodles3}
          htxt="We Find Your Talent"
          txt="Our experts shortlist the best candidates from our extensive network."
            imageclass=" custom-image-width"
            Htxtsize=" custom-htxt-size"
            txtsize=" custom-txt-size"
        />

        <div className='flex   justify-end w-full  relative custom-top-margin-2  '>
          <Box className="bg-gradient-to-tl from-black  to-custombg  custom-width max-md:w-full"
            src={Doodles4}
            htxt="Seamless Onboarding"
            txt="We handle contracts, compliance, and onboarding for a hassle-free start."
            imageclass="  custom-image-width"
            Htxtsize=" custom-htxt-size"
            txtsize=" custom-txt-size"
          />
        </div>
       
      </section>

      <div className='  max-md:flex flex-col lg:hidden items-center max-md:mt-10'>
        <span className=' text-customheadertext text-pretty  max-md:text-center'>Tired of High Hiring Costs?
          What if hiring could be fast, stress-free, and  <br />
          <span className='mx-4'>affordable? HireWings offers an affordable, fully managed solution </span>
          <br /> <span className='mx-6'> to hiring, onboarding, and payroll—all while cutting your costs.</span>


        </span>
        <Button className="mt-12 bg-customButton shadow-glow transition-transform transform hover:scale-105" />
        
      </div>
    </>

  )
}

export default MobileView