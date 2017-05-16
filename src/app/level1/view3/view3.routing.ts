import { Routes }    from '@angular/router';
import { view3Component } from './view3.component';

export const routes: Routes = [
    { 
        path:'',
        component: view3Component,
        children: [
            { 
                path: '',   
                redirectTo: 'view3_1', 
                pathMatch: 'full',
                outlet: 'view'
            },
            {
                path: 'view3_1',
                loadChildren: 'app/level1/view3/view3_1/view3_1.module#view3_1Module',
                outlet: 'view',
                    children: [
                        { 
                            path: '',   
                            redirectTo: 'view3_1_1', 
                            pathMatch: 'full',
                        },
                        {
                            path: 'view3_1_1',
                            loadChildren: 'app/level1/view3/view3_1/view3_1_1/view3_1_1.module#view3_1_1Module',
                        },
                        {
                            path: 'view3_1_2',
                            loadChildren: 'app/level1/view3/view3_1/view3_1_2/view3_1_2.module#view3_1_2Module',
                        }
                    ]
            },
            {
                path: 'view3_2',
                loadChildren: 'app/level1/view3/view3_2/view3_2.module#view3_2Module',
                outlet: 'view',
                    children: [
                        { 
                            path: '',   
                            redirectTo: 'view3_1_1', 
                            pathMatch: 'full',
                        },
                        {
                            path: 'view3_2_1',
                            loadChildren: 'app/level1/view3/view3_2/view3_2_1/view3_2_1.module#view3_2_1Module'
                        },
                        {
                            path: 'view3_2_2',
                            loadChildren: 'app/level1/view3/view3_2/view3_2_2/view3_2_2.module#view3_2_2Module'
                        }
                    ]
            }
        ]
    }
];
