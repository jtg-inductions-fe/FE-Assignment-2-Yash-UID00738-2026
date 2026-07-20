import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    currentUser$ = this.authService.currentUser$;

    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    onLogout(): void {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
}
