import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../core/services/dashboard/dashboard.service';

@Component({
    selector: 'app-restaurants-page',
    templateUrl: './restaurants-page.component.html',
    styleUrls: ['./restaurants-page.component.scss'],
})
export class RestaurantsPageComponent implements OnInit {
    restaurants: any[] = [];

    constructor(private dashboardService: DashboardService) {}

    async ngOnInit(): Promise<void> {
        this.restaurants = await this.dashboardService.getAllRestaurants();
    }
}
