import React , { useState, useEffect } from 'react'

function People({ ptxt , Name , CoeName}) {
    return (
        <div>
            <div className=" gap-8 ">
                <div className="  text-center
                 text-customgray p-6 rounded-lg shadow-lg">
                    <p className="text-lg font-medium mb-2">
                         {ptxt}.</p>
                    <div className="flex items-center justify-center mt-4">
                        <div className="flex  items-center">
                            <span className="material-symbols-outlined text-gray-400 mr-2 ">⭐</span>
                            <span className="material-symbols-outlined text-gray-400 mr-2">⭐</span>
                            <span className="material-symbols-outlined text-gray-400 mr-2">⭐</span>
                            <span className="material-symbols-outlined text-gray-400 mr-2">⭐</span>
                            <span className="material-symbols-outlined text-gray-400 mr-2">⭐</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">{Name}<br />{CoeName}</p>
                </div>
            </div>
        </div>
    )
}

 export function MobilePeople({key, ptxt , Name , CoeName}) {
    const [currentIndex, setCurrentIndex] = useState(0);
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
      }, [])

    return (
        <div className='lg:hidden max-md:block slide  

        slider-container bg-gradient-to-tl from-custombg  to-black'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <div className=" gap-10 ">
                <div className="  text-center  p-2 
                 text-customgray  rounded-lg shadow-lg">
                    <p className="text-lg font-medium mb-2">
                         {ptxt}.</p>
                    <div className="flex   items-center justify-center mt-4">
                        <div className="flex  items-center">
                            <span className="material-symbols-outlined text-gray-400 mr-2 ">⭐</span>
                            <span className="material-symbols-outlined text-gray-400 mr-2">⭐</span>
                            <span className="material-symbols-outlined text-gray-400 mr-2">⭐</span>
                            <span className="material-symbols-outlined text-gray-400 mr-2">⭐</span>
                            <span className="material-symbols-outlined text-gray-400 mr-2">⭐</span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">{Name}<br />{CoeName}</p>
                </div>
            </div>
           
        </div>
    )
}


export default People