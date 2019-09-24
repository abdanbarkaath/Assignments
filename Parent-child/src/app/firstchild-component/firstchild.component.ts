import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:"first-child",
    styleUrls:["./firstchild.component.scss"],
    templateUrl:"./firstchild.component.html"
})

export class Firstchild{
    title:"first child" 
    @Input ()loop:number;
    check = this.loop;
    userInputs=[];
    @Output() addChild:EventEmitter<any>= new EventEmitter<any>();
    addInputs(textvalue){
        console.log(this.check);
        this.userInputs.push({value:textvalue})
        // console.log(textvalue);
        this.addChild.emit(this.userInputs)
    }
}