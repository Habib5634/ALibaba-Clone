import React from 'react';

const Footer = () => {
  const footerData = [
    {
      title: 'Get Support',
      buttons: ['Help Center','Live Chat', 'Check Order Status', 'Refunds', 'Report Abuse']
    },
    {
        title: 'Trade Assurance',
        buttons: ['Safe and esy payments', 'Money-back Policy', 'On time Shipping', 'After Sales Protections','Product Monitoring Services']
      },
      {
        title: 'Source on Alibaba.com',
        buttons: ['Request for Quotation', 'embership Programs', 'Alibaba.com Logistics', 'Sales & Tax and VAT','Alibaba.com Reads']

      },
      {
        title: 'Sell on Alibaba.com',
        buttons: ['Start selling', 'Seller Central', 'Become a verified supplier', 'Partnerships','Download the app for suppliers']

      },
      {
        title: 'Get to know us',
        buttons: ['About Alibaba.com', 'Corporate responsibility', 'News Center ', 'Career','']

      },
      
    // Add more objects for each div with their respective buttons
  ];

  return (<>
    <div className='flex justify-center '>
      {footerData.map((item, index) => (
        <div key={index} className='w-1/6 flex flex-col justify-start p-4'>
          <h1 className='text-start mb-6 font-bold'>{item.title}</h1>
          {item.buttons.map((button, i) => (
            <button key={i} className='text-start mb-4 hover:underline'>{button}</button>
          ))}
        </div>
      ))}
    </div>
    <div className='flex justify-between p-14'>
<div className='flex space-x-6'>
    <img className='h-9 w-auto' src='https://s.alicdn.com/@img/imgextra/i4/O1CN01s7Kv0o1f2EXBWZFH3_!!6000000003948-2-tps-84-84.png' alt='images'/>
    <img className='h-9 w-auto' src='https://s.alicdn.com/@img/imgextra/i4/O1CN01pokjTE1pWawtK9vr1_!!6000000005368-2-tps-84-84.png' alt='images'/>
    <img className='h-9 w-auto' src='https://s.alicdn.com/@img/imgextra/i1/O1CN01BdrubJ21eAtYdzBJF_!!6000000007009-2-tps-84-84.png' alt='images'/>
    <img className='h-9 w-auto' src='https://s.alicdn.com/@img/imgextra/i4/O1CN01FX2glN20tSUpYMinl_!!6000000006907-2-tps-84-84.png' alt='images'/>
    <img className='h-9 w-auto' src='https://s.alicdn.com/@img/imgextra/i4/O1CN01dPyTY31vW2A2bd0uC_!!6000000006179-2-tps-84-84.png' alt='images'/>
    <img className='h-9 w-auto' src='https://s.alicdn.com/@img/imgextra/i3/O1CN01JzRJnr28MxJY1e18t_!!6000000007919-2-tps-84-84.png' alt='images'/>
</div>
<div className='flex items-center space-x-4'>
<h1>Trade on the go with the <span className='underline font-bold'>Alibaba.com app</span></h1>
    <img className='h-9 w-auto' src='https://s.alicdn.com/@img/imgextra/i4/O1CN01i9Aj641atkjJJ9I6y_!!6000000003388-2-tps-396-132.png' alt='imagesss'/>
    <img className='h-9 w-auto' src='https://s.alicdn.com/@img/imgextra/i4/O1CN018KnDNq1JleFgkjLRq_!!6000000001069-2-tps-447-132.png' alt='imagesss'/>
</div>
    </div>
    </>
  );
}

export default Footer;
