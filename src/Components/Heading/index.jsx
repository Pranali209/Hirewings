import React from 'react'

function Heading({txtsize ,txt}) {
  return (
    
      <h1 className={`font-semibold text-customButton text-center ${txtsize}`} > {txt}</h1>
   
  )
}

export default Heading