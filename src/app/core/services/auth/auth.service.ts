import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private usersUrl = 'assets/data/users.json';

    constructor(private http: HttpClient) {}

    /**
     * Fetches users from JSON, verifies credentials, and sets localStorage
     */
    login(email: string, password: string): Observable<boolean> {
        return this.http.get<any[]>(this.usersUrl).pipe(
            map((users) => {
                const user = users.find(
                    (u) => u.email === email && u.password === password,
                );

                if (user) {
                    localStorage.setItem('user_data', JSON.stringify(user));
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
}
