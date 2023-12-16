import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import API from '../../service/API';

const SellerAddProductForm = () => {
  const { user,token } = useSelector(state => state.auth)
  // console.log("user",user)
  // console.log("user",token)
  const colors = ['Black', 'Red', 'Orange', 'Green'];
  const [servicesData, setCatagories] = useState([]);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        reviews: 0,
        buyers: 0,
        
        priceOfPieces: [
          { price: 0, pieces: 0 },
          { price: 0, pieces: 0 },
          { price: 0, pieces: 0 },
        ],
        orderDetails: [
          { size: '', price: 0, quantity: 0 },
          { size: '', price: 0, quantity: 0 },
        ],
        benefits: '',
        color: [],
        customization: '',
        leadTime: [
          { quantity: '', leadTimedays: '' },
          { quantity: '', leadTimedays: '' },
        ],
        category: [],
        images: [],
        addedby:user?._id,
      });

      const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevState) => {
          if (checked) {
            return { ...prevState, color: [...prevState.color, value] };
          } else {
            return { ...prevState, color: prevState.color.filter((color) => color !== value) };
          }
        });
      };
    
      const handleInputChange = (e, index, subIndex) => {
        const { name, value, type, checked } = e.target;
        const newFormData = { ...formData };
      
        if (type === 'checkbox') {
          setFormData((prevState) => ({
            ...prevState,
            [name]: checked
              ? [...prevState[name], value]
              : prevState[name].filter((item) => item !== value),
          }));
        } else if (name === 'images') {
          const urlsArray = value.split(',').map((url) => url.trim()); // Split and trim URLs
          newFormData[name] = urlsArray;
        } else if (name === 'color') {
          const colors = value.split(','); // Separate colors using comma
          newFormData[name] = colors;
        } else if (index !== undefined && subIndex !== undefined) {
          newFormData[name][index][subIndex] = value;
        } else if (index !== undefined) {
          newFormData[name][index] = value;
        } else {
          newFormData[name] = value;
        }
      
        // Update the state with the new form data
        setFormData(newFormData);
      };
      
    
     
      
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:5000/alibaba/selleradd', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Include the user's token in the Authorization header
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            const errorData = await response.json(); // Assuming the error response is in JSON format
            console.error('Error Details:', errorData);
            throw new Error('Failed to submit the form');
          }
    
          const result = await response.json();
          console.log('API Response:', result);
        } catch (error) {
          console.error('Error:', error.message);
        }
      };
    
      


 //get all catagory
 const getAllCatagories = async () => {
  try {
      console.log("Fetching categories...");
      const response = await API.get("http://localhost:5000/alibaba/usergetallcategories");
      const servicesData = response.data.category;
      if (servicesData) {
          // console.log(servicesData);
          setCatagories(servicesData); // Update state if needed
      }
  } catch (error) {
      console.log("Error fetching categories:", error);
  }
};

