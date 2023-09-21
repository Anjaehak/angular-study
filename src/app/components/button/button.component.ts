import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ButtonComponent {
  buttons: number[] = [1, 2, 3, 4, 5];
  selectButton: number | null = 0;
  changeColor(buttonIndex: number) {
    this.selectButton = buttonIndex;
  }
}
