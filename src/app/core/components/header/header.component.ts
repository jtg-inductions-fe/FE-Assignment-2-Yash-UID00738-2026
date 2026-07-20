import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { SidebarService } from '@core/services/sidebar/sidebar.service';
import { User } from '@models/auth.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    user: User | null = null;

    ngOnInit(): void {
        this.authService.currentUser$.subscribe({
            next: (user) => {
                this.user = user;
            },
        });
    }

    constructor(
        private authService: AuthService,
        private router: Router,
        public sidebarService: SidebarService,
    ) {}

    onLogout(): void {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
}
