import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputTextComponent } from '../components/input-text/input-text.component';
import { PagenatorComponent } from '../components/pagenator/pagenator.component';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.page.html',
  styleUrls: ['./inquiry.page.scss'],
  standalone: true,
  imports: [CommonModule, PagenatorComponent, InputTextComponent],
})
export default class InquiryComponent {}
