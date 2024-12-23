import React, { useEffect, useState } from 'react'
import brand1 from '../../assets/brand1.svg'
import brand2 from '../../assets/brand2.svg'
import brand3 from '../../assets/brand3.svg'
import brand4 from '../../assets/brand4.svg'
import brand5 from '../../assets/brand5.svg'
import BrandLogo6 from '../../assets/brand6.svg'
const BrandName = [
    { id: 1, src: brand1 },
    { id: 2, src: brand2 },
    { id: 3, src: brand3 },
    { id: 4, src: brand4 },
    { id: 5, src: brand5 },
    { id: 6, src: BrandLogo6 }
]
function Brands() {


    return (
        <section className='p-5 lg:block max-md:hidden '>
            <h1 className='text-center text-customgray'> Brands we've worked with</h1>
            <div className='flex  justify-evenly mt-12 max-md:flex-col  max-md:flex-wrap max-md:items-center'>
                {
                    BrandName.map((bar, key) => {
                        return (
                            <img src={bar.src} key={key} className=' max-md:m-3' />
                        )
                    })
                }
            </div>
        </section>
    )
}


export function MobileBrands(params) {
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % BrandName.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="overflow-hidden relative w-full h-64">
            <div className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
                {BrandName.map((src, index) => (
                    <div key={index} className="flex-none w-full h-64">
                        <img src={src.src} alt={`Slide ${index}`} className="w-[300px] h-[200px] object-fill" />
                    </div>))}
            </div>
        </div>);

}

export default Brands