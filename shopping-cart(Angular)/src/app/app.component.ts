import { Component } from '@angular/core';
import { Cart } from './service/cart.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';
  list:any;
  constructor(private values:Cart){
    this.list=this.values.items;
  }
}
