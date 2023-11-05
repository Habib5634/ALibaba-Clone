import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import servicesData from './Data';
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
        <div className='w-3/5 pr-20'>
          <h1 className='text-6xl font-semibold '> Explore millions of offerings tailored to your business needs</h1>
        </div>
        <div className='w-2/5 flex flex-wrap justify-center '>
          {items.map(item => (
            
              <div key={item.id}   className='w-1/2 border-l-4 mb-4 pl-2 flex flex-col'>
                <h1 className='text-[44px] font-medium text-orange-500'>{item.value}</h1>
                <p className='text-[20px]'>{item.title}</p>
              </div>
            
          ))}
        </div>
      </div>


      <div className='  p-14'>
     
      <div className='flex sm:flex-row flex-col justify-between'>
        

        
          <AiOutlineLeft onClick={prevSlide} className=' absolute left-14 mt-32 z-10  cursor-pointer text-5xl sm:text-6xl md:text-7xl  border rounded-full   hover:bg-gray-200 p-2 sm:p-5 md:p-6 transition-colors duration-300 mr-2' />
          <AiOutlineRight onClick={nextSlide} className=' absolute right-14 mt-32 z-10 cursor-pointer text-5xl sm:text-6xl md:text-7xl  border rounded-full   hover:bg-gray-200 p-2 sm:p-5 md:p-6 transition-colors duration-300' />


        
      </div>
      <Slider ref={sliderRef} {...settings} className='px-20'>
        {/* 0 1  */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[0].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[0].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[0].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[1].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[1].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[1].title}</h1>
            </div>
            </Link>
          </div>
{/* 2 3 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[2].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[2].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[2].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[3].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[3].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[3].title}</h1>
            </div>
            </Link>
          </div>
          {/* 4 5 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[4].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[4].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[4].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[5].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[5].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[5].title}</h1>
            </div>
            </Link>
          </div>

          {/* 6 7 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[6].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[6].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[6].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[7].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[7].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[7].title}</h1>
            </div>
            </Link>
          </div>
          {/* 8  9 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[8].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[8].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[8].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[9].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[9].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[9].title}</h1>
            </div>
            </Link>
          </div>
          {/* 10 11 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[10].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[10].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[10].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[11].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[11].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[11].title}</h1>
            </div>
            </Link>
          </div>

          {/* 12  13 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[12].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[12].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[12].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[13].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[13].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[13].title}</h1>
            </div>
            </Link>
          </div>

          {/* 14  15 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[14].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[14].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[14].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[15].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[15].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[15].title}</h1>
            </div>
            </Link>
          </div>
{/* 16  17 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[16].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[16].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[16].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[17].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[17].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[17].title}</h1>
            </div>
            </Link>
          </div>
          {/* 18  19 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[18].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[18].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[18].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[19].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[19].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[19].title}</h1>
            </div>
            </Link>
          </div>
{/* 20 21 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[20].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[20].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[20].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[21].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[21].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[21].title}</h1>
            </div>
            </Link>
          </div>

          {/* 22 23 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[22].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[22].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[22].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[23].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[23].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[23].title}</h1>
            </div>
            </Link>
          </div>

          {/* 24  25 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[24].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[24].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[24].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[25].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[25].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[25].title}</h1>
            </div>
            </Link>
          </div>

          {/* 26  27 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[26].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[26].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[26].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[27].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[27].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[27].title}</h1>
            </div>
            </Link>
          </div>

          {/* 28  29 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[28].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[28].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[28].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[29].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[29].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[29].title}</h1>
            </div>
            </Link>
          </div>

          {/* 30  31 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[30].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[30].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[30].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[31].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[31].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[31].title}</h1>
            </div>
            </Link>
          </div>

          {/* 32  33 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[32].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[32].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[32].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[33].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[33].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[33].title}</h1>
            </div>
            </Link>
          </div>

          {/*  34  35*/}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[34].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[34].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[34].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[35].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[35].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[35].title}</h1>
            </div>
            </Link>
          </div>

          {/* 36  37 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[36].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[36].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[36].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[37].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[37].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[37].title}</h1>
            </div>
            </Link>
          </div>

          {/* 38  39 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[38].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[38].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[38].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[39].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[39].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='break-words  text-center text-black font-serif text-[12px]'>{servicesData[39].title}</h1>
            </div>
            </Link>
          </div>

          {/*  40 41  */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[40].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[40].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[40].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[41].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[41].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[41].title}</h1>
            </div>
            </Link>
          </div>

          {/* 42  43 */}
          <div key='' className='relative flex flex-col justify-center items-center  '  >
            <Link to={`/catagory-detail-page/${servicesData[42].id}`} >
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 mb-5 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[42].imgurl} alt='img' className='w-12 h-auto' />
              <h1 className=' break-words  text-center text-black font-serif text-[12px]'>{servicesData[42].title}</h1>
            </div>
            </Link>
            <Link to={`/catagory-detail-page/${servicesData[43].id}`}>
            <div className=' border h-[9rem] w-[9rem] rounded-full  mr-9 hover:border hover:border-orange-500 flex flex-col justify-center items-center font-serif  ' >
              <img src={servicesData[43].imgurl} alt='imgurl' className='w-12 h-auto'/>
              <h1 className='  break-words  text-center text-black font-serif text-[12px]'>{servicesData[43].title}</h1>
            </div>
            </Link>
          </div>

          {/* 44   45 */}
         
          {/*  46 47*/}
          
      </Slider>
    </div>
    </>
  );
}

export default ExploreOffer;
// target="_blank" rel="noopener noreferrer"