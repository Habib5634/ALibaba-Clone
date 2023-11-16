import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerData = [
    {
      title: 'Get Support',
      buttons: [{
        btn1: 'Help Center',
        btn2: 'Live Chat',
        btn3: 'Check Order Status',
        btn4: 'Refunds',
        btn5: 'Report Abuse',
        path1: '/Hel-Center',
        path2: '/Live-Chat',
        path3: '/Check-Order',
        path4: '/Refunds',
        path5: '/Report-Abuse'

      }]
    },
    {
      title: 'Trade Assurance',
      buttons: [{
        btn1: 'Safe and esy payments',
        btn2: 'Money-back Policy',
        btn3: 'On time Shipping',
        btn4: 'After Sales Protections',
        btn5: 'Product Monitoring Services',
        path1:'/Safe-and-esy-payments',
        path2:'/Money-back-Policy',
        path3:'/On-time-Shipping',
        path4:'/After-Sales-Protections',
        path5:'/Product-Monitoring-Services',
      }]
    },
    {
      title: 'Source on Alibaba.com',
      buttons: [{
        btn1: 'Request for Quotation',
        btn2: 'embership Programs',
        btn3: 'Alibaba.com Logistics',
        btn4: 'Sales & Tax and VAT',
        btn5: 'Alibaba.com Reads',
        path1:'/Request-for-Quotation',
        path2:'/embership-Programs',
        path3:'/Alibaba.com-Logistics',
        path4:'/Sales-&-Tax-and-VAT',
        path5:'/Alibaba.com-Reads',
      }]

    },
    {
      title: 'Sell on Alibaba.com',
      buttons: [{
        btn1: 'Start selling',
        btn2: 'Seller Central',
        btn3: 'Become a verified supplier',
        btn4: 'Partnerships',
        btn5: 'Download the app for suppliers',
        path1:'/Start-selling',
        path2:'/Seller-Central',
        path3:'/Become-a-verified-supplier',
        path4:'/Partnerships',
        path5:'/Download-the-app-for-suppliers'
      }]

    },
    {
      title: 'Get to know us',
      buttons: [{
        btn1: 'About Alibaba.com',
        btn2: 'Corporate responsibility',
        btn3: 'News Center ',
        btn4: 'Career',
        btn5: '',
        path1:'/About Alibaba.com',
        path2:'/Corporate responsibility',
        path3:'/News Center ',
        path4:'/Career',
        path5:""
      }]

    },

    // Add more objects for each div with their respective buttons
  ];

  return (<>
    <div className='flex justify-center '>
      {footerData.map((item, index) => (
        <div key={index} className='w-1/6 flex flex-col justify-start p-4'>
          <h1 className='text-start mb-6 font-bold'>{item.title}</h1>
          {item.buttons.map((button, i) => (
            <>
              <Link to={button.path1}><button key={i} className='text-start mb-4 hover:underline'>{button.btn1}</button></Link>
              <Link to={button.path2}><button key={i} className='text-start mb-4 hover:underline'>{button.btn2}</button></Link>
              <Link to={button.path3}><button key={i} className='text-start mb-4 hover:underline'>{button.btn3}</button></Link>
              <Link to={button.path4}><button key={i} className='text-start mb-4 hover:underline'>{button.btn4}</button></Link>
              <Link to={button.path5}><button key={i} className='text-start mb-4 hover:underline'>{button.btn5}</button></Link>
            </>
          ))}
        </div>
      ))}
    </div>
    <div className='flex justify-between p-14'>
      <div className='flex space-x-6'>
        <img className='h-9 w-auto' src='https://s.alicdn.com/@img/imgextra/i4/O1CN01s7Kv0o1f2EXBWZFH3_!!6000000003948-2-tps-84-84.png' alt='images' />
        <img className='h-9 w-auto' src='https://s.alicdn.com/@img/imgextra/i4/O1CN01pokjTE1pWawtK9vr1_!!6000000005368-2-tps-84-84.png' alt='images' />
        <img className='h-9 w-auto' src='https://s.alicdn.com/@img/imgextra/i1/O1CN01BdrubJ21eAtYdzBJF_!!6000000007009-2-tps-84-84.png' alt='images' />
        <img className='h-9 w-auto' src='https://s.alicdn.com/@img/imgextra/i4/O1CN01FX2glN20tSUpYMinl_!!6000000006907-2-tps-84-84.png' alt='images' />
        <img className='h-9 w-auto' src='https://s.alicdn.com/@img/imgextra/i4/O1CN01dPyTY31vW2A2bd0uC_!!6000000006179-2-tps-84-84.png' alt='images' />
        <img className='h-9 w-auto' src='https://s.alicdn.com/@img/imgextra/i3/O1CN01JzRJnr28MxJY1e18t_!!6000000007919-2-tps-84-84.png' alt='images' />
      </div>
      <div className='flex items-center space-x-4'>
        <h1>Trade on the go with the <span className='underline font-bold'>Alibaba.com app</span></h1>
        <img className='h-9 w-auto' src='https://s.alicdn.com/@img/imgextra/i4/O1CN01i9Aj641atkjJJ9I6y_!!6000000003388-2-tps-396-132.png' alt='imagesss' />
        <img className='h-9 w-auto' src='https://s.alicdn.com/@img/imgextra/i4/O1CN018KnDNq1JleFgkjLRq_!!6000000001069-2-tps-447-132.png' alt='imagesss' />
      </div>
    </div>
  </>
  );
}

export default Footer;
