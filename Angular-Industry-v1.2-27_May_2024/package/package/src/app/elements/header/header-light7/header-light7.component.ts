import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navigation1Component } from '../../navigation/navigation1/navigation1.component';

@Component({
  selector: 'app-header-light7',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    Navigation1Component
  ],
  templateUrl: './header-light7.component.html',
  styleUrl: './header-light7.component.css'
})
export class HeaderLight7Component {
  collapseToggle: boolean = false;
  searchToggle: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  clickEvent() {
    this.collapseToggle = !this.collapseToggle;
  }

  searchOpen() {
    this.searchToggle = !this.searchToggle;
  }
}
