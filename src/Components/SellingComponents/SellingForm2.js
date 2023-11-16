import React, { useState } from 'react'

const SellingForm2 = () => {
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [otherPlatform, setOtherPlatform] = useState('');
  const [preferredOption, setPreferredOption] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCheckboxChange = (platform) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter((selected) => selected !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const handleOtherInputChange = (e) => {
    setOtherPlatform(e.target.value);
  };

  const handlePreferredOptionChange = (option) => {
    setPreferredOption(option);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Retrieve data from local storage
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || {};
    
    // Combine data from the first form and the current form
    const combinedFormData = {
      ...storedFormData,
      selectedPlatforms,
      otherPlatform,
      preferredOption,
      selectedCategory,
    };
  
    console.log(combinedFormData);
  
    // Add logic to handle the combined form data as needed
    // For example, you can save it to local storage or submit it to an API
  
    // Save the combined form data to local storage
    localStorage.setItem('combinedForm', JSON.stringify(combinedFormData));
  };
  return (
    <div>
        <h1 className='text-[14px] text-[#CCCCCC] mb-[10px] text-center'>Step 2 of 2</h1>
    <h1 className='text-[36px] text-[#2C2D69] font-bold text-center'>Tell us a bit more about you</h1>
    <h1 className='text-[14px] text-[#2C2D69] mb-[35px] text-center'>So that we can customize solutions for you</h1>

<form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
    <h1 className='text-[15px] text-[#333333] mb-2'>What other e-commernce palteforms are you currently<br/> selling on</h1>
      {/* Checkboxes for platforms */}
      <div className="flex mb-4">
        
        {['Amazon', 'AliExpress', 'Ebay', 'Shopify', 'Other'].map((platform) => (
          <div key={platform} className="mr-4 flex items-center">
            <input
              type="checkbox"
              id={platform}
              name={platform}
              className='h-4 w-4 rounded-md border-2 border-text bg-transparent text-primary focus:ring-primary focus:ring-offset-0 checked:focus:ring-text disabled:opacity-30'
              checked={selectedPlatforms.includes(platform)}
              onChange={() => handleCheckboxChange(platform)}
            />
            <label htmlFor={platform} className="ml-2 text-[12px]">{platform}</label>
          </div>
        ))}
      </div>

      {/* Input field for Other */}
      <div className="mb-4">
        <label htmlFor="otherPlatform" className='text-[12px]'>Other</label>
        <input
          type="text"
          id="otherPlatform"
          name="otherPlatform"
          placeholder='Please Specify'

          value={otherPlatform}
          onChange={handleOtherInputChange}
          className="ml-2 p-2 w-1/4 border rounded"
        />
      </div>

      {/* Radio buttons for preferred option */}
      <div className="mb-4" >
        
        {['I don,t sell on other plateform'].map((option) => (
          <div key={option} className="mr-4 flex items-center">
            <input
              type="radio"
              id={option}
              name="preferredOption"
              checked={preferredOption === option}
              className=''
              onChange={() => handlePreferredOptionChange(option)}
            />
            <label htmlFor={option} className="ml-2 text-[12px]">{option}</label>
          </div>
        ))}
      </div>

      {/* Dropdown for category */}
      <div className="mb-4 flex flex-col">
        <label htmlFor="category">Do you sell to bussines buyers?</label>
        <select
          id="category"
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className=" p-2 border rounded "
        >
          <option className='text-[12px]' value="">Select...</option>
          <option className='text-[12px]' value="Common-biz-type-governement">Common-biz-type-governement</option>
          <option className='text-[12px]' value="Common-biz-type-Seller">Common-biz-type-Seller</option>
          <option className='text-[12px]' value="Common-biz-type-Bussiness">Common-biz-type-Bussiness</option>
        </select>
      </div>

      {/* Submit button */}
      <div className='flex justify-center my-8'>
        <button type="submit" className="bg-blue-700 text-white px-14 font-medium py-2 rounded-full hover:bg-blue-800 focus:outline-none focus:shadow-outline-blue active:bg-blue-900">
          Finish
        </button>
      </div>
    </form>
    </div>
  )
}

export default SellingForm2