import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@core/services/dashboard/dashboard.service';
import {
    DashboardData,
    Restaurant,
    StatCardData,
    TopCustomer,
    TopDish,
} from '@models/dashboard.model';
import { STAT_CARD_ICONS_AND_COLORS } from '@constants/app.constants';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
    dashboardData!: DashboardData;
    allRestaurants: Restaurant[] = [];

    constructor(private dashboardService: DashboardService) {}

    async ngOnInit(): Promise<void> {
        this.allRestaurants = await this.dashboardService.getAllRestaurants();
        this.dashboardData = this.buildDashboardData(this.allRestaurants);
    }

    onRestaurantChange(selectedId: string): void {
        if (selectedId === 'all') {
            this.dashboardData = this.buildDashboardData(this.allRestaurants);
        } else {
            const selectedRestaurant = this.allRestaurants.find(
                (r) => r.id === selectedId,
            );
            if (selectedRestaurant) {
                this.dashboardData = this.buildDashboardData([
                    selectedRestaurant,
                ]);
            }
        }
    }

    private buildDashboardData(restaurants: Restaurant[]): DashboardData {
        let totalRevenue = 0;
        let totalOrders = 0;
        let completedOrders = 0;

        restaurants.forEach((restaurant) => {
            totalRevenue += restaurant.metrics.totalRevenue;
            totalOrders += restaurant.metrics.totalOrders;
            completedOrders += restaurant.metrics.completedOrders;
        });

        return {
            stats: this.getStatCardConfig(
                totalRevenue,
                totalOrders,
                completedOrders,
                restaurants.length,
            ),

            topCustomers: restaurants.flatMap((r) =>
                r.topCustomers.map((c: TopCustomer) => ({
                    id: c.id,
                    imageUrl: c.imageUrl,
                    primaryText: c.name,
                    secondaryText: c.email,
                    valueText: c.purchaseAmount,
                })),
            ),

            topDishes: restaurants.flatMap((r) =>
                r.topDishes.map((d: TopDish) => ({
                    id: d.id,
                    primaryText: d.dishName,
                    secondaryText: d.restaurantName,
                    valueText: d.ordersQuantity,
                })),
            ),
        };
    }

    private getStatCardConfig(
        revenue: number,
        orders: number,
        completed: number,
        activeCount: number,
    ): StatCardData[] {
        return [
            {
                title: 'Total Revenue',
                value: `$${revenue.toFixed(2)}`,
                ...STAT_CARD_ICONS_AND_COLORS.revenue,
            },
            {
                title: 'Total Orders',
                value: orders.toString(),
                ...STAT_CARD_ICONS_AND_COLORS.orders,
            },
            {
                title: 'Completed Orders',
                value: completed.toString(),
                ...STAT_CARD_ICONS_AND_COLORS.completed,
            },
            {
                title: 'Active Restaurants',
                value: activeCount.toString(),
                ...STAT_CARD_ICONS_AND_COLORS.active,
            },
        ];
    }
}
