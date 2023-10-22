import React, { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import AppMenu from './AppMenu/AppMenu';
import HelpCenterMenu from './HelpCenterMenu/HelpCenterMenu';
import SupplierMenu from './SupplierMenu/SupplierMenu';
import BuyerCentralMenu from './BuyerCentralMenu/BuyerCentralMenu';
import TradeAssuranceMenu from './TradeAssuranceMenu/TradeAssuranceMenu';
import FeaturedSelectionMenu from './FeaturedSelectionMenu/FeaturedSelectionMenu';

const SubNav = () => {
  const [appMenu, setAppMenu] = useState(null);

  const handleMouseEnter = (index) => {
    setAppMenu(index);
    setInterval(1000)
  }

  const handleMouseLeave = () => {
    setAppMenu(null);
  }

  const menuItems = [
    {
        icon: <AiOutlineBars className="mt-1 mr-1" />,
      label: 'All Categories',
      subMenu: ['Category 1', 'Category 2', 'Category 3']
    },
    {
      label: 'Featured Selections',
      subMenu: <FeaturedSelectionMenu/>
    },
    {
      label: 'Trade Assurance',
      subMenu: <TradeAssuranceMenu/>
    },
    {
      label: 'Buyer Central',
      subMenu: <BuyerCentralMenu/>
    },
    {
      label: 'Become a Supplier',
      subMenu: <SupplierMenu/>
    },
    {
      label: 'Help Center',
      subMenu:<HelpCenterMenu/>
    },
    {
        label: 'Get App',
        subMenu: <AppMenu/>
      },
  ];
  const leftMenuItems = menuItems.slice(0, 3);
  const rightMenuItems = menuItems.slice(3);

  return (
    <div className="w-full ">
      <nav onMouseLeave={handleMouseLeave} className={`  flex justify-between bg-transparent relative py-3 w-full ${appMenu !== null ? 'text-black bg-white ' : 'text-white'}`}>
        <ul className="flex space-x-8">
          {/* Render the left side menu items */}
          {leftMenuItems.map((item, index) => (
            <li
              key={index}
              className="flex cursor-pointer hover:underline hover:underline-offset-8 transition-all duration-300"
              onMouseEnter={() => handleMouseEnter(index)}
              
            >
              {item.icon}
              {item.label ? item.label : item}
              {item.label && appMenu === index && (
                <div className="absolute w-full left-0 bg-white text-black p-2 mt-7 space-y-2" >
                 {item.subMenu}
                </div>
              )}
            </li>
          ))}
        </ul>
        <ul className="flex space-x-8  ">
          {/* Render the right side menu items */}
          {rightMenuItems.map((item, index) => (
         

            <li
              key={index}
              className="flex  cursor-pointer hover:underline hover:underline-offset-8 transition-all duration-300 "
              onMouseEnter={() => handleMouseEnter(index + 3)} // Adjust index for right side items
            >
                
              
              {item.label ? item.label : item}
              {item.label && appMenu === index + 3 && ( // Adjust index for right side items
                <div className="absolute w-full left-0 bg-white text-black p-2 mt-7 space-y-2" >
                 {item.subMenu}
                    
                 
                </div>
                
              )}
            </li>
            
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SubNav;
