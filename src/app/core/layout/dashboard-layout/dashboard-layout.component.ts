import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SidebarService } from '@core/services/sidebar/sidebar.service';

@Component({
    selector: 'app-secure-layout',
    templateUrl: './dashboard-layout.component.html',
    styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
    isMobile = false;

    constructor(
        public sidebarService: SidebarService,
        private breakpointObserver: BreakpointObserver,
    ) {}

    ngOnInit(): void {
        this.breakpointObserver
            .observe(['(max-width: 768px)'])
            .subscribe((result) => {
                this.isMobile = result.matches;
                if (!this.isMobile) {
                    this.sidebarService.closeSidebar();
                }
            });
    }
}
