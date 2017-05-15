import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule }    from '@angular/router';

import { view1Component } from './view1.component';
import { routes } from './view1.routing';
@NgModule({
  declarations: [
    view1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class view1Module { }
