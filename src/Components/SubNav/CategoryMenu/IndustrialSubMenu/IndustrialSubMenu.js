import React, { useState } from 'react';
import {AiOutlineCar} from 'react-icons/ai'
import {BsTruck} from 'react-icons/bs'
import {GiPencilRuler,GiEmbrassedEnergy,GiMineTruck} from 'react-icons/gi'
import {LiaIndustrySolid,LiaToolsSolid} from 'react-icons/lia'
import {BiNotepad} from 'react-icons/bi'
import {MdOutlineSolarPower,MdOutlineElectricalServices} from 'react-icons/md'
import {SiMaterialdesign} from 'react-icons/si'
import IndustrialMachinery from './IndusstrialMachinery/IndustrialMachinery';
import VehicalTransportation from './VehicalTransportation/VehicalTransportation';
import CommericalServices from './CommericalServices/CommericalServices';
import FabricationServices from './FabricationService/FabricationService';
import RenewableEnergy from './RenewableEnergy/RenewableEnergy';
import MaterialHandling from './MaterialHandling/MaterialHandling';
import ToolsHardware from './Tools&hardware/Tools&Hardware';
import PowerTransmission from './PowerTransmission/PowerTransmission';
import ElectricalEquipments from './ElectricalEquipments/ElectricalEquipments';
import VehicalParts from './VehicalParts/VehicalParts';
import Construction from './Construction/Construction';

const IndustrialSubMenu = () => {
    const categories = [
        { id: 1,icon:<LiaIndustrySolid className='text-2xl mr-2'/>, name: 'Industrial Machinery', submenu:<IndustrialMachinery/>},
        { id: 2,icon:<BsTruck className='text-2xl mr-2'/>, name: 'Vehicals & Transportation', submenu:<VehicalTransportation/> },
        { id: 3,icon:<BiNotepad className='text-2xl mr-2'/>, name: 'Commerical Service Equipment', submenu:<CommericalServices/> },
        { id: 4,icon:<GiPencilRuler className='text-2xl mr-2'/>, name: 'Fabrication Services', submenu:<FabricationServices/> },
        { id: 5,icon:<GiEmbrassedEnergy className='text-2xl mr-2'/>, name: 'Renewable Energy', submenu:<RenewableEnergy/> },
        { id: 6,icon:<LiaToolsSolid className='text-2xl mr-2'/>, name: 'Tools & Hardware', submenu:<ToolsHardware/>},
        { id: 7,icon:<SiMaterialdesign className='text-2xl mr-2'/>, name: 'Material handling', submenu:<MaterialHandling/>},
        { id: 8,icon:<MdOutlineSolarPower className='text-2xl mr-2'/>, name: 'Power Transmission', submenu:<PowerTransmission/>},
        { id: 9,icon:<MdOutlineElectricalServices className='text-2xl mr-2'/>, name: 'Elictrical Equipment & Supplies', submenu:<ElectricalEquipments/>},
        { id: 10,icon:<AiOutlineCar className='text-2xl mr-2'/>, name: 'Vehicals Parts & Accessories', submenu:<VehicalParts/>},
        { id: 10,icon:<GiMineTruck className='text-2xl mr-2'/>, name: 'Construction & Building Machinery', submenu:<Construction/>},
        
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

export default IndustrialSubMenu