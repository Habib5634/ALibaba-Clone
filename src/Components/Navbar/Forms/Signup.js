import React, { useState } from 'react';
import { FaFacebook, FaLinkedin,  FaTwitter } from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc'
const SignupForm = () => {
  const [formData, setFormData] = useState({
    country: '',
   
    purpose: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    companyName: '',
    isNotBusinessEntity: false,
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="">

<div className='flex justify-center space-x-3 my-6'>
    
    <FaFacebook size={30} color="#3b5998" />
<FaLinkedin size={30} color="#0077B5" />
<FcGoogle size={30} color="#EA4335" />
<FaTwitter size={30} color="#1DA1F2" />
</div>

<hr className='border-b w-full  mb-6' />

      <form onSubmit={handleSubmit}>
      <div className="mb-4 flex w-full items-center">
          <label htmlFor="country" className="block text-end pr-2 self-center text-sm w-2/6 text-gray-500  mb-2">
            Country/Region:
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-4/6 px-3 text-sm py-0.5 focus:outline-none border border-gray-300"
            required
          >
            <option value="" disabled>Select Country</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            {/* Add more options as needed */}
          </select>
        </div>
        
        <div className="mb-1 flex w-full items-center">
          <label className="block text-end pr-2 self-center text-sm w-2/6 text-gray-500  mb-2">I am here to:</label>
          <label className="flex items-center">
            <input
              type="radio"
              name="purpose"
              value="sell"
              checked={formData.purpose === 'sell'}
              onChange={handleChange}
              className="mx-2"
            />
            <span className='mr-2 text-sm text-gray-500'>Sell</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="purpose"
              value="purchase"
              checked={formData.purpose === 'purchase'}
              onChange={handleChange}
              className="mr-2 text-sm text-gray-500"
            />
            <span className='mr-2 text-gray-500'>Purchase</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="purpose"
              value="both"
              checked={formData.purpose === 'both'}
              onChange={handleChange}
              className="mr-2 text-gray-500"
            />
            <span className='mr-2 text-sm text-gray-500'>Both</span>
          </label>
          
        </div>
        <div className="mb-4 flex w-full items-center">
        <label  className="block text-end pr-2 self-center text-sm w-2/6 text-gray-500  mb-2">
          </label>
          <p  className="w-4/6  text-sm text-gray-400">Purchaser and seller will have different experience. And you may NOT change your role later.</p>
            
        </div>
        <div className="mb-4 flex w-full items-center">
          <label htmlFor="email" className="block text-end pr-2 self-center text-sm w-2/6 text-gray-500  mb-2">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-4/6 px-3 text-sm py-0.5 focus:outline-none border border-gray-300 "
            required
          />
        </div>
        <div className="mb-4 flex w-full items-center">
          <label htmlFor="password" className="block text-end pr-2 self-center text-sm w-2/6 text-gray-500  mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-4/6 px-3 text-sm py-0.5 focus:outline-none border border-gray-300"
            required
          />
        </div>
        <div className="mb-4 flex w-full items-center">
          <label htmlFor="firstName" className="block text-end pr-2 self-center text-sm w-2/6 text-gray-500  mb-2">
            Name:
          </label>
          <div className='w-4/6 flex space-x-2'>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder='First Name'
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2 text-sm px-3 py-0.5 focus:outline-none border border-gray-300"
            required
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 text-sm px-3 py-0.5 focus:outline-none border border-gray-300"
            required
          />
          </div>
        </div>
        
        <div className="mb-4 flex w-full items-center">
          <label htmlFor="companyName" className="block text-end pr-2 self-center text-sm w-2/6 text-gray-500  mb-2">
            Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-4/6 px-3 text-sm py-0.5 focus:outline-none border border-gray-300"
            required
          />
        </div>
        <div className="mb-4 w-4/6 flex justify-end items-center">
          <input
            type="checkbox"
            id="isNotBusinessEntity"
            name="isNotBusinessEntity"
            checked={formData.isNotBusinessEntity}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="isNotBusinessEntity" className="text-gray-700">
            I am not a business entity
          </label>
        </div>
        <div className="mb-4 flex w-full items-center">
          <label htmlFor="phone" className="block text-end pr-2 text-sm w-2/6  text-gray-500  mb-2">
            Phone: 
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-4/6 px-3 text-sm py-0.5 focus:outline-none border border-gray-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-1 px-4 rounded-sm hover:bg-orange-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
