import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '@core/services/dashboard/dashboard.service';
import { Restaurant } from '@models/dashboard.model';

@Component({
    selector: 'app-restaurant-form-page',
    templateUrl: './restaurant-form-page.component.html',
    styleUrls: ['./restaurant-form-page.component.scss'],
})
export class RestaurantFormPageComponent implements OnInit {
    restaurantData: Restaurant | null = null;
    isEditMode = false;
    isLoading = true;

    constructor(
        private route: ActivatedRoute,
        private dashboardService: DashboardService,
    ) {}

    async ngOnInit(): Promise<void> {
        const id = this.route.snapshot.paramMap.get('id');

        if (id) {
            this.isEditMode = true;
            this.restaurantData =
                (await this.dashboardService.getRestaurantById(id)) ?? null;
        } else {
            this.isEditMode = false;
            this.restaurantData = null;
        }

        this.isLoading = false;
    }
}
