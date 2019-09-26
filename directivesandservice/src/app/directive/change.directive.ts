import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[change]'
})

export class Change{
    store:string;
    sentence:string;
    value:string;
    constructor(private display:ElementRef){
    }

    ngAfterViewInit(){
        this.store=this.display.nativeElement.firstChild.textContent.charAt(0).toUpperCase()
        this.value=this.display.nativeElement.firstChild.textContent.slice(1);
        // console.log(this.display.nativeElement.firstChild.innerHTML);
        // console.log(this.display);
        this.display.nativeElement.style.color ="red";
        this.display.nativeElement.style.margin ="0 auto";
        this.display.nativeElement.style.textAlign ="center";
        this.display.nativeElement.style.backgroundColor ="yellow";
        this.display.nativeElement.style.width ="50%";
        this.display.nativeElement.style.height ="20%";
        this.display.nativeElement.style.fontsize ="400px";
        this.sentence = this.store + this.value;
        this.display.nativeElement.firstChild.innerHTML = this.sentence;
    }
}