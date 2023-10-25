import React from 'react'

const Discover = () => {
  return (
    <>
    <div className='bg-gray-200 py-20 px-14 w-full' >
        <h1 className='text-3xl font-semibold '>Discover your next business opportunity</h1>
<div className='flex w-full'>
    <div className='w-2/5'></div>
    <div className='w-2/5'>
        <div className='flex justify-between'><h1 className='text-xl font-bold'>New Arrivals</h1> <button className='underline'>View More</button></div>
        <div className='p-4 mb-3 rounded-xl bg-white w-full flex flex-wrap'>
            <h1 className='text-lg mb-3'>61,800+ products added today</h1>
            <div className='w-1/2 p-2'><img src='https://s.alicdn.com/@sc04/kf/H9d4c49930ed74c3ebf27f6d4ed478abbM.png_350x350.jpg' className=' border rounded-md h-full w-full' alt=''/></div>
            <div className='w-1/2 p-2'><img src='https://s.alicdn.com/@sc04/kf/Hc7b3de710b6e4008ad11d30c327ed88aC.jpg_350x350.jpg' className=' border rounded-md h-full w-full' alt=''/></div>
            <div className='w-1/2 p-2'><img src='https://s.alicdn.com/@sc04/kf/H3d2f10f26faf4167b782c2b4f158ef3fS.jpg_350x350.jpg' className=' border rounded-md h-full w-full' alt=''/></div>
            <div className='w-1/2 p-2'><img src='https://s.alicdn.com/@sc04/kf/Hc587970e70814a588fd59826d5a69598U.jpg_350x350.jpg' className=' border rounded-md h-full w-full' alt=''/></div>
        </div>
        <div className='p-4 rounded-xl bg-white w-full flex'>
    <div className='flex'><img src='https://s.alicdn.com/@sc04/kf/Hf9fc30e0c2a74d068581623365d67b1ds.png_350x350.jpg' className=' border rounded-md h-40 w-40' alt=''/>
    <div className='flex flex-col p-2'>
        <h1 className='font-bold'>New This Week</h1>
        <p>Product from verified suppliers only</p>
    </div>
    </div>
        </div>
    </div>
    <div className='w-2/5'></div>
</div>








    </div>
    </>
  )
}

export default Discover