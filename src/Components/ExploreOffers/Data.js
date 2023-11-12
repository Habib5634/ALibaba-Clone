const servicesData = [
    {
      id: 1,
      title: 'Consumer Electronics',
      catImg:'https://img.alicdn.com/imgextra/i3/O1CN01IG66It1ZCrw40fyRX_!!6000000003159-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01lTlEA71idHDZyDnE1_!!6000000004435-2-tps-200-200.png',
      path:'/consumer-electronics',
      
    },
    {
        id: 2,
       
        title: 'Apparal Accesories',
        catImg:"https://img.alicdn.com/imgextra/i4/O1CN01uAcVRk1e11lsX5TeX_!!6000000003810-2-tps-1920-240.png",
        imgurl: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01Si2Chv1URSNSZI3w2_!!6000000002514-2-tps-200-200.png',
        path:'/apparal-accessories'
      },
    {
      id: 3,
      title: 'Home & Garden ',
      catImg:'https://img.alicdn.com/imgextra/i1/O1CN01Wv2XX51oNbSEc0RTr_!!6000000005213-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01FNDTXs1Js3bqyZjbx_!!6000000001083-2-tps-200-200.png',
      path:'/home-garden',
      
    },
    {
        id: 4,
       
        title: 'Sports & Entertainments',
        catImg:'https://img.alicdn.com/imgextra/i3/O1CN01lqkJWZ1Fp4mvhVeWo_!!6000000000535-0-tps-1920-240.jpg',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01FNDTXs1Js3bqyZjbx_!!6000000001083-2-tps-200-200.png',
        path:'/sports-entertainment',
      },
    {
      id: 5,
      title: 'Industrial Machinery',
      catImg:'https://img.alicdn.com/imgextra/i1/O1CN01fKea2q1DgFnaPGCN6_!!6000000000245-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01SjYZ821m8pTY9ruQ1_!!6000000004910-2-tps-200-200.png',
      path:'/industrial-machinary',
     
    },
    {
        id: 6,
       
        title: 'Beauty',
        catImg:'https://img.alicdn.com/imgextra/i1/O1CN01OhbGTu1PbT39GOM3g_!!6000000001859-2-tps-1920-240.png',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01pTq4g71X95KxEqsrz_!!6000000002880-2-tps-200-200.png',
        path:'/beauty',
      },
    {
      id: 7,
      title: 'Packaging & Printing',
      catImg:'https://img.alicdn.com/imgextra/i1/O1CN01TA364c1XWRdBSNkv4_!!6000000002931-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01c8xN8n1Xl6DAeTUDe_!!6000000002963-2-tps-200-200.png',
      path:'/packaging-pronting',
      
    },
    {
        id: 8,
       
        title: 'Mother, Kids & Toys',
        catImg:'https://img.alicdn.com/imgextra/i4/O1CN01p2WDPo20UGbQQMFfo_!!6000000006852-2-tps-1920-240.png',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01SECwAR1ehcde7HSzA_!!6000000003903-2-tps-200-200.png',
        path:'/mother-kids-toys',
      },
    {
      id: 9,
      title: 'Jewellery Eyewear',
      catImg:'https://img.alicdn.com/imgextra/i1/O1CN01uR3Y7S1SQQLQouk8O_!!6000000002241-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i1/O1CN012sGbIl1o81tW54KPo_!!6000000005179-2-tps-200-200.png',
      path:'jewellery-eyewear',
      
    },
    {
        id: 10,
       
        title: 'Show & Accessories',
        catImg:'https://img.alicdn.com/imgextra/i3/O1CN01VKZEym1ducEFbmUcO_!!6000000003796-2-tps-1920-240.png',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01GqpTkM1kCNBbXXtfT_!!6000000004647-2-tps-200-200.png',
        path:'/show-accessories',
      },

    {
      id: 11,
      title: 'Vehical Parts & Accessories',
      catImg:'https://img.alicdn.com/imgextra/i4/O1CN01dH30gj1lVRNoLkpeE_!!6000000004824-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01kxhWs527Gi6Fzc3zF_!!6000000007770-2-tps-200-200.png',
      path:'vehical-parts-accessories',
      
    },
    {
      id: 12,
      
      title: 'Furniture',
      catImg:'https://img.alicdn.com/imgextra/i1/O1CN01UYjX9s20fiVN2S3H3_!!6000000006877-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01pq9lU028SRrrtj79B_!!6000000007931-2-tps-200-200.png',
      path:'/furniture',
    },
    {
      id: 13,
      title: 'Luggages& Bags',
      catImg:'https://img.alicdn.com/imgextra/i3/O1CN01fq3fAU1Pm09dy96u5_!!6000000001882-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01wtbYT71vJfGaj4BK8_!!6000000006152-2-tps-200-200.png',
      path:'luggage-bags',
      
    },
    {
      id: 14,
     
      title: 'Tools & Hardware ',
      catImg:'https://img.alicdn.com/imgextra/i3/O1CN0192F3vN1mDPP7qPNhH_!!6000000004920-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01yvRa9M1eCTa1vhbZ9_!!6000000003835-2-tps-200-200.png',
      path:'tools-hardware',
    },
    {
      id: 15,
      title: 'Constructions & Real Estate',
      catImg:'https://img.alicdn.com/imgextra/i3/O1CN01gvUUlF1LJMw2FBzMh_!!6000000001278-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01wmYqD51WrDtOCBmav_!!6000000002841-2-tps-200-200.png',
      path:'construction-real-estate',
     
    },
    {
        id: 16,
        
        title: 'Home Appliances',
        catImg:'https://img.alicdn.com/imgextra/i3/O1CN01cckJFQ1Jpll02kjLR_!!6000000001078-0-tps-1920-240.jpg',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01VAlsfc1P9zBujbtCk_!!6000000001799-2-tps-200-200.png',
        path:'/home-appliances',
      },
    {
      id: 17,
      title: 'Vehical Accessories',
      catImg:'https://img.alicdn.com/imgextra/i4/O1CN01IVqj061cKbXR7lGOJ_!!6000000003582-0-tps-1920-240.jpg',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i3/O1CN018aGwXj1YidrbjBVAY_!!6000000003093-2-tps-200-200.png',
      path:'/vehical-accessories',
      
    },
    {
        id: 18,
       
        title: 'Personal Care',
        catImg:'https://img.alicdn.com/imgextra/i1/O1CN01JuHooU25Iss7lRkVe_!!6000000007504-2-tps-1920-240.png',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01ICig8T1LX6qUzxNqk_!!6000000001308-2-tps-200-200.png',
        path:'personal-care',
      },
    {
      id: 19,
      title: 'Commerical Service',
      catImg:'https://img.alicdn.com/imgextra/i1/O1CN01purfYy1wKs13Bk9Zt_!!6000000006290-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01pbpLad1tk6uA15t5q_!!6000000005939-2-tps-200-200.png',
      path:'/commerical-services',
      
    },
    {
        id: 20,
        
        title: 'Light & Lightining',
        catImg:'https://img.alicdn.com/imgextra/i2/O1CN014U6P5U1uOsFKvFZQr_!!6000000006028-2-tps-1920-240.png',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01z9EKU11JLXUJcG1Vh_!!6000000001012-2-tps-200-200.png',
        path:'/light-lightining',
      },{
      id: 21,
      title: 'Vehical & Transportaion',
      catImg:'https://img.alicdn.com/imgextra/i1/O1CN01oVRnQ91OlFte8BsD5_!!6000000001745-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01Xyr1VF29Tee5GeZrf_!!6000000008069-2-tps-200-200.png',
      path:'/vehical-transportation',
      
    },
    {
        id: 22,
       
        title: 'Gifts & Crafts',
        catImg:'https://img.alicdn.com/imgextra/i3/O1CN01AzElI51Hv98pLSt1d_!!6000000000819-2-tps-1920-240.png',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01rOPzCa1ZbbEGb8a30_!!6000000003213-2-tps-200-200.png',
        path:'/gifts-crafts',
      },{
      id: 23,
      title: 'School & office Supplies',
      catImg:'https://img.alicdn.com/imgextra/i3/O1CN010MJOsn22SYLym2rih_!!6000000007119-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01RkwLHr1Hq6gvqLWtp_!!6000000000808-2-tps-200-200.png',
      path:'/school-office-supplies',
      
    },
    {
        id: 24,
        
        title: 'Health Care',
        catImg:'https://img.alicdn.com/imgextra/i3/O1CN01PzRS9W29rTDHIJICr_!!6000000008121-2-tps-1920-240.png',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01snVtLV1eWAmAmsrrj_!!6000000003878-2-tps-200-200.png',
        path:'/health-care',
      },{
      id: 25,
      title: 'Electrical Equipments',
      catImg:'https://img.alicdn.com/imgextra/i2/O1CN01SftQs021zF0QBqyit_!!6000000007055-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i2/O1CN017Hcgjs1cJgaN8JoYh_!!6000000003580-2-tps-200-200.png',
      path:'/electronic-equipment',
      
    },
    {
        id: 26,
       
        title: 'Renewable Energy',
        catImg:'https://img.alicdn.com/imgextra/i1/O1CN01jCEb8Q1ipBbzy4T0C_!!6000000004461-2-tps-1920-240.png',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01xrBf6U1pR67WIk42d_!!6000000005356-2-tps-200-200.png',
        path:'/renewable-energy',
      },{
      id: 27,
      title: 'Medical Devices & Supplies',
      catImg:'https://img.alicdn.com/imgextra/i3/O1CN01PzRS9W29rTDHIJICr_!!6000000008121-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01jTWsuf1UZFH9HKZFV_!!6000000002531-2-tps-200-200.png',
      path:'/medical-devices-supplies',
    
    },
    {
        id: 28,
       
        title: 'Costruction & Building',
        catImg:'https://gw.alicdn.com/imgextra/i1/O1CN011IN7bJ1vGv0yAoTbS_!!6000000006146-0-tps-1920-240.jpg',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01YET30q1jWhGdnsiRH_!!6000000004556-2-tps-200-200.png',
        path:'/construction-building',
      },{
      id: 29,
      title: 'Electronics Components',
      catImg:'https://img.alicdn.com/imgextra/i2/O1CN01Sk7Pfr1U7J2m1qAxW_!!6000000002470-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01Sksz1Z1YcgYJqip4w_!!6000000003080-2-tps-200-200.png',
      path:'/electronic-components',
     
    },
    {
        id: 30,
       
        title: 'Pet Supplies',
        catImg:'https://img.alicdn.com/imgextra/i3/O1CN01ewKOa629k8uEFbIhF_!!6000000008105-0-tps-1920-240.jpg',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01Ceoni61ObdbmQL9S6_!!6000000001724-2-tps-200-200.png',
        path:'/pet-supplies',
      },{
      id: 31,
      title: 'Security',
      catImg:'https://img.alicdn.com/imgextra/i4/O1CN01shrfPW1qYiIE3FB1i_!!6000000005508-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01QyVDt11d7bscVohLd_!!6000000003689-2-tps-200-200.png',
      path:'/security',
     
    },
    {
        id: 32,
        
        title: 'Foods & Beverages',
        catImg:'https://img.alicdn.com/imgextra/i4/O1CN01aOKkxl1fmUQyQFXjY_!!6000000004049-2-tps-1920-240.png',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01xIExD31nnQ4HHosm7_!!6000000005134-2-tps-200-200.png',
        path:'/food-beverages',
      },{
      id: 33,
      title: 'Chemical',
      catImg:'https://img.alicdn.com/imgextra/i4/O1CN01ntSawR20zPXRO1UEN_!!6000000006920-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01dHfom21dRIms583K7_!!6000000003732-2-tps-200-200.png',
      path:'/chemical',
     
    },
    {
        id: 34,
        
        title: 'Testing Instruments',
        catImg:'https://img.alicdn.com/imgextra/i4/O1CN01c2Yt8y22LgPiGtmqK_!!6000000007104-2-tps-1920-240.png',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01Bjousj1NmLFYz6v5G_!!6000000001612-2-tps-200-200.png',
        path:'/testing-instruments',
      },{
      id: 35,
      title: 'Bussiness Services',
      catImg:'https://img.alicdn.com/imgextra/i4/O1CN01E6D0Zi1zJu1evrAmb_!!6000000006694-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01fm34sD1PrUwNSEFdk_!!6000000001894-2-tps-200-200.png',
      path:'/bussiness-services',
      
    },
    {
        id: 36,
       
        title: 'Fabric Textile',
        catImg:'https://img.alicdn.com/imgextra/i2/O1CN01LDr2Kl1MSoijbuoTS_!!6000000001434-2-tps-1920-240.png',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01b9aLcc1GCtA0OZtjo_!!6000000000587-2-tps-200-200.png',
        path:'/fabric-textile',
      },{
      id: 37,
      title: 'Metals & Alloys',
      catImg:'https://img.alicdn.com/imgextra/i4/O1CN01mqe3y71lPwdAPKbjJ_!!6000000004812-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01cJCsO31WHxWFRMNTj_!!6000000002764-2-tps-200-200.png',
      path:'/metal-alloys',
      
    },
    {
        id: 38,
       
        title: 'Safety',
        catImg:'https://img.alicdn.com/imgextra/i1/O1CN01z8GJWo1o1A2xGa4qm_!!6000000005164-2-tps-1920-240.png',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01mswIfe1sg9zSln3tL_!!6000000005795-2-tps-200-200.png',
        path:'/safety',
      },
    {

      id: 39,
      title: 'Rubber & Plastic Material Handling',
      catImg:'https://img.alicdn.com/imgextra/i2/O1CN01fCrjUJ1eakfRe3yqO_!!6000000003888-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i3/O1CN015jOuvl2A2Scj8wr0t_!!6000000008145-2-tps-200-200.png',
      path:'/rubber-plastic-material-handling',
      
    },
    {

        id: 40,
        
        title: 'Material Handling',
        catImg:'https://img.alicdn.com/imgextra/i4/O1CN01oRJGxc1pMyWbucKa8_!!6000000005347-2-tps-1920-240.png',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01LWLxJO1yKWuJno4Ae_!!6000000006560-2-tps-200-200.png',
        path:'/material-handling',
      },{
      id: 41,
      title: 'Power Transmission',
      catImg:'https://img.alicdn.com/imgextra/i4/O1CN01wwEIUl1VvyTbbGZ02_!!6000000002716-2-tps-1920-240.png',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01w4GvVc28geGm7o1Ar_!!6000000007962-2-tps-200-200.png',
      path:'/power-transmission',
      
    },
    {
        id: 42,
       
        title: 'Fabrication Services',
        catImg:'https://img.alicdn.com/imgextra/i3/O1CN01NdT4l51bvPgbeH3W1_!!6000000003527-2-tps-1920-240.png',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01h9OSMd1rN5lYYjP3L_!!6000000005618-2-tps-200-200.png',
        path:'/fabrication-services',
      },{
      id: 43,
      title: 'Aggriculture',
      catImg:'https://img.alicdn.com/imgextra/i1/O1CN01INNsA628wDhccTie9_!!6000000007996-2-tps-1920-240.png ',
      imgurl: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01Ybvy8D1SCgMy5CYuG_!!6000000002211-2-tps-200-199.png',
      path:'/aggriculture',
      

    },
    {
        id: 44,
        
        title: 'Environment',
        catImg:'https://img.alicdn.com/imgextra/i4/O1CN01Dck1ww21P3iSaB5Uw_!!6000000006976-2-tps-1920-240.png',
        imgurl: 'https://s.alicdn.com/@img/imgextra/i4/O1CN01WD8L611FtC7zB5hSv_!!6000000000544-2-tps-200-200.png',
        path:'/environment',
  
      },
  ];
  export default servicesData