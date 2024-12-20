import React from 'react'
import Button from '../Button'

function JoinUs() {
  return (
    <div className='bg-gradient-to-tl from-custombg  to-black flex flex-col items-center p-5 w-1/2 m-auto rounded-2xl max-md:w-full'>
        <h1 className='bg-clip-text  text-3xl text-center  leading-tight font-semibold
          text-transparent bg-gradient-to-r from-customWhite to-customGrayText '>
        Join the HireWings<br /> Movement</h1>

        <p className='text-center text-customGrayText mt-4'>Forget the old, tedious way of hiring. 
            We’re on a mission to help  <br/>your business grow without limits. 
            Are you ready to set your <br/> hiring process on fire?
        </p>
        <Button className="mt-4 bg-customButton shadow-glow transition-transform transform hover:scale-105" />
    </div>
  )
}

export default JoinUs