import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { Module1Module } from './module1/module1.module';
import { Mod1Component } from './module1/mod1/mod1.component';
import { Mod2Component } from './module2/mod2/mod2.component';
import { Module2Module } from './module2/module2.module';
import { Module3Module } from './module3/module3.module';
import { Module4Module } from './module4/module4.module';
import { Module5Module } from './module5/module5.module';
import { Module6Module } from './module6/module6.module';
import { ParentComponent } from './module3/parent/parent.component';
import { ChildComponent } from './module3/child/child.component';

const appRoutes:Routes=[
  {path:'module1/mod1', component:Mod1Component},
  {path:'module2/mod2', component:Mod2Component},
  {path:'module3/child', component:ChildComponent},
  {path:'module3/parent', component:ParentComponent}
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, Module1Module, RouterModule.forRoot(appRoutes), Module2Module, Module3Module, Module4Module, Module5Module, Module6Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
