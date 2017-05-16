import { Routes }    from '@angular/router';

export const routes: Routes = [
            {
                path: 'view3_1/view3_1_1',
                loadChildren: 'app/level1/view3/view3_1/view3_1_1/view3_1_1.module#view3_1_1Module',
                outlet: 'subview'
            },
            {
                path: 'view3_1/view3_1_2',
                loadChildren: 'app/level1/view3/view3_1/view3_1_2/view3_1_2.module#view3_1_2Module',
                outlet: 'subview'
            }
        ];
