import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule }    from '@angular/router';

import { view3_1Component } from './view3_1.component';
import { routes } from './view3_1.routing';
@NgModule({
  declarations: [
    view3_1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports:[
    view3_1Component
  ]
})
export class view3_1Module { }
