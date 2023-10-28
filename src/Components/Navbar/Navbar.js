import React, { useState } from "react";

import { AiOutlineHome, AiOutlineInfoCircle,AiFillPlayCircle } from 'react-icons/ai';
import { BsGift, BsNewspaper, BsPerson } from 'react-icons/bs';

import { FiMenu, FiX } from "react-icons/fi";
import logo from "./alibabalogo.png";
import { FaSearch, FaCamera } from 'react-icons/fa';
import ShipToPkMenu from "./NavbarMenus/ShipToPkMenu/ShipToPkMenu";
import LanguageMenu from "./NavbarMenus/LanguageMenu/LanguageMenu";
import SigninMenu from "./NavbarMenus/SigninMenu/SigninMenu";
import SubNav from "../SubNav/SubNav";
import Modal from "./FormModal";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [bgWhite,setBgWhite]= useState(false)
  const [isFormModal, setIsFormModal] = useState(false);
  const handleMouseEnter = ()=>{
setBgWhite(true)
  }
  const handleMouseLeave = () =>{
setBgWhite(false)
  }
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
 <div className="bg-cover  bg-center h-[90vh] flex  flex-col items-center w-full " style={{ backgroundImage: 'url("https://s.alicdn.com/@img/imgextra/i1/O1CN019pxhXm26Fy2GEGlVO_!!6000000007633-0-tps-3840-1320.jpg")' }}>
      <div className="w-full">

    <div className={`bg-transparent  w-full  h-20 px-14  md:px-4 flex ${bgWhite !== false ? `text-black bg-white`:`text-white`} `}>
      <header className="flex items-center justify-between w-full  ">
        <div className="w-1/4 items-center  ">
        <img
            src={logo}
            alt="pngfuel"
            className="mr-3 w-44 h-auto"
          />
          
          
        </div>
        <div>

        <ul className={`hidden md:flex list-none  justify-center space-x-5 font-semibold ${bgWhite !== false ? `text-black bg-white`:`text-white`} `}>
        <li className="">
         <ShipToPkMenu/>
          </li>
          <li className="">
            <LanguageMenu/>
         
          </li>
         
          <li >
           <SigninMenu/>
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
    <span 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
    <SubNav/>
    </span>
    
    </div>
    <div className="flex flex-col justify-center items-center mt-[10%] px-44 text-white">
        
          <h1 className="text-xl font-bold flex self-start justify-center items-center"><AiFillPlayCircle className="mr-2"/>Learn about Alibaba.com</h1>
        <h1 className="text-5xl self-start font-bold">The leading B2B ecommerce platform for global trade</h1>
        <div className="flex self-start w-4/6 mt-6 bg-white  rounded-full p-1">
      <input
        type="text"
        className="border-none outline-none bg-transparent flex-grow px-2"
        placeholder="Search..."
      />
      <div className="flex items-center">
        <FaCamera className="text-gray-500 mr-2 text-2xl" />
        <button className="bg-orange-500 flex justify-center items-center text-white py-3 px-10  rounded-full">
          <FaSearch className="mr-2" />Search
        </button>
      </div>
    </div>
    <div className="flex space-x-4 mt-6 items-center self-start">
      <h1 className="text-white ">Frequently Searched:</h1>
      <button className="px-3 py-1.5 bg-black bg-opacity-50 border border-white text-white rounded-full">airpods</button>
      <button className="px-3 py-1.5 bg-black bg-opacity-50 border border-white text-white rounded-full">women's clothing</button>
      <button className="px-3 py-1.5 bg-black bg-opacity-50 border border-white text-white rounded-full">nike shoes</button>
    </div>
      </div>
    </div>

    <Modal isFormModal={isFormModal} closeForm={closeForm} />
    </>
  );
};

export default Navbar;