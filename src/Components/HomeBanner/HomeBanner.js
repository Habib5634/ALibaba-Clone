import React from 'react'
import Navbar from '../Navbar/Navbar'
import SubNav from '../SubNav/SubNav'

const HomeBanner = () => {
  return (
    <div className="bg-cover  bg-center h-[90vh] flex  flex-col items-center w-full" style={{ backgroundImage: 'url("https://s.alicdn.com/@img/imgextra/i1/O1CN019pxhXm26Fy2GEGlVO_!!6000000007633-0-tps-3840-1320.jpg")' }}>
      <div className="w-full">
        <Navbar/>
        <SubNav/>
      </div>
    </div>
  )
}

export default HomeBanner

// import React, { useState, useEffect } from 'react';
// import Navbar from '../Navbar/Navbar';

// const HomeBanner = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`bg-cover bg-center h-[90vh] flex flex-col items-center w-full ${isScrolled ? 'bg-white' : ''}`} style={{ backgroundImage: 'url("https://s.alicdn.com/@img/imgextra/i1/O1CN019pxhXm26Fy2GEGlVO_!!6000000007633-0-tps-3840-1320.jpg")' }}>
//       <div className="w-full">
//         <Navbar />
//       </div>
//     </div>
//   );
// };

// export default HomeBanner;