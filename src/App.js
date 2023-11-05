
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from './Pages/HomePage/HomePage';
import ConsumerElectronicsCategory from './Pages/CategoryPages/ConsumerElectronicsCategory/ConsumerElectronicsCategory';
import ProductDetailPage from './Pages/CategoryPages/ProductDetailPage/ProductDetailPage';
import CatagoryDetailPage from './Pages/CategoryPages/CatagoryDetailPage/CatagoryDetailPage';

function App() {
  return (
    <>
<ToastContainer />
<Routes>
<Route path='/' element={<HomePage/>}/>
{/* CategoryRoutes */}
<Route path='/consumer-electronics' element={<ConsumerElectronicsCategory/>}/>


{/* Product detail page route */}
<Route path='/product-detail-page/:id' exact element={<ProductDetailPage/>}/>
<Route path='/catagory-detail-page/:id' exact element={<CatagoryDetailPage/>}/>

</Routes>
    
    </>
  );
}

export default App;
