import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { view1Component } from './view1.component';

@NgModule({
  declarations: [
    view1Component
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class AppModule { }
