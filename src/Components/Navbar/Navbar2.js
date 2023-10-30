import React, { useState } from 'react'
import ShipToPkMenu from './NavbarMenus/ShipToPkMenu/ShipToPkMenu'
import LanguageMenu from './NavbarMenus/LanguageMenu/LanguageMenu'
import SigninMenu from './NavbarMenus/SigninMenu/SigninMenu'
import Modal from './FormModal'
import { FaCamera, FaSearch } from 'react-icons/fa'

const Navbar2 = () => {
  const [isFormModal, setIsFormModal] = useState(false);

    const openForm = () => {
        setIsFormModal(true);
      };
    
      const closeForm = () => {
        setIsFormModal(false);
      };
    return (
        <div className={` w-full h-20 px-14 md:px-4 flex border-b-2 text-black bg-white fixed top-0 left-0 z-50`}>

            <header className="flex items-center justify-between w-full px-6 ">
                <div className=" items-center  ">

                    <img
                        src='https://s.alicdn.com/@img/imgextra/i2/O1CN0153JdbU26g4bILVOyC_!!6000000007690-2-tps-418-58.png'
                            
                        alt="pngfuel"
                        className="mr-3 w-48 h-auto"
                    />




                </div>
                <div className="flex  mt-2 border-2 bg-white w-2/5 rounded-full p-1">
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
          </div>
                <div>

                    <ul className={`hidden md:flex list-none  justify-center space-x-5 font-semibold text-black bg-white`}>
                        <li className="">
                            <ShipToPkMenu />
                        </li>
                        <li className="">
                            <LanguageMenu />

                        </li>

                        <li >
                            <SigninMenu />
                        </li>

                        <li onClick={openForm} className="p-1 flex items-center border-none px-8 bg-orange-600 hover:bg-orange-600 transition-colors duration-300 text-white rounded-full  menu-item cursor-pointer hover:text-white">
                            Sign Up
                        </li>




                    </ul>
                </div>




            </header>

            {/* main navbar end */}
            {/* Sidebar start */}

            <Modal isFormModal={isFormModal} closeForm={closeForm} />


        </div>
    )
}

export default Navbar2