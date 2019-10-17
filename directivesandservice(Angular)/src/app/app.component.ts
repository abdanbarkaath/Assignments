import { Component } from '@angular/core';
import {Text} from './service/text.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directivesandservice';
  text:any;
  constructor(private service:Text){
      this.text = this.service.sentence;
  }
}
