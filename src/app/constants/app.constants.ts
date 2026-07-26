export const DATA_URLS = {
    USERS: 'assets/data/users.json',
    RESTAURANTS: 'assets/data/restaurant.json',
    SIDEBAR: 'assets/data/sidebar.json',
} as const;

export const VALIDATION = {
    PASSWORD_MIN_LENGTH: 6,
} as const;

export const STAT_CARD_ICONS_AND_COLORS = {
    revenue: {
        icon: 'attach_money',
        iconColor: '#0e9f6e',
        iconBgColor: '#e2f4ed',
    },
    orders: {
        icon: 'shopping_cart',
        iconColor: '#3b82f6',
        iconBgColor: '#e1effe',
    },
    completed: {
        icon: 'check_circle',
        iconColor: '#f59e0b',
        iconBgColor: '#fdf3c7',
    },
    active: {
        icon: 'restaurant',
        iconColor: '#8b5cf6',
        iconBgColor: '#ede9fe',
    },
} as const;
