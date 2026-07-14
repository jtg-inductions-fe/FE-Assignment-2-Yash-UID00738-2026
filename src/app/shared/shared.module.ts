import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [ButtonComponent, HeaderComponent],
    imports: [CommonModule, MatButtonModule],
    exports: [ButtonComponent, HeaderComponent],
})
export class SharedModule {}
