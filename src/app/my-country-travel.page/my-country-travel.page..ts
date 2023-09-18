import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-my-country-travel.page',
  templateUrl: './my-country-travel.page.html',
  styleUrls: ['./my-country-travel.page.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent],
})
export class MyCountryTravelPageComponent {}
