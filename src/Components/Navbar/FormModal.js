import React, { useState } from "react";
import {AiOutlineClose} from 'react-icons/ai'
import SignIn from "./Forms/SignIn";
import Signup from "./Forms/Signup";
const Modal = ({ isFormModal, closeForm }) => {
    const [selectedLayout, setSelectedLayout] = useState('signin');
  return (
    <>
      {isFormModal && (
         <div className="fixed z-10 inset-0 overflow-y-auto">
         <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-10 text-center sm:block sm:p-0">
             <div className="fixed inset-0 transition-opacity">
                 <div className="absolute inset-0 bg-black bg-opacity-40"></div>
             </div>
             <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                 <div className="bg-white px-4 pt- pb-4 sm:p-6 sm:pb-4">
                     <div className="flex justify-start  space-x-4   border-gray-300">
                     <div
                    className={` border-b text-sm text-center text-black hover:text-rose-700  transition-all duration-500  hover:underline hover:underline-offset-4 font-medium  cursor-pointer   mt- ${selectedLayout === 'signin' ? 'text-rose-950 underline underline-offset-4 ' : ''
                        }`}
                    onClick={() => setSelectedLayout('signin')}
                >
                    SIGNIN
                </div>
                <div
                    className={`text-sm border-b  text-center text-black hover:text-rose-700  transition-all duration-500 hover:underline hover:underline-offset-4 font-medium cursor-pointer   ${selectedLayout === 'signup' ? 'text-rose-950 underline underline-offset-4 ' : ''
                        }`}
                    onClick={() => setSelectedLayout('signup')}
                >
                    SIGNUP
                </div>
                     </div>
                     <div className="">
                {selectedLayout === 'signin' && <SignIn/>}
                {selectedLayout === 'signup' && <Signup/>}
                
                <hr />
            </div>
                 </div>

                 <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                        <button
                            type="button"
                            className="inline-flex justify-center absolute top-2 right-2 w-fit rounded-md border border-transparent   text-2xl leading-6 font-medium text-gray-800 shadow-sm  focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                            onClick={closeForm}
                        >
                            <AiOutlineClose className='text-2xl' />
                        </button>
                    </span>

             </div>
             </div>

         </div>
      )}
    </>
  );
};

export default Modal;
