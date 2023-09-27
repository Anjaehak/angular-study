import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InputTextComponent } from 'src/app/components/input-text/input-text.component';
import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';
import { SelectComponent } from 'src/app/components/select/select.component';

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
