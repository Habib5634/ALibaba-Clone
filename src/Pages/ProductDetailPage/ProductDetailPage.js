import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AiOutlineCheckCircle, AiOutlineRight, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai'
import { BsCartPlus, BsTelephone } from 'react-icons/bs'
import { LiaLessThanEqualSolid} from 'react-icons/lia'

import Footer from '../../Components/Footer/Footer';
import SubFooter from '../../Components/Footer/SubFooter';
import API from '../../service/API';
import Navbar2 from '../../Components/Navbar/Navbar2';




const ProductDetailPage = () => {
  
  const [currentImage, setCurrentImage] = useState(0);
const [product,setProducts] = useState(null)
// const [selectedProduct, setSelectedProduct] = useState(null);
  const { id } = useParams();
  // const [selectedQuantities, setSelectedQuantities] = useState(Array(product.orderDetails.length).fill(1));
  // Fetch product by ID
  useEffect(() => {
    const getProductById = async (id) => {
      try {
        const response = await API.get(`https://gray-ill-viper.cyclic.app/alibaba/usergetone/${id}`);
        const product = response.data;
        setProducts(product);
        console.log(product)
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };

    getProductById(id);
  }, [id]);
 
  //sest count quantity code
  const [count, setCount] = useState([]);
useEffect(() => {
  if (product && product.orderDetails) {
    const initialCounts = product.orderDetails.map(item => item.quantity);
    setCount(initialCounts);
  }
}, [product]);

const handleIncrement = (index) => {
  console.log('Increment clicked');
  setCount(prevCounts => prevCounts.map((count, i) => i === index ? count + 1 : count));
};

const handleDecrement = (index) => {
  console.log('Decrement clicked');
  setCount(prevCounts => prevCounts.map((count, i) => i === index ? Math.max(count - 1, 0) : count));
};
  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
  };

  //check user is loggedin or not
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = atob(token.split('.')[1]);
      const userData = JSON.parse(decodedToken);
      setUser(userData);
    }
  }, []);


// Add to cart
// const addToCart = () => {
//   if (!user || !user._id) {
//     console.error('User ID not available');
//     return;
//   }

//   const orderDetails = product.orderDetails.map((caliber, index) => ({
//     size: caliber.size,
//     quantity: count[index],
//   }));

//   const cartItem = {
//     product: product._id,
//     user: user._id,
//     orderDetails: orderDetails
//   };

//   // Retrieve existing cart data from local storage
//   const existingCartData = JSON.parse(localStorage.getItem('cartData')) || [];

//   // Add the new item to the cart
//   existingCartData.push(cartItem);

//   // Update local storage with the modified cart data
//   localStorage.setItem('cartData', JSON.stringify(existingCartData));

//   console.log('Product added to local cart:', cartItem);
// };


