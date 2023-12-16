import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { CiSearch } from "react-icons/ci";
const SellerProfileSubNav = () => {
  const navigationItems = [
    { id: 1, label: 'Home' },
    { id: 2, label: 'Products', icon: <AiOutlineDown /> },
    { id: 3, label: 'Profile', icon: <AiOutlineDown /> },
    { id: 4, label: 'Contacts' },
    { id: 5, label: 'Promotion' },
    { id: 6, label: 'View More', icon: <AiOutlineDown /> },
  ];

  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleMouseEnter = (itemId) => {
    setHoveredItemId(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItemId(null);
  };

  return (
    <div className='flex items-center w-full bg-[#333] py-3 px-2'>
      <ul className='flex items-center gap-6 text-white w-full'>
        {navigationItems.map((item) => (
          <li
            key={item.id}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            className={`flex items-center gap-1 cursor-pointer`}
          >
            {item.label}
            {item.icon && (
              <span
                className={`ml-1 ${hoveredItemId === item.id ? 'rotate-180 transition-transform duration-500' : ''}`}
              >
                {item.icon}
              </span>
            )}
          </li>
        ))}
      </ul>
      <ul>
        <li>
        <div className='relative'>
      <input
        type='search'
        placeholder='Search In this Store'
        className='rounded-full outline-none bg-white text-[#333] pl-10 pr-4 py-2'
      />
      <CiSearch  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
    </div>
        </li>
      </ul>
    </div>
  );
};

export default SellerProfileSubNav;
