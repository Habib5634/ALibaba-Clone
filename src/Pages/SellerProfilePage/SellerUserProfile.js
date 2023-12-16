import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import SellerProfileNav from '../../Components/SellingComponents/SellerProfileNav';
import SellerHeader from '../../Components/SellingComponents/SellerHeader';
import SellerBanner from '../../Components/SellingComponents/SellerBanner';
import Footer from '../../Components/Footer/Footer';
import SubFooter from '../../Components/Footer/SubFooter';


const SellerUserProfile = () => {
    const { addedby } = useParams();
    const [sellers, setSellers] = useState([]);
    const [userProducts, setUserProducts] = useState([]);
    useEffect(() => {
      const fetchAllSellers = async () => {
        try {
          const response = await fetch('http://localhost:5000/alibaba/getalluserseller');
          if (response.ok) {
            const data = await response.json();
            // Filter the sellers based on the condition logUser === addedby
            const filteredSellers = data.sellers.filter((seller) => seller.logUser === addedby);
            setSellers(filteredSellers);
            // console.log(filteredSellers)
            
          } else {
            console.error('Error fetching sellers:', response.status);
          }
        } catch (error) {
          console.error('Error fetching sellers:', error);
        }
      };
  
      fetchAllSellers();
    }, [addedby]);

    useEffect(() => {
      const fetchAllProducts = async () => {
        try {
          const response = await fetch('http://localhost:5000/alibaba/usergetall');
          if (response.ok) {
            const data = await response.json();
            // Filter products based on the addedby field
            const filteredProducts = data.products.filter(product => product.addedby === addedby);
            setUserProducts(filteredProducts);
            // console.log(filteredProducts)
          } else {
            console.error('Error fetching products:', response.status);
          }
        } catch (error) {
          console.error('Error fetching products:', error.message);
        }
      };
  
      fetchAllProducts();
    }, [addedby]);
  return (
    <div>
      <SellerProfileNav/>
      
    {sellers.length > 0 ? (
      <div>
       
          {sellers.map((seller) => (
            <div key={seller._id}>
        <SellerHeader company={seller.companyName} phone={seller.phoneNo} email={seller.email}/>
        <SellerBanner/>

            </div>
          ))}
       
      </div>
    ) : (
      <p>No sellers found for the user {addedby}.</p>
    )}
   

   <div className='flex flex-wrap justify-center bg-gray-100 xl:px-28 2xl:px-24 pt-5 overflow-hidden'>

{userProducts.map((item) => (
  <div key={item._id} className='px-2 w-1/3 '>
    <div

      className="flex bg-white flex-col justify-center pb-3   rounded-md  items-center mb-4"
    >
      <Link to={`/product-detail-page/${item._id}`}>
        <img
          src={item.images[0]}
          alt="Image"
          className="object-cover w-[230px] h-[230px]"
        />
      </Link>

      <h1 className='self-start mt-6 font-normal px-3 text-[14px] overflow-hidden capitalize  max-w-full'>
        {item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}
      </h1>
      <span className='self-start flex'>
        <p className='text-[16px] font-bold pr-2 mt-0.5 px-3'> ${item.priceOfPieces[0].price}  - ${item.priceOfPieces[1].price}</p>
      </span>
      <p className='self-start px-3 text-[14px] font-normal'>Min, Order:{item.priceOfPieces[0].pieces} Pieces</p>
    </div>
  </div>
))}
</div>
<Footer/>
<SubFooter/>
  </div>
  )
}

export default SellerUserProfile