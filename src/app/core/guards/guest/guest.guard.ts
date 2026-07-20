import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';

export const guestGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isLoggedIn()) {
        const role = authService.getRole();
        if (role === 'admin') {
            router.navigate(['/admin-dashboard']);
        } else if (role === 'owner') {
            router.navigate(['/owner-dashboard']);
        } else {
            router.navigate(['/']);
        }
        return false;
    }
    return true;
};
