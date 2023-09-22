import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PaginatorComponent {
  pages: number[] = [1, 2, 3, 4, 5];
  selectPage: number | null = 0;
  changeColor(pageIndex: number) {
    this.selectPage = pageIndex;
  }
}
