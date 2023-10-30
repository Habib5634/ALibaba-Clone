import React, { useState } from "react";

import { AiOutlineHome, AiOutlineInfoCircle, AiFillPlayCircle, AiOutlineBars } from 'react-icons/ai';
import { BsGift, BsNewspaper, BsPerson } from 'react-icons/bs';

import { FiMenu, FiX } from "react-icons/fi";

import { FaSearch, FaCamera } from 'react-icons/fa';
import ShipToPkMenu from "./NavbarMenus/ShipToPkMenu/ShipToPkMenu";
import LanguageMenu from "./NavbarMenus/LanguageMenu/LanguageMenu";
import SigninMenu from "./NavbarMenus/SigninMenu/SigninMenu";
import SubNav from "../SubNav/SubNav";
import Modal from "./FormModal";
import CategoryMenu from "../SubNav/CategoryMenu/CategoryMenu";
import FeaturedSelectionMenu from "../SubNav/FeaturedSelectionMenu/FeaturedSelectionMenu";
import TradeAssuranceMenu from "../SubNav/TradeAssuranceMenu/TradeAssuranceMenu";
import BuyerCentralMenu from "../SubNav/BuyerCentralMenu/BuyerCentralMenu";
import SupplierMenu from "../SubNav/SupplierMenu/SupplierMenu";
import HelpCenterMenu from "../SubNav/HelpCenterMenu/HelpCenterMenu";
import AppMenu from "../SubNav/AppMenu/AppMenu";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  // const [bgWhite, setBgWhite] = useState(false)
  const [isFormModal, setIsFormModal] = useState(false);
  const [appMenu, setAppMenu] = useState(null);

  const handleMouseEnter = (id) => {
    setAppMenu(id);

  }

  const handleMouseLeave = () => {
    setAppMenu(null);
  }

  const menuItems = [
    {
      id: 1,
      label: 'All Categories',
      subMenu: <CategoryMenu />,
      icon: <AiOutlineBars className="mt-1 mr-1" />,
    },
    {
      id: 2,
      label: 'Featured Selections',
      subMenu: <FeaturedSelectionMenu />
    },
    {
      id: 3,
      label: 'Trade Assurance',
      subMenu: <TradeAssuranceMenu />
    },
    {
      id: 4,
      label: 'Buyer Central',
      subMenu: <BuyerCentralMenu />
    },
    {
      id: 5,
      label: 'Become a Supplier',
      subMenu: <SupplierMenu />
    },
    {
      id: 6,
      label: 'Help Center',
      subMenu: <HelpCenterMenu />
    },
    {
      id: 7,
      label: 'Get App',
      subMenu: <AppMenu />
    },
  ];
  const leftMenuItems = menuItems.slice(0, 3);
  const rightMenuItems = menuItems.slice(3);
  // Check if a token exists in local storage

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const openForm = () => {
    setIsFormModal(true);
  };

  const closeForm = () => {
    setIsFormModal(false);
  };

  //  
  return (
    <>
      <div className="bg-cover  bg-center h-[660px] flex  flex-col items-center w-full " style={{ backgroundImage: 'url("https://s.alicdn.com/@img/imgextra/i1/O1CN019pxhXm26Fy2GEGlVO_!!6000000007633-0-tps-3840-1320.jpg")' }}>
        <div className="w-full">
          {/* main navbar start */}
          <div className={`bg-transparent  w-full  h-20 px-14  md:px-4 flex ${appMenu !== null ? `text-black bg-white` : `text-white`} `}>

            <header className="flex items-center justify-between w-full px-12 ">
              <div className="w-1/4 items-center  ">

              <img
    src={(appMenu === 0|| appMenu === 1|| appMenu === 2 || appMenu === 3|| appMenu === 4|| appMenu === 5|| appMenu === 6)
      ? 'https://s.alicdn.com/@img/imgextra/i2/O1CN0153JdbU26g4bILVOyC_!!6000000007690-2-tps-418-58.png' 
      : 'https://s.alicdn.com/@img/imgextra/i2/O1CN01kNCWs61cTlUC9Pjmu_!!6000000003602-2-tps-418-58.png'}
    alt="pngfuel"
    className="mr-3 w-44 h-auto"
  />




              </div>
              <div>

                <ul className={`hidden md:flex list-none  justify-center space-x-5 font-semibold ${appMenu !== null ? `text-black bg-white` : `text-white`} `}>
                  <li className="">
                    <ShipToPkMenu />
                  </li>
                  <li className="">
                    <LanguageMenu />

                  </li>

                  <li >
                    <SigninMenu />
                  </li>

                  <li onClick={openForm} className="p-1 flex items-center border-none px-10 bg-orange-500 hover:bg-orange-600 transition-colors duration-300 text-white rounded-full  menu-item cursor-pointer hover:text-white">
                    Sign Up
                  </li>




                </ul>
              </div>




            </header>
            <div className="flex items-center justify-end w-1/4 md:hidden ml-auto">
              <button className="text-2xl " onClick={handleToggleSidebar}>
                {showSidebar ? <FiX /> : <FiMenu />}
              </button>
            </div>
            {/* main navbar end */}
            {/* Sidebar start */}
            {showSidebar && (
              <div className="bg-[#4E1E6C] w-64 h-full fixed  z-50 right-0 top-0 shadow-lg transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}">
                <div className=" h-full w-80 p-4 pt-20">
                  <ul className="list-none space-y-2 font-semibold text-lg text-white z-50">
                    <li className="p-2 flex menu-item cursor-pointer hover:text-white">
                      <AiOutlineHome className="mt-1 mr-1" /> Home
                    </li> <li className="p-2 flex menu-item cursor-pointer hover:text-white">
                      <AiOutlineInfoCircle className="mt-1 mr-1" /> About Us
                    </li>

                    <li className="p-2 flex menu-item cursor-pointer hover:text-white">
                      <BsGift className="mt-1 mr-1" />  Offer
                    </li>

                    <li className="p-2 flex menu-item cursor-pointer hover:text-white">
                      <BsNewspaper className="mt-1 mr-1" />News
                    </li>

                    <li className="p-2 flex menu-item cursor-pointer hover:text-white">
                      <BsPerson className="mt-1 mr-1" />  Contact
                    </li>

                  </ul>
                  <button
                    className="absolute top-4 right-4 text-2xl"
                    onClick={handleToggleSidebar}
                  >
                    <FiX />
                  </button>
                </div>
              </div>
            )}

            {/* Sidebar end */}

          </div>
          {/* sub navbar code start */}
          <div className="w-full ">
            <nav className={`px-14  flex justify-between bg-transparent relative py-3 w-full  ${appMenu !== null ? '  bg-white' : 'text-white'}`}>
              <ul className="flex space-x-8"
                onMouseLeave={handleMouseLeave}
              >
                {/* Render the left side menu items */}
                {leftMenuItems.map((item, id) => (
                  <li
                    key={id}
                    className={`flex cursor-pointer hover:underline hover:underline-offset-8 transition-all duration-300  `}
                    onMouseEnter={() => handleMouseEnter(id)}


                  >
                    {item.label ? item.icon : item}
                    {item.label ? item.label : item}
                    {item.label && appMenu === id && (
                      <div className="absolute px-14  w-full left-0 bg-white text-black p-2 mt-6 space-y-2" >
                        {item.subMenu}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <ul className="flex space-x-8  " onMouseLeave={handleMouseLeave} >
                {/* Render the right side menu items */}
                {rightMenuItems.map((item, index) => (


                  <li
                    key={index}
                    className="flex  cursor-pointer hover:underline hover:underline-offset-8 transition-all duration-300 "
                    onMouseEnter={() => handleMouseEnter(index + 3)} // Adjust index for right side items
                  >


                    {item.label ? item.label : item}
                    {item.label && appMenu === index + 3 && ( // Adjust index for right side items
                      <div className="absolute w-full left-0 bg-white text-black p-2 mt-6 space-y-2" >
                        {item.subMenu}


                      </div>

                    )}
                  </li>

                ))}
              </ul>
            </nav>
          </div>
          {/* sub navbar code end */}

        </div>

        {/* Banner Content start */}
        <div className="flex flex-col self-start items-start mt-[10%] ml-40 text-white w-3/5">

          <h1 className="text-xl font-normal mb-4 flex self-start justify-center items-center"><AiFillPlayCircle className="mr-2" />Learn about Alibaba.com</h1>
          <h1 className="text-6xl self-start mb-4 font-semibold">The leading B2B ecommerce platform for global trade</h1>
          <div className="flex self-start w-5/6 mt-6 bg-white  rounded-full p-1">
            <input
              type="text"
              className="border-none outline-none bg-transparent flex-grow px-2"
              placeholder="Search..."
            />
            <div className="flex items-center ">
              <FaCamera className="text-gray-500 mr-2 text-2xl" />
              <button className="bg-orange-500 flex justify-center items-center text-white py-3 px-10  rounded-full">
                <FaSearch className="mr-2" />Search
              </button>
            </div>
          </div>
          <div className="flex space-x-4 mt-6 items-center self-start">
            <h1 className="text-white">Frequently Searched:</h1>
            <button className="px-3 py-1.5 bg-black bg-opacity-50 border border-white text-white rounded-full">airpods</button>
            <button className="px-3 py-1.5 bg-black bg-opacity-50 border border-white text-white rounded-full">women's clothing</button>
            <button className="px-3 py-1.5 bg-black bg-opacity-50 border border-white text-white rounded-full">nike shoes</button>
          </div>
        </div>
        {/* Banner Content end */}

      </div>
      {/* form modal */}
      <Modal isFormModal={isFormModal} closeForm={closeForm} />
    </>
  );
};

export default Navbar;