import React from 'react'
import Box from '../Box'
import Button from '../Button'
import UpDash from '../../assets/Dashedline.svg'
import DownDashArrow from '../../assets/DownDashArrow.svg'
import Doodles1 from '../../assets/Doodles1.svg'
import Doodles2 from '../../assets/Doodles2.svg'
import Doodles3 from '../../assets/Doodles3.svg'
import Doodles4 from '../../assets/Doodles4.svg'
function MobileView() {
  return (
    <>

      <section className=' max-md:flex lg:hidden  mt-16 flex-wrap  '>
        <Box className=" bg-gradient-to-tl from-custombg  to-black w-[130px]"
          src={Doodles1}
          htxt="Tell Us Your Needs"
          txt="Share your hiring requirements—roles, skills, and team size."
          imageclass="w-[73px] h-[64px]"
          Htxtsize="text-[9px]"
          txtsize="text-[8px]" />
        <img src={UpDash} />

        <div className='flex justify-end w-full mt-[-75px] relative '>
          <Box className="bg-gradient-to-tl from-black  to-custombg  w-[130px] mt-4"
            src={Doodles2}
            htxt="Scale with Confidence"
            txt="Ongoing management support to help your business thrive"
            Htxtsize="text-[9px]"
            txtsize="text-[8px]" />
          <img src={DownDashArrow} className=' absolute  top-[9rem] right-[8rem]' />
        </div>
        



        <Box className="bg-gradient-to-tl from-black  to-custombg mt-[-30px]  w-[130px] mr-10"
          src={Doodles3}
          htxt="We Find Your Talent"
          txt="Our experts shortlist the best candidates from our extensive network."
          Htxtsize="text-[9px]"
          txtsize="text-[8px]"
        />

        <div className='flex   justify-end w-full mt-[-75px] relative '>
          <Box className="bg-gradient-to-tl from-black  to-custombg  w-[130px] "
            src={Doodles4}
            htxt="Seamless Onboarding"
            txt="We handle contracts, compliance, and onboarding for a hassle-free start."
            Htxtsize="text-[9px]"
            txtsize="text-[8px]"
          />
        </div>
        <img src={UpDash} className=' absolute right-[5.25rem] top-[39.25rem]' />
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