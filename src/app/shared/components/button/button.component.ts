import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    @Input() variant: 'raised' | 'flat' | 'stroked' = 'raised';
    @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
    @Input() type: 'button' | 'submit' | 'reset' = 'button';
    @Input() label = '';
    @Input() disabled = false;
    @Input() loading = false;
    @Input() fullWidth = false;
    @Input() icon = '';
    @Input() iconPosition: 'left' | 'right' = 'left';
    @Input() routerLink?: any;
    @Output() buttonClick = new EventEmitter<Event>();

    onClick(event: Event): void {
        if (!this.disabled && !this.loading) {
            this.buttonClick.emit(event);
        }
    }
}
