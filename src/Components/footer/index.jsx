import React from 'react'

function FooterBox() {
  return (
    <footer className=" text-customGrayText font-sans p-4 flex flex-col items-center justify-center 
     md:flex-row max-md:justify-between">
       
      <div className="text-center md:text-left mb-4 md:mb-0">
        <p className="text-sm">© 2024 HireWings. <a href="https://www.linkedin.com/company/hirewings/" 
        target="_blank" className="text-customGrayText hover:underline">Follow us on 
        <span className='text-customWhite hover:underline'> LinkedIn</span></a></p>
      </div>
      
  
    </footer>
  )
}

export default FooterBox