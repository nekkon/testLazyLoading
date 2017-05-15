import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule }    from '@angular/router';

import { view3Component } from './view3.component';
import { routes } from './view3.routing';
@NgModule({
  declarations: [
    view3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports:[
    view3Component
  ]
})
export class view3Module { }
