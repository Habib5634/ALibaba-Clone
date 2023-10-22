import React from 'react'

const AppMenu = () => {
  return (
    <div className='w-full flex justify-center items-center space-x-10 py-10 px-20 border-t'>
<div className='flex flex-col w-1/5'>
    <h1>Get the Alibaba.com app</h1>
    <p>Find products, communicate with suppliers, and manage and pay for your orders with the Alibaba.com app anytime, anywhere.</p>
    <button className='self-start my-4 underline cursor-pointer'>Learn More </button>
    
</div>
<div className='flex flex-col w-1/5'>
        <img src='https://s.alicdn.com/@img/imgextra/i4/O1CN018KnDNq1JleFgkjLRq_!!6000000001069-2-tps-447-132.png' alt='googleplat'/>
        <img src='https://s.alicdn.com/@img/imgextra/i4/O1CN01i9Aj641atkjJJ9I6y_!!6000000003388-2-tps-396-132.png' alt='app store'/>
    </div>      
        
        <div className='w-1/5'>
            <img src='https://s.alicdn.com/@img/tfs/TB1vMlnX21TBuNjy0FjXXajyXXa-280-280.png' alt='qr code' />
        </div>
    </div>
  )
}

export default AppMenu