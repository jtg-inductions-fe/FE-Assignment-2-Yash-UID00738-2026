import { Component, Input } from '@angular/core';
import { StatCardData } from '../../../models/dashboard.model';

@Component({
    selector: 'app-stat-list',
    templateUrl: './stat-list.component.html',
    styleUrls: ['./stat-list.component.scss'],
})
export class StatListComponent {
    @Input() stats: StatCardData[] = [];
}
