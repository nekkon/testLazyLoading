import { Routes }    from '@angular/router';
import { level2Component } from './level2.component';

export const routes: Routes = [
  { path: '', redirectTo: '/level2Component', pathMatch: 'full' },
    { path:'view3', component: level2Component, 
        //canActivateChild: [CanActivateRoute],
        children: [
            {
                path: '',
                loadChildren: 'app/level1/view1/view1.module#view1Module',
                outlet: 'view'
            },
            {
                path: 'incoming',
                loadChildren: 'app/level1/view2/view2.module#view2Module',
                outlet: 'view'
            }
        ]
    },

];
