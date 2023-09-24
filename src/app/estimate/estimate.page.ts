import { Component, ElementRef, ViewChild } from '@angular/core';
import { SelectComponent } from '../components/select/select.component';
import { InputTextComponent } from '../components/input-text/input-text.component';

@Component({
  selector: 'app-estimate.page',
  templateUrl: './estimate.page.html',
  styleUrls: ['./estimate.page.scss'],
  imports: [SelectComponent, InputTextComponent],
  standalone: true,
})
export default class EstimatePage {}
