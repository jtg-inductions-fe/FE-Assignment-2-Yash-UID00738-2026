import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth/auth.guard';
import { guestGuard } from './core/guards/guest/guest.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
    {
        path: 'auth',
        canActivate: [guestGuard],
        loadChildren: () =>
            import('./features/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'owner-dashboard',
        canActivate: [authGuard],
        data: { roles: ['owner'] },
        loadChildren: () =>
            import('./features/owner/owner.module').then((m) => m.OwnerModule),
    },
    {
        path: 'admin-dashboard',
        canActivate: [authGuard],
        data: { roles: ['admin'] },
        loadChildren: () =>
            import('./features/admin/admin.module').then((m) => m.AdminModule),
    },
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
