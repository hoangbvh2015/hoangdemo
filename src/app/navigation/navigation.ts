export const NavigationList =[
    {   id: 10,
        title:'Sản phẩm',
        type:'group',
        url:'/main/product',
        children: [
          
            {
                id: 1,
                title:'Ví, túi sách',
                type:'item',
                url:'/main/product',
            },
            {
                id: 2,
                title:'Giày dép',
                type:'item',
                url:'/main/product?shoe',
            },
            {
                id: 3,
                title:'Đồ trang sức',
                type:'item',
                url:'/main/product?jewelry',
            }
        ]
    },
    {   id:20,
        title:'Hỗ trợ',
        type:'item',
        url:'/main/support',
    },
    {
        id:30,
        title:'Liên hệ',
        type:'item',
        url:'/main/contract',
       
    },
   
    
]