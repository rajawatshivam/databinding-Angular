import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { Module1Module } from './module1/module1.module';
import { Mod1Component } from './module1/mod1/mod1.component';
import { Mod2Component } from './module2/mod2/mod2.component';
import { Module2Module } from './module2/module2.module';
import { Module3Module } from './module3/module3.module';
import { Module5Module } from './module5/module5.module';
import { Module6Module } from './module6/module6.module';
import { ParentComponent } from './module3/parent/parent.component';
import { ChildComponent } from './module3/parent/child/child.component';
import { Mod4childComponent } from './module4/mod4parent/mod4child/mod4child.component';
import { Mod4parentComponent } from './module4/mod4parent/mod4parent.component';
import { Module4Module } from './module4/module4.module';
import { GrandpopsComponent } from './module5/grandpops/grandpops.component';
import { PopsComponent } from './module5/pops/pops.component';
import { SonComponent } from './module5/son/son.component';

const appRoutes:Routes=[
  {path:'module1/mod1', component:Mod1Component},
  {path:'module2/mod2', component:Mod2Component},
  {path:'module3/parent', component:ParentComponent},
  {path:'module3/child', component:ChildComponent},
  {path:'module4/child', component:Mod4childComponent},
  {path:'module4/parent', component:Mod4parentComponent},
  {path:'module5/grandpops', component:GrandpopsComponent},
  {path:'module5/pops', component:PopsComponent},
  {path:'module5/son', component:SonComponent},
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, Module1Module, RouterModule.forRoot(appRoutes), Module2Module, Module3Module,Module4Module, Module5Module, Module6Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
