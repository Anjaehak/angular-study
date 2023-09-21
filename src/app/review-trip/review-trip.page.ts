import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-review-trip',
  templateUrl: './review-trip.page.html',
  styleUrls: ['./review-trip.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
})
export default class ReviewTripComponent {}
