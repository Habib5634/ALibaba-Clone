import React, { useState } from 'react'
import { AiOutlineGlobal} from 'react-icons/ai'

const Languages = [
  { value: 'English', label: 'English' },
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'FR', label: 'France' },
  { value: 'DE', label: 'Germany' }
];

const Currencies = [
  { value: 'USD', label: 'USD - US Dollar' },
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'FR', label: 'France' },
  { value: 'DE', label: 'Germany' }
];
const LanguageMenu = () => {
    const [navMenu, setNavMenu] = useState(false);
    return (
      <>
      <li 
      onMouseEnter={()=>setNavMenu(true)}
      onMouseLeave={()=>setNavMenu(false)}
      className="p-2 w-fit flex menu-item text-[14px]  hover:text-white">
            <AiOutlineGlobal className="text-xl mr-2 "/>English-USD
  
  
            {navMenu && 
          <div className="absolute bg-white max-w-sm p-5 z-50 mt-8 -ml-24 rounded-xl py-3 shadow-xl text-black">
  
  <h1 className='text mb-4'>Set Language and Currency</h1>
            <p className='text-gray-500 text-sm mb-4'>Select your preferred language and currency. You can update the settings at any time</p>
              

              

            <div>
        <label htmlFor="language_select" className="text-gray-500">
          Language
        </label>
        <select
          id="language_select"
          className="block mb-4 py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border border-gray-500 appearance-none dark:text-gray-500 dark:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
        >
          {Languages.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="currency_select" className="text-gray-500">
          Currency
        </label>
        <select
          id="currency_select"
          className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border border-gray-500 appearance-none dark:text-gray-500 dark:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer"
        >
          {Currencies.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <button className='w-full mb-4 mt-4 bg-orange-500 hover:bg-orange-600 transition-colors duration-300 py-1 font-medium text-white rounded-full'>Save</button>


          </div>
          }
            </li>
      </>
  )
}

export default LanguageMenu