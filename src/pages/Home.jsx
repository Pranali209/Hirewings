import React from 'react'
import Header from '../Components/header'
import Box from '../Components/Box'
import Doodles1 from '../assets/Doodles1.svg'
import Doodles2 from '../assets/Doodles2.svg'
import Doodles3 from '../assets/Doodles3.svg'
import Doodles4 from '../assets/Doodles4.svg'
import Button from '../Components/Button'
import Brands from '../Components/Brands'
import HiringWho from '../Components/WhoHiring'
import WhyUs from '../Components/WhyUs'
import CircleStar from '../assets/circlestar.svg'
import Heading from '../Components/Heading'
import Pricing from '../Components/Pricing'
import TalkExpert from '../Components/TalkExpert'
import People from '../Components/People'
import FAQ from '../Components/FAQ'
import JoinUs from '../Components/JoinUs'
import MagicCal from '../Components/MagicCal'
import FooterBox from '../Components/footer'
function Home() {
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


  return (
    <div className='bg-black p-[0.1rem] px-14 max-md:px-6 '>
      <Header />
      <h1 className='bg-clip-text  text-6xl text-center  leading-tight max-md:text-4xl
          text-transparent bg-gradient-to-r from-customWhite to-customGrayText mt-32'>
        Hire Globally, <br /> Start Immediately,<br /> Grow Faster</h1>

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
          <Button className="mt-12 bg-customButton shadow-glow transition-transform transform hover:scale-105" />

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
      <section className='mt-16'>
      <div className=' flex justify-center'>
          <img src={CircleStar} alt="CircleStar" className='mr-2 animate-rotate' />
          <Heading txtsize="text-xl" txt="BRANDS" />

        </div>
        <Brands />
      </section>
      
      <HiringWho />
      <WhyUs />

      <section className='mt-16'>
        <MagicCal/>
      </section>
      <section className=' mt-20'>
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

      <section className=' mt-28  max-md:mt-16 px-14 max-md:px-1'>
        <TalkExpert />
      </section>

      <section className=' mt-20 flex max-md:flex-col max-md:items-center'>
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

      <section className=' mt-28'>
      <div className=' flex justify-center'>
          <img src={CircleStar} alt="CircleStar" className='mr-2 animate-rotate' />
          <Heading txtsize="text-xl" txt="FAQs" />
        </div>
        <h1 className="text-3xl text-gray-300 text-center mt-3"> We’ve got the answers</h1>
        <FAQ/>
      </section>
      
     
  
      <section className='mt-10'>
         <JoinUs/>
      </section>
      <section className='mt-10'>
        <FooterBox/>
      </section>
    </div>
  )
}

export default Home