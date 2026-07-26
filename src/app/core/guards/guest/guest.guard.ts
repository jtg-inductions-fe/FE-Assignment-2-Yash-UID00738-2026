import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { AppRoute, UserRole } from '@models/enums.model';

export const guestGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isLoggedIn()) {
        const role = authService.getRole();
        if (role === UserRole.ADMIN) {
            router.navigate(['/', AppRoute.ADMIN]);
        } else if (role === UserRole.OWNER) {
            router.navigate(['/', AppRoute.OWNER]);
        } else {
            router.navigate(['/']);
        }
        return false;
    }
    return true;
};
