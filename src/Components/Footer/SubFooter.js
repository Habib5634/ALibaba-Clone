import React from 'react'

const SubFooter = () => {
  return (
    <div className='py-6 bg-gray-100'>
        <div className='flex justify-center'>
            <ul className='flex text-gray-500 space-x-3'>
                <li className='hover:underline'>Ali Express |</li>
                <li className='hover:underline'>1688.com |</li>
                <li className='hover:underline'>Tmall Taonao World |</li>
                <li className='hover:underline'>Alipay |</li>
                <li className='hover:underline'>Lazada |</li>
                <li className='hover:underline'>Taobao Global</li>
            </ul>
        </div>
        <div className='flex justify-center'>
        <ul className='flex text-gray-500 space-x-3'>
            <li className='hover:underline'>Policies and Rules .</li>
            <li className='hover:underline'>Legal Notice .</li>
            <li className='hover:underline'>Product Listing Policies .</li>
            <li className='hover:underline'>Intellectual Property Protections .</li>
            <li className='hover:underline'>Privacy Policy .</li>
            <li className='hover:underline'>Terms of Uses .</li>
            <li className='hover:underline'>Integrity Complainces</li>
        </ul>

        </div>
        <div className='flex justify-center'>
        <ul className='flex text-gray-500 space-x-3'>
            <li>© 1999-2023 Alibaba.com. All rights reserved.</li>
            <li>浙公网安备 33010002000092号</li>
            <li>浙B2-20120091-4</li>
            
        </ul>

        </div>
    </div>
  )
}

export default SubFooter