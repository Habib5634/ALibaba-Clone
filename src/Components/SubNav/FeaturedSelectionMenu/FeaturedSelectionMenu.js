import React from 'react'
import {SlBadge} from 'react-icons/sl'
import {BsChatLeftText} from 'react-icons/bs'
import {AiOutlineTag} from 'react-icons/ai'
const FeaturedSelectionMenu = () => {
  return (
    <div className='flex justify-center items-center border-t py-6 space-x-10'>
        <div className='flex cursor-pointer flex-col justify-center items-center border px-20 py-10'>
            <SlBadge className='text-4xl mb-4'/>
            <h1 className='text-xl '>Top Ranking</h1>
        </div>
        <div className='flex flex-col cursor-pointer justify-center items-center border px-20 py-10'>
        <BsChatLeftText className='text-4xl mb-4'/>
            <h1 className='text-xl '>New Arrivals</h1>
        </div>
        <div className='flex flex-col cursor-pointer justify-center items-center border px-20 py-10'>
        <AiOutlineTag className='text-4xl mb-4'/>
            <h1 className='text-xl '>Saving Spotlights</h1>
        </div>
        <div className='flex flex-col justify-start px-4  items-start border-l'>
<button className='mb-3 hover:underline'>Sample Center</button>
<button className='mb-3 hover:underline'>Trade Show</button>
<button className='mb-3 hover:underline'>Tips</button>
<button className='mb-3 hover:underline'>LIVE</button>
<button className='mb-3 hover:underline'>Global Suppliers</button>
        </div>
    </div>
  )
}

export default FeaturedSelectionMenu