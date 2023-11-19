
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from './Pages/HomePage/HomePage';

import CatagoryDetailPage from './Pages/CategoryPages/CatagoryDetailPage/CatagoryDetailPage';
import Cart from './Pages/Cart/Cart';
import ProductDetailPage from './Pages/ProductDetailPage/ProductDetailPage';
import BuyNow from './Pages/BuyNow/BuyNow';
import Selling from './Pages/Selling/Selling';
import SellerDashboard from './Pages/Selling/SellerDashboard';


function App() {
  return (
    <>
    
<ToastContainer />
<Routes>
<Route path='/' element={<HomePage/>}/>
{/* CategoryRoutes */}



{/* Product detail page route */}
<Route path='/product-detail-page/:id' exact element={<ProductDetailPage/>}/>
<Route path='/catagory-detail-page/:id' exact element={<CatagoryDetailPage/>}/>
<Route path='/cart' exact element={<Cart/>}/>
<Route path='/buy-now/:id' exact element={<BuyNow/>}/>
<Route path='/Start-selling' exact element={<Selling/>}/>
<Route path='/seller-dashboard' exact element={<SellerDashboard/>}/>


</Routes>
    
    </>
  );
}

export default App;
