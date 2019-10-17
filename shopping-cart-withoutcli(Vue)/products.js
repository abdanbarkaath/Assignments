const tshirts = Vue.component('tshirts', {
    template: `<div class="row">
                <div class="col-lg-4 col-sm-6" v-for="(shirt,index) of shirts">
                    <div class="card"  style="width: 95%" >
                    <div class="card-body">
                        <img class="card-img-top" id="img-1" v-bind:src="shirt.image" alt="Card image cap">
                        <h5 class="card-title">{{shirt.name}}</h5>
                        <p class="card-text">₹{{shirt.price}}</p>
                        <a class="btn  btn-outline-warning" @click=addToCart(tshirt,i)><p>add to cart</p></a>                    </div>
                    </div>
                </div>
               </div>`,
    data: function () {
        return {
            name: "abdan",
            shirts: [
                {
                    id: 1,
                    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/1/22/da35719a-e5a3-47e1-9abf-b77aafd8c32c1548138100408-1.jpg",
                    name: "Calvin klien",
                    price: 700,
                    count: 1
                },
                {
                    id: 2,
                    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1780784/2017/3/10/11489139677796-United-Colors-of-Benetton-Men-Grey-Melange-Solid-V-Neck-T-Shirt-5021489139677579-1.jpg",
                    name: "Lee",
                    price: 1200,
                    count: 1
                },
                {
                    id: 3,
                    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10360601/2019/8/9/e6fe7f53-ea25-40a0-86ba-1d90058621441565349665438-HM-Men-Black-Solid-V-neck-T-shirt-Slim-Fit-7161565349664543-1.jpg",
                    name: "H&M",
                    price: 3000,
                    count: 1
                },
                {
                    id: 4,
                    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2303557/2018/1/24/11516793447454-Roadster-Men-Navy-Blue-Striped-Henley-Neck-T-shirt-3351516793447274-1.jpg",
                    name: "Hrx",
                    price: 799,
                    count: 1
                },
                {
                    id: 5,
                    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10360957/2019/8/13/e45e8c81-a97a-4cb5-b1e6-7037045f1b891565683193840-HM-Men-Grey-Striped-3-pack-T-shirts-Regular-Fit-987156568319-1.jpg",
                    name: "Roadster",
                    price: 999,
                    count: 1
                },
                {
                    id: 6,
                    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7187020/2018/12/18/a882e837-454a-45b8-a064-45660ba6ee201545124603056-Puma-Men-Tshirts-8171545124601033-1.jpg",
                    name: "Puma",
                    price: 1999,
                    count: 1
                },
            ]
        }
    },
    // props: ['list'],
    // mounted() {
    //     this.shirts = this.list;
    // }
})

const shoes = Vue.component('shoes', {
    template: `<div class="row">
    <div class="col-lg-4 col-sm-6" v-for="(shoe,index) of shoes">
        <div class="card"  style="width: 95%" >
        <div class="card-body">
            <img class="card-img-top" id="img-1" v-bind:src="shoe.image" alt="Card image cap">
            <h5 class="card-title">{{shoe.name}}</h5>
            <p class="card-text">₹{{shoe.price}}</p>
            <a class="btn  btn-outline-warning" @click=addToCart(shoe,i)><p>add to cart</p></a>                    </div>
        </div>
    </div>
   </div>`,
    data: function () {
        return {
            name: "abdan",
            shoes:[{
                            id:7,
                            image:"https://sneakerbardetroit.com/wp-content/uploads/2016/04/adidas-xr1-olive-detailed-look-3.jpg",
                            name:"adidas",
                            price:2200,
                            count:1
                        },
                        {
                            id:8,
                            image:"https://boutique.humbleandrich.com/wp-content/uploads/2019/04/air-max-270-hot-punch-0.jpg",
                            name:"nike",
                            price:1250,
                            count:1
                        },
                        {
                            id:9,
                            image:"https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F1f5769e38b878980de0448f4108c0187%2F206594451%2Freebok-cotton-plus-corn-shoe.jpg&client=amp-blogside-v2&signature=8d8418f97e2160876ea65ac863394c3bbf25c9cd",
                            name:"reebok",
                            price:1550,
                            count:1
                        },
                        {
                            id:10,
                            image:"https://upload.wikimedia.org/wikipedia/commons/a/ae/An_Adidas_shoe.jpg",
                            name:"Adidas",
                            price:2200,
                            count:1
                        },
                        {
                            id:11,
                            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoTeZ_ncDorY8sO9I4zInPSZolDor-hcZtIpUefiffcqPsY-Adg",
                            name:"Adidas",
                            price:1799,
                            count:1
                        },
                        {
                            id:12,
                            image:"https://img.fruugo.com/product/3/50/66140503_max.jpg",
                            name:"Adidas",
                            price:1799,
                            count:1
                        },
                        {
                            id:13,
                            image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1547573831-adidas-new-shoes-continental-1547573813.jpg?crop=1xw:1xh;center,top&resize=480:*",
                            name:"Adidas",
                            price:1799,
                            count:1
                        },
                        {
                            id:14,
                            image:"https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/640/320/1862/1048/adidasbt.jpg?ve=1&tl=1?ve=1&tl=1",
                            name:"Adidas",
                            price:1799,
                            count:1
                        },
                        {
                            id:15,
                            image:"https://images.finishline.com/is/image/FinishLine/shdw_temp?$image_src=FinishLine/G27508_001&$ProductImageLink$",
                            name:"Adidas",
                            price:2599,
                            count:1
                        }
                    ]
        }
    },
})

