import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Category = {
  name: string;
};

@Component({
  selector: 'app-small-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-category.component.html',
  styleUrls: ['./small-category.component.scss'],
})
export class SmallCategoryComponent {
  @Input() categories: Category[] | undefined;

  selectCategory: string = '';
  changeColor(categoryName: string) {
    this.selectCategory = categoryName;
  }
}
