import { Routes }    from '@angular/router';

export const routes: Routes = [
            { 
                path: '',   
                redirectTo: '/view3_2_1', 
                pathMatch: 'full',
                outlet: 'view'
            },
            {
                path: 'view3_2_1',
                loadChildren: 'app/level1/view3/view3_2/view3_2_1.module#view3_2_1Module',
                outlet: 'view'
            },
            {
                path: 'view3_2_2',
                loadChildren: 'app/level1/view3/view3_2/view3_2_2.module#view3_2_2Module',
                outlet: 'view'
            }
        ];
