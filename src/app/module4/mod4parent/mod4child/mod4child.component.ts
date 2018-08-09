import { Component ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mod4child',
  templateUrl: './mod4child.component.html',
  styleUrls: ['./mod4child.component.css']
})
export class Mod4childComponent {
  message: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }
} 