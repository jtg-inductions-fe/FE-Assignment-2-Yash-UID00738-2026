import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [ButtonComponent, HeaderComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatDividerModule,
        MatIconModule,
    ],
    exports: [ButtonComponent, HeaderComponent],
})
export class SharedModule {}
