import React, { useEffect, useState } from 'react'
import Navbar3 from '../../Components/Navbar/Navbar3'
import {ImLocation2} from 'react-icons/im'
import { fetchCartItems, mergeData } from '../../redux/features/auth/authAction';
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiStore } from 'react-icons/bi'
import { GoShieldCheck} from 'react-icons/go'
import { HiChatBubbleOvalLeftEllipsis } from 'react-icons/hi2'
import ShippingForm from './ShippingForm';
import { useParams } from 'react-router-dom';
const BuyNow = () => {
  const [cartItems, setCartItems] = useState([]);
  const [mergedCartItems, setMergedCartItems] = useState([]);
  const [isFormModal, setIsFormModal] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const { id } = useParams();
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
      console.log("initial", flattenedCounts);
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
  const openForm = () => {
    setIsFormModal(true);
  };

  const closeForm = () => {
    setIsFormModal(false);
  };

  const [formData, setFormData] = useState({
    shippingAddress: [
      {
        country: '',
        address1: '',
        address2: '',
        province: '',
        city: '',
        zipCode: '',
        fullName: '',
        phoneNumber: '',
        tag: [],
      },
    ],
    totalQuantity: 0,
    shippingPrice: 25,
    totalPrice: subtotal,
    Status: false,
  });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://gray-ill-viper.cyclic.app/alibaba/patchcart/${id}`);
  
        if (response.ok) {
          const data = await response.json();
          setFormData(data);
        } else {
          console.error('Error fetching cart data:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchData();
  }, [id]);
  
  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
  
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);
  const handleShippingAddressChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      shippingAddress: [
        {
          ...prevFormData.shippingAddress[0],
          [field]: value,
        },
      ],
    }));
  
    // Update local storage
    localStorage.setItem('formData', JSON.stringify(formData));
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch(`https://gray-ill-viper.cyclic.app/alibaba/patchcart/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Cart data updated successfully!');
      } else {
        console.error('Error updating cart data:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  console.log(formData)
  return (
    <>
    <Navbar3 title={'Buy Now'} />

    <div className='bg-gray-100 py-10 px-28 flex space-x-5'>
    <div className='w-2/3    mb-4   flex flex-col'>
      <div className='w-full bg-white p-4 mb-4'>
        <div className='flex justify-center items-center w-full border border-dashed border-gray-500 rounded-md py-4'>
          <ImLocation2 className='text-orange-500'/> <span onClick={openForm} className='text-[14px] font-bold text-blue-500 hover:text-orange-500 '>Add an address</span>
        </div>
      </div>
      <div className=' border-b rounded-md bg-white w-full p-5'>
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
      <div className=' flex justify-end p-4 bg-gray-50'>
        <h1 className='text-[14px]'>Items total: <span className='font-bold text-[16px]'>US${subtotal}</span></h1>
      </div>
    </div>


    <div className='w-1/3 p-5 bg-white rounded-md flex flex-col h-fit'>
      <h1 className='text-[14px] font-bold mb-2'>This order is protected</h1>
      <p className='text-gray-500 text-[11px] pb-6 border-b flex items-center'>with 
      <img className='h-[16px] ml-2 w-[106px]' src='https://img.alicdn.com/imgextra/i1/O1CN01hydRi91Czf0T3Ayd8_!!6000000000152-55-tps-133-20.svg' about='lt'/>
      <button className='text-black underline font-bold ml-2'>View Details</button>
      </p>
      <h1 className='flex justify-between mt-3 pb-4 border-b'>
        <span className='text-[14px] text-gray-500'>Items Total</span>
        <span className='font-medium text-[16px] '>US${subtotal}</span>
      </h1>
      <h1 className='flex justify-between mt-3 pb-4 '>
        <span className='text-[14px] text-gray-500'>Order Total</span>
        <span className='font-medium text-[16px] '>to be Negotiated</span>

      </h1>
      <button onClick={handleSubmit} className='text-[14px] flex justify-center items-center py-2 w-full rounded-full bg-orange-500 hover:bg-orange-500 text-white font-medium'><GoShieldCheck className='text-lg mr-2'/> Submit Order</button>
    </div>
    </div>
    <ShippingForm isFormModal={isFormModal} closeForm={closeForm} />
    </>
  )
}

export default BuyNow