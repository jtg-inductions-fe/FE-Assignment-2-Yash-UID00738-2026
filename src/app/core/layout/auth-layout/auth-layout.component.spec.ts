import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLayout } from './auth-layout.component';

describe('AuthLayout', () => {
    let component: AuthLayout;
    let fixture: ComponentFixture<AuthLayout>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AuthLayout],
        });
        fixture = TestBed.createComponent(AuthLayout);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
