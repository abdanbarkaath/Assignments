import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Text } from './service/text.service';
import{ Change } from './directive/change.directive' 

@NgModule({
  declarations: [
    AppComponent,
    Change
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Text],
  bootstrap: [AppComponent]
})
export class AppModule { }
