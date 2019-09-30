import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tshirts } from './tshirts/tshirts.component';
import { Mobiles } from './mobiles/mobiles.component';
import { Shoes } from './shoes/shoes.component';
import{RouterModule,Routes} from '@angular/router'
import { Mycart } from './mycart/mycart.component';
import { Cart } from './service/cart.services';

const routes:Routes = [
                      {path:'shoes',component:Shoes},
                      {path:'mobiles',component:Mobiles},
                      {path:'tshirts',component:Tshirts},
                      {path:'cart',component:Mycart},
                      ]

@NgModule({
  declarations: [
    AppComponent,
    Tshirts,
    Mobiles,
    Shoes,
    Mycart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Cart],
  bootstrap: [AppComponent]
})
export class AppModule { }
