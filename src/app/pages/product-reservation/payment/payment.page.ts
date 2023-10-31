import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from 'src/app/components/select/select.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, SelectComponent],
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export default class PaymentPage {}
