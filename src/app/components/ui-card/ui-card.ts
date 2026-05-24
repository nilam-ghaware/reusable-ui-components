import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-card.html',
  styleUrls: ['./ui-card.scss']
})
export class UiCardComponent {
  @Input() title: string = '';

  @Input() content: string = '';

  @Input() buttonClickedInfo: string = '';

  @Output() cardSelected = new EventEmitter<string>();

  onSelect(): void {
    this.cardSelected.emit(this.title);
  }
}
