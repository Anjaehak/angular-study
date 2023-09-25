import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type Menu = {
  name: string;
  id: string;
};

type Review = {
  id: string;
  productType: string;
  title: string;
  description: string;
  writer: string;
  createAt: string;
  recommend: Number;
};

@Component({
  selector: 'app-product-information',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss'],
})
export class ProductInformationComponent {
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

  activeIndex = -1;
  reviewClick(reviewId: number) {
    this.activeIndex = reviewId;
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

  reviews: Review[] = [
    {
      id: '5',
      productType: '해외여행',
      title: '한국으로 돌아가고 싶지 않을 만큼 너무 멋있었습니다.',
      description: '내 인생의 최고의 일본여행',
      writer: '김*진',
      createAt: '2022.01.01',
      recommend: 100,
    },
    {
      id: '4',
      productType: '해외여행',
      title: '한국으로 돌아가고 싶지 않을 만큼 너무 멋있었습니다.',
      description: '내 인생의 최고의 일본여행',
      writer: '김*진',
      createAt: '2022.01.01',
      recommend: 100,
    },
    {
      id: '3',
      productType: '해외여행',
      title: '한국으로 돌아가고 싶지 않을 만큼 너무 멋있었습니다.',
      description: '내 인생의 최고의 일본여행',
      writer: '김*진',
      createAt: '2022.01.01',
      recommend: 100,
    },
    {
      id: '2',
      productType: '해외여행',
      title: '한국으로 돌아가고 싶지 않을 만큼 너무 멋있었습니다.',
      description: '내 인생의 최고의 일본여행',
      writer: '김*진',
      createAt: '2022.01.01',
      recommend: 100,
    },
    {
      id: '1',
      productType: '해외여행',
      title: '한국으로 돌아가고 싶지 않을 만큼 너무 멋있었습니다.',
      description: '내 인생의 최고의 일본여행',
      writer: '김*진',
      createAt: '2022.01.01',
      recommend: 100,
    },
  ];

  productSummaryEvent = true;
  productDetailEvent = true;
  keyPointEvent = true;
  selectEvent = true;
  noticeEvent = true;
  detailScheduleEvent = true;
  reviewEvent = true;
  firstDay = true;
}
