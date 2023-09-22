import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

type Nav = {
  name: string;
  url: string;
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class HeaderComponent {
  navs: Nav[] = [
    { name: '내나라여행', url: '/domesticTravel' },
    { name: '해외여행', url: '/foreignTravel' },
    { name: '견적요청', url: '/estimate' },
    { name: '관광콘텐츠', url: '' },
    { name: 'ghl', url: '' },
    { name: '고객센터', url: '' },
  ];

  selectedButton: number | null = null;

  get path() {
    return this.router.url;
  }

  constructor(private router: Router) {}

  changeButtonColor(buttonId: number) {
    // 버튼을 클릭할 때 해당 버튼의 상태를 변경합니다.
    this.selectedButton = buttonId;
  }
}
