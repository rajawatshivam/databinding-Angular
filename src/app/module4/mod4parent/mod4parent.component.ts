import { Component } from '@angular/core';


@Component({
  selector: 'app-mod4parent',
  template: `
  Message: {{ mes }}
  <app-mod4child (messageEvent)="res($event)"></app-mod4child>
`,
  styleUrls: ['./mod4parent.component.css']
})
export class Mod4parentComponent {

  constructor() { }

  mes:string;
  res($event) {
    this.mes = $event
  }
}
