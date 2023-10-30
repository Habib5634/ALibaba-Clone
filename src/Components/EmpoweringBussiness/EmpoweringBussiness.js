import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai"



const EmpoweringBussiness = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderRef = useRef(null);
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 7,
      slidesToScroll: 2,
      initialSlide: 0,
      arrows: false,
  
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    const servicesData = [
      {
        id: 1,
        name: 'Italy',
        img: 'https://img.alicdn.com/tfs/TB1U8_xAeH2gK0jSZJnXXaT1FXa-268-179.jpg_50x50.jpg',
       
      },
      {
        id: 2,
        name: 'USA',
        img: 'https://s.alicdn.com/@img/tfs/TB18omIbIrI8KJjy0FhXXbfnpXa-48-48.png',
      },
      {
        id: 3,
        name: 'Turkey',
        img: 'https://s.alicdn.com/@img/tps/TB1QwGEPFXXXXXUaXXXXXXXXXXX-48-48.png',
  
      },{
        id: 4,
        name: 'Malysia',
        img: 'https://s.alicdn.com/@img/tps/TB1tQC4PFXXXXaOXpXXXXXXXXXX-48-48.png',
  
      },{
        id:5,
        name: 'Korea',
        img: 'https://s.alicdn.com/@img/tps/TB1WVfXPFXXXXXvXpXXXXXXXXXX-48-48.png',
  
      },{
        id: 6,
        name: 'Vietnam',
        img: 'https://s.alicdn.com/@img/tps/TB1fky3PFXXXXcuXpXXXXXXXXXX-48-48.png',
  
      },{
        id: 7,
        name: 'Russia',
        img: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01Sbi1Tm28po6huT3zL_!!6000000007982-2-tps-48-48.png',
  
      },{
        id: 8,
        name: 'Thailand',
        img: 'https://s.alicdn.com/@img/tps/TB1xQi8PFXXXXaRXpXXXXXXXXXX-48-48.png',
  
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
        <div className='py-20 px-14 border-b'>
            <h1 className='text-6xl font-semibold text-amber-950 text-center mb-6' >Empowering businesses through global trade</h1>
            <p className='text-center text-xl px-20 text-gray-500 mb-6' >Alibaba.com offers one-stop B2B trading solutions for global small and medium-sized businesses, empowering them to transform through digital trade, grasp opportunities, and accelerate growth internationally.</p>
            <div className='flex justify-center space-x-10'>
                <div className='w-2/5 relative'>
                    <img src='https://s.alicdn.com/@img/imgextra/i1/O1CN01ZUhAEZ1plFc5piQ6Z_!!6000000005400-0-tps-1408-1200.jpg' alt='image' className='rounded-2xl' />
                    <div className='absolute bottom-10 left-5'>
                    <h1 className='uppercase text-orange-500  '>Our Mission</h1>
                    <h1 className='text-3xl font-medium text-white'>Make it easy to do bussiness anywhere.</h1>
                    </div>
                </div>
                <div className='w-2/5 '>
                    <div className='relative mb-7'>
                    <img src='https://s.alicdn.com/@img/imgextra/i3/O1CN01AuT5oO1CpaMXEBGOd_!!6000000000130-0-tps-1410-646.jpg' alt='image' className='rounded-2xl' />
                        <div className='flex justify-between items-center pl-4 absolute bottom-2 '>
                            <div className='w-3/4 self-end'>
                            <h1 className='uppercase text-orange-500 '>Our Locaction</h1>
                    <h1 className='text-3xl font-medium text-amber-950'>We have teams around the world.</h1>
                            </div>
                            <div className='w-1/4'>
                                <p className='text-sm'>Hangzhou, China Paris, France Munich, Germany Tokyo, Japan Seoul, Korea London, UK New York, US ... and many other locations worldwide</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative '>
                    <img src='https://s.alicdn.com/@img/imgextra/i2/O1CN01KXAelN1CWLiBLU7x9_!!6000000000088-0-tps-1408-490.jpg' alt='image' className='rounded-2xl' />
                    <div className='absolute bottom-10 left-4'>
                    <h1 className='uppercase text-orange-500 '>Our ESG promises</h1>
                    <h1 className='text-3xl font-medium text-white'>Responsible technology, Sustainable Future.</h1>
                    </div>
                    </div>
                </div>
            </div>




            <div className=''>
                <h1 className='text-3xl font-semibold mb-2 mt-10'>Find suppliers by country or region</h1>
     
      <div className='flex sm:flex-row flex-col justify-between'>
        

        
          <AiOutlineLeft onClick={prevSlide} className='absolute left-10 mt-20 z-10  cursor-pointer text-5xl sm:text-6xl md:text-7xl   rounded-full   hover:bg-gray-200 p-2 sm:p-5 md:p-6 transition-colors duration-300 mr-2' />
          <AiOutlineRight onClick={nextSlide} className=' absolute right-10 mt-20 z-10 cursor-pointer text-5xl sm:text-6xl md:text-7xl   rounded-full   hover:bg-gray-200 p-2 sm:p-5 md:p-6 transition-colors duration-300' />


        
      </div>
      <Slider ref={sliderRef} {...settings} className='space-x-2  '>
        {servicesData.map(service => (
          <div key={service.id} className='relative flex bg-white rounded-xl'  >
            <div className='flex flex-col justify-center items-center p-20' >
            <span className='p-4 bg-gray-100 rounded-full w-16 h-16'>
           <img src={service.img} alt='image' className=''/>
           </span>
          <h1>{service.name}</h1>
           
           </div>
          </div>
        ))}
      </Slider>
    </div>



        </div>
    )
}

export default EmpoweringBussiness