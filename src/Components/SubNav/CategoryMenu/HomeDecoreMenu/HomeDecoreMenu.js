import React, { useState } from 'react';
import {AiOutlineGift,AiOutlineHome} from 'react-icons/ai'
import {BsCup,BsDoorClosed} from 'react-icons/bs'
import {FaRegLightbulb} from 'react-icons/fa'
import {MdPets} from 'react-icons/md'
import Gifts from './Gifts&Carts/Gifts';
import Garden from './HomeGardenMenu/Garden';
import Construction from './ConstructionMenu/Construction';
import Light from './LighsMenu/LightMenu';
import FurnitureMenu from './FurnitureMenu/FurnitureMenu';
import PetMenu from './PetMenu/PetMenu';
const HomeDecoreMenu = () => {
    const categories = [
        { id: 1,icon:<AiOutlineGift className='text-2xl mr-2'/>, name: 'Gifts & Crafts', submenu:<Gifts/> },
        { id: 2,icon:<BsCup className='text-2xl mr-2'/>, name: 'home & Garden', submenu:<Garden/> },
        { id: 3,icon:<AiOutlineHome className='text-2xl mr-2'/>, name: 'Construction and Real State', submenu:<Construction/> },
        { id: 4,icon:<FaRegLightbulb className='text-2xl mr-2'/>, name: 'Lights & Lightining', submenu:<Light/> },
        { id: 5,icon:<BsDoorClosed className='text-2xl mr-2'/>, name: 'Furniture', submenu:<FurnitureMenu/> },
        { id: 6,icon:<MdPets className='text-2xl mr-2'/>, name: 'Pet Supplies', submenu:<PetMenu/>},
        
      ];
    
      const [activeCategory, setActiveCategory] = useState(categories[0]?.id || null);
  return (
    <div className='flex w-full h-[50vh] overflow-y-auto'
    onMouseLeave={() => setActiveCategory(null)}

    >
      <div className="category-menu w-2/6" 
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

export default HomeDecoreMenu