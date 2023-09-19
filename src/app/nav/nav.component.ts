import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type Nav = {
  name: string;
  url: string;
};

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class NavComponent {
  navs: Nav[] = [
    { name: '내나라 여행', url: 'myCountryTravel' },
    { name: '해외여행', url: '' },
    { name: '견적요청', url: '' },
    { name: '관광콘텐츠', url: '' },
    { name: '고객센터', url: '' },
  ];
}
