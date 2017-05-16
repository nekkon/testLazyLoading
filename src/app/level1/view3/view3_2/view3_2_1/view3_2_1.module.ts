import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule }    from '@angular/router';

import { view3_2_1Component } from './view3_2_1.component';
import { routes } from './view3_2_1.routing';
@NgModule({
  declarations: [
    view3_2_1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports:[
    view3_2_1Component,
    RouterModule
  ]
})
export class view3_2_1Module { }
