import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@core/services/auth/auth.service';
import { NavItem, SidebarConfig } from '@models/sidebar.model';
import { UserRole } from '@models/enums.model';
import { DATA_URLS } from '@constants/app.constants';

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

        this.http.get<SidebarConfig>(DATA_URLS.SIDEBAR).subscribe((data) => {
            this.navItems = role === UserRole.ADMIN ? data.admin : data.owner;
            this.commonItems = data.common;
        });
    }
}
