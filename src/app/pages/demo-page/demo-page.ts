import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '../../components/ui-button/ui-button';
import { UiCardComponent } from '../../components/ui-card/ui-card';

@Component({
  selector: 'app-demo-page',
  standalone: true,
  imports: [CommonModule, UiButtonComponent, UiCardComponent],
  templateUrl: './demo-page.html',
  styleUrls: ['./demo-page.scss']
})
export class DemoPageComponent {

  clickedVariant: string | null = null;

  handleButtonClick(variant: 'primary' | 'secondary'): void {
    this.clickedVariant = variant ? variant.charAt(0).toUpperCase() + variant.slice(1) : null;
  }

  handleCardSelection(title: string): void {
    console.log(`Selected card: ${title}`);
  }
}