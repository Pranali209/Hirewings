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
     max-md:flex-col  fixed left-0 w-full  '>
      
      <section className='Mobile-Menu flex  justify-between  lg:hidden'>
      <img src={Logo} alt="Logo" className='h-16' />
      { !isOpen && <button onClick={toggleMenu} className=" visible focus:outline-none">
          <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>}
        
        <div className={isOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-5"
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
          <nav className=" flex flex-col justify-between items-center backdrop-blur-md
          mt-20 w-full ">
         <a  className='text-customWhite w-full border-[1px] border-gray-400 p-4'
          href="#pricing">Pricing</a>
        <a  className='text-customWhite w-full border-[1px] border-gray-400 p-4' href="#testimonials">Testimonials</a>
        <a  className='text-customWhite w-full border-[1px] border-gray-400 p-4' href="#faq">FAQ</a>
        <a  className='text-customWhite w-full border-[1px] border-gray-400 p-4' href="#works">Works</a>

      </nav>

        </div>

      </section>




  <section className='hidden lg:flex justify-around  w-full'>
  <img src={Logo} alt="Logo" className='h-14' />
  <nav className=" flex justify-between items-center ml-[4rem] px-8 py-2 rounded-full border-[1px] border-gray-400
          bg-custombg w-[22rem] ">
        <Link className='text-customWhite' to="#pricing">Pricing</Link>
        <Link className='text-customWhite' to="#testimonials">Testimonials</Link>
        <Link className='text-customWhite'to = "#faq">FAQ</Link>
        <Link className='text-customWhite' to="#works">Works </Link>
      </nav>
      <Button className=" bg-customButton shadow-glow transition-transform transform hover:scale-105" />
  </section>
      







    </header>
  )
}

export default Header