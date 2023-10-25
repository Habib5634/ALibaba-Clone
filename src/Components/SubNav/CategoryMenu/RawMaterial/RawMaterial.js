import React, { useState } from 'react';

import {SlChemistry} from 'react-icons/sl'
import {HiViewGrid } from 'react-icons/hi'

import {BsPersonCheck} from 'react-icons/bs'
import {GiButterflyFlower,GiFootPlaster} from 'react-icons/gi'
import {MdRawOn } from 'react-icons/md'





const RawMaterials = () => {
    const categories = [
        { id: 1,icon:<SlChemistry className='text-2xl mr-2'/>, name: 'Chemicals', submenu:''},
        { id: 2,icon:<HiViewGrid className='text-2xl mr-2'/>, name: 'Material & Alloye', submenu:''},
        { id: 3,icon:<GiFootPlaster className='text-2xl mr-2'/>, name: 'Rubber & Plastics', submenu:''},
        { id: 4,icon:<MdRawOn className='text-2xl mr-2'/>, name: 'Fabrics & Textile Raw Material', submenu:''},
        { id: 5,icon:<GiButterflyFlower className='text-2xl mr-2'/>, name: 'Aggriculture', submenu:''},
        { id: 6,icon:<BsPersonCheck className='text-2xl mr-2'/>, name: 'Bussiness Services', submenu:''},  
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

export default RawMaterials