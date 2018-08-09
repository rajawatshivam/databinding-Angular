import { ChilddComponent } from '../childd/childd.component';
import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
 selector: 'app-paren',
 templateUrl: './paren.component.html',
 styleUrls: ['./paren.component.css']
})
export class ParenComponent implements AfterViewInit {
 @ViewChild(ChilddComponent) childd;

 constructor() { }

 mes:string;

 ngAfterViewInit() {
   this.mes = this.childd.message;
 }
}