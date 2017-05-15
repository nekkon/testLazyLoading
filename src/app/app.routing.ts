import { Routes }    from '@angular/router';

export const routes: Routes = [
  { path: '',   redirectTo: '/view1', pathMatch: 'full' },
  { path: 'view1', loadChildren: 'app/level1/view1/view1.module#view1Module' },
  { path: 'view2', loadChildren: 'app/level1/view2/view2.module#view2Module' },
  { path: 'view3', loadChildren: 'app/level1/view3/view3.module#view3Module' },
  { path: '**', loadChildren: 'app/level1/view2/view2.module#view2Module' }
];
