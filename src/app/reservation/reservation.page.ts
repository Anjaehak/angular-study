import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  Category,
  SmallCategoryComponent,
} from '../components/small-category/small-category.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, SmallCategoryComponent],
})
export default class ReservationPage {
  categories: Category[] = [
    {
      name: '현재 예약내역',
    },
    {
      name: '과거 예약내역',
    },
  ];
}
