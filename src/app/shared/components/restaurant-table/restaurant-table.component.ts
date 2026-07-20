import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-restaurant-table',
    templateUrl: './restaurant-table.component.html',
    styleUrls: ['./restaurant-table.component.scss'],
})
export class RestaurantTableComponent {
    @Input() restaurants: any[] = [];

    displayedColumns: string[] = ['name', 'address', 'owners', 'actions'];
}
