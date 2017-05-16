import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule }    from '@angular/router';

import { view3_2_2Component } from './view3_2_2.component';
import { routes } from './view3_2_2.routing';
@NgModule({
  declarations: [
    view3_2_2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports:[
    view3_2_2Component
  ]
})
export class view3_2_2Module { }
