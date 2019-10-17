import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child } from './child-component/child.component';
import{ First } from './shared/first.directive';
import{ FirstService} from'./services/firstservice.service';

@NgModule({
  declarations: [
    AppComponent,
    Child,
    First
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
