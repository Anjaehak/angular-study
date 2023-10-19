import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

type Header = {
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
  headers: Header[] = [
    { name: '내나라여행', url: '/domestic-travel' },
    { name: '해외여행', url: '/foreign-travel' },
    { name: '견적요청', url: '/estimate' },
    { name: '관광콘텐츠', url: '' },
    { name: '회사소개', url: '' },
    { name: '고객센터', url: '' },
  ];

  selectedButton: number | null = null;

  constructor(private router: Router) {}

  get path() {
    return this.router.url;
  }

  changeButtonColor(buttonId: number) {
    // 버튼을 클릭할 때 해당 버튼의 상태를 변경합니다.
    this.selectedButton = buttonId;
  }
}
