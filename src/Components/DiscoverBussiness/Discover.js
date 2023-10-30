import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const Discover = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHover, setIsHover] = useState(false)
    const handleMouseEnter = ()=>{
setIsHover(true)
    }
    const handleMouseLeave = () =>{
        setIsHover(false)
    }
    const sliderRef = useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
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
            title: 'Most Popular',
            desc: 'Shorts',
            img1: 'https://s.alicdn.com/@sc04/kf/Ha14d0de3e19f409a832927168957b302F.jpg_350x350.jpg',
            img2: 'https://s.alicdn.com/@sc04/kf/H64b1f67d44fa4c62a416cb7321cccd61K.jpg_350x350.jpg',
            img3: 'https://s.alicdn.com/@sc04/kf/H64b1f67d44fa4c62a416cb7321cccd61K.jpg_350x350.jpg',
            img4: 'https://s.alicdn.com/@sc04/kf/H6751a882510d486f9bf2bb2478d2631cQ.jpg_350x350.jpg',
        },
        {
            id: 2,
            title: 'Most Popular',
            desc: 'Mens Water proof Jacket',
            img1: 'https://s.alicdn.com/@sc04/kf/Hd9276e9646e1428ba9a922aad34f2017V.jpg_350x350.jpg',
            img2: 'https://s.alicdn.com/@sc04/kf/H804bda7bf8fb4ff5861acb7180a3928d7.jpg_350x350.jpg',
            img3: 'https://s.alicdn.com/@sc04/kf/H9d5bbf2fdba648368c49ad53d29c453b1.jpg_350x350.jpg',
            img4: 'https://s.alicdn.com/@sc04/kf/Hfc1980b6b1764553bbe8f881899f1323g.jpg_350x350.jpg',
        },
        {
            id: 3,
            title: 'Most Popular',
            desc: 'Alloy Smart Watches',
            img1: 'https://s.alicdn.com/@sc04/kf/H269980e7961b4fbfac9408d4e4ca873fm.jpg_350x350.jpg',
            img2: 'https://s.alicdn.com/@sc04/kf/H87900d82d7024b4e83bfb1bb7a67a47cf.jpg_350x350.jpg',
            img3: 'https://s.alicdn.com/@sc04/kf/Hb8d481a0ec2e4779be411159a64d5f3bg.png_350x350.jpg',
            img4: 'https://s.alicdn.com/@sc04/kf/Hfb0bea2b9a584ffead978b39f69d1166M.png_350x350.jpg',

        },
        {
            id: 4,
            title: 'Most Popular',
            desc: 'Glass Mug',
            img1: 'https://s.alicdn.com/@sc04/kf/H8cf13e276da0486e9f28a1c5f4d59111z.jpg_350x350.jpg',
            img2: 'https://s.alicdn.com/@sc04/kf/H02733ec72c8e4476a624ea88210e52f16.jpg_350x350.jpg',
            img3: 'https://s.alicdn.com/@sc04/kf/Hf8fb84416efe4d3d85e2767be65a4592p.jpg_350x350.jpg',
            img4: 'https://s.alicdn.com/@sc04/kf/H82bbfb68dd3b43e7aeb3b8f47d4dfad07.jpg_350x350.jpg',

        },
        {
            id: 5,
            title: 'Most Popular',
            desc: 'Soccer Wear For Men',
            img1: 'https://s.alicdn.com/@sc04/kf/H66d9147aaab647788133d09c38caa951K.jpg_350x350.jpg',
            img2: 'https://s.alicdn.com/@sc04/kf/He06faacfbc5049d99052071a06d93633b.jpg_350x350.jpg',
            img3: 'https://s.alicdn.com/@sc04/kf/H7c1db5b14b364973977d9f84c3a225dbn.jpg_350x350.jpg',
            img4: 'https://s.alicdn.com/@sc04/kf/H77bef326c76b42f6acf17bbd186782c04.jpg_350x350.jpg',

        }
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
        <>
            <div className='bg-gray-200 py-20 px-14 w-full' >
                <h1 className='text-3xl font-semibold mb-10'>Discover your next business opportunity</h1>
                <div className='flex w-full  space-x-4'>
                    <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className='w-2/6 h-full '>
                    <div className='flex mb-4 justify-between'><h1 className='text-[24px] font-semibold'>Saving Spot Lights</h1> <button className='underline'>View More</button></div>
                    <div className={`${isHover? 'flex':'hidden'} absolute sm:flex-row flex-col justify-between`}>
                            <AiOutlineLeft onClick={prevSlide} className='  left-14 mt-72 z-10  cursor-pointer text-5xl sm:text-6xl md:text-7xl  border rounded-full   hover:bg-gray-200 p-2 sm:p-5 md:p-6 transition-colors duration-300 mr-2' />
                            <AiOutlineRight onClick={nextSlide} className='  right-14 mt-72 ml-[19rem] z-10 cursor-pointer text-5xl sm:text-6xl md:text-7xl  border rounded-full   hover:bg-gray-200 p-2 sm:p-5 md:p-6 transition-colors duration-300' />



                        </div>
                        <Slider ref={sliderRef} {...settings} className='space-x-2 flex justify-center '>
                            {servicesData.map(service => (
                                <div className='relative '>
                                
                                <div className='p-4  mb-3 rounded-xl bg-white w-full flex flex-col'>
                                    <h1 className='text-[20px] font-medium'>{service.title}</h1>
                                    <p>{service.desc}</p>
                                <div className='w-full h-3/4 p-2 mb-6'><img src={service.img1} className=' border rounded-md h-auto w-full' alt='' /></div>
                                
                            <div className='flex '>
                                <img src={service.img2} className=' border rounded-md w-1/3  ' alt='' />
                                <img src={service.img3} className=' border rounded-md w-1/3 ' alt='' />
                                <img src={service.img4} className=' border rounded-md w-1/3 ' alt='' />
                                
                            </div>
                        </div>
                        
                                </div>
                            ))}
                        </Slider>


                    </div>
                    <div className='w-2/6 h-full'>
                        <div className='flex mb-4  justify-between'><h1 className='text-[24px] font-semibold'>New Arrivals</h1> <button className='underline'>View More</button></div>
                        <div className='p-4 mb-6 h-3/5 rounded-xl bg-white w-full flex flex-wrap'>
                            <h1 className='text-[20px] font-medium mb-3' >61,800+ products added today</h1>
                            <div className='w-1/2 p-2'><img src='https://s.alicdn.com/@sc04/kf/H9d4c49930ed74c3ebf27f6d4ed478abbM.png_350x350.jpg' className=' border rounded-md h-full w-full' alt='' /></div>
                            <div className='w-1/2 p-2'><img src='https://s.alicdn.com/@sc04/kf/Hc7b3de710b6e4008ad11d30c327ed88aC.jpg_350x350.jpg' className=' border rounded-md h-full w-full' alt='' /></div>
                            <div className='w-1/2 p-2'><img src='https://s.alicdn.com/@sc04/kf/H3d2f10f26faf4167b782c2b4f158ef3fS.jpg_350x350.jpg' className=' border rounded-md h-full w-full' alt='' /></div>
                            <div className='w-1/2 p-2'><img src='https://s.alicdn.com/@sc04/kf/Hc587970e70814a588fd59826d5a69598U.jpg_350x350.jpg' className=' border rounded-md h-full w-full' alt='' /></div>
                        </div>
                        <div className='p-4 rounded-xl  bg-white  w-full flex'>
                            <img src='https://s.alicdn.com/@sc04/kf/Hf9fc30e0c2a74d068581623365d67b1ds.png_350x350.jpg' className='w-1/3 border rounded-md ' alt='' />
                                <div className='flex flex-col p-2'>
                                    <h1 className='text-[20px] font-medium'>New This Week</h1>
                                    <p>Product from verified suppliers only</p>
                                </div>
                           
                        </div>
                    </div>
                    <div className='w-2/6 h-full'>
                        <div className='flex mb-4 justify-between'><h1 className='text-[24px] font-semibold'>Saving Spot Lights</h1> <button className='underline'>View More</button></div>
                        <div className='p-4 mb-6  rounded-xl bg-white w-full flex'>
                            <div className='flex'><img src='https://s.alicdn.com/@sc04/kf/H324f65d649a54e8badbc921234873a36V.jpg_350x350.jpg' className=' border rounded-md w-1/3' alt='' />
                                <div className='flex flex-col justify-center items-center p-2'>
                                    <h1 className='text-[20px] font-medium'>Lowest Prices in 180 days</h1>

                                </div>
                            </div>
                        </div>
                        <div className='p-4 h-3/4 rounded-xl bg-white w-full flex flex-wrap'>
                            <h1 className='text-[20px] font-medium mb-3'>Deals on Best Sellers</h1>
                            <div className='w-full p-2'><img src='https://s.alicdn.com/@sc04/kf/Hff84760ec7754f5691fb86825e782f80y.jpg_350x350.jpg' className=' border rounded-md h-full w-full' alt='' /></div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Discover