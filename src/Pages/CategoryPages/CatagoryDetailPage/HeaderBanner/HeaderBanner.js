import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
const HeaderBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const servicesData = [
        {
            id: 1,
            img: 'https://s.alicdn.com/@sc02/kf/HTB1NWZvOb2pK1RjSZFsq6yNlXXao.jpg_120x120xz.jpg',
            title: 'Computer Hardware'
        },
        {
            id: 2,
            img: 'https://sc02.alicdn.com/kf/Hdfad9af4cb384b1091420222b53a063dM.jpg',
            title: 'Cables & Commonly Used...'
        },
        {
            id: 3,
            img: 'https://sc02.alicdn.com/kf/HTB1pa7vOb2pK1RjSZFsq6yNlXXat.jpg',
            title: 'Projecters & Presentations'
        },
        {
            id: 4,
            img: 'https://sc02.alicdn.com/kf/H8fa6a4f8aae9423e9b391cd07a814f153.jpg',
            title: 'Used Electronics'
        },
        {
            id: 5,
            img: 'https://s.alicdn.com/@sc02/kf/HTB1QfoWOhnaK1RjSZFBq6AW7VXaE.jpg_120x120xz.jpg',
            title: 'Other Consumer Electronics'
        },
        {
            id: 6,
            img: 'https://s.alicdn.com/@sc02/kf/Hc548b3f7b1564f9a8f6f064c1f3f801f9.jpg_120x120xz.jpg',
            title: 'Charges & Batteries'
        },
        {
            id: 7,
            img: 'https://s.alicdn.com/@sc02/kf/Hbc55f8f00bdd41db91cca2961fd30c49l.jpg_120x120xz.jpg',
            title: 'Mobile Phones'
        },
        {
            id: 8,
            img: 'https://s.alicdn.com/@sc02/kf/HTB1rQUxOkvoK1RjSZFDq6xY3pXaF.jpg_120x120xz.jpg',
            title: 'Video Games Accessories'
        },
        {
            id: 9,
            img: 'https://s.alicdn.com/@sc02/kf/HTB14bIxOgHqK1RjSZFgq6y7JXXav.jpg_120x120xz.jpg',
            title: 'Portable Audio Devices'
        },
        {
            id: 10,
            img: 'https://s.alicdn.com/@sc02/kf/HTB1Xl3BOXzqK1RjSZFCq6zbxVXal.jpg_120x120xz.jpg',
            title: 'Camera Photo Accessories'
        },
        {
            id: 11,
            img: 'https://s.alicdn.com/@sc02/kf/HTB1RyEAOcbpK1RjSZFyq6x_qFXaP.jpg_120x120xz.jpg',
            title: 'Television and Accessories'
        },
        {
            id: 12,
            img: 'https://s.alicdn.com/@sc02/kf/HTB12nETOiLaK1RjSZFxq6ymPFXaK.jpg_120x120xz.jpg',
            title: 'VR, AR Hardware'
        },
        {
            id: 13,
            img: 'https://s.alicdn.com/@sc02/kf/He300044303c845049be6e25eb6df1097W.png_120x120xz.jpg',
            title: 'Earphones & HeadPhones'
        },
        {
            id: 13,
            img: 'https://s.alicdn.com/@sc02/kf/HTB17wozOmzqK1RjSZFpq6ykSXXaz.jpg_120x120xz.jpg',
            title: 'Speakers'
        },
        {
            id: 13,
            img: 'https://s.alicdn.com/@sc02/kf/Heda14cf1140a4fae894375886d962ddcD.jpg_120x120xz.jpg',
            title: 'Smart Glasses'
        },
    ]


    const sliderRef = useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 3,
        initialSlide: 0,

        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 3,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };

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
        <div className='mx-[120px] z-50 -mt-20  bg-transparent  rounded-md'>
        <h1 className='text-[20px] rounded-tl-md rounded-tr-md py-3  font-bold pl-4 z-50 bg-white'>Source by Category</h1>
            <div
                className={`flex   overflow-hidden sm:flex-row flex-col w-full justify-between `}>
                <AiOutlineLeft onClick={prevSlide} className='rounded-md absolute left-[120px] mt-2 z-10 cursor-pointer text-5xl sm:text-6xl md:text-7xl hover:bg-gray-200 p-2 h-[113px] w-12 bg-white transition-colors duration-300 mr-2' />
                <AiOutlineRight onClick={nextSlide} className='absolute right-[120px] mt-2 z-10 cursor-pointer text-5xl sm:text-6xl md:text-7xl hover:bg-gray-200 p-2  h-[113px] bg-white w-12 transition-colors duration-300' />
            </div>
            <Slider ref={sliderRef} {...settings} className=' flex justify-center bg-white rounded-br-md rounded-bl-md'>
                {servicesData.map(service => (
                    <div className='relative '>

                        <div className='p-4  mb-3 rounded-xl bg-white w-[150px] h-[120px] flex justify-center items-center flex-col'>

                            <img src={service.img} className=' border rounded-full  h-[60px] w-[60px] ' alt='' />
                            <h1 className='text-center text-[14px]'>{service.title}</h1>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
        </>
    )
}

export default HeaderBanner