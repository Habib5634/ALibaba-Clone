import React, { useState, useEffect } from 'react';
import API from '../../service/API'; // Import your API library
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiStore } from 'react-icons/bi'
import { HiChatBubbleOvalLeftEllipsis } from 'react-icons/hi2'
import { fetchCartItems, mergeData } from '../../redux/features/auth/authAction';
import Navbar3 from '../../Components/Navbar/Navbar3';
import { Link } from 'react-router-dom';
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [mergedCartItems, setMergedCartItems] = useState([]);

  const [subtotal, setSubtotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  //fetch cart item
// useEffect(() => {
//     const fetchCartItems = async () => {
//       const apiUrl = 'https://gray-ill-viper.cyclic.app/alibaba/getcarts';
  
//       try {
//         const response = await fetch(apiUrl);
  
//         if (response.ok) {
//           const cartItemsData = await response.json();
//           setCartItems(cartItemsData);
//           console.log("cart", cartItemsData);
  
//           // Call mergeData after setting cartItems
//           mergeData(cartItemsData);
//         } else {
//           console.error('Error fetching cart items:', response.status);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };
  
//     const fetchProductDetails = async (productId) => {
//       try {
//         const response = await API.get(`https://gray-ill-viper.cyclic.app/alibaba/usergetone/${productId}`);
//         return response.data;
//       } catch (error) {
//         console.error(`Error fetching product details for ID ${productId}:`, error);
//         return null;
//       }
//     };
  
//     const mergeData = async (cartItemsData) => {
//       const productIds = cartItemsData?.addtocart?.map(item => item.product) || [];
  
//       try {
//         const productDetailsArray = await Promise.all(productIds.map(fetchProductDetails));
  
//         const mergedCartItems = cartItemsData.addtocart.map((cartItem, index) => ({
//           ...cartItem,
//           productDetails: productDetailsArray[index],
//         }));
  
//         setMergedCartItems(mergedCartItems);
//         console.log("merg", mergedCartItems);
//       } catch (error) {
//         console.error('Error merging data:', error);
//       }
//     };
  
//     fetchCartItems();
//   }, []);
useEffect(() => {
  const fetchData = async () => {
    const cartItemsData = await fetchCartItems();
    if (cartItemsData) {
      setCartItems(cartItemsData);
      mergeData(cartItemsData, setMergedCartItems);
    }
  };

  fetchData();
}, []);
  // State to track selected products
  const [selectedProducts, setSelectedProducts] = useState([]);


// Function to handle "Select All" checkbox
const handleSelectAll = () => {
    const allProductIds = mergedCartItems.map(item => item.productDetails._id);
    setSelectedProducts(prevSelected => {
      return prevSelected.length === allProductIds.length ? [] : allProductIds;
    });
  };
  
  // Function to handle individual product selection
  const handleSelectProduct = (productId) => {
    setSelectedProducts(prevSelected => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter(id => id !== productId);
      } else {
        return [...prevSelected, productId];
      }
    });
  };


  //sest count quantity code
  const [count, setCount] = useState([]);
  
  useEffect(() => {
    if (mergedCartItems && mergedCartItems.length > 0) {
      const initialCounts = mergedCartItems.map(item =>
        item.orderDetails.map(detail => detail.quantity)
      );

      // Flatten the nested array to get a single array of quantities
      const flattenedCounts = initialCounts.flat();

      setCount(flattenedCounts);
      // console.log("initial", flattenedCounts);
    }
  }, [mergedCartItems]);

  const handleIncrement = (index) => {
    setCount((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  const handleDecrement = (index) => {
    setCount((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? Math.max(count - 1, 0) : count))
    );
  };
  
 
  // handle delete cart item
  const handleDeleteCartItem = async (cartItemId) => {
    try {
      const response = await fetch(`https://gray-ill-viper.cyclic.app/alibaba/delete/${cartItemId}`, {
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

  useEffect(() => {
    // Calculate subtotal and total quantity whenever cart items change
    let newSubtotal = 0;
    let newTotalQuantity = 0;

    mergedCartItems.forEach((cartItem, index) => {
      const totalPrice = cartItem.productDetails.priceOfPieces[0].price * count[index];
      newSubtotal += totalPrice;
      newTotalQuantity += count[index];
      // console.log(newSubtotal,newTotalQuantity)
    });

    setSubtotal(newSubtotal);
    setTotalQuantity(newTotalQuantity);
  }, [mergedCartItems, count]);
  // let subtotal = 0;
  // let totalQuantity = 0;
  const handleCheckout = () => {
    // Calculate the overall subtotal
    const subtotal = mergedCartItems.reduce((acc, cartItem, index) => {
      const totalPrice = cartItem.productDetails.priceOfPieces[0].price * count[index];
      return acc + totalPrice;
    }, 0);
  
    // Calculate the total quantity
    const totalQuantity = count.reduce((acc, quantity) => acc + quantity, 0);
  
    // Calculate the total price including shipping
    const cartTotal = subtotal + 25; // Assuming shipping is a fixed value of US$25
  
    // Store values in local storage
    localStorage.setItem('totalQuantity', totalQuantity);
    localStorage.setItem('subtotal', subtotal);
    localStorage.setItem('shippingPrice', 25); // Assuming shipping is a fixed value
  
    
  };
  
  return (
    <>
       <Navbar3 title={'Shoping Cart'}/>
    <div className='bg-gray-100 py-10 px-28 flex space-x-5'>

    <div className='w-2/3    mb-4   flex flex-col'>
    
    <label className="inline-flex items-center p-5 w-full mb-4 rounded-md bg-white">
        <input
          type="checkbox"
          className="form-checkbox text-indigo-600 h-5 w-5"
          checked={selectedProducts.length === mergedCartItems.length}
          onChange={handleSelectAll}
        />
        <span className="ml-2 text-gray-700">Select All</span>
      </label>
<div className='mb-4 rounded-md bg-white w-full p-5'>
<div className='w-full flex justify-between py-3 border-b'>
              <label className='flex items-center'>
                <input
                  className='flex items-center  text-gray-500'
                  type="checkbox"
                  checked={selectedProducts.length === mergedCartItems.length}
                  onChange={handleSelectAll}
                />
                <BiStore className='text-3xl ml-2 text-gray-500' /><span className='text-gray-500 text-[14px]'>Shenzhen Hongxin Photographic Equipment Co., Ltd.</span>
              </label>
              <span className='flex items-center text-[14px]'><HiChatBubbleOvalLeftEllipsis className='text-blue-500 text-lg' /> <span className='text-[14px]'>Chat Now!</span></span>
            </div>
      {mergedCartItems.map((cartItem,index) => {
       // Calculate the total price for the current item
       const totalPrice = cartItem.productDetails.priceOfPieces[0].price * count[index];

       // Accumulate the total price to calculate the overall subtotal
      //  const subtotal += totalPrice;
      //  totalQuantity += count[index];
        return(
        <div key={cartItem.product} className="flex items-center relative mt-3">
          <input
            type="checkbox"
            className="form-checkbox text-indigo-600 h-5 w-5"
            checked={selectedProducts.includes(cartItem.productDetails._id)}
            onChange={() => handleSelectProduct(cartItem.productDetails._id)}
          />
          <div className="ml-2 flex w-full">
          <img
              src={cartItem.productDetails.images[0]} // Assuming there's an 'image' property in your productDetails
              alt={cartItem.productDetails.title}
              className="h-16 w-16 object-cover rounded"
            />
            <div className='flex flex-col ml-2 w-full'>
            <p className="text-[12px] text-gray-500 ">On-time Dispatch Guarantee</p>
            <p className="text-[12px] font-bold text-gray-700 w-full">
                
                {cartItem.productDetails.title.length > 50 ? `${cartItem.productDetails.title.slice(0,70)}...` : cartItem.productDetails.title}
                </p>
             <div className='w-full flex items-center'>
            <div className='w-1/3 mt-5'>
            <div className='flex flex-col border py-1 px-2 w-11/12'>
        <h1 className='text-[12px] text-gray-500'>Calliber: {cartItem && cartItem?.orderDetails[0]?.size}</h1>
        <h1 className='text-[12px] text-gray-500'>Color:  Black</h1>

    </div>

            </div>
            <div className='w-1/3 flex justify-between  mt-5'>
                <h1 className='text-[14px] font-bold  flex items-center'>US{cartItem.productDetails.priceOfPieces[0].price}<span className='text-[12px] text-gray-500  flex items-center'>/pieces<AiOutlineInfoCircle className='text-[14px] ml-1' /></span></h1>

                <div className='flex  space-x-1 justify-end '>
                      <button
                        className='px-3 py-1 cursor-pointer border hover:border-black'
                        onClick={() => handleDecrement(index)}
                        // disabled={count[index] === 1}
                      >
                        -
                      </button>
                      <span className='px-3 py-1 border'>
                      {count[index]}
                        </span>
                      <button className='px-3 py-1 cursor-pointer border hover:border-black'
                      onClick={() => handleIncrement(index)}
                       >+</button>
                    </div>


            </div>
            <div className='w-1/3 flex justify-center items-center mt-5'>
                <h1 className='text-[14px]'>Total:US${cartItem.productDetails.priceOfPieces[0].price * count[index]}</h1>
            </div>

          </div>
            </div>  
           
          </div>
          <div className='absolute top-0 right-0'>
       {/* delete button */}
       <button onClick={() => handleDeleteCartItem(cartItem._id)}><AiOutlineClose /></button>
     </div>
         
        </div>
      )} )}
      
      </div>
    </div>
    <div className='w-1/3 p-5 bg-white rounded-md flex flex-col h-fit'>
          <h1 className='font-bold text-gray-700'>Cart SubTotal</h1>
          <div className='flex justify-between w-full'>
            <h1 className='  text-gray-700 text-[14px]'>Items Total</h1>
            <h1 className='pb-3 text-gray-700 text-[14px]'>US${subtotal}</h1>
          </div>
          <div className='flex justify-between w-full  pb-7 border-b '>
            <h1 className='  text-gray-700 text-[14px]'>Shipping</h1>
            <h1 className=' text-gray-700 text-[14px] font-bold'>US$25</h1>
          </div>
          <div className='flex justify-between w-full  pt-7 pb-3  '>
            <h1 className='  text-gray-700 text-[14px]'>Cart Total</h1>
            <h1 className=' text-gray-700 text-[18px] font-bold'>US${subtotal + 25}
            </h1>
          </div>
          <Link to={`/buy-now/${mergedCartItems[0]?._id}`}>
          <button onClick={handleCheckout} className='bg-orange-500 w-full text-white py-1 text-[14px] rounded-full'>Checkout</button>
          </Link>
        </div>
     
    </div>
    </>
  );
};

export default Cart;
