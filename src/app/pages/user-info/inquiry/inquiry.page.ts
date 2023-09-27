import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputTextComponent } from 'src/app/components/input-text/input-text.component';
import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';
import { SelectComponent } from 'src/app/components/select/select.component';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.page.html',
  styleUrls: ['./inquiry.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PaginatorComponent,
    InputTextComponent,
    SelectComponent,
  ],
})
export default class InquiryPage {}
