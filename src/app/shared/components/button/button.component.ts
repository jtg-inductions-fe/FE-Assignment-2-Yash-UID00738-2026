import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @Input() variant: 'basic' | 'flat' | 'stroked' | 'raised' = 'flat';

    @Input() color: 'primary' | 'accent' | 'warn' | '' = 'primary';

    @Input() type: 'button' | 'submit' | 'reset' = 'button';
    @Input() disabled: boolean = false;
    @Input() customClass: string = '';

    @Output() btnClick = new EventEmitter<Event>();

    onClick(event: Event): void {
        if (!this.disabled) {
            this.btnClick.emit(event);
        }
    }
}
