import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grandpops',
  templateUrl: './grandpops.component.html',
  styleUrls: ['./grandpops.component.css']
})
export class GrandpopsComponent {
  message: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }
}
