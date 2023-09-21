import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../components/card/card.component';

@Component({
  selector: 'app-recently-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recently-product.component.html',
  styleUrls: ['./recently-product.component.scss'],
})
export class RecentlyProductComponent {
  recentlyProducts: Product[] = [
    {
      image: 'assets/images/Rectangle12.png',
      title: '백야! 한밤의 태...',
    },
    {
      image: 'assets/images/Rectangle13.png',
      title: '백야! 한밤의 태...',
    },
  ];
}
