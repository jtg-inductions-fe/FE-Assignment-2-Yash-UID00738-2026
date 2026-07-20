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
