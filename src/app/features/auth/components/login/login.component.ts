import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { AppRoute, UserRole } from '@models/enums.model';
import { VALIDATION } from '@constants/app.constants';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    errorMessage = '';
    hide = true;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: [
                '',
                [
                    Validators.required,
                    Validators.minLength(VALIDATION.PASSWORD_MIN_LENGTH),
                ],
            ],
        });
    }

    onLoginSubmit(): void {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }

        this.errorMessage = '';

        const { email, password } = this.loginForm.value;

        this.authService
            .login(email, password)
            .subscribe((isLoggedIn: boolean) => {
                if (isLoggedIn) {
                    const role = this.authService.getRole();

                    if (role === UserRole.ADMIN) {
                        this.router.navigate(['/', AppRoute.ADMIN]);
                    } else if (role === UserRole.OWNER) {
                        this.router.navigate(['/', AppRoute.OWNER]);
                    }
                } else {
                    this.errorMessage =
                        'Invalid email or password. Please try again.';
                }
            });
    }
}
