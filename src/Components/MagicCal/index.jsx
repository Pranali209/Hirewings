import React, { useEffect, useState } from 'react'

import CircleStar from '../../assets/circlestar.svg'

import Heading from '../Heading'

import DownArrow from '../../assets/DownArrow.svg'

import Box from '../Box'
import Caluclator from '../../assets/CalculatorImage.svg'
import DropDowns from '../DropDowns'
const rolesData = {
  tech: ["Full Stack Developer", "Front-End Developer", "Back-End Developer", "Mobile App Developer", "Data Analyst"],
  design: ["Graphic Designer", "UI/UX Designer", "Illustrator"],
  social: ["Community Manager", "Content Creator", "Social Media Specialist", "Social Media Strategist"],
  operation: ["Customer Support", "HR Specialist", "Operations Manager", "Administrative Assistant"],
  marketing: ["Content Writer", "Digital Marketer", "SEO Specialist", "Social Media Manager"]
};
const salaries = {
  "Full Stack Developer": [3600, 5200, 6200],
  "Front-End Developer": [3500, 5000, 6000],
  "Back-End Developer": [3600, 5200, 6200],
  "Mobile App Developer": [3400, 4800, 5800],
  "Data Analyst": [3200, 4500, 5500],
  "Graphic Designer": [2800, 4000, 5200],
  "UI/UX Designer": [3000, 4500, 5500],
  "Illustrator": [2700, 3700, 4800],
  "Community Manager": [2700, 3500, 4500],
  "Content Creator": [2600, 3800, 4800],
  "Social Media Specialist": [2800, 3800, 4800],
  "Social Media Strategist": [3000, 4200, 5200],
  "Customer Support": [2400, 3200, 4000],
  "HR Specialist": [3000, 4200, 5000],
  "Operations Manager": [3500, 4800, 6000],
  "Administrative Assistant": [2200, 3000, 4000],
  "Content Writer": [2800, 3800, 4800], "Digital Marketer": [3000, 4200, 5200],
  "SEO Specialist": [3000, 4000, 5000], "Social Media Manager": [2700, 3500, 4500]
};

const alternateSalary = {
  "Full Stack Developer": [576, 1152, 2760],
  "Front-End Developer": [552, 1104, 2070],
  "Back-End Developer": [576, 1176, 2208],
  "Mobile App Developer": [528, 1032, 1932],
  "Data Analyst": [480, 966, 1656],
  "Graphic Designer": [420, 720, 1320],
  "UI/UX Designer": [480, 900, 1560],
  "Illustrator": [360, 660, 1080],
  "Community Manager": [360, 660, 1020],
  "Content Creator": [336, 660, 1020],
  "Social Media Specialist": [384, 660, 1020],
  "Social Media Strategist": [480, 900, 1320],
  "Customer Support": [360, 540, 840],
  "HR Specialist": [480, 780, 1200],
  "Operations Manager": [600, 960, 1800],
  "Administrative Assistant": [300, 480, 840],
  "Content Writer": [420, 720, 1080], "Digital Marketer": [480, 900, 1500],
  "SEO Specialist": [420, 720, 1320], "Social Media Manager": [384, 660, 1020]
};

const experienceLevels = ["Junior", "Mid-Level", "Senior"];

