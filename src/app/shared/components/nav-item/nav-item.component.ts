import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavItem } from '../../../models/sidebar.model';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-nav-item',
    templateUrl: './nav-item.component.html',
    styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
    @Input() item!: NavItem;
    @Input() depth: number = 0;
    isExpanded = false;

    constructor(public router: Router) {}

    toggleOrNavigate(): void {
        if (this.item.children) {
            this.isExpanded = !this.isExpanded;
        } else if (this.item.path) {
            this.router.navigate([this.item.path]);
        }
    }

    // Smarter logic to determine if the link should be green
    get isActive(): boolean {
        if (!this.item.path) return false;

        // If the path is exactly the dashboard home, require an exact match.
        // This prevents the "Overview" tab from staying highlighted when viewing other pages.
        if (
            this.item.path === '/admin-dashboard' ||
            this.item.path === '/owner-dashboard'
        ) {
            return this.router.url === this.item.path;
        }

        // For all other routes, highlight if the current URL contains this path
        return this.router.url.startsWith(this.item.path);
    }
}
