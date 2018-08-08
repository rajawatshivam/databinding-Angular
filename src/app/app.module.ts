import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { Module1Module } from './module1/module1.module';
import { Mod1Component } from './module1/mod1/mod1.component';

const appRoutes:Routes=[
  {path:'module1/mod1', component:Mod1Component}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, Module1Module, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
