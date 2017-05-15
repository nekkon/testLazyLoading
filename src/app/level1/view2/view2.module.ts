import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule }    from '@angular/router';

import { view2Component } from './view2.component';
import { routes } from './view2.routing';

@NgModule({
  declarations: [
    view2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class view1Module { }
