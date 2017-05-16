import { Routes }    from '@angular/router';

export const routes: Routes = [
    {
        path: 'view3_2_1',
        loadChildren: 'app/level1/view3/view3_2/view3_2_1/view3_2_1.module#view3_2_1Module'
    },
    {
        path: 'view3_2_2',
        loadChildren: 'app/level1/view3/view3_2/view3_2_2/view3_2_2.module#view3_2_2Module'
    }
];
