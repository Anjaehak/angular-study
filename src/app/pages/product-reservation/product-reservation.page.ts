import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from 'src/app/components/select/select.component';

@Component({
  selector: 'app-product-reservation',
  standalone: true,
  imports: [CommonModule, SelectComponent],
  templateUrl: './product-reservation.page.html',
  styleUrls: ['./product-reservation.page.scss'],
})
export default class ProductReservationPage {}
