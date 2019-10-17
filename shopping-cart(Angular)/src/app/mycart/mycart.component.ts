import { Component } from '@angular/core';
import { Cart } from '../service/cart.services';

@Component({
    selector:'mycart',
    templateUrl:'./mycart.component.html',
    styleUrls:['./mycart.component.scss']
})

export class Mycart{
    things:any;
    all=0;
    constructor(private items:Cart){
        this.things = this.items.items;
        this.items.added = this.things.length;
        this.all = this.items.total;
    }
    remove(i){
        console.log(this.things);
        this.things.splice(i,1)
        this.items.added--;
        console.log(this.items.added);
    }
    
}