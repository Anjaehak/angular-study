import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  bannerImg = '../assets/banner/Rectangle.png';
  LeftFrame = '../assets/banner/LeftFrame.png';
  RightFrame = '../assets/banner/RightFrame.png';
}
