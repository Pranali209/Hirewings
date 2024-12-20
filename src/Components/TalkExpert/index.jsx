import React from 'react'
import Man1 from '../../assets/Man1.svg'
import Man2 from '../../assets/Man2.svg'
import Man3 from '../../assets/Man3.svg'
import circlestar from '../../assets/circlestar.svg'
import Button from '../Button'
function TalkExpert() {
  return (
    <section className=' flex justify-evenly max-md:flex-col max-md:items-center'>
      <div >
        <h1 className=' text-gray-300 font-semibold text-4xl max-md:text-[2.1rem]'>Talk to  our Expert</h1>
        <div className='bg-custombg rounded-3xl p-6 flex justify-center mt-10'>
          <div className=' w-1/2'>
            <h1 className='text-gray-300 text-2xl '>Access to design & <br /> no-code experts</h1>
            <p className='text-gray-400 text-base mt-3'>Partner with experts who <br /> share your vision</p>
          </div>
          <div className="w-1/2 flex">
            <div className="relative group">
              <img src={Man3} alt="man1" className="size-24 transition-all duration-300" />
              <span className="tooltip-boat absolute left-1/2 bottom-full mb-2 w-auto transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
                Izzy
              </span>
            </div>
            <div className="relative group ml-[-31px]">
              <img src={Man2} alt="man2" className="size-24 transition-all duration-300" />
              <span className="tooltip-boat absolute left-1/2 bottom-full mb-2 w-auto transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
              Alice
              </span>
            </div>
            <div className="relative group ml-[-31px]">
              <img src={Man1} alt="man3" className="size-24 transition-all duration-300" />
              <span className="tooltip-boat absolute left-1/2 bottom-full mb-2 w-auto transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
                Bob
              </span>
            </div>
          </div>


        </div>
        <div className=' flex justify-between  mt-5 max-md:flex-col'>
          <TalkBox txt="No commitment" />
          <TalkBox txt="Unlimited Reveiw" />
        </div>
        <div className=' flex justify-evenly mt-5 max-md:flex-col max-md:mt-0 '>
          <TalkBox txt="No-Code Development" />
          <TalkBox txt="No-Code Development" />

        </div>


      </div>

      <div className=' w-1/2 max-md:w-full max-md:mt-5 '>
        <form class="bg-custombox p-6 rounded-lg shadow-lg">
          <div class="mb-4">
            <input type="text" placeholder="First Name" class="w-full bg-black  p-2 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#D6CFFD] text-white" />
            <input type="text" placeholder="Last Name" class="w-full bg-black p-2 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#D6CFFD] text-white" />
            <input type="text" placeholder="Company Name" class="w-full bg-black p-2 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#D6CFFD] text-white" />
            <input type="email" placeholder="Email" class="w-full bg-black p-2 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-[#D6CFFD] text-white" />
            <input type="tel" placeholder="Phone Number" class="w-full bg-black p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#D6CFFD] text-white" />
            <textarea placeholder="Briefly explain what you are looking for:" class="w-full bg-black p-2 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-[#D6CFFD] text-white"></textarea>
          </div>
          <Button className="mt-12 bg-customButton shadow-glow transition-transform transform hover:scale-105" />
        </form>
      </div>
    </section>

  )
}


function TalkBox({ txt }) {

  return (

    <div className=' bg-custombox rounded-2xl flex w-fit p-3 max-md:w-full max-md:m-2 '>
      <img src={circlestar} alt="circlestar" className='' />
      <p className=' text-gray-400 ml-2'>{txt}</p>
    </div>

  )
}
export default TalkExpert