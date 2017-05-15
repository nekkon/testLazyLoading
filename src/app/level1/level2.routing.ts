import { Routes }    from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/view1', pathMatch: 'full' },
    { path:'view1', component: LoginPage },
    { path:'level3', component: level3Component, 
        canActivateChild: [CanActivateRoute],
        children: [
            {
                path: '',
                component: IncomingPage,
                outlet: 'view'
            },
            {
                path: 'incoming',
                component: IncomingPage,
                outlet: 'view'
            },
            {
                path: 'outstanding',
                component: OutstandingPage,
                outlet: 'view'
            },
            {
                path: 'draft',
                component: DraftPage,
                outlet: 'view'
            },
            {
                path: 'completed',
                component: CompletedPage,
                outlet: 'view'
            },
            {
                path: 'new',
                component: NewDocPage,
                outlet: 'view'
            },
            { 
                path:'**', 
                component: Four04Page, 
                outlet: 'view' 
            }
        ]
    },

];
