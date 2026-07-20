import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@core/services/dashboard/dashboard.service';
import { DashboardData } from '@models/dashboard.model';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
    dashboardData!: DashboardData;
    allRestaurants: any[] = [];

    constructor(private dashboardService: DashboardService) {}

    async ngOnInit(): Promise<void> {
        //get data through resolver
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
            this.dashboardData = this.buildDashboardData([selectedRestaurant]);
        }
    }

    private buildDashboardData(restaurants: any[]): DashboardData {
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
                r.topCustomers.map((c: any) => ({
                    id: c.id,
                    imageUrl: c.imageUrl,
                    primaryText: c.name,
                    secondaryText: c.email,
                    valueText: c.purchaseAmount,
                })),
            ),

            topDishes: restaurants.flatMap((r) =>
                r.topDishes.map((d: any) => ({
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
    ): any[] {
        return [
            {
                title: 'Total Revenue',
                value: `$${revenue.toFixed(2)}`,
                icon: 'attach_money',
                iconColor: '#0e9f6e',
                iconBgColor: '#e2f4ed',
            },
            {
                title: 'Total Orders',
                value: orders.toString(),
                icon: 'shopping_cart',
                iconColor: '#3b82f6',
                iconBgColor: '#e1effe',
            },
            {
                title: 'Completed Orders',
                value: completed.toString(),
                icon: 'check_circle',
                iconColor: '#f59e0b',
                iconBgColor: '#fdf3c7',
            },
            {
                title: 'Active Restaurants',
                value: activeCount.toString(),
                icon: 'restaurant',
                iconColor: '#8b5cf6',
                iconBgColor: '#ede9fe',
            },
        ];
    }
}
