import { Component } from '@angular/core';
import { Cart } from '../service/cart.services';

@Component({
    selector:'tshirts',
    templateUrl:'./tshirts.component.html',
    styleUrls:['./tshirts.component.scss']
})

export class Tshirts{
    tittle:"tshirts"

    constructor(private item:Cart){
        // this.item.items.push(this.rank)
        // console.log(this.item.items);
    }

    addToCart(tshirts){
        var exists=false
            this.item.items.filter(val=>{
                if(tshirts.id === val.id) {
                    val.count +=1;
                    exists = true
                    console.log("addedd");
                }
            });
        
        if(!exists) {
            this.item.items.push(tshirts)
            console.log("pushed");
        }
        }
    tshirts=[
        {   
            id:1,
            image:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/1/22/da35719a-e5a3-47e1-9abf-b77aafd8c32c1548138100408-1.jpg",
            name:"Calvin klien",
            price:700,
            count:1
        },
        {
            id:2,
            image:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1780784/2017/3/10/11489139677796-United-Colors-of-Benetton-Men-Grey-Melange-Solid-V-Neck-T-Shirt-5021489139677579-1.jpg",
            name:"Lee",
            price:1200,
            count:1
        },
        {
            id:3,
            image:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10360601/2019/8/9/e6fe7f53-ea25-40a0-86ba-1d90058621441565349665438-HM-Men-Black-Solid-V-neck-T-shirt-Slim-Fit-7161565349664543-1.jpg",
            name:"H&M",
            price:3000,
            count:1
        },
        {
            id:4,
            image:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2303557/2018/1/24/11516793447454-Roadster-Men-Navy-Blue-Striped-Henley-Neck-T-shirt-3351516793447274-1.jpg",
            name:"Hrx",
            price:799,
            count:1
        },
        {
            id:5,
            image:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10360957/2019/8/13/e45e8c81-a97a-4cb5-b1e6-7037045f1b891565683193840-HM-Men-Grey-Striped-3-pack-T-shirts-Regular-Fit-987156568319-1.jpg",
            name:"Roadster",
            price:999,
            count:1
        },
        {
            id:6,
            image:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7187020/2018/12/18/a882e837-454a-45b8-a064-45660ba6ee201545124603056-Puma-Men-Tshirts-8171545124601033-1.jpg",
            name:"Puma",
            price:1999,
            count:1
        },
    ]
}