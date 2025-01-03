import React, { useEffect, useState } from 'react';
import Logo from '../../assets/Logo.svg'
import { HashLink as Link } from 'react-router-hash-link';
import Button from '../Button';


function Header() {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    let lastScrollTop = 0;
    const header = document.getElementById('header');

    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        header.classList.add('dimmed');
      }
      else {
        header.classList.remove('dimmed');
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }
    window.addEventListener('scroll', handleScroll);
  }, [])
  const toggleMenu = () => { setIsOpen((prev) => !prev); };
  return (
    <header id="header" className='p-2 px-4 flex justify-around 
     max-md:flex-col  fixed left-0 w-full  z-50  '>

       <section className='Mobile-Menu flex   justify-between  lg:hidden'>
      <img src={Logo} alt="Logo" className='h-16' />
      { !isOpen && <button onClick={toggleMenu} className=" visible focus:outline-none hover:scale-[0.8] transition-transform transform hover:cursor-pointer">
          <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>}
        
        <div className= {isOpen ? "showMenuNav " : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-5 hover:scale-[0.7] transition-transform transform hover:cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <nav className=" flex flex-col  backdrop-blur-md  rounded-tl-lg rounded-bl-lg
          mt-14  w-1/2  border-[1px] border-gray-400  w3-animate-right ">
        <a className='text-customWhite hover:text-customButton p-4 hover:cursor-pointer underline-effect w3-animate-zoom' to="#pricing"
          onClick={() => setIsOpen(false)}>Pricing</a>
        <a  className='text-customWhite w-full  p-4  hover:text-customButton  underline-effect w3-animate-right' href="#testimonial"
        onClick={() => setIsOpen(false)} >Testimonials</a>
        <a  className='text-customWhite w-full  p-4 hover:text-customButton underline-effect w3-animate-zoom' href="#faq"
        onClick={() => setIsOpen(false)}>FAQ</a>
        <a  className='text-customWhite w-full  p-4 hover:text-customButton  w3-animate-right' href="#works"
        onClick={() => setIsOpen(false)}>Works</a>


      </nav> 
    
        </div>

      </section> 

   





      <section className='Desktop-menu hidden lg:flex justify-around  w-full'>
        <img src={Logo} alt="Logo" className='h-14' />
        <nav className=" flex justify-between items-center ml-[4rem] px-8 py-2 rounded-full border-[1px] border-gray-400
          bg-custombg w-[22rem] ">
          <Link className='text-customWhite hover:text-customButton' to="#Dpricing">Pricing</Link>
          <Link className='text-customWhite hover:text-customButton' to="#Dtestimonials">Testimonials</Link>
          <Link className='text-customWhite hover:text-customButton' to="#faq">FAQ</Link>
          <Link className='text-customWhite hover:text-customButton' to="#works">Works </Link>
        </nav>
        <Button className=" bg-customButton shadow-glow transition-transform transform hover:scale-105" />
      </section>








    </header>
  )
}

export default Header