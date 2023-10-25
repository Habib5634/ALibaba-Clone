import React, { useState } from 'react';
import {IoHeadset} from 'react-icons/io5'
import ConsumerElectronics from './ConsumerElectronice/ConsumerElectronics';
const MyCategorySubMenu = () => {
  const categories = [
    { id: 1,icon:<IoHeadset className='text-2xl mr-2'/>, name: 'Consumer Electronics', submenu:<ConsumerElectronics/> }
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
               className={`category-item flex font-semibold   hover:underline p-2 hover:bg-gray-100 ${activeCategory === category.id ? 'active' : ''}`}
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

export default MyCategorySubMenu;
