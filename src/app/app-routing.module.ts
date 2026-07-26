import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth/auth.guard';
import { guestGuard } from './core/guards/guest/guest.guard';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './core/layout/dashboard-layout/dashboard-layout.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AppRoute, UserRole } from '@models/enums.model';

const routes: Routes = [
    {
        path: AppRoute.AUTH,
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
                path: AppRoute.OWNER,
                canActivate: [authGuard],
                data: { roles: [UserRole.OWNER] },
                loadChildren: () =>
                    import('./features/owner/owner.module').then(
                        (m) => m.OwnerModule,
                    ),
            },
            {
                path: AppRoute.ADMIN,
                canActivate: [authGuard],
                data: { roles: [UserRole.ADMIN] },
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
