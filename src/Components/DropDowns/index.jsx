import React from 'react'

function DropDowns({heading ,data , category , handleCategoryChange,getOptionLabel}) {
  return (
    <div className=' flex mt-10 w-1/2 max-md:w-full Category-div items-center 
    max-md:mt-2 max-md:flex-col max-md:items-start '>
                <label htmlFor="Course" className="block text-lg ml-2 mr-2 mb-1 max-md:mt-4  text-customWhite">{heading}</label>
                <div className='relative  w-full'>
                  <select className='p-2 pr-14 pl-3 rounded-full bg-gray-50 appearance-none
      transition-transform duration-150 hover:border-blue-600 active:scale-95
      peer-checked:border-black flex  w-full 
      peer-checked:bg-customButton text-black cursor-pointer'
                    id="category" value={category} onChange={handleCategoryChange}>
                    {
                    data.map(item => 
                        ( 
                        <option key={item} value={item} className='bg-black text-customWhite border-none'> 
                        {getOptionLabel(item)}
                     </option>
                        ))}
                  </select>
                  <div className='absolute top-2 right-2 flex items-center justify-center w-6 h-6 pointer-events-none
      bg-customButton rounded-full'>
                    <svg className='w-4 h-4 text-black' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
  )
}

export default DropDowns