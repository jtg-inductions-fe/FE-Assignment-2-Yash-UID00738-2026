import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFormPageComponent } from './restaurant-form-page.component';

describe('RestaurantFormPageComponent', () => {
    let component: RestaurantFormPageComponent;
    let fixture: ComponentFixture<RestaurantFormPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RestaurantFormPageComponent],
        });
        fixture = TestBed.createComponent(RestaurantFormPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
