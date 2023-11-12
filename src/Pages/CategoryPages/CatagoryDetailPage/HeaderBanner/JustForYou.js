import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const JustForYou = () => {

    const servicesData = [
        {
            id: 1,
            img: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01r7eSBj22WDcBSekoI_!!6000000007127-0-tps-1200-200.jpg'
        },
        {
            id: 2,
            img: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01tenQWS1hpodIrhBuA_!!6000000004327-0-tps-1200-200.jpg'
        },
        {
            id: 3,
            img: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01QHWmrC1jLFQisqAAj_!!6000000004531-0-tps-1200-200.jpg'
        },
        {
            id: 4,
            img: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01rtcMiE1bu2WygwpEE_!!6000000003524-2-tps-1200-200.png'
        },
        {
            id: 5,
            img: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01waiPhg28xaxO5AqOv_!!6000000007999-0-tps-1200-200.jpg'
        },
        {
            id: 6,
            img: 'https://s.alicdn.com/@img/imgextra/i1/O1CN011Yjezu1ss4Ip88Xu2_!!6000000005821-0-tps-1200-200.jpg'
        },
        {
            id: 7,
            img: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01KbdKJp1RIoDl73MNg_!!6000000002089-0-tps-1200-200.jpg'
        },
        {
            id: 8,
            img: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01GUJDBw1F24OW0u6V6_!!6000000000428-0-tps-1200-200.jpg'
        },
        {
            id: 9,
            img: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01COVhf6227UGIU073w_!!6000000007073-0-tps-1200-200.jpg'
        },
    ]
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
        arrows: false,
        cssEase: "linear"
    }
  return (
    <>
    <Slider  {...settings} className=' flex justify-center bg-transparent rounded-br-md mb-6 rounded-bl-md'>
                {servicesData.map(service => (
                    

                        <div className='  mb-3  bg-transparent  flex justify-center items-center flex-col px-[120px]'>

                            <img src={service.img} className=' w-full  rounded-md' alt='' />
                            
                        </div>
                   
                ))}
            </Slider>
            </>
  )
}

export default JustForYou