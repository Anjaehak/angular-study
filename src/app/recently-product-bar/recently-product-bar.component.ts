import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../components/card/card.component';

@Component({
  selector: 'app-recently-product-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recently-product-bar.component.html',
  styleUrls: ['./recently-product-bar.component.scss'],
})
export class RecentlyProductBarComponent {
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
