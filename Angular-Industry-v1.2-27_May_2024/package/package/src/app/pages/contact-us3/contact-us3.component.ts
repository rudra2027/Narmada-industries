import { Component } from '@angular/core';
import { Banner1Component } from '../../elements/banner/banner1/banner1.component';
import { Footer13Component } from '../../elements/footer/footer13/footer13.component';
import { HeaderLight3Component } from '../../elements/header/header-light3/header-light3.component';

@Component({
  selector: 'app-contact-us3',
  standalone: true,
  imports: [
    HeaderLight3Component,
    Banner1Component,
    Footer13Component
  ],
  templateUrl: './contact-us3.component.html',
  styleUrl: './contact-us3.component.css'
})
export class ContactUs3Component {
  banner : any = {
		pagetitle: "Contact Us 3",
		bg_image: "assets/images/banner/bnr1.jpg",
		title: "Contact Us 3",
	}
  email1 = 'info@example.com';
  email2 = 'hr@example.com';
  email3 = 'support@example.com';
  scroll_top() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
