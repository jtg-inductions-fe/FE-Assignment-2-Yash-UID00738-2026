import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
    declarations: [ButtonComponent, NavItemComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatDividerModule,
        MatIconModule,
        MatBadgeModule,
        MatSidenavModule,
    ],
    exports: [
        ButtonComponent,
        NavItemComponent,
        MatButtonModule,
        MatMenuModule,
        MatDividerModule,
        MatIconModule,
        MatBadgeModule,
        MatSidenavModule,
    ],
})
export class SharedModule {}
