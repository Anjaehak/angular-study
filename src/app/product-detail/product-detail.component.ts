import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type Menu = {
  name: string;
  id: string;
};

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export default class ProductDetailComponent {
  @ViewChild('section') section: ElementRef<HTMLElement> | undefined;

  selectedButton: string | null = 'summary';

  handleClick(buttonId: string) {
    const target = document.getElementById(buttonId);
    this.selectedButton = buttonId;

    target?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
    });
  }

  menus: Menu[] = [
    { name: '상품 요약', id: 'summary' },
    { name: '상품 상세', id: 'detail' },
    { name: '핵심 포인트', id: 'keyPoint' },
    { name: '포함/불포함/선택', id: 'select' },
    { name: '유의사항', id: 'notice' },
    { name: '상세일정', id: 'detailSchedule' },
    { name: '여행 후기', id: 'review' },
  ];

  activeIndex = -1;

  productSummaryEvent = true;
  productDetailEvent = true;
  keyPointEvent = true;
  selectEvent = true;
  noticeEvent = true;
  detailScheduleEvent = true;
  reviewEvent = true;
  firstDay = true;
}
