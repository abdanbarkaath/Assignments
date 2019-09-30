import { Component } from '@angular/core';
import { Cart } from '../service/cart.services';

@Component({
    selector:'shoes',
    templateUrl:'./shoes.component.html',
    styleUrls:['./shoes.component.scss']
})

export class Shoes{
    tittle:"shoes";
    rank="abdan"

    constructor(private item:Cart){
        // this.item.items.push(this.rank)
        // console.log(this.item.items);
    }

    addToCart(shoes){
        var exists=false
            this.item.items.filter(val=>{
                if(shoes.id === val.id) {
                    val.count +=1;
                    exists = true
                    console.log("addedd");
                }
            });
        
        if(!exists) {
            this.item.items.push(shoes)
            console.log("pushed");
        }
        }
    shoes=[{
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