import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule }    from '@angular/router';

import { level2Component } from './level2.component';
import { routes } from './level2.routing';
@NgModule({
  declarations: [
    level2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports:[
    level2Component
  ]
})
export class level2Module { }
