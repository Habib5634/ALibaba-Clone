import React from 'react'

const SellerBanner = () => {
    const imageUrl = 'https://alibabamadeeasy.com.au/wp-content/uploads/2020/07/alibaba-cloud-banner-scaled.jpg';   
  return (
    <>
    <div className="bg-cover bg-center w-full" style={{ backgroundImage: `url('${imageUrl}')` }}>
     <div className='flex  px-20 flex-col py-36 '>
        <div className='flex items-center'>
            <p className='text-6xl font-bold text-emerald-500'>10</p>
            <h1 className='flex flex-col font-bold text-4xl leading-6 tracking-tighter font-serif'>
                <p>Years</p>
                <p>Experience</p>
                </h1>
        </div>
        <div className='px-2 py-1 bg-emerald-500 rounded-full font-medium w-fit'>PROFESSIONAL PHOTOGRAPHIC</div>

     </div>
    </div>
    <div className='bg-[#333] py-20 flex flex-col justify-center items-center'>
        <h1 className='text-4xl text-emerald-500'>HOT PRODUCTS</h1>
        <p className='text-3xl text-white '>RECOMMEND</p>

    </div>
    </>
  )
}

export default SellerBanner