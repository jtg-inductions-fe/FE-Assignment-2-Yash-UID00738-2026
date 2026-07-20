import { Component, Input, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormArray,
    Validators,
    FormControl,
} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
    selector: 'app-restaurant-form',
    templateUrl: './restaurant-form.component.html',
    styleUrls: ['./restaurant-form.component.scss'],
})
export class RestaurantFormComponent implements OnInit {
    @Input() initialData: any = null;
    @Input() isEdit: boolean = false;

    restaurantForm = this.fb.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        owners: new FormControl<string[]>([], {
            validators: [Validators.required],
        }),
    });

    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        if (this.isEdit && this.initialData) {
            this.restaurantForm.patchValue({
                name: this.initialData.name,
                address: this.initialData.address,
            });

            if (this.initialData.owners) {
                this.initialData.owners.forEach((email: string) => {
                    this.owners.value.push(email);
                });
            }
        }
    }

    get owners(): FormControl {
        return this.restaurantForm.get('owners') as FormControl;
    }

    addOwner(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();

        const tempControl = this.fb.control(value, [
            Validators.required,
            Validators.email,
        ]);

        if (value && tempControl.valid) {
            this.owners.value.push(value);
            event.chipInput!.clear();
        }
    }

    removeOwner(index: number): void {
        console.log(this.owners.value);
        this.owners.value.splice(index, 1);
    }

    onSubmit(): void {
        if (this.restaurantForm.valid) {
            console.log('Form Submitted Data:', this.restaurantForm.value);
        }
    }
}
