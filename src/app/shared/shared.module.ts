import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { StatListComponent } from './components/stat-list/stat-list.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [
        ButtonComponent,
        NavItemComponent,
        DashboardListComponent,
        StatCardComponent,
        StatListComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatDividerModule,
        MatIconModule,
        MatBadgeModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
    ],
    exports: [
        ButtonComponent,
        NavItemComponent,
        DashboardListComponent,
        StatCardComponent,
        StatListComponent,
        MatMenuModule,
        MatDividerModule,
        MatBadgeModule,
        MatSidenavModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
    ],
})
export class SharedModule {}
