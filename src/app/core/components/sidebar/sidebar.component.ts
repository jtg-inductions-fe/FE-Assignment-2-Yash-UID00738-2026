import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@core/services/auth/auth.service';
import { NavItem, SidebarConfig } from '@models/sidebar.model';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    navItems: NavItem[] = [];
    commonItems: NavItem[] = [];

    constructor(
        private http: HttpClient,
        private authService: AuthService,
    ) {}

    ngOnInit(): void {
        const role = this.authService.getRole();

        this.http
            .get<SidebarConfig>('assets/data/sidebar.json')
            .subscribe((data) => {
                this.navItems = role === 'admin' ? data.admin : data.owner;
                this.commonItems = data.common;
            });
    }
}
