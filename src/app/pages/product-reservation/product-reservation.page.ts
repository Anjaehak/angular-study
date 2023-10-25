import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectComponent } from 'src/app/components/select/select.component';

@Component({
  selector: 'app-product-reservation',
  standalone: true,
  imports: [CommonModule, SelectComponent, RouterModule],
  templateUrl: './product-reservation.page.html',
  styleUrls: ['./product-reservation.page.scss'],
})
export default class ProductReservationPage {}
