import { Component, OnInit, OnChanges, SimpleChange, Input, SimpleChanges } from '@angular/core';
import{FirstService} from './services/firstservice.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges {
  title = 'Hooks';
  age=0;
  inCode(e){
    this.age=e+5;
    console.log(this.age);
  }
  // @Input() inCode = <any>;

  constructor(private firstService:FirstService){
    this.firstService.printName();
  }

  ngOnInit(){
    console.log("parent init");
  }

  ngAfterViewInit(){
    console.log("parent view init");
  }

  ngAfterViewChecked(){
    console.log("parent after checked");
  }

  ngDoCheck(){
    console.log("parent do check");
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("parent change");
  }
  
  ngDestroy(){
    console.log("parent destroy");
  }

  // ngOnChanges(changes:SimpleChange){
  //   console.log(changes);
  // }
}
