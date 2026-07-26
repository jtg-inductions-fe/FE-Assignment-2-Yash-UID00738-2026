import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Restaurant } from '@models/dashboard.model';
import { DATA_URLS } from '@constants/app.constants';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    private dataUrl = DATA_URLS.RESTAURANTS;

    private restaurantsCache: Restaurant[] | null = null;

    constructor(private http: HttpClient) {}

    async getAllRestaurants(): Promise<Restaurant[]> {
        if (this.restaurantsCache) {
            return this.restaurantsCache;
        }

        this.restaurantsCache = await firstValueFrom(
            this.http.get<Restaurant[]>(this.dataUrl),
        );
        return this.restaurantsCache;
    }

    async getRestaurantById(id: string): Promise<Restaurant | undefined> {
        const all = await this.getAllRestaurants();
        return all.find((r) => r.id === id);
    }
}
