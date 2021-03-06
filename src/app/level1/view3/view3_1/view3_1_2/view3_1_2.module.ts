import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule }    from '@angular/router';

import { view3_1_2Component } from './view3_1_2.component';
import { routes } from './view3_1_2.routing';
@NgModule({
  declarations: [
    view3_1_2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports:[
    view3_1_2Component,
    RouterModule
  ]
})
export class view3_1_2Module { }
