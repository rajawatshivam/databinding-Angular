import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-pops',
  template: `
  <app-grandpops (messageEvent)="receiveMessage($event)"></app-grandpops>
`,
  styleUrls: ['./pops.component.css']
})
export class PopsComponent  {
  Msg:string;
  ms:string;
  @Output() fin=new  EventEmitter();
  constructor() { }
  receiveMessage($event) {
    this.Msg=$event;
    this.fin.emit(this.Msg); 
    //this.rs();
  }
  // rs() {
 
  // }


}
