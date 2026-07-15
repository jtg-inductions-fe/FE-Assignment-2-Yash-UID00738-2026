export interface NavItem {
    label: string;
    path?: string;
    icon?: string;
    badge?: number;
    children?: NavItem[];
}

export interface SidebarConfig {
    admin: NavItem[];
    owner: NavItem[];
    common: NavItem[];
}