function MagicCal() {
  const [category, setCategory] = useState('tech');
  const [roles, setRoles] = useState(rolesData[category]);
  const [role, setRole] = useState(roles[0]);
  const [experience, setExperience] = useState('Junior');
  const [value, setValue] = useState(0);
  const [calculateCostwithUs, setCalculateCostwithUs] = useState(0)
  const [calculateYourCost, setCalculateYourCost] = useState(0)
  const [visibleCostwithUs, setVisibleCostwithUs] = useState(false)
  const [visibleYourCost, setVisibleYourCost] = useState(false)
  const [anuallyValue, setAnuallly] = useState(false)
  const [savings, setsavings] = useState(0)
  let BSalary = 0;
  let ASalary = 0 ;
  useEffect(() => {
    // updating the roles 

    console.log(roles);
    console.log("bslaray", salaries[role][experienceLevels.indexOf(experience)]);
    console.log("aslary", alternateSalary[role][experienceLevels.indexOf(experience)]);


     BSalary = salaries[role][experienceLevels.indexOf(experience)];
     ASalary = alternateSalary[role][experienceLevels.indexOf(experience)]

    if (value === 0) {
      setVisibleCostwithUs(0);
      setVisibleYourCost(0)
      setsavings(0)
    }
    else {

      if (anuallyValue) {
        const CostWithUs = parseInt(value * ((ASalary * 12) + 99))
        const YourCost = parseInt(value * ((BSalary * 12) + 1.18))
        setCalculateCostwithUs(CostWithUs);
        setCalculateYourCost(YourCost);
        const TotalSavings = YourCost - CostWithUs
        setsavings(TotalSavings)
      }
      else {
        const CostWithUs = parseInt(value * (ASalary + 99))
        const YourCost = parseInt(value * (BSalary + 1.18))
        setCalculateCostwithUs(CostWithUs);
        setCalculateYourCost(YourCost);
        const TotalSavings = YourCost - CostWithUs
        setsavings(TotalSavings)
      }
    }

  }, [value, experience, role, anuallyValue])

  useEffect(() => {
    setRoles(rolesData[category]);
    setRole(rolesData[category][0])
  }, [category])


  const handleRangeChange = (event) => {
    setValue(parseInt(event.target.value, 10));
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleRoleChange = (e) => { setRole(e.target.value); };
  const handleExperienceChange = (event) => { setExperience(event.target.value); };

  return (
    <section>
      <div className='flex justify-center items-center'>
        <img src={CircleStar} alt="CircleStar" className='mr-2 animate-rotate' />
        <Heading txtsize='text-2xl' txt='Who we are' />
      </div>
      <div className='p-3 flex max-md:flex-col max-md:p-1 ' >
        <div className='w-1/2 p-2 max-md:w-full '>
          <p className="text-xl font-medium bg-clip-text max-md:text-center 
           text-transparent bg-gradient-to-r from-customWhite to-customGrayText">Select Number of Employees:</p>
          <div className="bg-[#0a0b0b] text-[#f4f4f5] font-sans flex flex-col  p-5 max-md:p-2 ">
            <div className=" mb-5">
              <div className="text-center font-bold mb-2" id="range-value">{value}</div>
              <input
                type="range"
                min="0"
                max="20"
                value={value}
                onChange={handleRangeChange}
                className="w-full appearance-none bg-[#18181a] outline-none h-1.5 rounded-lg"

              />
              <div className="flex justify-between mt-2 text-xs">
                <span>0</span>
                <span>5</span>
                <span>10</span>
                <span>15</span>
                <span>20</span>
              </div>
            </div>

            <p className="text-lg font-medium bg-clip-text   text-transparent bg-gradient-to-r
             from-customWhite to-customGrayText">
              Role Type:</p>
            <div className=' mt-2 max-md:flex-col max-md:items-center'>
            <div className="flex gap-2 justify-between bg-customWhite rounded-full w-fit max-md:w-full max-md:mb-0
            max-md:items-center 
            mb-2 Experience-div" >
              {
                experienceLevels.map((exp) => {
                  return (
                    <div>
                      <input
                        className="peer sr-only"
                        value={exp}
                        name="Course"
                        id={exp}
                        type="radio"
                        onChange={handleExperienceChange}
                        checked={experience === exp}
                      />
                      <div
                        class="flex  cursor-pointer flex-col items-center justify-center px-5 
                 rounded-full  bg-gray-50 p-2 max-md:p-[7px]
                  transition-transform duration-150 hover:border-blue-600 active:scale-95
                    peer-checked:font-semibold
                      peer-checked:bg-customButton "
                      >
                        <label
                          class="flex cursor-pointer items-center justify-center  text-black
                     peer-checked:text-blue-500 text-base" 
                          for={exp}
                        >
                          {exp}
                        </label>

                      </div>
                    </div>

                  )
                })
              }

            </div>
            <div className='flex  max-md:flex-col '>
            <DropDowns
           heading = "Category"
           data = {Object.keys(rolesData)}
           category={category}
           handleCategoryChange = {handleCategoryChange}
           getOptionLabel={(cat) => cat.charAt(0).toUpperCase() + cat.slice(1)}
           />
            <DropDowns
           heading = "Role"
           data = {roles}
           category={role}
           handleCategoryChange = {handleRoleChange}
           getOptionLabel={(role)=>role}
           />
            </div>
          


        
              

            </div>
          </div>
        </div>
        <div className='w-1/2 p-2  max-md:w-full'>
          <div className='flex mb-2 justify-around items-center max-md:mt-5'>
           
            <div class="flex  items-center justify-around bg-customWhite rounded-full  w-fit ">
              <div>
                <input
                  className="peer sr-only"
                  value="Monthly"
                  name="Income"
                  id="Monthly"
                  type="radio"
                  defaultChecked
                  
                />
                <div
                  className="flex  cursor-pointer rounded-full px-[2.88rem] p-2 max-md:px-3
                   flex-col items-center
                  justify-center 
                  
                    bg-gray-50 
                   transition-transform duration-150 hover:border-blue-600 active:scale-95
                    peer-unchecked:font-light
                     peer-checked:font-semibold
                      peer-checked:bg-customButton"
                >
                  <label
                    className="flex cursor-pointer font-semibold items-center
                     justify-center text-black peer-checked:text-blue-500"
                    for="Monthly"
                  >
                    Monthly
                  </label>
                </div>
              </div>
              <div>
                <input
                  class="peer sr-only"
                  value="Anually"
                  name="Income"
                  id="Anually"
                  type="radio"
                />
                <div
                  class="flex  cursor-pointer flex-col items-center justify-center px-[2.88rem] max-md:px-3
                 rounded-full  bg-gray-50 p-2
                  transition-transform duration-150 hover:border-blue-600 active:scale-95
                    peer-checked:border-black 
                     peer-checked:font-semibold
                      peer-checked:bg-customButton "
                  onClick={() => setAnuallly(!anuallyValue)}
                >
                  <label
                    class="flex cursor-pointer items-center justify-center  text-black
                     peer-checked:text-blue-500"
                    for="Anually"
                  >
                    Anually
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className='flex max-md:flex-col'>
            <div className="bg-[#FDCFD0] w-1/2 m-2 p-2 px-5 h-40 justify-between rounded-2xl  max-md:w-[100%]
             flex flex-col relative">

              <button className=' w-4 h-4 text-center top-2 text-[10px] border-[1px] text-customGrayText
               border-customGrayText rounded-full absolute right-2 hover:cursor-pointer'
                onClick={() => setVisibleYourCost(!visibleYourCost)}>i</button>
              {
                visibleYourCost ? (
                  <p className="text-customGrayText text-xs">
                    <ul>
                      <li> <b>Number of Employees -</b>{value}</li>
                      <li> <b>Salary selected -</b>{salaries[role][experienceLevels.indexOf(experience)]}</li>
                      <li> *1.18</li>
                       
                       
                       
                    </ul>
                  </p>
                ) : (
                  <>
                    <h1 className='text-3xl font-bold '>{calculateYourCost}
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="15"
                        viewBox="0 0 320 512" className=' inline mt-[-6px] ml-1'>
                        <path d="M48.1 240c-.1 2.7-.1 5.3-.1 8l0 16c0 2.7 0 5.3 .1 8L32 272c-17.7 0-32 14.3-32 32s14.3 32 32 32l28.3 0C89.9 419.9 170 480 264 480l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0c-57.9 0-108.2-32.4-133.9-80L256 336c17.7 0 32-14.3 32-32s-14.3-32-32-32l-143.8 0c-.1-2.6-.2-5.3-.2-8l0-16c0-2.7 .1-5.4 .2-8L256 240c17.7 0 32-14.3 32-32s-14.3-32-32-32l-125.9 0c25.7-47.6 76-80 133.9-80l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0C170 32 89.9 92.1 60.3 176L32 176c-17.7 0-32 14.3-32 32s14.3 32 32 32l16.1 0z" /></svg>
                    </h1>
                    <p className='text-black text-base'> Your Cost</p>
                  </>
                )
              }

            </div>
            <div className="bg-[#D6CFFD] w-1/2 m-2 max-md:w-full p-5 h-40 justify-between rounded-2xl flex flex-col relative">

              <button className=' w-4 h-4 text-center top-2  text-[10px] border-[1px] text-customGrayText
               border-customGrayText rounded-full absolute right-2 hover:cursor-pointer'
                onClick={() => setVisibleCostwithUs(!visibleCostwithUs)}>i</button>
              {
                visibleCostwithUs ? (
                  <p className="text-customGrayText text-xs">
                    <b>Number of Employees -</b>{value} <br/>
                    <b>Alternative Salary:</b> {alternateSalary[role][experienceLevels.indexOf(experience)] }<br />
                    <b>Service Fee  : </b> + 99€
                  </p>
                ) : (
                  <>
                    <h1 className='text-3xl font-bold'>{calculateCostwithUs}
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="15" viewBox="0 0 320 512"
                        className=' inline mt-[-6px] ml-1'>
                        <path d="M48.1 240c-.1 2.7-.1 5.3-.1 8l0 16c0 2.7 0 5.3 .1 8L32 272c-17.7 0-32 14.3-32 32s14.3 32 32 32l28.3 0C89.9 419.9 170 480 264 480l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0c-57.9 0-108.2-32.4-133.9-80L256 336c17.7 0 32-14.3 32-32s-14.3-32-32-32l-143.8 0c-.1-2.6-.2-5.3-.2-8l0-16c0-2.7 .1-5.4 .2-8L256 240c17.7 0 32-14.3 32-32s-14.3-32-32-32l-125.9 0c25.7-47.6 76-80 133.9-80l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0C170 32 89.9 92.1 60.3 176L32 176c-17.7 0-32 14.3-32 32s14.3 32 32 32l16.1 0z" /></svg>
                    </h1>
                    <p className='text-black text-base'>Cost With Us</p>
                    <img src={Caluclator} alt="cal" className=' w-20 h-20 absolute top-11 right-2' />
                  </>
                )
              }

            </div>

          </div>
          <div className="bg-[#DBFFF5]  m-2 p-3 h-36 justify-between rounded-2xl flex flex-col relative  
          max-md:w-full ">
            <h1 className='text-3xl font-bold'>{savings}
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="15" viewBox="0 0 320 512"
                className=' inline mt-[-6px] ml-1'>
                <path d="M48.1 240c-.1 2.7-.1 5.3-.1 8l0 16c0 2.7 0 5.3 .1 8L32 272c-17.7 0-32 14.3-32 32s14.3 32 32 32l28.3 0C89.9 419.9 170 480 264 480l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0c-57.9 0-108.2-32.4-133.9-80L256 336c17.7 0 32-14.3 32-32s-14.3-32-32-32l-143.8 0c-.1-2.6-.2-5.3-.2-8l0-16c0-2.7 .1-5.4 .2-8L256 240c17.7 0 32-14.3 32-32s-14.3-32-32-32l-125.9 0c25.7-47.6 76-80 133.9-80l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0C170 32 89.9 92.1 60.3 176L32 176c-17.7 0-32 14.3-32 32s14.3 32 32 32l16.1 0z" /></svg>
            </h1>
            <p className='text-black text-base'> Saving Monthly</p>
            <img src={Caluclator} alt="cal" className=' w-20 h-20 absolute right-2' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MagicCal