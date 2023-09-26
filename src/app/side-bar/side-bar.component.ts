import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../components/card/card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
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
