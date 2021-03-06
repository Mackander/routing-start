import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { AuthGuardService } from './auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id/:name', component: UserComponent }
        ]
    },

    {
        path: 'servers',
        // canActivate: [AuthGuardService],
        canActivateChild: [AuthGuardService],
        component: ServersComponent, children: [
            { path: ':id', component: ServerComponent },
            { path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGuard] }
        ]
    },
    { path: 'not-found', component: PageNotFoundComponent },
    // Using wild card to catch all un-wanted routes,
    // also order is also very important, it always be the last one.
    { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
