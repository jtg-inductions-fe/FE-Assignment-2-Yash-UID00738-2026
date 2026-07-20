import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
@NgModule({
    declarations: [
        HeaderComponent,
        NotFoundComponent,
        SidebarComponent,
        DashboardLayoutComponent,
        AuthLayoutComponent,
    ],
    imports: [CommonModule, SharedModule, RouterModule],
})
export class CoreModule {}
