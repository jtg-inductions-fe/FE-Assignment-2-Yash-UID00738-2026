import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurantsPageComponent } from './components/restaurants-page/restaurants-page.component';
@NgModule({
    declarations: [AdminDashboardComponent, RestaurantsPageComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        ReactiveFormsModule,
    ],
})
export class AdminModule {}
