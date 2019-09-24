import { Component, Input } from '@angular/core';

@Component({
    selector:"sec-child",
    styleUrls:["./secchild.component.scss"],
    templateUrl:"./secchild.component.html"
})

export class Secchild{
    title:"second child"
    @Input() newUsers:any;
}