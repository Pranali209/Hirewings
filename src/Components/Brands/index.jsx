import React from 'react'
import brand1 from '../../assets/brand1.svg'
import brand2 from '../../assets/brand2.svg'
import brand3 from '../../assets/brand3.svg'
import brand4 from '../../assets/brand4.svg'
import brand5 from '../../assets/brand5.svg'
import BrandLogo6 from '../../assets/brand6.svg'
function Brands() {

    const Brands = [
        { id: 1, src:  brand1  },
        { id: 2, src:  brand2  },
        { id: 3, src: brand3  },
        { id: 4, src:  brand4 },
        { id: 5, src:  brand5  },
        { id: 6, src: BrandLogo6 },
    ]
    return (
        <section className='p-5 '>
            <h1 className='text-center text-customgray'> Brands we've worked with</h1>
            <div className='flex  justify-evenly mt-12 max-md:flex-col  max-md:flex-wrap max-md:items-center'>
            {
                Brands.map((bar ,key)=> {
                    return(
                        <img src={bar.src} key={key}  className=' max-md:m-3'/>
                )
                })
            }
            </div>
        </section>
    )
}

export default Brands