const mobiles = Vue.component('mobiles', {
    template: `<div class="row">
    <div class="col-lg-4 col-sm-6" v-for="(mobile,index) of mobiles">
        <div class="card"  style="width: 95%" >
        <div class="card-body">
            <img class="card-img-top" id="img-1" v-bind:src="mobile.image" alt="Card image cap">
            <h5 class="card-title">{{mobile.name}}</h5>
            <p class="card-text">₹{{mobile.price}}</p>
            <a class="btn  btn-outline-warning" @click=addToCart(mobile,i)><p>add to cart</p></a>                    </div>
        </div>
    </div>
   </div>`,
    data: function () {
        return {
            name: "abdan",
            mobiles:[
                            {
                                id:16,
                                image:"https://www.lg.com/in/images/mobile-phones/md06155757/01_Thumb_350-V2.jpg",
                                name:"Samsung A7",
                                price:22000,
                                count:1
                            },
                            {   
                                id:17,
                                image:"https://www.91-img.com/pictures/125055-v12-xiaomi-mi-a2-mobile-phone-large-1.jpg?tr=h-330,q-75",
                                name:"Xiaomi Mi A3",
                                price:15000,
                                count:1
                            },
                            {
                                id:18,
                                image:"https://images.sg.content-cdn.io/cdn//in-resources/0211f4bd-ce6a-4162-95a2-f801e5ae9176/Images/ProductImages/Source/samsung-galaxy-note10-Plus-aura-black.jpg;width=300;height=450;scale=canvas;anchor=bottomcenter",
                                name:"Samsung Note 10",
                                price:10000,
                                count:1
                            },
                            {
                                id:19,
                                image:"https://i.gadgets360cdn.com/products/large/1559042948_635_redmi_k20.jpg",
                                name:"Xaiomi k20",
                                price:21999,
                                count:1
                            },
                            {
                                id:20,
                                image:"https://assets.mspimages.in/c/tr:w-200,h-320,cm-pad_resize/15562-9-1.jpg",
                                name:"Redmi 7s",
                                price:21999,
                                count:1
                            },
                            {
                                id:21,
                                image:"https://www.91-img.com/pictures/128557-v5-honor-9n-mobile-phone-large-1.jpg",
                                name:"Honor 9",
                                price:21999,
                                count:1
                            },
                            {
                                id:22,
                                image:"https://www.91-img.com/pictures/133807-v2-infinix-smart-3-plus-mobile-phone-large-1.jpg",
                                name:"Infix smart 3",
                                price:21999,
                                count:1
                            },
                            {
                                id:23,
                                image:"https://www.91-img.com/pictures/133807-v2-infinix-smart-3-plus-mobile-phone-large-1.jpg",
                                name:"Infix smart 3",
                                price:21999,
                                count:1
                            },
                            {
                                id:25,
                                image:"https://www.91-img.com/pictures/127895-v17-vivo-v11-mobile-phone-large-1.jpg",
                                name:"Vivo 11",
                                price:21999,
                                count:1
                            },
                      ]
        }
    }
});

const router = new VueRouter({
    routes: [
        {
            path: '/tshirts',
            name: 'tshirts',
            component: tshirts
        },
        {
            path: '/shoes',
            name: 'shoes',
            component: shoes
        },
        {
            path: '/mobiles',
            // name: 'mobiles',
            component: mobiles
        }
    ]
})


var app = new Vue({
    el: '#app-root',
    router,
    data: {
        name: "abdan",
    },
    methods: {
        addToCart(val) {
            this.store.push(val);
        }
    }
})

