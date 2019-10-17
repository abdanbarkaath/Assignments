import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
    selector:'[first]',
    host:{
        '(click)':'clicked()'
    }
})


export class First {

    constructor(private eleRef:ElementRef){
        this.eleRef.nativeElement.style.color="green";
        this.eleRef.nativeElement.textContent = "ahha";
    }
    clicked(){
        console.log("hello");
    }
    
    ngOnInit(){
        console.log("===========================");
    }
}