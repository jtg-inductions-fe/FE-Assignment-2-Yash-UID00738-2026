import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../../../models/sidebar.model';

@Component({
    selector: 'app-nav-item',
    templateUrl: './nav-item.component.html',
    styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
    @Input() item!: NavItem;
    isExpanded = false;

    constructor(public router: Router) {}

    toggleOrNavigate(): void {
        if (this.item.children) {
            this.isExpanded = !this.isExpanded;
        } else if (this.item.path) {
            this.router.navigate([this.item.path]);
        }
    }

    get isActive(): boolean {
        if (!this.item.path) {
            return false;
        }

        return this.router.url === this.item.path;
    }
}
