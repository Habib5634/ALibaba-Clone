import React, { useState } from 'react';

import {AiOutlineHome} from 'react-icons/ai'
import {LiaToolsSolid } from 'react-icons/lia'
import {FaRegLightbulb } from 'react-icons/fa'
import {BsDoorClosed } from 'react-icons/bs'
import {GiEmbrassedEnergy} from 'react-icons/gi'
import {MdOutlineElectricalServices } from 'react-icons/md'
import {IoHeadset} from 'react-icons/io5'
import {RiSafeLine} from 'react-icons/ri'
import {GrSecure} from 'react-icons/gr'
import ConsumerElectronics from '../MyCategorySubMenu/ConsumerElectronice/ConsumerElectronics';
import Construction from '../HomeDecoreMenu/ConstructionMenu/Construction';
import ToolsHardware from '../IndustrialSubMenu/Tools&hardware/Tools&Hardware';
import Light from '../HomeDecoreMenu/LighsMenu/LightMenu';
import FurnitureMenu from '../HomeDecoreMenu/FurnitureMenu/FurnitureMenu';
import RenewableEnergy from '../IndustrialSubMenu/RenewableEnergy/RenewableEnergy';
import ElectricalEquipments from '../IndustrialSubMenu/ElectricalEquipments/ElectricalEquipments';




const ToolsHome = () => {
    const categories = [
        { id: 1,icon:<AiOutlineHome className='text-2xl mr-2'/>, name: 'Construction and Real State', submenu:<Construction/>},
        { id: 2,icon:<LiaToolsSolid className='text-2xl mr-2'/>, name: 'Tools & Hardware', submenu:<ToolsHardware/>},
        { id: 3,icon:<FaRegLightbulb className='text-2xl mr-2'/>, name: 'Lights & Lightining', submenu:<Light/>},
        { id: 4,icon:<BsDoorClosed className='text-2xl mr-2'/>, name: 'Furniture', submenu:<FurnitureMenu/> },
        { id: 5,icon:<GiEmbrassedEnergy className='text-2xl mr-2'/>, name: 'Renewable Energy', submenu:<RenewableEnergy/>},
        { id: 6,icon:<MdOutlineElectricalServices className='text-2xl mr-2'/>, name: 'Elictrical Equipment & Supplies', submenu:<ElectricalEquipments   />},
        { id: 7,icon:<RiSafeLine className='text-2xl mr-2'/>, name: 'Lights & Lightining', submenu:<Light/>},
        { id: 8,icon:<GrSecure className='text-2xl mr-2'/>, name: 'Lights & Lightining', submenu:<Light/>},
        { id: 9,icon:<IoHeadset className='text-2xl mr-2'/>, name: 'Consumer Electronics', submenu:<ConsumerElectronics/> },
        
        
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

export default ToolsHome