import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod4parentComponent } from './mod4parent/mod4parent.component';
import { Mod4childComponent } from './mod4parent/mod4child/mod4child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Mod4parentComponent, Mod4childComponent]
})
export class Module4Module { }
