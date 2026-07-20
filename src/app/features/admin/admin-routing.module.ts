import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RestaurantsPageComponent } from './components/restaurants-page/restaurants-page.component';

const routes: Routes = [
    {
        path: '',
        component: AdminDashboardComponent,
    },
    {
        path: 'restaurants',
        component: RestaurantsPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
