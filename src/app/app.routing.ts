import { Routes }    from '@angular/router';
import { view2Component } from './level1/view2/view2.mo'

export const routes: Routes = [
  { path: '',   redirectTo: '/view1', pathMatch: 'full' },
  { path: 'view1',  },
  { path: 'level2',  },
  { path: '**', loadChildren: 'level1/view1/view1.module#view1Module' }
];
