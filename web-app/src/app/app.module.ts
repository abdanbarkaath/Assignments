import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './header-component/header.component';
import { Footer } from './footer-component/footer.component';
import { Firstdiv } from './firstdiv-component/firstdiv.component';
import { Seconddiv } from './seconddiv-component/seconddiv.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Firstdiv,
    Seconddiv,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
