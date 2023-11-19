import React, { useEffect, useState } from 'react'
import SellerAdminNav from '../../Components/SellerAdminComponents/SellerAdminNav'
import { FaBars, FaUsers } from 'react-icons/fa';
import { RiMenuLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import '../../App.css'
import SellerAddProductForm from '../../Components/SellerAdminComponents/SellerAddProductForm';
const SellerDashboard = () => {
    const [isOpen, setIsOpen] = useState(window.innerWidth > 768);
    const [selectedPage, setSelectedPage] = useState('Home');
    const [productDropdown, setProductDropdown] = useState(false)
    const [orderDropdown, setOrderDropdown] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsOpen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleProductDropdown =()=>{
        setProductDropdown(!productDropdown)
    }
const handleOrderDropdown = ()=>{
    setOrderDropdown(!orderDropdown)
}

    const handleLinkClick = (page) => {
        setSelectedPage(page);
        if (window.innerWidth <= 768) {
            setIsOpen(false);
        }
    };
    const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    let content;

    if (selectedPage === 'Home') {
        content = (
            <h1>dashboard</h1>
        );
    }else if (selectedPage === 'allProducts') {
        content = (
            <h1>Products</h1>
        );
    }else if (selectedPage === 'addProducts') {
        content = (
            <SellerAddProductForm/>
        );
    }else if (selectedPage === 'allOrders') {
        content = (
            <h1>All Orders</h1>
        );
    }else if (selectedPage === 'pendingOrders') {
        content = (
            <h1>PendingOrders</h1>
        );
    }
    return (
        <>
            <SellerAdminNav />
            <div className={`h-screen flex overflow-y-auto`}>
            {isOpen && (
                <div className={`sm:w-2/6 md:w-1/5 w-1/2 overflow-y-auto scrollbar bg-white border-r  border-gray-200 `}>
                    <div className=" bg-slate-900 h-full">

                        {/* <div className="flex items-center  h-12">
                            <button
                                // onClick={toggleSidebar} 
                                className="md:hidd text-gray-600">
                                <FaBars size={20} className='text-black ml-2 mr-6' />
                            </button>
                            <span className="text-xl font-medium self-center text-black uppercase"><span className='text-2xl font-bold'>A</span>store<span className='text-green-700 text-3xl'>.</span></span>
                        </div> */}

                        <ul className="">
                            <li className="mb-2">
                                <button
                                    onClick={() => handleLinkClick('Home')}
                                    className={`flex items-center py-2 w-full hover:bg-gray-800 ${selectedPage === 'Home' ? 'text-white bg-gray-800' : 'text-gray-400'}`}
                                >
                                    <span className="ml-2 flex text-xl  self-center "><RxDashboard size={20} className='mt-1 mr-6' />Dashboard</span>
                                </button>
                            </li>
                            <li className="mb-2">
                <button
                  onClick={handleProductDropdown}
                  className={`flex items-center py-2 w-full hover:bg-gray-800 ${productDropdown  ? 'text-white bg-gray-800' : 'text-gray-400'}`}
                >
                    <FaUsers size={20} className='mt-1 ml-3 mr-3' />
                  <span className="ml-2 flex text-xl w-full justify-between">Products {productDropdown  ? (<AiOutlineDown className='mt-2 text-sm mr-4'/>):(<AiOutlineRight className='mt-2 text-sm mr-4'/>) }</span>
                </button>
              </li>
                           {/*product dropdown items  */}
                          
                           <div className={`overflow-hidden transition-all transform duration-300 ${productDropdown ? '-translate-x-0' : 'translate-x-full'}`}>
  {productDropdown && (
    <>
      <li className="mb-2">
        <button
          onClick={() => handleLinkClick('allProducts')}
          className={`flex items-center py-2 w-full hover:bg-gray-800 ${selectedPage === 'allProducts' ? 'text-white bg-gray-800' : 'text-gray-400'}`}
        >
          <span className="flex text-xl self-center ml-6">All Products</span>
        </button>
      </li>
      <li className="mb-2">
        <button
          onClick={() => handleLinkClick('addProducts')}
          className={`flex items-center py-2 w-full hover:bg-gray-800 ${selectedPage === 'addProducts' ? 'text-white bg-gray-800' : 'text-gray-400'}`}
        >
          <span className="flex text-xl self-center ml-6">Add New Product</span>
        </button>
      </li>
    </>
  )}
</div>

              

                <li className="mb-2">
                <button
                  onClick={handleOrderDropdown}
                  className={`flex items-center py-2 w-full hover:bg-gray-800 ${orderDropdown  ? 'text-white bg-gray-800' : 'text-gray-400'}`}
                >
                    <FaUsers size={20} className='mt-1 ml-3 mr-3' />
                  <span className="ml-2 flex text-xl w-full justify-between">Orderss {orderDropdown  ? (<AiOutlineDown className='mt-2 text-sm mr-4'/>):(<AiOutlineRight className='mt-2 text-sm mr-4'/>) }</span>
                </button>
              </li>
              {/* order dropdown items */}
              <div className={`overflow-hidden transition-all transform duration-300 ${orderDropdown? 'translate-x-0' : 'translate-x-full'}`}>
              {orderDropdown && ( <>
 <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('allOrders')}
                  className={`flex items-center py-2 w-full hover:bg-gray-800 ${selectedPage === 'allOrders' ? 'text-white bg-gray-800' : 'text-gray-400'}`}
                >
                  <span className=" flex text-xl  self-center ml-6">All Orders</span>
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleLinkClick('pendingOrders')}
                  className={`flex items-center py-2 w-full hover:bg-gray-800 ${selectedPage === 'pendingOrders' ? 'text-white bg-gray-800' : 'text-gray-400'}`}
                >
                  <span className=" flex text-xl  self-center ml-6">Pending Orders</span>
                </button>
              </li> 
            
              </>  )} 
                </div>
                            
                        </ul>
                    </div>

                </div>

            )}
              <div className="flex-1 overflow-x-hidden overflow-y-auto p-">
        
        {content}
      </div>
      {!isOpen && (
        <button 
        onClick={toggleSidebar}
         className="md:h fixed top-4 left-4 mt-2   bg-transparent p-2 rounded-full">
          <RiMenuLine size={30} />
        </button>
      )}
            </div>
          
        </>
    )
}

export default SellerDashboard