// console.log(user)

  const addToCart = async () => {
    if (!user || !user._id) {
      console.error('User ID not available');
      return;
    }

    const apiUrl = 'https://gray-ill-viper.cyclic.app/alibaba/addtocart';
    const orderDetails = product.orderDetails.map((caliber, index) => ({
      size: caliber.size,
      quantity: count[index],
      
    }));
    const requestData = {
      product: product._id,
      user: user._id,
      orderDetails: orderDetails
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Product added to cart:', responseData);
      } else {
        console.error('Error adding product to cart:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <Navbar2 />
      {product &&  (
      <div className='flex justify-center xl:px-16'>
        {/* left side */}
        <div className='w-[28%]'>
        
          <div className="flex flex-col">
          
            <div className='p-3 ml-4 rounded-lg bg-gray-100'>
              <img
                src={product.images[currentImage]}
                alt={`Main Image`}
                className="max-w-full h-[350px]  w-[350px]"
              />
            </div>
            
            <h1 className='text-[14px] py-4 text-center'>View Larger Images</h1>
            <div className="flex flex-row space-x-1 ">
              {product.images.map((image, index) => (
                <div className='bg-gray-200 border'>
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className={`cursor-pointer h-[60px]  w-[58px] ${index === currentImage ? 'border-2 border-black' : ''}`}
                    onClick={() => handleThumbnailClick(index)}
                  />
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
        {/* center */}
        <div className='w-1/2 pl-8 '>
          <h1 className='text-[14px] flex mt-4'>
            <span className='bg-gradient-to-r from-red-600 to-yellow-300 text-white px-2 py-0.5 '>Ready to ship</span>
            <span className='bg-red-100 flex justify-center items-center text-red-500 px-2 py-0.5'><AiOutlineCheckCircle className='mr-1' />In stock</span>
            <span className='bg-red-100 flex justify-center items-center  text-red-500 px-2 py-0.5'><AiOutlineCheckCircle className='mr-1' />Fast Dispatch</span>
          </h1>
          <h1 className='text-[16px] font-semibold py-2'>{product.title}</h1>
          <p className='text-[14px] mb-2 underline'><span className=''>{product.buyers} Buyers</span></p>
          <div className='flex items-center mb-2 border-b pb-6'>
            <img className='h-[18px] w-[18px]' src='https://s.alicdn.com/@img/imgextra/i3/O1CN01aRlJV61yF2Ezy532h_!!6000000006548-2-tps-54-54.png' alt='sdfsdf' />
            <p>#1 Hot Selling in <span className='underline'>Lens Cap</span></p>
          </div>
          {/* price */}
          <div className='flex border-b'>
            <div className='w-1/4 flex flex-col'>
              <p className='text-[14px] text-gray-500 my-2'>{ product.priceOfPieces[0].pieces}-499 pieces</p>
              <h1 className='text-[18px] mb-2 font-bold text-orange-500'>
  {product && product.priceOfPieces && product.priceOfPieces[0] && product.priceOfPieces[0].price
    ? `US$${product.priceOfPieces[0].price}`
    : 'Price Not Available'}
</h1>
            </div>
            <div className='w-1/4 flex flex-col'>
              <p className='text-[14px] text-gray-500 my-2'>{product.priceOfPieces[1].pieces}-1000 pieces</p>
              <h1 className='text-[18px] mb-2 font-bold text-orange-500'>
  {product && product.priceOfPieces && product.priceOfPieces[1] && product.priceOfPieces[1].price
    ? `US$${product.priceOfPieces[1].price}`
    : 'Price Not Available'}
</h1>
            </div>
            <div className='w-1/4 flex flex-col'>
            <p className='text-[14px] text-gray-500 my-2'>{product.priceOfPieces[1].pieces}-1000 pieces</p>
<h1 className='text-[18px] mb-2 font-bold text-orange-500'>
  {product && product.priceOfPieces && product.priceOfPieces[1] && product.priceOfPieces[1].price
    ? `US$${product.priceOfPieces[1].price}`
    : 'Price Not Available'}
</h1>
            </div>
          </div>
          {/* Benefits */}
          <div className='flex items-center my-2'>
            <h1 className='text-[14px] text-gray-500 my-2 w-1/4' >Benefits:</h1>
            <p className='w-1/2 '>Quick refunds on orders under US $1,000</p>
            <button className='w-1/4 underline text-blue-500'>Clain Now</button>
          </div>
          {/* Colors */}
          <div className='flex items-center my-2'>
  <h1 className='text-[14px] text-gray-500 my-2 w-1/4'>Color:</h1>
  {product.color.map((color, index) => (
    <div
      key={index}
      className={`h-10 w-10 mr-2 ${index === 1 ? 'border border-black' : ''}`}
      style={{ background: color }}
    ></div>
  ))}
</div>
          {/* Quantities and Sizes  */}
{product.orderDetails.map((caliber, index) => (
  <div className='flex items-center my-2' key={caliber._id}>
    {index === 0 && 1 ? (
      <h1 className='text-[14px] text-gray-500 my-2 w-1/4'>Calibers:</h1>
    ):(
      <h1 className='text-[14px] text-gray-500 my-2 w-1/4'></h1>
    )}
    <div className='w-1/2 flex justify-between self-center px-2 text-[14px] text-gray-500'>
      <p>{caliber.size}</p>
      <p>${caliber.price}</p>
    </div>
    <div className='flex w-1/4 space-x-1 justify-end px-2'>
      <p className='px-3 py-1 cursor-pointer border hover:border-black' onClick={() => handleDecrement(index)}>-</p>
      <p className='px-3 py-1 border'>{count[index]}</p>
      <p className='px-3 py-1 cursor-pointer border hover:border-black' onClick={() => handleIncrement(index)}>+</p>
    </div>
  </div>
))}


          <div className='flex justify-center text-center w-1/2'>
            <button className='text-blue-500 hover:text-blue-600'>View all Options </button>
          </div>
          {/* Quantities and Sizes end */}
          {/* samples */}
          <div className='flex items-center my-2'>
            <h1 className='text-[14px] text-gray-500 my-2 w-1/4'>Samples</h1>
            <div className='flex item-center px-2'>
            {product.color[0] === 'black' && 
            <div className={`h-8 w-8 bg-black mr-2`}></div>
          }
              
              <h1 className='text-[14px] ml-2 flex items-center text-gray-500'>96mm</h1>
            </div>
          </div>
          <div className='flex justify-center items-center px-2'>
            <h1 className='text-[14px] font-bold px-2 border-r'>US${product.priceOfPieces[0].price}/piece</h1>
            <p className='text-[14px]'>Min .Order: {product.priceOfPieces[0].pieces} Piece</p>
            <button className='text-blue-500 hover:text-blue-600 text-[14px] ml-1'> Get Samples</button>

          </div>

          {/* Lead Time */}
          <div className='flex items-center my-2'>
            <h1 className='text-[14px] text-gray-500 my-2 w-1/4' >Lead Time:</h1>
            <div className='flex px-2 text-center w-3/4'>
              <table className='bg-white border border-gray-300'>
                <tbody>
                  <tr>
                    <td className="py-1 px-2 border-b border-r text-[ 14px]">Quantity Pieces</td>
                    <td className="py-1 px-2 border-b border-r text-[ 14px]">{product.leadTime[0].quantity}</td>
                    <td className="py-1 px-2 border-b border-r text-[ 14px] truncate">{product.leadTime[1].quantity}-500</td>
                    <td className="py-1 px-2 border-b border-r text-[ 14px]">{product.mediumOrder}-1000</td>
                    <td className="py-1 px-2 border-b border-r text-[ 14px] flex items-center"><AiOutlineRight className='text-[12px]' />{product.largerOrder}</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2 border-b border-r text-[14px]">Lead Time </td>
                    <td className="py-1 px-2 border-b border-r text-[14px]">{product.leadTime[0].leadTimedays}days</td>
                    <td className="py-1 px-2 border-b border-r text-[14px]">{product.leadTime[1].leadTimedays}days</td>
                    <td className="py-1 px-2 border-b border-r text-[14px]">20days</td>
                    <td className="py-1 px-2 border-b border-r text-[14px]">To be Negotiated</td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>

          {/* Customization */}
          <div className='flex items-center mt-3  pb-6 border-b'>
            <h1 className='text-[14px] text-gray-500 my-2 w-1/4' >Customization:</h1>
            <div className='w-1/2 flex flex-col px-2'>
              <h1 className='text-[14px] flex items-center truncate'>Customized Logo <span className='text-gray-500 truncate ml-1'>Min Order {product.priceOfPieces[1].pieces} pieces</span></h1>
              <h1 className='text-[14px] flex items-center truncate'>Customized Packaging  <span className='text-gray-500 ml-1 truncate'>Min Order {product.priceOfPieces[1].pieces} pieces</span></h1>
              <h1 className='text-[14px] flex items-center truncate'>Graphic Customization <span className='text-gray-500 ml-1 truncate'>Min Order {product.priceOfPieces[1].pieces} pieces</span></h1>

            </div>
          </div>

        </div>
        {/* right */}
        <div className='w-[20%] '>
          <div className='p-3 shadow rounded-lg ml-4 h-fit'>
          <h1 className='text-[12px] text-gray-500 mt-2'>The minimum order quantity is {product.priceOfPieces[0].pieces} pieces</h1>
          <div className='flex justify-between text-[14px]'>
            <h1 className='text-gray-700'>0/{product.MinOrder}</h1>
            <h1 className='text-gray-700'>from <span className='text-[16px] text-black font-bold'>${product.priceOfPieces[0].price}</span></h1>
          </div>
          <h1 className='flex items-center text-[14px] text-gray-700 justify-end border-b pb-4'>Lead Time {product.leadTime[0].leadTimedays} Days<AiOutlineInfoCircle className='ml-1' /></h1>
          <div className='flex justify-between pt-2'>
            <h1 className='text-[14px] text-gray-700'>Shipping</h1>
            <h1 className='text-gray-700'>from <span className='text-[16px] text-black font-bold'>${product.shippingCharges}</span></h1>
          </div>
          <h1 className='text-[14px] text-center text-gray-700'>Seller's Shipped Method 1 <span className='text-[14px] text-blue-500' >Change</span></h1>
          <h1 className='text-gray-700 flex justify-center text-[14px] '>Estimated delivery <span className='font-bold flex items-center'>11/17-12-18 <AiOutlineInfoCircle className='ml-1' /></span></h1>

          <button className='w-full py-1 bg-orange-500 mt-3 rounded-full text-[14px] text-white'>Start Order</button>
          <button className='w-full py-1 border border-orange-500 mt-3 rounded-full text-[14px] flex justify-center items-center text-orange-500'><AiOutlineMail className='mr-1 text-[16px]' />Contact Supplier</button>
          <button className='w-full py-1 border border-orange-500 mt-3 rounded-full text-[14px] flex justify-center items-center text-orange-500'><BsTelephone className='mr-1 text-[16px]' />Call Us</button>

          <Link to='/cart'><button className='flex w-full mt-3 justify-center items-center text-[14px] ' onClick={addToCart}><BsCartPlus className='mr-1 text-[16px]' /> Add to cart</button></Link>
          </div>
<div className='p-3 mt-3 shadow rounded-lg ml-4 h-fit'>
<h1 className=' text-[14px] font-bold overflow-hidden  max-w-full'>
        {/* {product.sellerCompany.length > 20 ? `${product.sellerCompany.slice(0, 25)}...` : product.sellerCompany} */}
      </h1>
      <p className='text-gray-700 text-[14px]'>Manufacture</p>
      <div className='flex items-center text-[12px] '>
        <img src='https://u.alicdn.com/mobile/g/common/flags/1.0.0/assets/cn.png' className='w-[20px] h-[14px] mr-1' alt='fleg' />
        <p>CN</p>
        <p>9<sup className="text-superscript">YR</sup></p>
      </div>
      <div className='flex mt-3 justify-between'>
        <div>
          <h1 className='text-gray-500 text-[13px]'>Response Time</h1>
          <p className='flex items-center text-[16px] text-gray-500 font-bold'><LiaLessThanEqualSolid className=''/>5h</p>
        </div>
        <div>
        <h1 className='text-gray-500 text-[13px]'>Ontime Delivery</h1>
          <p className='text-gray-500 text-[16px] font-bold'>90.5%</p>
        </div>
      </div>
      <div className='mt-3 text-gray-500'>
        <p className='text-[13px]'>39 Transections</p>
        <p className='text-[16px] font-bold'>60,000+</p>
      </div>

</div>




        </div>
      </div>
      )}
      <Footer/>
      <SubFooter/>
    </>
  )
}

export default ProductDetailPage