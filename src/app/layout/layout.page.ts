import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
  ],
})
export class LayoutPage implements OnInit {
  constructor(private router: Router) {}

  get path() {
    return this.router.url;
  }
  ngOnInit(): void {
    this.router.events.subscribe((ev) => {
      window.scrollTo(0, 0);
    });
  }
}
