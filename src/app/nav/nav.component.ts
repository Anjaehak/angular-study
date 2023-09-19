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
    { name: '내나라 여행', url: 'domesticTravel' },
    { name: '해외여행', url: 'foreignTravel' },
    { name: '견적요청', url: 'estimate' },
    { name: '관광콘텐츠', url: '' },
    { name: 'ghl', url: '' },
    { name: '고객센터', url: '' },
  ];

  selectedButton: number | null = null;

  changeButtonColor(buttonId: number) {
    // 버튼을 클릭할 때 해당 버튼의 상태를 변경합니다.
    this.selectedButton = buttonId;
  }
}
