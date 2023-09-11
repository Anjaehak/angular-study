import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CardComponent, Product, ProductType } from '../card/card.component';
import { CommonModule } from '@angular/common';

export type Content = {
  image: string;
  title: string;
  subTitle: string;
};

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [BannerComponent, CardComponent, CommonModule],
})
export default class IndexPage {
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
  ];
  contents: Content[] = [
    {
      image: 'assets/images/Rectangle5.png',
      title: '일본 오사카 여행 온천 가족여행 4일',
      subTitle: '지금 바로 다양한 헤택을 누려보세요!',
    },
    {
      image: 'assets/images/Rectangle6.png',
      title: '오사카 4일',
      subTitle: '지금 바로 다양한 헤택을 누려보세요!',
    },
    {
      image: 'assets/images/Rectangle7.png',
      title: '오사카 4일',
      subTitle: '지금 바로 다양한 헤택을 누려보세요!',
    },
  ];
}
