import { Routes }    from '@angular/router';

export const routes: Routes = [
  { path: '',   redirectTo: '/view1', pathMatch: 'full' },
  { path: 'view1', loadChildren: 'app/level1/view1/view1.module#view1Module' },
  { path: 'level2', loadChildren: 'app/level1/level2.module#level2Module' },
  { path: '**', loadChildren: 'app/level1/view2/view2.module#view2Module' }
];
