import { Output, EventEmitter, Component, Input, OnInit, ViewChild, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector:"child",
    templateUrl:"./child.component.html",
    styleUrls:["./child.component.scss"]
})

export class Child implements OnInit,OnChanges{
    title:"abdan";
    value = 10;
    @Input () updatedValue:any;
    @Output () outCode:EventEmitter<any> = new EventEmitter<any>();

    constructor(){
        console.log("constructor");
    }

    ngAfterViewInit(){
        console.log("child view Init");
    }

    ngOnInit(){
        console.log("child init");
        console.log(this.updatedValue);
    }

    ngDoCheck(){
        console.log("child do check");
    }
    
    ngAfterViewChecked(){
        console.log("child after checked");
    }

    ngOnChanges(changes:SimpleChanges){
        console.log("child change");
    }

    sendCode(){
        console.log("in the child block");
        this.outCode.emit(this.value);
    }
    
    ngDestroy(){
        console.log("child destroy");
    }
}