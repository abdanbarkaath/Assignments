import { Component } from '@angular/core';
import { Cart } from '../service/cart.services';

@Component({
    selector:'mobiles',
    templateUrl:'./mobiles.component.html',
    styleUrls:['./mobiles.component.scss']
})

export class Mobiles{
    tittle:"mobiles"
    i=0;
    constructor(private item:Cart){
        // this.item.items.push(this.rank)
        // console.log(this.item.items);
    }

    
    addToCart(mobiles){
        var exist=false;
       this.item.items.forEach(function(val){
           if(mobiles['id'] === val['id']){
               val.count +=1;
               console.log("added");
               console.log(val.count);
               exist = true;
           }
       })
       if(!exist){
           this.item.items.push(mobiles);
           console.log("pushed");
       }
   }
    // addToCart(mobiles){
    //     var exists=false
    //         this.item.items.filter(val=>{
    //             if(mobiles.id === val.id) {
    //                 val.count +=1;
    //                 exists = true
    //                 console.log("addedd");
    //             }
    //         });
        
    //     if(!exists) {
    //         this.item.items.push(mobiles)
    //         console.log("pushed");
    //     }
    //     }

    // addToCart(mobiles){
    //     // console.log(this.item);
    //     // this.item.items.push(mobiles);
    //     this.item.items.forEach(function(val){
    //         console.log(val['id']);
    //         if(mobiles['id'] === val['id']){
    //             val.count +=1;
    //             console.log("added");
    //         }else{
    //             console.log("hello");
    //             this.item.items.push(mobiles);
    //             console.log("pushed");
    //         }
    //     })
    // }

    // addToCart(mobiles){
    //     if(this.item.items.length>0){
    //         for(this.i=0;this.i<this.item.items.length;this.i++){
    //             if(mobiles.id === this.item.items[this.i].id){
                    
    //                 console.log(this.count);
    //                 this.item.added++;
    //             }else{
    //                 this.item.items.push(mobiles)
    //                 this.item.added++;
    //             }
    //         }
    //     }
    //     else{
    //         this.item.items.push(mobiles)
    //         this.item.added++;
    //     }
    // }

    // addToCart(mobiles,i){
    //     this.item.items.push(mobiles);
    //     console.log(mobiles);
    //     this.item.added++;
    //     alert(mobiles.name+" added");
    // }


    mobiles=[
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
            id:24,
            image:"https://www.91-img.com/pictures/127895-v17-vivo-v11-mobile-phone-large-1.jpg",
            name:"Vivo 11",
            price:21999,
            count:1
        },
    ]
}