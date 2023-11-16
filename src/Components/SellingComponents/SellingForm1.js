import React, { useState } from 'react'

const SellingForm1 = ({onSubmit}) => {

    
    // State variables for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    country: '',
    phoneNo: '',
    businessCategory: '',
  });

  // Function to handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // // Save data to local storage
    // localStorage.setItem('userFormData', JSON.stringify(formData));
    // You can perform additional actions like API calls here
    onSubmit(formData)
    // console.log('Form submitted:', formData);
  };
  return (
    <div className=" mt-8">
        <h1 className='text-[14px] text-[#CCCCCC] mb-[10px] text-center'>Step 1 of 2</h1>
    <h1 className='text-[36px] text-[#2C2D69] font-bold text-center'>Start selling on Alibaba.com</h1>
    <h1 className='text-[14px] text-[#2C2D69] mb-[35px] text-center'>Tell us a little about your bussiness to get the right team supporting you</h1>



    <form onSubmit={handleSubmit}>
        <div className='flex w-full space-x-2'>
      <div className="mb-4 w-1/2">
        <label htmlFor="firstName" className="block text-[#333333] text-[15px]  mb-2">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          placeholder="Your First Name"
          required
        />
      </div>

      <div className="mb-4 w-1/2">
        <label htmlFor="lastName" className="block text-[#333333] text-[15px] mb-2">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          placeholder="Your Last Name"
          required
        />
      </div>
      </div>
      <div className='flex w-full space-x-2'>
      <div className="mb-4 w-1/2">
        <label htmlFor="email" className="block text-[#333333] text-[15px] mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          placeholder="Your Email"
          required
        />
      </div>

      <div className="mb-4 w-1/2">
        <label htmlFor="companyName" className="block text-[#333333] text-[15px] mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          placeholder="Your Company Name"
          required
        />
      </div>
      </div>
      <div className='flex w-full space-x-2'>
      <div className="mb-4 w-1/2">
        <label htmlFor="country" className="block text-[#333333] text-[15px] mb-2">
          Country
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          required
        >
          <option value="" disabled>Select Country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          {/* Add more country options as needed */}
        </select>
      </div>

      <div className="mb-4 w-1/2">
        <label htmlFor="phoneNo" className="block text-[#333333] text-[15px] mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNo"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          placeholder="Your Phone Number"
          required
        />
      </div>
      </div>
      <div className="mb-4 w-1/2">
        <label htmlFor="businessCategory" className="block text-[#333333] text-[15px] mb-2">
          Business Category
        </label>
        <select
          id="businessCategory"
          name="businessCategory"
          value={formData.businessCategory}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
          required
        >
          <option value="" disabled>Select Business Category</option>
          <option value="Technology">Technology</option>
          <option value="Finance">Finance</option>
          {/* Add more business category options as needed */}
        </select>
      </div>

      <div className="mb-4 mt-7 flex justify-center">
        <button
        // onClick={() => updateSelectedLayout('sellingForm2')}
          type="submit"
          className="bg-blue-700 text-white px-16 py-1.5 rounded-full hover:bg-blue-800 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Next
        </button>
      </div>
    </form>
    <h1 className='text-[14px] text-[#333333] text-center mb-5'>Zatin bir Alibaba.com hesabiniz var mi ? <span className='text-blue-500 underline'>  Otorum ac</span></h1>
    <h1 className='text-[12px] text-[#333333] text-center mb-5'>
        <input type='checkbox' className='bg-blue-500 text-white mr-2'/> You are agree to recieve emails form Alibaba.com
    </h1>
    <h1 className=' text-[#333333] text-center mb-5'>
    Göndererek şunu kabul etmiş olursunuz: <span className='text-blue-500 underline'>Alibaba.com Şartları ve Koşulları</span>
    </h1>
  </div>
  )
}

export default SellingForm1