import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CardComponent, Product, ProductType } from '../card/card.component';
import { CommonModule } from '@angular/common';

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
      image: 'https://picsum.photos/200',
      price: 1042525,
      title: '[비즈니스/클래스] “백야! 한 밤의 태양을 즐겨라” 북유럽 4개국',
    },
    {
      type: ProductType.DOMESTIC,
      company: '광주 여행사',
      image: 'https://picsum.photos/200',
      price: 9202100,
      title:
        '[정통][래디슨][오션뷰X마사지UP][#바나힐 #한시장 #스테이크]▶다낭,호이안...',
    },
  ];
}
