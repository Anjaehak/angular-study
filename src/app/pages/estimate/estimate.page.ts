import { Component, ElementRef, ViewChild } from '@angular/core';
import { InputTextComponent } from 'src/app/components/input-text/input-text.component';
import { SelectComponent } from 'src/app/components/select/select.component';

@Component({
  selector: 'app-estimate.page',
  templateUrl: './estimate.page.html',
  styleUrls: ['./estimate.page.scss'],
  imports: [SelectComponent, InputTextComponent],
  standalone: true,
})
export default class EstimatePage {}
