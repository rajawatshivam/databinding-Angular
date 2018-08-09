import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrandpopsComponent } from './grandpops/grandpops.component';
import { PopsComponent } from './pops/pops.component';
import { SonComponent } from './son/son.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GrandpopsComponent, PopsComponent, SonComponent]
})
export class Module5Module { }
