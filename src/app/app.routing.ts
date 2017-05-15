import { RouterModule, Routes }    from '@angular/router';

export const routes: Routes = [
  { path: '',   redirectTo: '/view1', pathMatch: 'full' },
  { path: 'view1',  },
  { path: 'level2',  },
  { path: '**', component: view2Component }
];
