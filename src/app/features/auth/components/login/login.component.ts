import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';

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
            password: ['', [Validators.required, Validators.minLength(6)]],
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

                    if (role === 'admin') {
                        this.router.navigate(['/admin']);
                    } else if (role === 'owner') {
                        this.router.navigate(['/owner']);
                    }
                } else {
                    this.errorMessage =
                        'Invalid email or password. Please try again.';
                }
            });
    }
}
