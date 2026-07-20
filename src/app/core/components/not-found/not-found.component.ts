import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

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
        if (this.authService.getRole() === 'admin') {
            this.router.navigate(['admin-dashboard']);
        } else if (this.authService.getRole() === 'owner') {
            this.router.navigate(['owner-dashboard']);
        }
    }
}
