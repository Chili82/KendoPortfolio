import { Component } from '@angular/core';


@Component({
    template: `<h1>{{title}}</h1>
    <button kendoButton (click)="onButtonClick()" [primary]="true">My Kendo UI Button</button>`
})

export class GrafikonComponent {
    title = 'Hello World!';
    onButtonClick() {
        this.title = 'Hello from Kendo UI!';
    }
}