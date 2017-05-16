
import { Routes }    from '@angular/router';
import { view3_1Component } from './view3_1.component';

export const routes: Routes = [
    { 
        path:'',
        component: view3_1Component,
        children: [
            { 
                path: '',   
                redirectTo: 'view3_1_1', 
                pathMatch: 'full',
                outlet: 'subview1'
            },
            {
                path: 'view3_1_1',
                loadChildren: 'app/level1/view3/view3_1/view3_1_1/view3_1_1.module#view3_1_1Module',
                outlet: 'subview1'
            },
            {
                path: 'view3_1_2',
                loadChildren: 'app/level1/view3/view3_1/view3_1_2/view3_1_2.module#view3_1_2Module',
                outlet: 'subview1'
            }
        ]
    }
];

