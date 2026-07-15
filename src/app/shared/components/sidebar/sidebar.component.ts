import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../core/services/auth/auth.service';
import { NavItem, SidebarConfig } from '../../../models/sidebar.model';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    // Arrays to hold the data for the UI
    navItems: NavItem[] = [];
    commonItems: NavItem[] = [];

    constructor(
        private http: HttpClient,
        private authService: AuthService,
    ) {}

    ngOnInit(): void {
        // 1. Get the current user's role (fallback to 'owner' just in case)
        const role = this.authService.getRole() || 'owner';

        // 2. Fetch the JSON file we just created
        this.http
            .get<SidebarConfig>('assets/data/sidebar.json')
            .subscribe((data) => {
                // 3. Assign the top navigation based on the user's role
                this.navItems = role === 'admin' ? data.admin : data.owner;

                // 4. Assign the bottom common links
                this.commonItems = data.common;
            });
    }
}
