import { Routes }    from '@angular/router';
import { level2Component } from './level2.component';

export const routes: Routes = [
  { path: '', redirectTo: '/level2Component', pathMatch: 'full' },
    { path:'level3', component: level2Component, 
        //canActivateChild: [CanActivateRoute],
        children: [
            {
                path: '',
                redirectTo: 'view1',
                pathMatch: 'full',
                outlet: 'view'
            },
            {
                path: 'view1',
                loadChildren: 'app/level1/view1/view1.module#view1Module',
                outlet: 'view'
            },
            {
                path: 'view2',
                loadChildren: 'app/level1/view2/view2.module#view2Module',
                outlet: 'view'
            }
        ]
    },

];
