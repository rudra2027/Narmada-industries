import { Component } from '@angular/core';
import { Banner1Component } from '../../elements/banner/banner1/banner1.component';
import { Footer13Component } from '../../elements/footer/footer13/footer13.component';
import { HeaderLight3Component } from '../../elements/header/header-light3/header-light3.component';

@Component({
  selector: 'app-error403',
  standalone: true,
  imports: [
    HeaderLight3Component,
    Banner1Component,
    Footer13Component
  ],
  templateUrl: './error403.component.html',
  styleUrl: './error403.component.css'
})
export class Error403Component {
  scroll_top() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
