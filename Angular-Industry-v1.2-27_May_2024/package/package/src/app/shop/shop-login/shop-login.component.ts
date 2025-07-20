import { Component } from '@angular/core';
import { Banner1Component } from '../../elements/banner/banner1/banner1.component';
import { Footer19Component } from '../../elements/footer/footer19/footer19.component';
import { HeaderLight3Component } from '../../elements/header/header-light3/header-light3.component';
import { IconBox3Component } from '../../elements/icon-box/icon-box3/icon-box3.component';

@Component({
  selector: 'app-shop-login',
  standalone: true,
  imports: [
    HeaderLight3Component,
    Banner1Component,
    Footer19Component,
    IconBox3Component
  ],
  templateUrl: './shop-login.component.html',
  styleUrl: './shop-login.component.css'
})
export class ShopLoginComponent {
  banner: any = {
    pagetitle: "Login",
    bg_image: "assets/images/banner/bnr4.jpg",
    title: "Login",
  }
  scroll_top() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
