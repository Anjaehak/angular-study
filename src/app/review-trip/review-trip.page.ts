import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaginatorComponent } from '../components/paginator/paginator.component';
import { SelectComponent } from '../components/select/select.component';
import { InputTextComponent } from '../components/input-text/input-text.component';

@Component({
  selector: 'app-review-trip',
  templateUrl: './review-trip.page.html',
  styleUrls: ['./review-trip.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PaginatorComponent,
    SelectComponent,
    InputTextComponent,
  ],
})
export default class ReviewTripPage {}
