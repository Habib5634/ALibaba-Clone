import React, { useState } from 'react'
import SellingForm1 from './SellingForm1';
import SellingForm2 from './SellingForm2';
import { AiOutlineClose } from 'react-icons/ai'
const SellingFormModal = ({ isFormModal, closeForm }) => {
    const [selectedLayout, setSelectedLayout] = useState('sellingForm1');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSwitchLayout = (layout) => {
    // If form is submitted, switch to sellingForm2
    if (isFormSubmitted) {
      console.log('Switching to sellingForm2');
      setSelectedLayout('sellingForm2');
    } else {
      console.log(`Switching to ${layout}`);
      setSelectedLayout(layout);
    }
  };

  const handleFormSubmit = (formData) => {
    // Save form data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    // Set the form submitted flag to true
    setIsFormSubmitted(true);
    // Switch to sellingForm2
    handleSwitchLayout('sellingForm2');
  };




  return (
    <>
            {isFormModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-10 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
                            <div className="bg-white px-4 pt- pb-4 sm:p-6 sm:pb-4">
                                {/* <div className="flex justify-start  space-x-4   border-gray-300">
                                    <div
                                        className={` border-b text-sm text-center text-black hover:text-rose-700  transition-all duration-500  hover:underline hover:underline-offset-4 font-medium  cursor-pointer   mt- ${selectedLayout === 'sellingForm1' ? 'text-rose-950 underline underline-offset-4 ' : ''
                                            }`}
                                        onClick={() => setSelectedLayout('sellingForm1')}
                                    >
                                        Next
                                    </div>
                                    <div
                                        className={`text-sm border-b  text-center text-black hover:text-rose-700  transition-all duration-500 hover:underline hover:underline-offset-4 font-medium cursor-pointer   ${selectedLayout === 'sellingForm2' ? 'text-rose-950 underline underline-offset-4 ' : ''
                                            }`}
                                        onClick={() => setSelectedLayout('sellingForm2')}
                                    >
                                        Submit
                                    </div>
                                </div> */}
                                <div className="my-4">
                                    {selectedLayout === 'sellingForm1' && <SellingForm1 onSubmit={handleFormSubmit}/>}
                                    {selectedLayout === 'sellingForm2' && <SellingForm2 />}

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
  )
}

export default SellingFormModal