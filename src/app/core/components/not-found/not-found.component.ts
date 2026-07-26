import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { Router } from '@angular/router';
import { AppRoute, UserRole } from '@models/enums.model';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
    constructor(
        public authService: AuthService,
        private router: Router,
    ) {}

    navigateToDashboard(): void {
        if (this.authService.getRole() === UserRole.ADMIN) {
            this.router.navigate([AppRoute.ADMIN]);
        } else if (this.authService.getRole() === UserRole.OWNER) {
            this.router.navigate([AppRoute.OWNER]);
        }
    }
}
