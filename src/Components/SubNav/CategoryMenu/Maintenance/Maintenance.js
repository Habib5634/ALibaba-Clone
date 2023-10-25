import React, { useState } from 'react';

import {LiaToolsSolid} from 'react-icons/lia'

import {AiOutlineInbox} from 'react-icons/ai'
import {GiChemicalDrop,GiEmbrassedEnergy,GiFlowerEmblem} from 'react-icons/gi'

import {RiSchoolLine} from 'react-icons/ri'
import {SiMaterialdesign} from 'react-icons/si'
import {MdOutlineSolarPower,MdOutlineHealthAndSafety,MdSecurity,MdOutlineElectricalServices } from 'react-icons/md'

import ToolsHardware from '../IndustrialSubMenu/Tools&hardware/Tools&Hardware';
import PowerTransmission from '../IndustrialSubMenu/PowerTransmission/PowerTransmission';
import MaterialHandling from '../IndustrialSubMenu/MaterialHandling/MaterialHandling';
import ElectricalEquipments from '../IndustrialSubMenu/ElectricalEquipments/ElectricalEquipments';
import PackagingPrinting from '../Health&PersonelCare/PackagingPrinting/PackagingPrinting';
import RenewableEnergy from '../IndustrialSubMenu/RenewableEnergy/RenewableEnergy';
import Environments from './Environment/Environment';
import SchoolOffice from './SchoolOffice/SchoolOffice';
import Security from './Security/Security';
import Safety from './Safety/Safety';
import TestingInstrument from './TestingInstrument/TestingInstrument';





const Maintenance = () => {
    const categories = [
        { id: 1,icon:<LiaToolsSolid className='text-2xl mr-2'/>, name: 'Tools & Hardware', submenu:<ToolsHardware/>},
        { id: 2,icon:<GiChemicalDrop className='text-2xl mr-2'/>, name: 'Testing Instrument', submenu:<TestingInstrument/>},
        { id: 3,icon:<MdOutlineSolarPower className='text-2xl mr-2'/>, name: 'Power Transmission', submenu:<PowerTransmission/>},
        { id: 4,icon:<SiMaterialdesign className='text-2xl mr-2'/>, name: 'Material handling', submenu:<MaterialHandling/>},
        { id: 5,icon:<MdOutlineHealthAndSafety className='text-2xl mr-2'/>, name: 'Safety', submenu:<Safety/>},
        { id: 6,icon:<MdSecurity className='text-2xl mr-2'/>, name: 'Security', submenu:<Security/>},
        { id: 7,icon:<RiSchoolLine className='text-2xl mr-2'/>, name: 'School & Office Supplies', submenu:<SchoolOffice/>},
        { id: 8,icon:<MdOutlineElectricalServices className='text-2xl mr-2'/>, name: 'Elictrical Equipment & Supplies', submenu:<ElectricalEquipments/>},
        { id: 9,icon:<AiOutlineInbox className='text-2xl mr-2'/>, name: 'Packaging & Printing', submenu:<PackagingPrinting/> },  
        { id: 10,icon:<GiEmbrassedEnergy className='text-2xl mr-2'/>, name: 'Renewable Energy', submenu:<RenewableEnergy/>  },  
        { id: 11,icon:<GiFlowerEmblem className='text-2xl mr-2'/>, name: 'Environment', submenu:<Environments/>  },  
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

export default Maintenance