useEffect(() => {
    getAllCatagories();
}, []);
    
  return (
    <>
    
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8 p-4 border rounded">
      {/* Title and Description */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-600">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={(e) => handleInputChange(e)}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-600">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={(e) => handleInputChange(e)}
          rows="3"
          className="mt-1 p-2 w-full border rounded-md"
          required
        ></textarea>
      </div>

      {/* Reviews and Buyers */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="reviews" className="block text-sm font-medium text-gray-600">
            Reviews:
          </label>
          <input
            type="number"
            id="reviews"
            name="reviews"
            value={formData.reviews}
            onChange={(e) => handleInputChange(e)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="buyers" className="block text-sm font-medium text-gray-600">
            Buyers:
          </label>
          <input
            type="number"
            id="buyers"
            name="buyers"
            value={formData.buyers}
            onChange={(e) => handleInputChange(e)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
      </div>

      {/* Price of Pieces */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Price of Pieces:</label>
        {formData.priceOfPieces.map((priceOfPiece, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor={`price${index}`} className="block text-sm font-medium text-gray-600">
                Price:
              </label>
              <input
                type="number"
                id={`price${index}`}
                name={`priceOfPieces`}
                value={priceOfPiece.price}
                onChange={(e) => handleInputChange(e, index, 'price')}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor={`pieces${index}`} className="block text-sm font-medium text-gray-600">
                Pieces:
              </label>
              <input
                type="number"
                id={`pieces${index}`}
                name={`priceOfPieces`}
                value={priceOfPiece.pieces}
                onChange={(e) => handleInputChange(e, index, 'pieces')}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
          </div>
        ))}
      </div>

      {/* Order Details */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Order Details:</label>
        {formData.orderDetails.map((orderDetail, index) => (
          <div key={index} className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor={`size${index}`} className="block text-sm font-medium text-gray-600">
                Size:
              </label>
              <input
                type="text"
                id={`size${index}`}
                name={`orderDetails`}
                value={orderDetail.size}
                onChange={(e) => handleInputChange(e, index, 'size')}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor={`price${index}`} className="block text-sm font-medium text-gray-600">
                Price:
              </label>
              <input
                type="number"
                id={`price${index}`}
                name={`orderDetails`}
                value={orderDetail.price}
                onChange={(e) => handleInputChange(e, index, 'price')}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor={`quantity${index}`} className="block text-sm font-medium text-gray-600">
                Quantity:
              </label>
              <input
                type="number"
                id={`quantity${index}`}
                name={`orderDetails`}
                value={orderDetail.quantity}
                onChange={(e) => handleInputChange(e, index, 'quantity')}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4">
  <label htmlFor="benefits" className="block text-sm font-medium text-gray-600">
    Benefits:
  </label>
  <input
    type="text"
    id="benefits"
    name="benefits"
    value={formData.benefits}
    onChange={(e) => handleInputChange(e)}
    className="mt-1 p-2 w-full border rounded-md"
    required
  />
</div>

{/* Color */}
<div className="mb-4">
        <label htmlFor="color" className="block text-sm font-medium text-gray-600">
          Color:
        </label>
        {colors.map((color, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`color-${index}`}
              name="color"
              value={color}
              checked={formData.color.includes(color)}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor={`color-${index}`}>{color}</label>
          </div>
        ))}
      </div>

{/* Customization */}
<div className="mb-4">
  <label htmlFor="customization" className="block text-sm font-medium text-gray-600">
    Customization:
  </label>
  <input
    type="text"
    id="customization"
    name="customization"
    value={formData.customization}
    onChange={(e) => handleInputChange(e)}
    className="mt-1 p-2 w-full border rounded-md"
    required
  />
</div>

{/* Lead Time */}
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-600">Lead Time:</label>
  {formData.leadTime.map((leadTime, index) => (
    <div key={index} className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor={`quantity${index}`} className="block text-sm font-medium text-gray-600">
          Quantity:
        </label>
        <input
          type="text"
          id={`quantity${index}`}
          name={`leadTime`}
          value={leadTime.quantity}
          onChange={(e) => handleInputChange(e, index, 'quantity')}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor={`leadTimedays${index}`} className="block text-sm font-medium text-gray-600">
          Lead Time (days):
        </label>
        <input
          type="text"
          id={`leadTimedays${index}`}
          name={`leadTime`}
          value={leadTime.leadTimedays}
          onChange={(e) => handleInputChange(e, index, 'leadTimedays')}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
    </div>
  ))}
</div>

{/* Category */}
<div className="mb-4">
      <label htmlFor="category" className="block text-sm font-medium text-gray-600">
        Category:
      </label>
      <select
        id="category"
        name="category"
        value={formData.category}
        onChange={(e) => handleInputChange(e)}
        className="mt-1 p-2 w-full border rounded-md"
        required
      >
        <option value="" disabled defaultValue>Select a category</option>
        {servicesData.map((category) => (
          <option key={category._id} value={category._id}>
            {category.category}
          </option>
        ))}
      </select>
    </div>

{/* Images */}
<div className="mb-4">
  <label className="block text-sm font-medium text-gray-600">Images:</label>
  
    <div >
      <label htmlFor="images" className="inline-block mr-2">
      Image URLs (comma separated)
      </label>
      <input
        type="text"
        name="images"
        value={formData.images.join(', ')} // Join the array with commas and spaces for display
        onChange={(e) => handleInputChange(e)}
        placeholder="Image URLs"
        className="mt-1 p-2 w-full border rounded-md"
        required
      />
    </div>

</div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
    </>
  )
}

export default SellerAddProductForm