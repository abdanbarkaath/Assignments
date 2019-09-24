import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Parent-child';
  users=[];
  increment:number=0;
  addChild(e){
    // console.log(e[this.increment].value);
    this.users.push({value:e[this.increment].value,times:this.increment})
    this.increment++;
  }
}
