import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

export enum ProductType {
  DOMESTIC = '내나라 여행',
  FOREIGN = '해외여행',
}

export type Product = {
  type?: ProductType;
  company?: string;
  title: string;
  image: string;
  price?: number;
};

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product: Product | undefined;
  _type = ProductType;

  get path() {
    return this.router.url;
  }

  constructor(private router: Router) {}
}
