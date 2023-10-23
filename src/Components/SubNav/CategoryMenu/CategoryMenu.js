import React, { useState } from 'react';
import MyCategorySubMenu from './MyCategorySubMenu/MyCategorySubMenu';

const CategoryMenu = () => {
  const categories = [
    { id: 1, name: 'My Categories', submenu: <MyCategorySubMenu/> },
    { id: 2, name: 'Home Decore', submenu: 'sub2' },
    { id: 3, name: 'Industrial', submenu: 'sub3' },
    { id: 4, name: 'Health & Personal Care', submenu: 'sub4' },
    { id: 5, name: 'Fashion & Beauty', submenu: 'sub5' },
    { id: 6, name: 'Sports & Entertainment', submenu: 'sub6' },
    { id: 7, name: 'Tools & Home Improvement', submenu: 'sub7' },
    { id: 8, name: 'Raw Materials', submenu: 'sub8' },
    { id: 9, name: 'Maintenance, Repair & Operations', submenu: 'sub9' }
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || null);

  return (
    <div className='flex justify-start w-full'
    onMouseLeave={() => setActiveCategory(null)}

    >
      <div className="category-menu w-2/6 overflow-y-auto" 
      >
        <ul>
          {categories.map(category => (
            <li 
              key={category.id} 
              className={`category-item p-2  hover:bg-gray-100 ${activeCategory === category.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveCategory(category.id)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="submenu-container w-4/5">
        {activeCategory !== null && (
          <ul className="submenu">
            <li>{categories.find(category => category.id === activeCategory)?.submenu}</li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default CategoryMenu;
