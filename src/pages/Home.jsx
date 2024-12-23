import React, { useEffect, useRef } from 'react'
import Header from '../Components/header'
import Box from '../Components/Box'
import Doodles1 from '../assets/Doodles1.svg'
import Doodles2 from '../assets/Doodles2.svg'
import Doodles3 from '../assets/Doodles3.svg'
import Doodles4 from '../assets/Doodles4.svg'
import Button from '../Components/Button'
import Brands, { MobileBrands } from '../Components/Brands'
import HiringWho from '../Components/WhoHiring'
import WhyUs from '../Components/WhyUs'
import CircleStar from '../assets/circlestar.svg'
import Heading from '../Components/Heading'
import Pricing, { MobilePrice } from '../Components/Pricing'
import TalkExpert from '../Components/TalkExpert'
import People, { MobilePeople } from '../Components/People'
import FAQ from '../Components/FAQ'
import JoinUs from '../Components/JoinUs'
import MagicCal from '../Components/MagicCal'
import FooterBox from '../Components/footer'
import MobileView from '../Components/MobileView'
import { useLocation } from 'react-router-dom'

function Home() {
  const targetRef = useRef(null);
  const location = useLocation()
  const plans = [
    {
      id: 1,
      title: "Startup",
      price: "€399/Month",
      features: [
        "3 Talent Hiring",
        "Access to 5 Years + Experience Talent",
        "Priority Support",
        "Payroll Management",
        "Employee Management",
        "Reliably fast, 24/7 support",
      ],
    },
    {
      id: 2,
      title: "Enterprise",
      price: "€799/Month",
      features: [
        "9 Talent Hiring + Management",
        "Access to 5 Years + Experience Talent",
        "Priority Support",
        "Payroll Management",
        "Employee Management",
      ],
    },
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search); const section = params.get('section'); if (section === 'Fdata') { targetRef.current.scrollIntoView({ behavior: 'smooth' }); }
  },[location])

  return (
    <div className='bg-black p-[0.1rem] px-14 max-md:px-6  relative'>
      <Header />
      <h1 className='bg-clip-text  text-6xl text-center  leading-tight max-md:text-4xl
          text-transparent bg-gradient-to-r from-customWhite to-customGrayText mt-32'>
        Hire Globally, <br /> Start Immediately,<br /> Grow Faster</h1>
      <div className='lg:block max-md:hidden'>
        <section className=' flex  justify-around mt-10 max-md:flex-col max-md:items-center '>
          <Box className=" bg-gradient-to-tl from-custombg  to-black w-[257px] h-[279px]"
            src={Doodles1}
            htxt="Tell Us Your Needs"
            txt="Share your hiring requirements—roles, skills, and team size." />
          <div className=' flex flex-col  items-center max-md:mt-10'>
            <span className=' text-customheadertext text-pretty  max-md:text-center'>Tired of High Hiring Costs?
              What if hiring could be fast, stress-free, and  <br />
              <span className='mx-4'>affordable? HireWings offers an affordable, fully managed solution </span>
              <br /> <span className='mx-6'> to hiring, onboarding, and payroll—all while cutting your costs.</span>


            </span>
            <Button className="mt-12 bg-customButton shadow-glow transition-transform transform hover:scale-105"
            targetRef = {targetRef} />

          </div>

          <Box className="bg-gradient-to-tl from-black  to-custombg w-[257px] h-[279px] max-md:mt-10"
            src={Doodles2}
            htxt="Scale with Confidence"
            txt="Ongoing management support to help your business thrive" />
        </section>

        <section className=" flex  justify-center mt-10 max-md:flex-col max-md:items-center">

          <Box className="bg-gradient-to-tl from-black  to-custombg mr-24 max-md:mr-0 w-[257px] h-[279px]"
            src={Doodles3}
            htxt="We Find Your Talent"
            txt="Our experts shortlist the best candidates from our extensive network." />


          <Box className="bg-gradient-to-tl from-black  to-custombg w-[257px] h-[279px] max-md:mt-10"
            src={Doodles4}
            htxt="Seamless Onboarding"
            txt="We handle contracts, compliance, and onboarding for a hassle-free start." />
        </section>
      </div>

      <MobileView />

      <section className='mt-16'>
        <div className=' flex justify-center'>
          <img src={CircleStar} alt="CircleStar" className='mr-2 animate-rotate' />
          <Heading txtsize="text-xl" txt="BRANDS" />

        </div>
        <Brands />
        <MobileBrands />
      </section>

      <HiringWho />
      <section id="works">
        <WhyUs />
      </section>


      <section className='mt-16'  >
        <MagicCal />
      </section>
      <section id="pricing" className='Desktop mt-20 lg:block max-md:hidden' >
        <div className=' flex justify-center'>
          <img src={CircleStar} alt="CircleStar" className='mr-2 animate-rotate' />
          <Heading txtsize="text-xl" txt="PRICING" />

        </div>

        <h1 className="text-3xl text-gray-300 text-center mt-7">"We don´t charge until we deliver <br /> what we promised"</h1>
        <div className=' flex  justify-center mt-10 max-md:flex-col max-md:items-center'>
          {
            plans.map((plan) => (
              <Pricing
                key={plan.id}
                title={plan.title}
                price={plan.price}
                features={plan.features}
              />
            ))
          }
        </div>
      </section>
      <section id="pricing" className='Mobile  mt-20 lg:hidden max-md:block' >
        <div className=' flex justify-center'>
          <img src={CircleStar} alt="CircleStar" className='mr-2 animate-rotate' />
          <Heading txtsize="text-xl" txt="PRICING" />

        </div>

        <h1 className="text-3xl text-gray-300 text-center mt-7">"We don´t charge until we deliver <br /> what we promised"</h1>
        <div className=' relative overflow-hidden flex transition-transform duration-1000 ease-in-out
         w-full mt-10 '>
          {
            plans.map((plan) => (
              <MobilePrice
                id={plan.id}
                title={plan.title}
                price={plan.price}
                features={plan.features}
              />
            ))
          }
        </div>
      </section>
      <div className=' flex justify-center items-center  bg-customgray
          w-5 h-5 rounded-full absolute top-[320.25rem] right-[5px]'>
        <svg xmlns="http://www.w3.org/2000/svg" height="10" width="8" viewBox="0 0 384 512">
          <path
            d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
        </svg>
      </div>
      <section id="Fdata"
        className=' mt-28  max-md:mt-16 px-14 max-md:px-1' ref={targetRef}>
        <TalkExpert />
      </section>

      <section className='Desktop lg:flex  max-md:hidden mt-20  max-md:flex-col max-md:items-center' id="testimonials">
        <People
          ptxt="I’ve worked with a lot of agencies, but none showed this level of care. They were genuinely invested in finding the right person, not just filling a role. The follow-up made it clear they cared about the long-term fit."
          Name="Geetali Dewan"
          CoeName=" CEO Starklass Oy" />

        <People
          ptxt="With this team, hiring was simple and fast. They kept us informed every step, and we ended up with a fantastic new customer success lead who’s already making a difference. I never felt alone in the process."
          Name="Johannes"
          CoeName=" CEO, VReal" />

        <People
          ptxt="Hiring great people can get expensive, but with them, we found the perfect balance—amazing talent without the hefty price tag. They truly made quality hiring affordable."
          Name="Dmitry"
          CoeName="Co-founder, RobX Oy" />

      </section>

      <section className='mobile lg:hidden  max-md:flex mt-20 relative overflow-hidden
       flex transition-transform duration-1000 ease-in-out w-full items-center '
        id="testimonials">

        <MobilePeople
          key={1}
          ptxt="I’ve worked with a lot of agencies, but none showed this level of care. They were genuinely invested in finding the right person, not just filling a role. The follow-up made it clear they cared about the long-term fit."
          Name="Geetali Dewan"
          CoeName=" CEO Starklass Oy" />

        <MobilePeople
          key={2}
          ptxt="With this team, hiring was simple and fast. They kept us informed every step, and we ended up with a fantastic new customer success lead who’s already making a difference. I never felt alone in the process."
          Name="Johannes"
          CoeName=" CEO, VReal" />

        <MobilePeople
          key={3}
          ptxt="Hiring great people can get expensive, but with them, we found the perfect balance—amazing talent without the hefty price tag. They truly made quality hiring affordable."
          Name="Dmitry"
          CoeName="Co-founder, RobX Oy" />



      </section>
      <div className=' Sliderarrow justify-center items-center  bg-customgray
          w-5 h-5 rounded-full absolute bottom-[158.25rem] right-[5px] lg:hidden max-md:flex'>
        <svg xmlns="http://www.w3.org/2000/svg" height="10" width="8" viewBox="0 0 384 512">
          <path
            d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
        </svg>
      </div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-white text-5xl  text-center">40+
            <p className='text-sm  text-customgray mt-2'>Happy Partners</p>
          </div>
          <div className="text-white text-5xl  text-center">130+
            <p className='text-sm  text-customgray mt-2'>Hires ,  Zero Hassale</p>
          </div>
          <div className="text-white text-5xl  text-center">320K+
            <p className='text-sm  text-customgray mt-2'>Euros Saved</p>
          </div>
        </div>
      </section>

      <section className=' mt-28' id="faq">
        <div className=' flex justify-center'>
          <img src={CircleStar} alt="CircleStar" className='mr-2 animate-rotate' />
          <Heading txtsize="text-xl" txt="FAQs" />
        </div>
        <h1 className="text-3xl text-gray-300 text-center mt-3"> We’ve got the answers</h1>
        <FAQ />
      </section>



      <section className='mt-10'>
        <JoinUs />
      </section>
      <section className='mt-10'>
        <FooterBox />
      </section>
    </div>
  )
}

export default Home