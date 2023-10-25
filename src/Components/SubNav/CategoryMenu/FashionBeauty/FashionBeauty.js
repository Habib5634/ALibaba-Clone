import React, { useState } from 'react';

import {GrDiamond} from 'react-icons/gr'
import {AiOutlineInbox} from 'react-icons/ai'

import {GiGymBag,GiLipstick} from 'react-icons/gi'
import {TbShoe} from 'react-icons/tb'
import {PiDressDuotone} from 'react-icons/pi'

import PackagingPrinting from '../Health&PersonelCare/PackagingPrinting/PackagingPrinting';
import ShoesAccessories from './ShoesAccessories/ShoesAccessories';
import ApparalAccessories from './ApparalAccessories/ApparalAccessories';
import LuggageBags from './LuggageBags/LuggageBags';
import Beauty from './Beauty/Beauty';
import Jewellery from './Jewellery/Jewellery';




const FashionBeauty = () => {
    const categories = [
        { id: 1,icon:<TbShoe className='text-2xl mr-2'/>, name: 'Shoes & Accessories', submenu:<ShoesAccessories/>},
        { id: 2,icon:<PiDressDuotone className='text-2xl mr-2'/>, name: 'Aparel & Accessories', submenu:<ApparalAccessories/>},
        { id: 3,icon:<GiGymBag className='text-2xl mr-2'/>, name: 'Lugage,Bags & Cases', submenu:<LuggageBags/>},
        { id: 4,icon:<GrDiamond className='text-2xl mr-2'/>, name: 'Jewellery, Eyewear ,watches & Acessories', submenu:<Jewellery/> },
        { id: 5,icon:<AiOutlineInbox className='text-2xl mr-2'/>, name: 'packaging Printing', submenu:<PackagingPrinting/> },
        { id: 6,icon:<GiLipstick className='text-2xl mr-2'/>, name: 'Beauty', submenu:<Beauty/>},
        
      ];
    
      const [activeCategory, setActiveCategory] = useState(categories[0]?.id || null);
  return (
    <div className='flex w-full h-[50vh] overflow-y-auto'
    onMouseLeave={() => setActiveCategory(null)}

    >
      <div className="category-menu w-2/6 border-r" 
      >
        <ul>
          {categories.map(category => (
            <li 
              key={category.id} 
               className={`category-item flex hover:font-semibold   hover:underline p-2 hover:bg-gray-100 ${activeCategory === category.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveCategory(category.id)}
            >
             <span>{category.icon}</span> {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="submenu-container w-3/5">
        {activeCategory !== null && (
          <ul className="submenu">
            <li>{categories.find(category => category.id === activeCategory)?.submenu}</li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default FashionBeauty