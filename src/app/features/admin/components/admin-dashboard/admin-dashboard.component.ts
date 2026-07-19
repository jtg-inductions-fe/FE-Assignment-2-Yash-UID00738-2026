import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../core/services/dashboard/dashboard.service';
import { DashboardData } from '../../../../models/dashboard.model';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
    dashboardData!: DashboardData;
    allRestaurants: any[] = [];

    constructor(private dashboardService: DashboardService) {}

    ngOnInit(): void {
        this.dashboardService.getAllRestaurants().subscribe((data) => {
            this.allRestaurants = data;
            this.dashboardData = this.allRestaurantsAggregate(
                this.allRestaurants,
            );
        });
    }

    onRestaurantChange(selectedId: string): void {
        if (selectedId === 'all') {
            this.dashboardData = this.allRestaurantsAggregate(
                this.allRestaurants,
            );
        } else {
            this.dashboardData = this.allRestaurants.find(
                (r) => r.id === selectedId,
            );
        }
    }

    private allRestaurantsAggregate(restaurants: any[]): DashboardData {
        let totalRevenue = 0;
        let totalOrders = 0;
        let completedOrders = 0;

        restaurants.forEach((restaurant) => {
            restaurant.stats.forEach((stat: any) => {
                if (stat.title === 'Total Revenue') {
                    totalRevenue += parseFloat(stat.value.replace('$', ''));
                } else if (stat.title === 'Total Orders') {
                    totalOrders += parseInt(stat.value, 10);
                } else if (stat.title === 'Completed Orders') {
                    completedOrders += parseInt(stat.value, 10);
                }
            });
        });

        return {
            stats: [
                {
                    title: 'Total Revenue',
                    value: `$${totalRevenue.toFixed(2)}`,
                    icon: 'attach_money',
                    iconColor: '#0e9f6e',
                    iconBgColor: '#e2f4ed',
                },
                {
                    title: 'Total Orders',
                    value: totalOrders.toString(),
                    icon: 'shopping_cart',
                    iconColor: '#3b82f6',
                    iconBgColor: '#e1effe',
                },
                {
                    title: 'Completed Orders',
                    value: completedOrders.toString(),
                    icon: 'check_circle',
                    iconColor: '#f59e0b',
                    iconBgColor: '#fdf3c7',
                },
                {
                    title: 'Active Restaurants',
                    value: restaurants.length.toString(),
                    icon: 'restaurant',
                    iconColor: '#8b5cf6',
                    iconBgColor: '#ede9fe',
                },
            ],
            topCustomers: restaurants.flatMap((r) => r.topCustomers),
            topDishes: restaurants.flatMap((r) => r.topDishes),
        };
    }
}
