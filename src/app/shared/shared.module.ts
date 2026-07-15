import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
    declarations: [
        ButtonComponent,
        HeaderComponent,
        SidebarComponent,
        NavItemComponent,
        NotFoundComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatDividerModule,
        MatIconModule,
    ],
    exports: [
        ButtonComponent,
        HeaderComponent,
        SidebarComponent,
        NotFoundComponent,
    ],
})
export class SharedModule {}
