import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import data from '../ProductsData/Data'
import Navbar2 from '../../../Components/Navbar/Navbar2';
import { AiOutlineCheckCircle, AiOutlineRight, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai'
import { BsCartPlus, BsTelephone } from 'react-icons/bs'
import { LiaLessThanEqualSolid} from 'react-icons/lia'


const getProductById = (id) => {
  // Assuming products is an array of products
  return data.find(product => product.id === parseInt(id));
};
const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [currentImage, setCurrentImage] = useState(0);
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <>
      <Navbar2 />
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
          <p className='text-[14px] mb-2 underline'><span className=''>{product.buyer} Buyers</span></p>
          <div className='flex items-center mb-2 border-b pb-6'>
            <img className='h-[18px] w-[18px]' src='https://s.alicdn.com/@img/imgextra/i3/O1CN01aRlJV61yF2Ezy532h_!!6000000006548-2-tps-54-54.png' alt='sdfsdf' />
            <p>#1 Hot Selling in <span className='underline'>Lens Cap</span></p>
          </div>
          {/* price */}
          <div className='flex border-b'>
            <div className='w-1/4 flex flex-col'>
              <p className='text-[14px] text-gray-500 my-2'>{product.MinOrder}-499 pieces</p>
              <h1 className='text-[18px] mb-2 font-bold text-orange-500'>US${product.minOrderPrice}</h1>
            </div>
            <div className='w-1/4 flex flex-col'>
              <p className='text-[14px] text-gray-500 my-2'>{product.mediumOrder}-1000 pieces</p>
              <h1 className='text-[18px] mb-2 font-bold '>US${product.mediumOrderPrice}</h1>
            </div>
            <div className='w-1/4 flex flex-col'>
              <p className='text-[14px] flex items-center text-gray-500 my-2'><AiOutlineRight className='text-[12px]' />={product.largerOrder}</p>
              <h1 className='text-[18px] mb-2 font-bold '>US${product.minOrderPrice}</h1>
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
            <h1 className='text-[14px] text-gray-500 my-2 w-1/4' >Color:</h1>
            <div className='h-10 w-10 bg-black'></div>
          </div>
          {/* Quantities and Sizes  */}
          <div className='flex items-center my-2'>
            <h1 className='text-[14px] text-gray-500 my-2 w-1/4' >Calibers:</h1>
            <div className='w-1/2 flex justify-between px-2 text-[14px] text-gray-500'>
              <p>32mm</p>
              <p>$0.25</p>
            </div>
            <div className='flex w-1/4 space-x-1 px-2'>
              <p className='px-3 py-1 cursor-pointer border hover:border-black' onClick={handleDecrement}>-</p>
              <p className='px-3 py-1 border'>{count}</p>
              <p className='px-3 py-1 cursor-pointer border hover:border-black' onClick={handleIncrement}>+</p>
            </div>
          </div>
          <div className='flex items-center justify-end my-2'>

            <div className='w-1/2 flex self-center justify-between px-2 text-[14px] text-gray-500'>
              <p>32mm</p>
              <p>$0.25</p>
            </div>
            <div className='flex w-1/4 self-end space-x-1 px-2'>
              <p className='px-3 py-1 cursor-pointer border hover:border-black' onClick={handleDecrement}>-</p>
              <p className='px-3 py-1 border'>{count}</p>
              <p className='px-3 py-1 cursor-pointer border hover:border-black' onClick={handleIncrement}>+</p>
            </div>
          </div>
          <div className='flex items-center justify-end my-2'>

            <div className='w-1/2 flex self-center justify-between px-2 text-[14px] text-gray-500'>
              <p>32mm</p>
              <p>$0.25</p>
            </div>
            <div className='flex w-1/4 self-end space-x-1 px-2'>
              <p className='px-3 py-1 cursor-pointer border hover:border-black' onClick={handleDecrement}>-</p>
              <p className='px-3 py-1 border'>{count}</p>
              <p className='px-3 py-1 cursor-pointer border hover:border-black' onClick={handleIncrement}>+</p>
            </div>
          </div>
          <div className='flex justify-center text-center w-1/2'>
            <button className='text-blue-500 hover:text-blue-600'>View all Options </button>
          </div>
          {/* Quantities and Sizes end */}
          {/* samples */}
          <div className='flex items-center my-2'>
            <h1 className='text-[14px] text-gray-500 my-2 w-1/4'>Samples</h1>
            <div className='flex item-center px-2'>
              <div className='h-8 w-8 rounded-md bg-black'></div><h1 className='text-[14px] ml-2 text-gray-500'>96mm</h1>
            </div>
          </div>
          <div className='flex justify-center items-center px-2'>
            <h1 className='text-[14px] font-bold px-2 border-r'>US${product.minOrderPrice}/piece</h1>
            <p className='text-[14px]'>Min .Order: {product.MinOrder} Piece</p>
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
                    <td className="py-1 px-2 border-b border-r text-[ 14px]">1-5</td>
                    <td className="py-1 px-2 border-b border-r text-[ 14px]">{product.MinOrder}-500</td>
                    <td className="py-1 px-2 border-b border-r text-[ 14px]">{product.mediumOrder}-1000</td>
                    <td className="py-1 px-2 border-b border-r text-[ 14px] flex items-center"><AiOutlineRight className='text-[12px]' />{product.largerOrder}</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2 border-b border-r text-[14px]">Lead Time </td>
                    <td className="py-1 px-2 border-b border-r text-[14px]">7days</td>
                    <td className="py-1 px-2 border-b border-r text-[14px]">10days</td>
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
              <h1 className='text-[14px] flex items-center'>Customized Logo <span className='text-gray-500'>Min Order {product.customizedLogoOrders} pieces</span></h1>
              <h1 className='text-[14px] flex items-center'>Customized Packaging  <span className='text-gray-500'>Min Order {product.customizedLogoOrders} pieces</span></h1>
              <h1 className='text-[14px] flex items-center'>Graphic Customization <span className='text-gray-500'>Min Order {product.customizedLogoOrders} pieces</span></h1>

            </div>
          </div>

        </div>
        {/* right */}
        <div className='w-[20%] '>
          <div className='p-3 shadow rounded-lg ml-4 h-fit'>
          <h1 className='text-[12px] text-gray-500 mt-2'>The minimum order quantity is {product.MinOrder} pieces</h1>
          <div className='flex justify-between text-[14px]'>
            <h1 className='text-gray-700'>0/{product.MinOrder}</h1>
            <h1 className='text-gray-700'>from <span className='text-[16px] text-black font-bold'>${product.minOrderPrice}</span></h1>
          </div>
          <h1 className='flex items-center text-[14px] text-gray-700 justify-end border-b pb-4'>Lead Time 7 Days<AiOutlineInfoCircle className='ml-1' /></h1>
          <div className='flex justify-between pt-2'>
            <h1 className='text-[14px] text-gray-700'>Shipping</h1>
            <h1 className='text-gray-700'>from <span className='text-[16px] text-black font-bold'>${product.shippingCharges}</span></h1>
          </div>
          <h1 className='text-[14px] text-center text-gray-700'>Seller's Shipped Method 1 <span className='text-[14px] text-blue-500' >Change</span></h1>
          <h1 className='text-gray-700 flex justify-center text-[14px] '>Estimated delivery <span className='font-bold flex items-center'>11/17-12-18 <AiOutlineInfoCircle className='ml-1' /></span></h1>

          <button className='w-full py-1 bg-orange-500 mt-3 rounded-full text-[14px] text-white'>Start Order</button>
          <button className='w-full py-1 border border-orange-500 mt-3 rounded-full text-[14px] flex justify-center items-center text-orange-500'><AiOutlineMail className='mr-1 text-[16px]' />Contact Supplier</button>
          <button className='w-full py-1 border border-orange-500 mt-3 rounded-full text-[14px] flex justify-center items-center text-orange-500'><BsTelephone className='mr-1 text-[16px]' />Call Us</button>

          <button className='flex w-full mt-3 justify-center items-center text-[14px]'><BsCartPlus className='mr-1 text-[16px]' /> Add to cart</button>
          </div>
<div className='p-3 mt-3 shadow rounded-lg ml-4 h-fit'>
<h1 className=' text-[14px] font-bold overflow-hidden  max-w-full'>
        {product.sellerCompany.length > 20 ? `${product.sellerCompany.slice(0, 25)}...` : product.sellerCompany}
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
    </>
  )
}

export default ProductDetailPage