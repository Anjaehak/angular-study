import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pagenator',
  templateUrl: './pagenator.component.html',
  styleUrls: ['./pagenator.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PagenatorComponent {
  pages: number[] = [1, 2, 3, 4, 5];
  selectPage: number | null = 0;
  changeColor(pageIndex: number) {
    this.selectPage = pageIndex;
  }
}
