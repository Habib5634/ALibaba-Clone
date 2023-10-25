import React, { useState } from 'react';
import {PiSyringeBold,PiBeerBottleDuotone} from 'react-icons/pi'
import {AiOutlineInbox} from 'react-icons/ai'

import {BiDumbbell} from 'react-icons/bi'
import {MdOutlineSmartToy,MdFastfood} from 'react-icons/md'
import FoodBeverage from './FoodBeverage/FoodBeverage';
import KidsToys from './KidsToys/KidsToys';
import HouseholdCleaning from './HouseholdCleaning/HouseHoldCleaning';
import PackagingPrinting from './PackagingPrinting/PackagingPrinting';
import MedicalDevices from './MedicaDevices/MedicalDevices';
import SupportsEntertainments from './Sports&Entertainments/SportsEntertainments';



const HealthPersonalCare = () => {
    const categories = [
        { id: 1,icon:<MdFastfood className='text-2xl mr-2'/>, name: 'Food & Beverge', submenu:<FoodBeverage/>},
        { id: 2,icon:<PiSyringeBold className='text-2xl mr-2'/>, name: 'Medicl Devices & Supplies', submenu:<MedicalDevices/> },
        { id: 3,icon:<BiDumbbell className='text-2xl mr-2'/>, name: 'Supports & Entertainments', submenu:<SupportsEntertainments/> },
        { id: 4,icon:<AiOutlineInbox className='text-2xl mr-2'/>, name: 'Packaging & Printing', submenu:<PackagingPrinting/> },
        { id: 5,icon:<PiBeerBottleDuotone className='text-2xl mr-2'/>, name: 'Personel Care & house Hold cleaning', submenu:<HouseholdCleaning/> },
        { id: 6,icon:<MdOutlineSmartToy className='text-2xl mr-2'/>, name: 'Mother, Kids & Toys', submenu:<KidsToys/>},
        
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

export default HealthPersonalCare