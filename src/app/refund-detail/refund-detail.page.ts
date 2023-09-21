import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-refund-detail',
  templateUrl: './refund-detail.page.html',
  styleUrls: ['./refund-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export default class RefundDetailComponent {}
