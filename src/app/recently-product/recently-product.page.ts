import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SelectComponent } from '../components/select/select.component';
import { InputTextComponent } from '../components/input-text/input-text.component';
import { PaginatorComponent } from '../components/paginator/paginator.component';
import {
  CardComponent,
  Product,
  ProductType,
} from '../components/card/card.component';

@Component({
  selector: 'app-recently-product',
  templateUrl: './recently-product.page.html',
  styleUrls: ['./recently-product.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    SelectComponent,
    InputTextComponent,
    PaginatorComponent,
    CardComponent,
  ],
})
export default class RecentlyProductPage {
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
}
