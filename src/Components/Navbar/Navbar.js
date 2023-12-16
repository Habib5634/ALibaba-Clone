import React, { useEffect, useState } from "react";

import { AiOutlineHome, AiOutlineInfoCircle, AiFillPlayCircle, AiOutlineBars } from 'react-icons/ai';
import { BsGift, BsNewspaper, BsPerson } from 'react-icons/bs';

import { FiMenu, FiX } from "react-icons/fi";

import { FaSearch, FaCamera } from 'react-icons/fa';
import ShipToPkMenu from "./NavbarMenus/ShipToPkMenu/ShipToPkMenu";
import LanguageMenu from "./NavbarMenus/LanguageMenu/LanguageMenu";
import SigninMenu from "./NavbarMenus/SigninMenu/SigninMenu";

import Modal from "./FormModal";
import CategoryMenu from "../SubNav/CategoryMenu/CategoryMenu";
import FeaturedSelectionMenu from "../SubNav/FeaturedSelectionMenu/FeaturedSelectionMenu";
import TradeAssuranceMenu from "../SubNav/TradeAssuranceMenu/TradeAssuranceMenu";
import BuyerCentralMenu from "../SubNav/BuyerCentralMenu/BuyerCentralMenu";
import SupplierMenu from "../SubNav/SupplierMenu/SupplierMenu";
import HelpCenterMenu from "../SubNav/HelpCenterMenu/HelpCenterMenu";
import AppMenu from "../SubNav/AppMenu/AppMenu";

import { toast } from "react-toastify";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  // const [bgWhite, setBgWhite] = useState(false)
  const [isFormModal, setIsFormModal] = useState(false);
  const [appMenu, setAppMenu] = useState(null);
  const [showNavbar1, setShowNavbar1] = useState(true);


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
      icon: <AiOutlineBars className="mt-1 mr-1 " />,
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
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  //logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    toast("Logout Successfull")
    setIsLoggedIn(false);
  };
  //use effect for changing the navbar
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar1(prevScrollPos >= currentScrollPos); // Changed condition here
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          
            <div >
              <div >
                <div className={`w-full h-20 px-14 md:px-4 ${showNavbar1 ? 'bg-transparent text-white ':' text-black border-b-2 flex fixed top-0 left-0 z-50 bg-white'} flex  ${appMenu !== null ? `text-black bg-white` : `text-white`} `}>

                <header className="flex items-center justify-between w-full px-6 ">
                <div className=" items-center  ">
                
                    <img
                        src='https://s.alicdn.com/@img/imgextra/i2/O1CN0153JdbU26g4bILVOyC_!!6000000007690-2-tps-418-58.png'
                            
                        alt="pngfuel"
                        className="mr-3 w-48 h-auto"
                    />




                </div>
                {showNavbar1 ? "":(<div className="flex  mt-2 border-2 bg-white w-2/5 rounded-full p-1">
            <input
              type="text"
              className="border-none outline-none bg-transparent flex-grow px-2"
              placeholder="Search..."
            />
            <div className="flex items-center ">
              <FaCamera className="text-gray-500 mr-2 text-2xl" />
              <button className="bg-orange-500 flex justify-center items-center text-white py-1 px-7  rounded-full">
                <FaSearch className="mr-2" />Search
              </button>
            </div>
          </div>)}
                
                <div>

                    <ul className={`hidden md:flex list-none  justify-center space-x-5 font-semibold   ${appMenu !== null ? `text-black bg-white ` : `text-white`}  `}>
                        <li className={`${showNavbar1 ? " ":"text-black"}`}>
                            <ShipToPkMenu />
                        </li>
                        <li className={`${showNavbar1 ? " ":"text-black"}`}>
                            <LanguageMenu />

                        </li>

                        <li className={`${showNavbar1 ? " ":"text-black"}`}>
                            <SigninMenu />
                        </li>
{isLoggedIn ? (
   <li onClick={handleLogout} className="p-1 flex items-center border-none px-8 bg-orange-600 hover:bg-orange-600 transition-colors duration-300 text-white rounded-full  menu-item cursor-pointer hover:text-white">
   Logout
</li>
) : (
  <li onClick={openForm} className="p-1 flex items-center border-none px-8 bg-orange-600 hover:bg-orange-600 transition-colors duration-300 text-white rounded-full  menu-item cursor-pointer hover:text-white">
  Sign Up
</li>
)}
                       




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
                {showNavbar1 ?(
                <div className="w-full ">
                  <nav className={`px-10  flex justify-between bg-transparent relative -mt-2 w-full  ${appMenu !== null ? '  bg-white' : 'text-white'}`}>
                    <ul className="flex space-x-8"
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Render the left side menu items */}
                      {leftMenuItems.map((item, id) => (
                        <li
                          key={id}
                          className={`flex cursor-pointer hover:underline text-[14px] hover:underline-offset-8 transition-all duration-300  `}
                          onMouseEnter={() => handleMouseEnter(id)}


                        >
                          {item.label ? item.icon : item}
                          {item.label ? item.label : item}
                          {item.label && appMenu === id && (
                            <div className="absolute px-14   w-full left-0 bg-white text-black p-2 mt-5 space-y-2" >
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
                          className="flex  cursor-pointer text-[14px] hover:underline hover:underline-offset-8 transition-all duration-300 "
                          onMouseEnter={() => handleMouseEnter(index + 3)} // Adjust index for right side items
                        >


                          {item.label ? item.label : item}
                          {item.label && appMenu === index + 3 && ( // Adjust index for right side items
                            <div className="absolute w-full left-0 bg-white text-black p-2 mt-5 space-y-2" >
                              {item.subMenu}


                            </div>

                          )}
                        </li>

                      ))}
                    </ul>
                  </nav>
                </div>): ""}
                
              </div>
            </div>
          

          {/* sub navbar code end */}

        </div>

        {/* Banner Content start */}
        <div className="flex flex-col self-start items-start mt-[7%] ml-14 text-white w-3/5">

          <h1 className="text-xl font-normal mb-8 flex self-start justify-center items-center"><AiFillPlayCircle className="mr-2" />Learn about Alibaba.com</h1>
          <h1 className="text-6xl self-start mb-4 font-semibold">The leading B2B ecommerce platform for global trade</h1>
          <div className="flex self-start w-5/6 mt-6 bg-white  rounded-full p-1">
            <input
              type="text"
              className="border-none outline-none bg-transparent text-black pl-4 flex-grow px-2"
              placeholder="Search..."
            />
            <div className="flex items-center ">
              <FaCamera className="text-gray-500 mr-2 text-2xl" />
              <button className="bg-orange-500 flex justify-center items-center text-white py-3 px-7  rounded-full">
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