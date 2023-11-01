
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from './Pages/HomePage/HomePage';
import ConsumerElectronicsCategory from './Pages/CategoryPages/ConsumerElectronicsCategory/ConsumerElectronicsCategory';

function App() {
  return (
    <>
<ToastContainer />
<Routes>
<Route path='/' element={<HomePage/>}/>
{/* CategoryRoutes */}
<Route path='/consumer-electronics' element={<ConsumerElectronicsCategory/>}/>

</Routes>
    
    </>
  );
}

export default App;
