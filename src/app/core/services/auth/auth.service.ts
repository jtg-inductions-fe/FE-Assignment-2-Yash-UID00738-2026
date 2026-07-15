import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs'; // <-- Added BehaviorSubject

import { User } from 'src/app/models/auth.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private usersUrl = 'assets/data/users.json';

    private currentUserSubject = new BehaviorSubject<User | null>(
        this.getCurrentUser(),
    );

    public currentUser$: Observable<User | null> =
        this.currentUserSubject.asObservable();

    constructor(private http: HttpClient) {}

    /**
     * Fetches users from JSON, verifies credentials, and sets localStorage
     */
    login(email: string, password: string): Observable<boolean> {
        return this.http.get<User[]>(this.usersUrl).pipe(
            map((users) => {
                const user = users.find(
                    (u) => u.email === email && u.password === password,
                );

                if (user) {
                    localStorage.setItem('user_data', JSON.stringify(user));

                    this.currentUserSubject.next(user);

                    return true;
                }

                return false;
            }),
        );
    }

    /**
     * Clears localStorage to log the user out
     */
    logout(): void {
        localStorage.removeItem('user_data');

        this.currentUserSubject.next(null);
    }

    /**
     * Checks authentication status
     */
    isLoggedIn(): boolean {
        return !!localStorage.getItem('user_data');
    }

    /**
     * Retrieves the current user's role from localStorage
     */
    getRole(): string | null {
        const userData = localStorage.getItem('user_data');

        if (userData) {
            return JSON.parse(userData).role;
        }
        return null;
    }

    getCurrentUser(): User | null {
        const userData = localStorage.getItem('user_data');

        if (userData) {
            return JSON.parse(userData);
        }
        return null;
    }
}
