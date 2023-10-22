import React, { useState } from "react";

import { AiOutlineHome, AiOutlineInfoCircle,AiOutlineGlobal } from 'react-icons/ai';
import { BsGift, BsNewspaper, BsPerson } from 'react-icons/bs';

import { FiMenu, FiX } from "react-icons/fi";
import logo from "./alibabalogo.png";

import ShipToPkMenu from "./NavbarMenus/ShipToPkMenu/ShipToPkMenu";
import LanguageMenu from "./NavbarMenus/LanguageMenu/LanguageMenu";
import SigninMenu from "./NavbarMenus/SigninMenu/SigninMenu";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  // Check if a token exists in local storage
 
  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };


//  
  return (
  <>
 

    <div className="bg-transparent  w-full text-indigo-50 h-20 px-5 md:px-4 flex ">
      <header className="flex items-center justify-between w-full  ">
        <div className="w-1/4 items-center  ">
        <img
            src={logo}
            alt="pngfuel"
            className="mr-3 w-44 h-auto"
          />
          
          
        </div>
        <div>

        <ul className="hidden md:flex list-none  justify-center space-x-5 font-semibold text- text-white">
        <li className="">
         <ShipToPkMenu/>
          </li>
          <li className="">
            <LanguageMenu/>
         
          </li>
         
          <li >
           <SigninMenu/>
          </li>
          
          <li className="p-1 flex items-center border-none px-10 bg-orange-500 hover:bg-orange-600 transition-colors duration-300 text-white rounded-full  menu-item cursor-pointer hover:text-white">
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
      
      {/* Sidebar */}
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
    </div>
    </>
  );
};

export default Navbar;