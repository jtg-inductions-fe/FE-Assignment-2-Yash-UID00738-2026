import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth/auth.guard';
import { guestGuard } from './core/guards/guest/guest.guard';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './core/layout/dashboard-layout/dashboard-layout.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
    {
        path: 'auth',
        component: AuthLayoutComponent,
        canActivate: [guestGuard],
        loadChildren: () =>
            import('./features/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: '',
        component: DashboardLayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'owner',
                canActivate: [authGuard],
                data: { roles: ['owner'] },
                loadChildren: () =>
                    import('./features/owner/owner.module').then(
                        (m) => m.OwnerModule,
                    ),
            },
            {
                path: 'admin',
                canActivate: [authGuard],
                data: { roles: ['admin'] },
                loadChildren: () =>
                    import('./features/admin/admin.module').then(
                        (m) => m.AdminModule,
                    ),
            },
            {
                path: '**',
                component: NotFoundComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
