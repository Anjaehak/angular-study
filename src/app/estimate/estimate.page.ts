import { Component, ElementRef, ViewChild } from '@angular/core';
import { SelectComponent } from '../components/select/select.component';

@Component({
  selector: 'app-estimate.page',
  templateUrl: './estimate.page.html',
  styleUrls: ['./estimate.page.scss'],
  imports: [SelectComponent],
  standalone: true,
})
export default class EstimatePage {}
