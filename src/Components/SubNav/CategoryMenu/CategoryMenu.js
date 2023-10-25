import React, { useState } from 'react';
import MyCategorySubMenu from './MyCategorySubMenu/MyCategorySubMenu';
import HomeDecoreMenu from './HomeDecoreMenu/HomeDecoreMenu';
import IndustrialSubMenu from './IndustrialSubMenu/IndustrialSubMenu';
import HealthPersonalCare from './Health&PersonelCare/HealthPersonelCare';
import FashionBeauty from './FashionBeauty/FashionBeauty';
import SportsEntertainment from './SportsEntertainments/SportsEntertainments';
import ToolsHome from './ToolsHome/ToolsHome';
import RawMaterials from './RawMaterial/RawMaterial';
import Maintenance from './Maintenance/Maintenance';

const CategoryMenu = () => {
  const categories = [
    { id: 1, name: 'My Categories', submenu: <MyCategorySubMenu/> },
    { id: 2, name: 'Home Decore', submenu: <HomeDecoreMenu/> },
    { id: 3, name: 'Industrial', submenu: <IndustrialSubMenu/> },
    { id: 4, name: 'Health & Personal Care', submenu: <HealthPersonalCare/> },
    { id: 5, name: 'Fashion & Beauty', submenu: <FashionBeauty/> },
    { id: 6, name: 'Sports & Entertainment', submenu: <SportsEntertainment/> },
    { id: 7, name: 'Tools & Home Improvement', submenu: <ToolsHome/> },
    { id: 8, name: 'Raw Materials', submenu: <RawMaterials/> },
    { id: 9, name: 'Maintenance, Repair & Operations', submenu: <Maintenance/> }
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || null);

  return (
    <div className='flex justify-start w-full'
    onMouseLeave={() => setActiveCategory(null)}

    >
      <div className="category-menu w-2/6  overflow-y-auto" 
      >
        <ul>
          {categories.map(category => (
            <li 
              key={category.id} 
              className={`category-item p-2 border-r hover:font-semibold hover:bg-gray-100 ${activeCategory === category.id ? 'active' : ''}`}
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
