import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.isLoggedIn()) {
        router.navigate(['/auth/login']);
        return false;
    }

    const expectedRoles: string[] = route.data?.['roles'];

    if (expectedRoles && expectedRoles.length > 0) {
        const currentRole = authService.getRole();

        if (!currentRole || !expectedRoles.includes(currentRole)) {
            router.navigate(['/auth/login']);
            return false;
        }
    }

    return true;
};
