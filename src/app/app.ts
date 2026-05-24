import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoPageComponent } from './pages/demo-page/demo-page';

@Component({
  selector: 'app-root',
  imports: [DemoPageComponent],
  template: '<app-demo-page />',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('reusable-ui-components');
}