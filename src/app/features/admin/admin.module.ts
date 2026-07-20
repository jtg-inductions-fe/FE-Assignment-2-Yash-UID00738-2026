import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { RestaurantsPageComponent } from './components/restaurants-page/restaurants-page.component';
import { RestaurantFormPageComponent } from './components/restaurant-form-page/restaurant-form-page.component';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';

@NgModule({
    declarations: [
        AdminDashboardComponent,
        RestaurantsPageComponent,
        RestaurantFormPageComponent,
        RestaurantFormComponent,
    ],
    imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
