import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronsRight, BiChevronsLeft } from "react-icons/bi"

const PersonalizeYourTrading = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderRef = useRef(null);
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
  
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    const servicesData = [
      {
        id: 1,
        name: 'Eva Jane',
        img: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01XrvnBG1YDUxJ0l5Bh_!!6000000003025-2-tps-352-352.png_350x350.jpg',
        role: 'Founder of Eva Jane Beauty',
        desc: '“As an entrepreneur who is deeply involved in the Beauty industry, I have been very devoted to creating my original products. Alibaba.com has been my trusted partner in this process.”',
      },
      {
        id: 2,
        name: 'Rone Williams and Tonja Williams',
        img: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01cBGvqy1R9eJnhkpv5_!!6000000002069-2-tps-352-352.png_350x350.jpg',
        role: 'Founder and CEO (respectively) of ROne Williams Fittness',
        desc: '“Alibaba.com is a game changer for small businesses like us. We were able to find the exact product we needed and I don’t think we could have sourced anything without Alibaba.com.”',
      },
      {
        id: 3,
        name: 'Dr. Sayed Ibrahim',
        img: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01wllRR11a9Uiq6syoP_!!6000000003287-2-tps-352-352.png_350x350.jpg',
        role: 'Founder of SuprineJene',
        desc: '“Once I discovered Alibaba.com, I was amazed at how many options I had with suppliers from all over the world.”',
  
      },
    
      
    ];
  
    const nextSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
        setCurrentSlide((prev) => prev + 1);
      }
    };
  
    const prevSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev();
        setCurrentSlide((prev) => prev - 1);
      }
    };
  return (
    <div className='bg-[#f7f2f0] py-20 px-14'>
        <h1 className='text-amber-950 text-6xl text-center font-semibold mb-6'>Personalize your trading experience with curated benefits</h1>
        <p className='text-gray-500 mb-10 text-lg text-center'>Grow and succeed with curated benefits offered by Alibaba.com, whether you are a startup business needing the essentials to start sourcing or a well-established enterprise looking for tools and services for more complex orders.</p>

        <div className=''>
     
      <div className='flex sm:flex-row flex-col justify-between'>
        

        
          <BiChevronsLeft onClick={prevSlide} className=' absolute left-14 mt-32 z-10  cursor-pointer text-5xl sm:text-6xl md:text-7xl  border rounded-full   hover:bg-gray-200 p-2 sm:p-5 md:p-6 transition-colors duration-300 mr-2' />
          <BiChevronsRight onClick={nextSlide} className=' absolute right-14 mt-32 z-10 cursor-pointer text-5xl sm:text-6xl md:text-7xl  border rounded-full   hover:bg-gray-200 p-2 sm:p-5 md:p-6 transition-colors duration-300' />


        
      </div>
      <Slider ref={sliderRef} {...settings} className='space-x-2  '>
        {servicesData.map(service => (
          <div key={service.id} className='relative flex bg-white rounded-xl'  >
            <div className='flex flex-row justify-center items-center p-20' >
            
           <img src={service.img} alt='image' className='h-40 w-auto'/>
          
           <div className='flex ml-6 flex-col w-1/2'>
            <h1 className='text-2xl'>{service.name}</h1>
            <p className='text-gray-500 mt-3'>{service.role}</p>
           </div>
           
           <p className='text-black text-center  font-semibold w-fit ml-20 text-xl'>{service.desc}</p>
           </div>
          </div>
        ))}
      </Slider>
    </div>


    </div>
  )
}

export default PersonalizeYourTrading