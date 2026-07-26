export interface TopCustomer {
    id: number;
    imageUrl: string;
    name: string;
    email: string;
    purchaseAmount: string;
}

export interface TopDish {
    id: number;
    dishName: string;
    restaurantName: string;
    ordersQuantity: string;
}

export interface RestaurantMetrics {
    totalRevenue: number;
    totalOrders: number;
    completedOrders: number;
}

export interface Restaurant {
    id: string;
    name: string;
    address: string;
    owners: string[];
    metrics: RestaurantMetrics;
    topCustomers: TopCustomer[];
    topDishes: TopDish[];
}

export interface StatCardData {
    title: string;
    value: string | number;
    icon: string;
    iconColor: string;
    iconBgColor: string;
}

export interface DashboardListItem {
    id: string | number;
    imageUrl?: string;
    primaryText: string;
    secondaryText: string;
    valueText: string;
}

export interface DashboardData {
    stats: StatCardData[];
    topCustomers: DashboardListItem[];
    topDishes: DashboardListItem[];
}
