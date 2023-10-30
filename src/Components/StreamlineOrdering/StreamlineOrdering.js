import React, { useEffect, useState } from 'react'

const StreamlineOrdering = () => {
    const categories = [
        { id: 1, img:"https://s.alicdn.com/@img/imgextra/i4/O1CN01mkYwO01N9PeKLQWYq_!!6000000001527-2-tps-96-96.png",hoverimg:"https://s.alicdn.com/@img/imgextra/i4/O1CN015t37vw1Dd37SPrbRN_!!6000000000238-2-tps-96-96.png", name: 'Search For Matches',description:"Search and filter from millions of products and suppliers offering to find the matching ones for your bussiness.", submenu:'https://s.alicdn.com/@img/imgextra/i3/O1CN01kMzIh61UHqFMo41kX_!!6000000002493-2-tps-1380-1060.png'},
        { id: 2,img:"https://s.alicdn.com/@img/imgextra/i4/O1CN015lgvwy1md3g5nlS9C_!!6000000004976-2-tps-96-96.png",hoverimg:"https://s.alicdn.com/@img/imgextra/i4/O1CN01dVw4bH1TrHHEsocfH_!!6000000002435-2-tps-96-96.png", name: 'Identify the right one',description:"Evaluate the product quality and suppliers capabilities easily and efficiently throught verified inspection and digital sourcing tools.", submenu: 'https://s.alicdn.com/@img/imgextra/i2/O1CN0168f1F61TkrjFojnmE_!!6000000002421-2-tps-1380-1060.png' },
        { id: 3,img:"https://s.alicdn.com/@img/imgextra/i3/O1CN01HZd7ME1fEbDXenc3M_!!6000000003975-2-tps-96-96.png",hoverimg:"https://s.alicdn.com/@img/imgextra/i3/O1CN01RWBwcK1op5JQTJsYT_!!6000000005273-2-tps-96-96.png", name: 'Pay with confidence ',description:"Pay for your order in over 20 currencies via 20+ secure payment metods, including flexible payment terms.", submenu: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01XW2muo1PFU87b4zQ5_!!6000000001811-2-tps-1380-1060.png'},
        { id: 4,img:"https://s.alicdn.com/@img/imgextra/i3/O1CN01Q2EI0L1iqYtRZh1gI_!!6000000004464-2-tps-96-96.png",hoverimg:"https://s.alicdn.com/@img/imgextra/i4/O1CN01qIH9m81oWlSvgepj9_!!6000000005233-2-tps-96-96.png", name: 'Fullfill with transparency',description:"Get your logistics needs fulfilled with real-time tracking for 26,000+ routers across 220 countries and regions powered by Alibaba.com logistics.", submenu: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01spEIDZ1TPnVsDakHo_!!6000000002375-2-tps-1380-1060.png'},
        { id: 5,img:"https://s.alicdn.com/@img/imgextra/i4/O1CN01bw2aFV1obnp2vp772_!!6000000005244-2-tps-96-96.png",hoverimg:"https://s.alicdn.com/@img/imgextra/i4/O1CN012nUsin1exeYsphwoy_!!6000000003938-2-tps-96-96.png", name: 'Manage the ease',description:"Chect order status, manage suppliers, track payments and shipments, and contracts after-salessupport all via My Alibaba.", submenu: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01HrdHbz2511UJNFOxq_!!6000000007465-2-tps-1380-1060.png' },
     
      ];
    
      const [activeCategory, setActiveCategory] = useState(null);

      useEffect(() => {
          // Set the active category to the id of the first category
          setActiveCategory(categories[0]?.id || null);
      }, []);
  return (
    <div className=' py-20 px-14'>
        <h1 className='text-6xl w-5/6 font-semibold text-start mb-24'>Streamline ordering from search to fulfillment, all in one place</h1>

        <div className='flex justify-center w-full'
    onMouseLeave={() => setActiveCategory(categories[0]?.id)}

    >
      <div className="category-menu w-2/5  " 
      >
        <ul className='space-y-6'>
          {categories.map(category => (
            <li 
              key={category.id} 
              className={`category-item  p-2 border-r  ${activeCategory === category.id ? 'active  text-amber-950' : ''}`}
              onMouseEnter={() => setActiveCategory(category.id)}
            >
                {activeCategory === category.id ? (
                    <div className='flex  items-center'>
                        <span className=' rounded-full p-1 bg-orange-100 mr-3'>
                        <img src={category.hoverimg} alt='hovered' className='w-28 h-auto'/>
                        </span>
                        <div className='flex flex-col'> 
    <h1 className='mb-4 text-4xl font-semibold'>{category.name}</h1>
    <p className='text-sm font-normal text-gray-500 pr-20'>{category.description}</p>
    </div>
    </div>
  ) : (
    <div className='flex  items-center'>
                        <span className=' rounded-full p-1 border-2 mr-3'>
                        <img src={category.img} alt='hovered' className='w-12 h-auto'/>
                        </span>
                        <div className='flex flex-col'> 
    <h1 className='mb-4'>{category.name}</h1>
    
    </div>
    </div>
  )}
              
            </li>
          ))}
        </ul>
      </div>
      <div className="submenu-container w-2/5">
        {activeCategory !== null && (
          <ul className="submenu">
          
            <img src={categories.find(category => category.id === activeCategory)?.submenu} alt='images'/>
          </ul>
        )}
      </div>
    </div>

    </div>
  )
}

export default StreamlineOrdering