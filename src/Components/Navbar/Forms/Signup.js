import React, { useState } from 'react';
import { FaFacebook, FaLinkedin,  FaTwitter } from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc'
import {  handleRegister } from '../../../service/authService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const SignupForm = () => {
  const [countryname, setCountryName] = useState('');
  const [purpose, setPurpose] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [companyname, setCompanyName] = useState('');
  const [isnotbusinessentinty, setIsNotBusinessEntity] = useState(false);
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
 
const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const isNotBusinessEntityString = isnotbusinessentinty ? 'true' : 'false';
  
    try {
      setLoading(true);
      await handleRegister(e, firstname, lastname, email, password, isNotBusinessEntityString, companyname, purpose, phone,setLoading);
      
      setLoading(false);
      toast("Registered Successfull Please Login to Continue")
      navigate('/')
      // window.location.replace('/')
    } catch (error) {
      setLoading(false);
      toast('Something Went Wrong');
      console.error('Registration failed:', error);
    }
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
            name="countryname"
            value={countryname}
            onChange={(e) => setCountryName(e.target.value)}
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
              checked={purpose === 'sell'}
              onChange={(e) => setPurpose(e.target.value)}
              className="mx-2"
            />
            <span className='mr-2 text-sm text-gray-500'>Sell</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="purpose"
              value="purchase"
              checked={purpose === 'purchase'}
              onChange={(e) => setPurpose(e.target.value)}
              className="mr-2 text-sm text-gray-500"
            />
            <span className='mr-2 text-gray-500'>Purchase</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="purpose"
              value="both"
              checked={purpose === 'both'}
              onChange={(e) => setPurpose(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            name="firstname"
            placeholder='First Name'
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-1/2 text-sm px-3 py-0.5 focus:outline-none border border-gray-300"
            required
          />
          <input
            type="text"
            id="lastName"
            name="lastname"
            placeholder='Last Name'
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            className="w-1/2 text-sm px-3 py-0.5 focus:outline-none border border-gray-300"
            required
          />
          </div>
        </div>
        
      

{!isnotbusinessentinty && (
  <div className="mb-4 flex w-full items-center">
    <label htmlFor="companyName" className="block text-end pr-2 self-center text-sm w-2/6 text-gray-500 mb-2">
      Company Name:
    </label>
    <input
      type="text"
      id="companyName"
      name="companyname"
      value={companyname}
      onChange={(e) => setCompanyName(e.target.value)}
      className="w-4/6 px-3 text-sm py-0.5 focus:outline-none border border-gray-300"
      required
    />
  </div>
)}
        <div className="mb-4 w-4/6 flex justify-end items-center">
          <input
            type="checkbox"
            id="isNotBusinessEntity"
            name="isnotbusinessentinty"
            checked={isnotbusinessentinty}
            onChange={(e) => setIsNotBusinessEntity(e.target.value)}
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-4/6 px-3 text-sm py-0.5 focus:outline-none border border-gray-300"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white font-bold py-1 px-4 rounded-sm hover:bg-orange-700"
        >
          {loading ? 'Wait...' : 'SignUp'}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
