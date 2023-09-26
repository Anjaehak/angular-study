import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalService } from 'src/services/modal.service';
import {
  CardComponent,
  Product,
  ProductType,
} from '../components/card/card.component';
import { UpdateUserInfoComponent } from './update-user-info/update-user-info.component';

export type Reservation = {
  date: string;
  id: number;
  productName: string;
  paymentStatus: string;
};

export type Inquiry = {
  category: string;
  title: string;
  replyStatus: string;
  date: string;
};

export type Refund = {
  createAt: string;
  id: number;
  productName: string;
  refundStatus: string;
  date: string;
};

export type ReviewTrip = {
  productType: string;
  title: string;
  createAt: string;
};

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent],
})
export default class UserInfoPage {
  constructor(private modalService: ModalService) {}

  updateUserInfo() {
    const modal = this.modalService.open({
      component: UpdateUserInfoComponent,
    });

    modal.closed.subscribe(() => {
      this.modalService.dismiss$.subscribe((role) => {
        if (role === 'complete') {
        }
      });
    });
  }

  products: Product[] = [
    {
      type: ProductType.FOREIGN,
      company: '스카이필 단독상품',
      image: 'assets/images/Rectangle1.png',
      price: 1042525,
      title: '[비즈니스/클래스] “백야! 한 밤의 태양을 즐겨라” 북유럽 4개국',
    },
    {
      type: ProductType.DOMESTIC,
      company: '광주 여행사',
      image: 'assets/images/Rectangle2.png',
      price: 9202100,
      title:
        '[정통][래디슨][오션뷰X마사지UP][#바나힐 #한시장 #스테이크]▶다낭,호이안...',
    },
    {
      type: ProductType.FOREIGN,
      company: '스카이필 단독상품',
      image: 'assets/images/Rectangle3.png',
      price: 2199000,
      title:
        "[추석연휴 특별기획][대한항공][가을낭만 '특급료칸♨+식도락'] 오카야마&돗토...",
    },
    {
      type: ProductType.FOREIGN,
      company: '스카이필 단독상품',
      image: 'assets/images/Rectangle4.png',
      price: 1899000,
      title:
        '[추석연휴 특별기획][대한항공 고마츠 직항][가을빛 수놓은 오색 단풍] 도야마...',
    },
    {
      type: ProductType.FOREIGN,
      company: '스카이필 단독상품',
      image: 'assets/images/Rectangle4.png',
      price: 1899000,
      title:
        '[추석연휴 특별기획][대한항공 고마츠 직항][가을빛 수놓은 오색 단풍] 도야마...',
    },
  ];

  reservations: Reservation[] = [
    {
      date: '2023-01-21',
      id: 2323123,
      productName: '제주 한 달 살기',
      paymentStatus: '결제대기',
    },
    {
      date: '2023-01-21',
      id: 2323123,
      productName: '제주 한 달 살기',
      paymentStatus: '여행완료',
    },
  ];

  inquiries: Inquiry[] = [
    {
      category: 'Category',
      title: '여행 상품 문의 드려요',
      replyStatus: '미 답변',
      date: '2022.01.01',
    },
    {
      category: 'Category',
      title: '여행 상품 문의 드려요',
      replyStatus: '미 답변',
      date: '2022.01.01',
    },
  ];

  refunds: Refund[] = [
    {
      createAt: '2023-01-01',
      id: 2323123,
      productName: '제주 한 달 살기',
      refundStatus: '환불 대기',
      date: '2020.01.01',
    },
    {
      createAt: '2023-01-01',
      id: 2323123,
      productName: '제주 한 달 살기',
      refundStatus: '환불 완료',
      date: '2020.01.01',
    },
  ];

  reviewTrips: ReviewTrip[] = [
    {
      productType: '해외여행',
      title: '내 인생 최고의 일본여행!',
      createAt: '2022.01.01',
    },
    {
      productType: '해외여행',
      title: '내 인생 최고의 일본여행!',
      createAt: '2022.01.01',
    },
  ];
}
