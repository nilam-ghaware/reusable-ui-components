import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-button',
  imports: [CommonModule],
  templateUrl: './ui-button.html',
  styleUrls: ['./ui-button.scss']
})
export class UiButtonComponent {
  @Input() label: string = 'Button';

  @Input() variant: 'primary' | 'secondary' = 'primary';

  @Input() disabled: boolean = false;

  @Output() readonly buttonClick = new EventEmitter<'primary' | 'secondary'>();

  onClick(): void {
    if (!this.disabled) {
      this.buttonClick.emit(this.variant);
    }
  }
}