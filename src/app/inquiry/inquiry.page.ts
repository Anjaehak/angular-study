import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';
import { InputTextComponent } from '../components/input-text/input-text.component';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.page.html',
  styleUrls: ['./inquiry.page.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputTextComponent],
})
export default class InquiryComponent {}
