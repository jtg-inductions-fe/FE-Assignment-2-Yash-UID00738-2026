import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    private dataUrl = 'assets/data/restaurant.json';

    private restaurantsCache: any[] | null = null;

    constructor(private http: HttpClient) {}

    async getAllRestaurants(): Promise<any[]> {
        if (this.restaurantsCache) {
            return this.restaurantsCache;
        }

        this.restaurantsCache = await firstValueFrom(
            this.http.get<any[]>(this.dataUrl),
        );
        return this.restaurantsCache;
    }

    async getRestaurantById(id: string): Promise<any> {
        const all = await this.getAllRestaurants();
        return all.find((r) => r.id === id);
    }
}
