import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { UserRole } from '@models/enums.model';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.isLoggedIn()) {
        router.navigate(['/auth/login']);
        return false;
    }

    const expectedRoles: UserRole[] = route.data?.['roles'];

    if (expectedRoles && expectedRoles.length > 0) {
        const currentRole = authService.getRole();

        if (!currentRole || !expectedRoles.includes(currentRole)) {
            router.navigate(['/auth/login']);
            return false;
        }
    }

    return true;
};
