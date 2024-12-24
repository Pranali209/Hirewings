import React from 'react'

function Box( {className , src , htxt ,txt ,  imageclass , Htxtsize,txtsize}) {
  return (
    <div className={` rounded-2xl ${className} flex flex-col justify-center items-center p-4` }>
        <img src={src} alt="" className={`${imageclass}`} />
        <h1 className={` ${Htxtsize} text-white text-center mt-3 max-md:text-[10px]`}>{htxt}</h1>
        <p className={`text-customgray leading-snug text-center max-md:text-[7px] ${txtsize}`}>{txt}</p>
    </div>
  )
}

export default Box