// var app2 = new Vue({
//     el:"#app-root2",
//     data:{
//         shoes:[{
//             id:7,
//             image:"https://sneakerbardetroit.com/wp-content/uploads/2016/04/adidas-xr1-olive-detailed-look-3.jpg",
//             name:"adidas",
//             price:2200,
//             count:1
//         },
//         {
//             id:8,
//             image:"https://boutique.humbleandrich.com/wp-content/uploads/2019/04/air-max-270-hot-punch-0.jpg",
//             name:"nike",
//             price:1250,
//             count:1
//         },
//         {
//             id:9,
//             image:"https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F1f5769e38b878980de0448f4108c0187%2F206594451%2Freebok-cotton-plus-corn-shoe.jpg&client=amp-blogside-v2&signature=8d8418f97e2160876ea65ac863394c3bbf25c9cd",
//             name:"reebok",
//             price:1550,
//             count:1
//         },
//         {
//             id:10,
//             image:"https://upload.wikimedia.org/wikipedia/commons/a/ae/An_Adidas_shoe.jpg",
//             name:"Adidas",
//             price:2200,
//             count:1
//         },
//         {
//             id:11,
//             image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoTeZ_ncDorY8sO9I4zInPSZolDor-hcZtIpUefiffcqPsY-Adg",
//             name:"Adidas",
//             price:1799,
//             count:1
//         },
//         {
//             id:12,
//             image:"https://img.fruugo.com/product/3/50/66140503_max.jpg",
//             name:"Adidas",
//             price:1799,
//             count:1
//         },
//         {
//             id:13,
//             image:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1547573831-adidas-new-shoes-continental-1547573813.jpg?crop=1xw:1xh;center,top&resize=480:*",
//             name:"Adidas",
//             price:1799,
//             count:1
//         },
//         {
//             id:14,
//             image:"https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/640/320/1862/1048/adidasbt.jpg?ve=1&tl=1?ve=1&tl=1",
//             name:"Adidas",
//             price:1799,
//             count:1
//         },
//         {
//             id:15,
//             image:"https://images.finishline.com/is/image/FinishLine/shdw_temp?$image_src=FinishLine/G27508_001&$ProductImageLink$",
//             name:"Adidas",
//             price:2599,
//             count:1
//         }
//     ]
//     },
//     methods:{
//         addToCart(val){
//             this.store.push(val);
//         }
//     }
// })

// var app3=new Vue({
//     el:"#app-root3",
//     data:{
//         mobiles:[
//             {
//                 id:16,
//                 image:"https://www.lg.com/in/images/mobile-phones/md06155757/01_Thumb_350-V2.jpg",
//                 name:"Samsung A7",
//                 price:22000,
//                 count:1
//             },
//             {   
//                 id:17,
//                 image:"https://www.91-img.com/pictures/125055-v12-xiaomi-mi-a2-mobile-phone-large-1.jpg?tr=h-330,q-75",
//                 name:"Xiaomi Mi A3",
//                 price:15000,
//                 count:1
//             },
//             {
//                 id:18,
//                 image:"https://images.sg.content-cdn.io/cdn//in-resources/0211f4bd-ce6a-4162-95a2-f801e5ae9176/Images/ProductImages/Source/samsung-galaxy-note10-Plus-aura-black.jpg;width=300;height=450;scale=canvas;anchor=bottomcenter",
//                 name:"Samsung Note 10",
//                 price:10000,
//                 count:1
//             },
//             {
//                 id:19,
//                 image:"https://i.gadgets360cdn.com/products/large/1559042948_635_redmi_k20.jpg",
//                 name:"Xaiomi k20",
//                 price:21999,
//                 count:1
//             },
//             {
//                 id:20,
//                 image:"https://assets.mspimages.in/c/tr:w-200,h-320,cm-pad_resize/15562-9-1.jpg",
//                 name:"Redmi 7s",
//                 price:21999,
//                 count:1
//             },
//             {
//                 id:21,
//                 image:"https://www.91-img.com/pictures/128557-v5-honor-9n-mobile-phone-large-1.jpg",
//                 name:"Honor 9",
//                 price:21999,
//                 count:1
//             },
//             {
//                 id:22,
//                 image:"https://www.91-img.com/pictures/133807-v2-infinix-smart-3-plus-mobile-phone-large-1.jpg",
//                 name:"Infix smart 3",
//                 price:21999,
//                 count:1
//             },
//             {
//                 id:23,
//                 image:"https://www.91-img.com/pictures/133807-v2-infinix-smart-3-plus-mobile-phone-large-1.jpg",
//                 name:"Infix smart 3",
//                 price:21999,
//                 count:1
//             },
//             {
//                 id:25,
//                 image:"https://www.91-img.com/pictures/127895-v17-vivo-v11-mobile-phone-large-1.jpg",
//                 name:"Vivo 11",
//                 price:21999,
//                 count:1
//             },
//         ]
//     },
//     methods:{
//         addToCart(val){
//             this.store.push(val);
//             console.log(this.store);
//         }
//     }
// })