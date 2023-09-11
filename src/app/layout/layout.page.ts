import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { RecentlyProductComponent } from '../recently-product/recently-product.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    FooterComponent,
    RecentlyProductComponent,
  ],
})
export class LayoutPage {}
