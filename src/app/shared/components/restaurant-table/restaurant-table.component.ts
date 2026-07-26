import { Component, Input } from '@angular/core';
import { Restaurant } from '@models/dashboard.model';

@Component({
    selector: 'app-restaurant-table',
    templateUrl: './restaurant-table.component.html',
    styleUrls: ['./restaurant-table.component.scss'],
})
export class RestaurantTableComponent {
    @Input() restaurants: Restaurant[] = [];

    displayedColumns: string[] = ['name', 'address', 'owners', 'actions'];
}
