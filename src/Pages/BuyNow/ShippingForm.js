import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineQuestionCircle } from 'react-icons/ai'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const ShippingForm = ({ isFormModal, closeForm }) => {
    const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address1, setaddress1] = useState('');
  const [address2, setaddress2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [fullName, setFullName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState([]);

  const handleOptionChange = (selectedTag) => {
    // Toggle tag selection
    if (tag.includes(selectedTag)) {
      setTag(tag.filter((existingTag) => existingTag !== selectedTag));
    } else {
      setTag([...tag, selectedTag]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      country,
      address1,
      address2,
      province,
      city,
      zipCode,
      fullName,
      phoneNumber,
      tag,
    };

    // Store the form data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.reload();
    // You can also redirect or perform other actions after storing the data
    // For example, redirect to another page
    // window.location.href = '/success';
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
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                            <div className="bg-white px-4 pt- pb-4 sm:p-6 sm:pb-4">

                                <h1 className='text-[18px] text-gray-500 flex items-center mb-10'>Add Address<AiOutlineQuestionCircle/></h1>
                            <form onSubmit={handleSubmit} className=''>

                                {/* country */}
      <div className="mb-4 flex w-full items-center ">
          <label htmlFor="country" className="block text-end pr-2 self-center text-sm w-2/6 text-gray-500  mb-2">
            Country/Region:
          </label>
          <select
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-4/6 px-3 text-sm py-0.5 focus:outline-none border border-gray-300"
            required
          >
            <option value="" disabled>Select Country</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            {/* Add more options as needed */}
          </select>
        </div>
        
        {/* address1 */}
        <div className="mb-4 flex w-full items-center">
          <label htmlFor="email" className="block text-end pr-2 self-center text-sm w-2/6 text-gray-500  mb-2">
            Address1:
          </label>
          <input
            type="text"
            id="address1"
            name="address1"
            value={address1}
            onChange={(e) => setaddress1(e.target.value)}
            className="w-4/6 px-3 text-sm py-0.5 focus:outline-none border border-gray-300 "
            required
          />
        </div>
        {/* address2 */}
        <div className="mb-4 flex w-full items-center">
          <label htmlFor="email" className="block text-end pr-2 self-center text-sm w-2/6 text-gray-500  mb-2">
            Address2:
          </label>
          <input
            type="text"
            id="address2"
            name="address2"
            value={address2}
            onChange={(e) => setaddress2(e.target.value)}
            className="w-4/6 px-3 text-sm py-0.5 focus:outline-none border border-gray-300 "
            required
          />
        </div>
        {/* State Province */}
        <div className="mb-4 flex w-full items-center">
          <label htmlFor="password" className="block text-end pr-2 self-center text-sm w-2/6 text-gray-500  mb-2">
            State/Province:
          </label>
          <input
            type="text"
            id="province"
            name="province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="w-4/6 px-3 text-sm py-0.5 focus:outline-none border border-gray-300"
            required
          />
        </div>
        {/* City */}
        <div className="mb-4 flex w-full items-center">
          <label htmlFor="firstName" className="block text-end pr-2 self-center text-sm w-2/6 text-gray-500  mb-2">
            City:
          </label>
          <div className='w-4/6 flex space-x-2'>
          <input
            type="text"
            id="city"
            name="city"
            placeholder='City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full text-sm px-3 py-0.5 focus:outline-none border border-gray-300"
            required
          />
          
          </div>
        </div>
        {/* Zip code */}
        <div className="mb-4 flex w-full items-center">
          <label htmlFor="firstName" className="block text-end pr-2 self-center text-sm w-2/6 text-gray-500  mb-2">
            Zip Code:
          </label>
          <div className='w-4/6 flex space-x-2'>
          <input
            type="number"
            id="zipCode"
            name="zipCode"
            placeholder='Zip Code'
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="w-full text-sm px-3 py-0.5 focus:outline-none border border-gray-300"
            required
          />
          
          </div>
        </div>
        {/* Full Name */}
        <div className="mb-4 flex w-full items-center">
          <label htmlFor="firstName" className="block text-end pr-2 self-center text-sm w-2/6 text-gray-500  mb-2">
            Full Name:
          </label>
          <div className='w-4/6 flex space-x-2'>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder='Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full text-sm px-3 py-0.5 focus:outline-none border border-gray-300"
            required
          />
          
          </div>
        </div>

        {/* phone */}
        <div className="mb-4 flex w-full items-center">
          <label htmlFor="phone" className="block text-end pr-2 text-sm w-2/6  text-gray-500  mb-2">
            Phone: 
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-4/6 px-3 text-sm py-0.5 focus:outline-none border border-gray-300"
            required
          />
        </div>

{/* tags */}
<div className="mb-4 flex w-full items-center">
        <label htmlFor="tags" className="block text-end pr-2 text-sm w-2/6 text-gray-500 mb-2">
          Tags:
        </label>
        <div className='flex flex-wrap w-4/6'>
          <div
            onClick={() => handleOptionChange('BUSSINESS')}
            className={`radio-box w-1/4 text-gray-700 mr-2 mb-2 rounded-md bg-gray-100 hover:bg-gray-200 py-0.5 px-2 
            ${tag.includes('BUSSINESS') ? 'text-orange-500' : ''}`}
          >
            BUSSINESS
          </div>
          <div
            onClick={() => handleOptionChange('FACTORY')}
            className={`radio-box w-1/4 text-gray-700 mr-2 mb-2 rounded-md bg-gray-100 hover:bg-gray-200 py-0.5 px-2 ${tag.includes('FACTORY') ? 'text-orange-500' : ''}`}
          >
            FACTORY
          </div>
          <div
            onClick={() => handleOptionChange('WAREHOUSE')}
            className={`radio-box w-1/4 text-gray-700 mr-2 mb-2 rounded-md bg-gray-100 hover:bg-gray-200 py-0.5 px-2 ${tag.includes('WAREHOUSE') ? 'text-orange-500' : ''}`}
          >
            WAREHOUSE
          </div>
          <div
            onClick={() => handleOptionChange('RESIDENTIAL')}
            className={`radio-box w-1/4 text-gray-700 mr-2 mb-2 rounded-md bg-gray-100 hover:bg-gray-200 py-0.5 px-2 ${tag.includes('RESIDENTIAL') ? 'text-orange-500' : ''}`}
          >
            RESIDENTIAL
          </div>
        </div>
      </div>

<div className='flex mt-10'>
        <button
          type="submit"
                
          className="w-1/6 rounded-full bg-orange-500 text-white font-bold py-1 px-4 mr-3    hover:bg-orange-700"
        >
          Submit
        </button>
        <button
          type="submit"
          
          className="w-1/6 bg-gray-100 text-gray-700 font-bold py-1 px-4 rounded-full hover:bg-gray-200"
        >
         Cancel
        </button>
        </div>
      </form>

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

export default ShippingForm