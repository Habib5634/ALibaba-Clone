import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronsRight, BiChevronsLeft } from "react-icons/bi"

const ExploreOffer = () => {
  const items = [
    { id: 1, title: 'Product', value: '200M+' },
    { id: 2, title: 'Suppliers', value: '200K+' },
    { id: 3, title: 'Product Categories', value: '5,900' },
    { id: 4, title: 'Countries & Regions', value: '200+' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef(null);
  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
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
      title1: 'Consumer Electronics',
      img1: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01lTlEA71idHDZyDnE1_!!6000000004435-2-tps-200-200.png',
      title2: 'Apparal Accesories',
      img2: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01Si2Chv1URSNSZI3w2_!!6000000002514-2-tps-200-200.png',
    },
    {
      id: 2,
      title1: 'Home & Garden ',
      img1: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01FNDTXs1Js3bqyZjbx_!!6000000001083-2-tps-200-200.png',
      title2: 'Sports & Entertainments',
      img2: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01FNDTXs1Js3bqyZjbx_!!6000000001083-2-tps-200-200.png',
    },
    {
      id: 3,
      title1: 'Industrial Machinery',
      img1: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01SjYZ821m8pTY9ruQ1_!!6000000004910-2-tps-200-200.png',
      title2: 'Beauty',
      img2: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01pTq4g71X95KxEqsrz_!!6000000002880-2-tps-200-200.png',

    },
    {
      id: 4,
      title1: 'Packaging & Printing',
      img1: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01c8xN8n1Xl6DAeTUDe_!!6000000002963-2-tps-200-200.png',
      title2: 'Mother, Kids & Toys',
      img2: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01SECwAR1ehcde7HSzA_!!6000000003903-2-tps-200-200.png',

    },
    {
      id: 5,
      title1: 'Jewellery Eyewear',
      img1: 'https://s.alicdn.com/@img/imgextra/i1/O1CN012sGbIl1o81tW54KPo_!!6000000005179-2-tps-200-200.png',
      title2: 'Show & Accessories',
      img2: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01GqpTkM1kCNBbXXtfT_!!6000000004647-2-tps-200-200.png',

    },

    {
      id: 6,
      title1: 'Vehical Parts & Accessories',
      img1: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01kxhWs527Gi6Fzc3zF_!!6000000007770-2-tps-200-200.png',
      title2: 'Furniture',
      img2: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01pq9lU028SRrrtj79B_!!6000000007931-2-tps-200-200.png',

    },
    {
      id: 7,
      title1: 'Luggages& Bags',
      img1: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01wtbYT71vJfGaj4BK8_!!6000000006152-2-tps-200-200.png',
      title2: 'Tools & Hardware ',
      img2: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01yvRa9M1eCTa1vhbZ9_!!6000000003835-2-tps-200-200.png',

    },
    {
      id: 8,
      title1: 'Constructions & Real Estate',
      img1: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01wmYqD51WrDtOCBmav_!!6000000002841-2-tps-200-200.png',
      title2: 'Home Appliances',
      img2: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01VAlsfc1P9zBujbtCk_!!6000000001799-2-tps-200-200.png',

    },
    {
      id: 9,
      title1: 'Vehical Accessories',
      img1: 'https://s.alicdn.com/@img/imgextra/i3/O1CN018aGwXj1YidrbjBVAY_!!6000000003093-2-tps-200-200.png',
      title2: 'Personal Care',
      img2: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01ICig8T1LX6qUzxNqk_!!6000000001308-2-tps-200-200.png',

    },{
      id: 10,
      title1: 'Commerical Service',
      img1: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01pbpLad1tk6uA15t5q_!!6000000005939-2-tps-200-200.png',
      title2: 'Light & Lightining',
      img2: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01z9EKU11JLXUJcG1Vh_!!6000000001012-2-tps-200-200.png',

    },{
      id: 11,
      title1: 'Vehical & Transportaion',
      img1: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01Xyr1VF29Tee5GeZrf_!!6000000008069-2-tps-200-200.png',
      title2: 'Gifts & Crafts',
      img2: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01rOPzCa1ZbbEGb8a30_!!6000000003213-2-tps-200-200.png',

    },{
      id: 12,
      title1: 'School & office Supplies',
      img1: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01RkwLHr1Hq6gvqLWtp_!!6000000000808-2-tps-200-200.png',
      title2: 'Health Care',
      img2: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01snVtLV1eWAmAmsrrj_!!6000000003878-2-tps-200-200.png',

    },{
      id: 13,
      title1: 'Electrical Equipments',
      img1: 'https://s.alicdn.com/@img/imgextra/i2/O1CN017Hcgjs1cJgaN8JoYh_!!6000000003580-2-tps-200-200.png',
      title2: 'Renewable Energy',
      img2: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01xrBf6U1pR67WIk42d_!!6000000005356-2-tps-200-200.png',

    },{
      id: 14,
      title1: 'Medical Devices & Supplies',
      img1: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01jTWsuf1UZFH9HKZFV_!!6000000002531-2-tps-200-200.png',
      title2: 'Costruction & Building',
      img2: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01YET30q1jWhGdnsiRH_!!6000000004556-2-tps-200-200.png',

    },{
      id: 15,
      title1: 'Electronics Components',
      img1: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01Sksz1Z1YcgYJqip4w_!!6000000003080-2-tps-200-200.png',
      title2: 'Pet Supplies',
      img2: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01Ceoni61ObdbmQL9S6_!!6000000001724-2-tps-200-200.png',

    },{
      id: 16,
      title1: 'Security',
      img1: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01QyVDt11d7bscVohLd_!!6000000003689-2-tps-200-200.png',
      title2: 'Foods & Beverages',
      img2: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01xIExD31nnQ4HHosm7_!!6000000005134-2-tps-200-200.png',

    },{
      id: 17,
      title1: 'Chemical',
      img1: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01dHfom21dRIms583K7_!!6000000003732-2-tps-200-200.png',
      title2: 'Testing Instruments',
      img2: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01Bjousj1NmLFYz6v5G_!!6000000001612-2-tps-200-200.png',

    },{
      id: 18,
      title1: 'Bussiness Services',
      img1: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01fm34sD1PrUwNSEFdk_!!6000000001894-2-tps-200-200.png',
      title2: 'Fabric Textile',
      img2: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01b9aLcc1GCtA0OZtjo_!!6000000000587-2-tps-200-200.png',

    },{
      id: 19,
      title1: 'Metals & Alloys',
      img1: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01cJCsO31WHxWFRMNTj_!!6000000002764-2-tps-200-200.png',
      title2: 'Safety',
      img2: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01mswIfe1sg9zSln3tL_!!6000000005795-2-tps-200-200.png',

    },
    {
      id: 20,
      title1: 'Rubber & Plastic Material Handling',
      img1: 'https://s.alicdn.com/@img/imgextra/i3/O1CN015jOuvl2A2Scj8wr0t_!!6000000008145-2-tps-200-200.png',
      title2: '',
      img2: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01LWLxJO1yKWuJno4Ae_!!6000000006560-2-tps-200-200.png',

    },{
      id: 21,
      title1: 'Power Transmission',
      img1: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01w4GvVc28geGm7o1Ar_!!6000000007962-2-tps-200-200.png',
      title2: 'Fabrication Services',
      img2: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01h9OSMd1rN5lYYjP3L_!!6000000005618-2-tps-200-200.png',

    },{
      id: 22,
      title1: 'Aggriculture',
      img1: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01Ybvy8D1SCgMy5CYuG_!!6000000002211-2-tps-200-199.png',
      title2: 'Environment',
      img2: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01WD8L611FtC7zB5hSv_!!6000000000544-2-tps-200-200.png',

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
    <>
      <div className='w-full flex px-14 py-20'>
        <div className='w-4/6 pr-20'>
          <h1 className='text-6xl font-semibold '> Explore millions of offerings tailored to your business needs</h1>
        </div>
        <div className='w-2/6 flex flex-wrap justify-center '>
          {items.map(item => (
            
              <div key={item.id}   className='w-1/2 border-l-4 mb-4 pl-2 flex flex-col'>
                <h1 className='text-4xl text-orange-500'>{item.value}</h1>
                <p className='text-xl'>{item.title}</p>
              </div>
            
          ))}
        </div>
      </div>


      <div className='  p-14'>
     
      <div className='flex sm:flex-row flex-col justify-between'>
        

        
          <BiChevronsLeft onClick={prevSlide} className=' absolute left-14 mt-32 z-10  cursor-pointer text-5xl sm:text-6xl md:text-7xl  border rounded-full   hover:bg-gray-200 p-2 sm:p-5 md:p-6 transition-colors duration-300 mr-2' />
          <BiChevronsRight onClick={nextSlide} className=' absolute right-14 mt-32 z-10 cursor-pointer text-5xl sm:text-6xl md:text-7xl  border rounded-full   hover:bg-gray-200 p-2 sm:p-5 md:p-6 transition-colors duration-300' />


        
      </div>
      <Slider ref={sliderRef} {...settings} className='space-x-2 flex justify-center '>
        {servicesData.map(service => (
          <div key={service.id} className='relative flex flex-col justify-center space-y-2 px-20'  >
            <div className=' border h-[10rem] w-[10rem] rounded-full p-11 mr-2 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={service.img1} alt='img' className='w-10 h-auto' />
              <h1 className=' break-words text-center text-black font-serif font-medium'>{service.title1}</h1>
            </div>
            <div className=' border h-[10rem] w-[10rem] rounded-full p-11 mr-2 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={service.img2} alt='img2' className='w-14 h-auto'/>
              <h1 className=' break-words text-center text-black font-serif font-medium'>{service.title2}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
}

export default ExploreOffer;
