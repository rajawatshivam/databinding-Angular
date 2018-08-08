import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css']
})
export class Mod1Component implements OnInit {
  text:string;
  constructor() { }

  ngOnInit() {
  }
  clickMe(title:string) { 
    this.text=title
  }
}
