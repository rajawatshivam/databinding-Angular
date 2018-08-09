import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-son',
  template: `{{printmessage}} hi please work
  <app-pops (fin)="rMessage($event)"></app-pops>
  `,
  styleUrls: ['./son.component.css']
})
export class SonComponent  {

  constructor() { }

  printmessage:string;

  rMessage($event) {
    this.printmessage = $event
  }

}
