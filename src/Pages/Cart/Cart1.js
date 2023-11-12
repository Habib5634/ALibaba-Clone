import React, { useEffect, useState } from 'react'
import API from '../../service/API';
import { BiStore } from 'react-icons/bi'
import { HiChatBubbleOvalLeftEllipsis } from 'react-icons/hi2'
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai';
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(null)
  const [selectedItems, setSelectedItems] = useState([]);
const [selectAll, setSelectAll] = useState(false);
  const uniqueProductIds = new Set();
  
  useEffect(() => {
    const fetchCartItems = async () => {
      const apiUrl = 'https://tiny-tan-snail-wear.cyclic.app/alibaba/getcarts';

      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const cartItems = await response.json();
          setCartItems(cartItems);
          console.log("cart", cartItems)
        } else {
          console.error('Error fetching cart items:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCartItems();
  }, []);

  //get product by id
  useEffect(() => {
    // Extracting product IDs from the cartData
    const productIds = cartItems?.addtocart?.map(item => item.product) || [];
  
    // Using Promise.all to make multiple API requests in parallel
    Promise.all(productIds.map(async productId => {
      try {
        const response = await API.get(`https://tiny-tan-snail-wear.cyclic.app/alibaba/usergetone/${productId}`);
        console.log("API Response for ID", productId, ":", response);
        return response.data;
      } catch (error) {
        console.error(`Error fetching product details for ID ${productId}:`, error);
        return null; // Return null or handle the error as needed
      }
    }))
      .then(productDetailsArray => {
        // 'productDetailsArray' will contain an array of product details for each ID
        console.log("Product Details:", productDetailsArray);
        // Set the product details in state
        setProducts(productDetailsArray);
      });
  }, []);

  //check box 
 // Function to handle checkbox change
const handleCheckboxChange = (productId) => {
  setSelectedItems((prevSelected) => {
    if (prevSelected.includes(productId)) {
      return prevSelected.filter((item) => item !== productId);
    } else {
      return [...prevSelected, productId];
    }
  });
};

// Function to handle select-all checkbox change
const handleSelectAllChange = () => {
  setSelectAll((prevSelectAll) => !prevSelectAll);
  // If selectAll is true, set all product IDs in selectedItems, otherwise, clear selectedItems
  setSelectedItems((prevSelected) => (selectAll ? cartItems.addtocart.map(item => item.product) : []));
};

  // Function to handle incrementing quantity
  const [count, setCount] = useState([]);

  useEffect(() => {
    if (cartItems && cartItems.addtocart) {
      const initialCounts = cartItems.addtocart.map(item => item.orderDetails.map(detail => detail.quantity));
      setCount(initialCounts.flat());
    }
  }, [cartItems]);

  const handleIncrement = (index) => {
    setCount(prevCounts => prevCounts.map((count, i) => i === index ? count + 1 : count));
  };

  const handleDecrement = (index) => {
    setCount(prevCounts => prevCounts.map((count, i) => i === index ? Math.max(count - 1, 0) : count));
  };

  // handle delete cart item
  const handleDeleteCartItem = async (cartItemId) => {
    try {
      const response = await fetch(`https://tiny-tan-snail-wear.cyclic.app/alibaba/delete/${cartItemId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // If the deletion was successful, you may want to update the cartItems state or perform any necessary actions.
        console.log('Cart item deleted successfully');
      } else {
        console.error('Error deleting cart item:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // consrt sring price to number
  // const priceAsString = products.priceOfPieces[0].price;
  // const priceAsNumber = parseFloat(priceAsString);
  // console.log(priceAsNumber)

// const prod =products[0].images[0]
// console.log(prod)
  //find unique product 
  let overallTotal = 0;
  return (
    <>
      {/* //cart Navbar */}
      <div className='flex shadow-md  h-20 items-center px-28'>
        <img
          src='https://s.alicdn.com/@img/imgextra/i2/O1CN0153JdbU26g4bILVOyC_!!6000000007690-2-tps-418-58.png'

          alt="pngfuel"
          className="mr-3 w-48 h-auto"
        />
        <h1 className='text-[22px]'>Shopping Cart</h1>
      </div>

      {/* Cart Data */}

      <div className='bg-gray-100 py-10 px-28 flex space-x-5'>
        <div className='w-2/3 p-5  rounded-md mb-4  bg-white flex flex-col'>
        <label>
      <input
        type="checkbox"
        checked={selectAll}
        onChange={handleSelectAllChange}
      />
      Select All
    </label>

          <ul className='p-5 bg-white w-full rounded-md'>
            <div className='w-full flex justify-between py-3 border-b'>
              <label className='flex items-center'>
                <input
                  className='flex items-center  text-gray-500'
                  type="checkbox"
                // checked={selectedItems.length === cartItems.addtocart.length * cartItems.addtocart[0].orderDetails.length}
                // onChange={handleToggleAll}
                />
                <BiStore className='text-3xl ml-2 text-gray-500' /><span className='text-gray-500 text-[14px]'>Shenzhen Hongxin Photographic Equipment Co., Ltd.</span>
              </label>
              <span className='flex items-center text-[14px]'><HiChatBubbleOvalLeftEllipsis className='text-blue-500 text-lg' /> <span className='text-[14px]'>Chat Now!</span></span>
            </div>
            {cartItems && cartItems.addtocart && cartItems.addtocart.map((item, index) => (
 <div key={item._id}>
 <label>
   <input
     type="checkbox"
     checked={selectedItems.includes(item.product)}
     onChange={() => handleCheckboxChange(item.product)}
   />
   {item.product} 
   {products && products.map((product, _id)=>(
            <div className='flex'>
              <img src={product.images[0]} alt='img' className='h-[66px] w-[66px] p-1 border my-2 ml-2 border-gray-600' />
              <div className='flex flex-col w-full ml-3 py-3'>
                <h1 className='text-[12px] text-gray-500'>On time dispatch Guarantee</h1>
                <h1 className='text-[14px] text-gray-700'>On time dispatch Guarantee</h1>


                <div className='flex justify-between items-center w-full'>
                  <div className=' w-1/3 p-1 px-1.5 mt-8'>
                    <div className='w-11/12 px-2 border border-gray-500 rounded-md py-1'>
                      <div className='text-[12px] mb-2'>
                        Calliber: 
                        {/* {detail.size} ; */}
                      </div>
                      <div className='text-[12px]'>
                        Color: Black ;
                      </div>
                    </div>
                  </div>
                  <div className='w-1/3  flex justify-between px-1.5 mt-8'>
                    <h1 className='text-[14px] flex items-center font-bold' >
                      {/* US{product.priceOfPieces[0].price} */}
                      <span className='text-[12px] flex font-normal items-center'>/piece<AiOutlineInfoCircle className='text-[14px] ml-1' /></span></h1>
                    {/* Quantities and Sizes  */}
                    <div className='flex  space-x-1 justify-end '>
                      <button
                        className='px-3 py-1 cursor-pointer border hover:border-black'
                        // onClick={() => handleDecrement(index)}
                        // disabled={count[index] === 1}
                      >
                        -
                      </button>
                      <span className='px-3 py-1 border'>
                        {/* {count[index]} */}
                        </span>
                      <button className='px-3 py-1 cursor-pointer border hover:border-black'
                      //  onClick={() => handleIncrement(index)}
                       >+</button>
                    </div>

                  </div>
                  <div className='w-1/3 flex justify-center items-center mt-8'>
                    {/* ${totalForProduct.toFixed(2)} */}

                  </div>
                </div>
              </div>
            </div>
))}
   
   {/* Display your product information */}
 </label>
</div>
            ))}
          </ul>
        </div>
        <div className='w-1/3 p-5 bg-white rounded-md flex flex-col h-fit'>
          <h1 className='font-bold text-gray-700'>Cart SubTotal</h1>
          <div className='flex justify-between w-full'>
            <h1 className='  text-gray-700 text-[14px]'>Items Total</h1>
            <h1 className='pb-3 text-gray-700 text-[14px] font-bold'>US${overallTotal.toFixed(2)}</h1>
          </div>
          <div className='flex justify-between w-full  pb-7 border-b '>
            <h1 className='  text-gray-700 text-[14px]'>Shipping</h1>
            <h1 className=' text-gray-700 text-[14px] font-bold'>US${overallTotal.toFixed(2)}</h1>
          </div>
          <div className='flex justify-between w-full  pt-7 pb-3  '>
            <h1 className='  text-gray-700 text-[14px]'>Cart Total</h1>
            <h1 className=' text-gray-700 text-[18px] font-bold'>US${(parseFloat(overallTotal) + 25).toFixed(2)}
            </h1>
          </div>
          <button className='bg-orange-500 w-full text-white py-1 text-[14px] rounded-full'>Checkout</button>
        </div>



      </div>

    </>
  )
}

export default Cart













// item.orderDetails.map((detail, subIndex) => {
  //   const productId = detail.product;
  //   if (uniqueProductIds.has(productId)) {  
  //     return null;
  //   }
  //   uniqueProductIds.add(productId);

  //               const totalForProduct = count[subIndex] * 0.57;
  //               overallTotal += totalForProduct;
  //               return (
//     <li
//     //  key={`${index}-${subIndex}`} 
//      className='w-full relative'>
//       <label className='flex w-full'>
//         <input
//           type="checkbox"
//           checked={selectedItems.includes(item)}
//           onChange={() => handleCheckboxChange(item)}
//         />
//         <div className='flex w-full flex-col '>
//           {products && products.map((product, _id)=>(
//             <div className='flex'>
//               <img src={product.images[0]} alt='img' className='h-[66px] w-[66px] p-1 border my-2 ml-2 border-gray-600' />
//               <div className='flex flex-col w-full ml-3 py-3'>
//                 <h1 className='text-[12px] text-gray-500'>On time dispatch Guarantee</h1>
//                 <h1 className='text-[14px] text-gray-700'>On time dispatch Guarantee</h1>


//                 <div className='flex justify-between items-center w-full'>
//                   <div className=' w-1/3 p-1 px-1.5 mt-8'>
//                     <div className='w-11/12 px-2 border border-gray-500 rounded-md py-1'>
//                       <div className='text-[12px] mb-2'>
//                         Calliber: 
//                         {/* {detail.size} ; */}
//                       </div>
//                       <div className='text-[12px]'>
//                         Color: Black ;
//                       </div>
//                     </div>
//                   </div>
//                   <div className='w-1/3  flex justify-between px-1.5 mt-8'>
//                     <h1 className='text-[14px] flex items-center font-bold' >
//                       {/* US{product.priceOfPieces[0].price} */}
//                       <span className='text-[12px] flex font-normal items-center'>/piece<AiOutlineInfoCircle className='text-[14px] ml-1' /></span></h1>
//                     {/* Quantities and Sizes  */}
//                     <div className='flex  space-x-1 justify-end '>
//                       <button
//                         className='px-3 py-1 cursor-pointer border hover:border-black'
//                         onClick={() => handleDecrement(index)}
//                         disabled={count[index] === 1}
//                       >
//                         -
//                       </button>
//                       <span className='px-3 py-1 border'>{count[index]}</span>
//                       <button className='px-3 py-1 cursor-pointer border hover:border-black' onClick={() => handleIncrement(index)}>+</button>
//                     </div>

//                   </div>
//                   <div className='w-1/3 flex justify-center items-center mt-8'>
//                     {/* ${totalForProduct.toFixed(2)} */}

//                   </div>
//                 </div>
//               </div>
//             </div>
// ))}
            


       


//         </div>

//       </label>
//       <div className='absolute top-0 right-0'>
//         {/* ... */}
//         <button onClick={() => handleDeleteCartItem(item._id)}><AiOutlineClose /></button>
//       </div>
//     </li>
//   );
// }
// )