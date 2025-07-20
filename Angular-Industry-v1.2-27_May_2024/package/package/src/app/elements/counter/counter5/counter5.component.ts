import { Component } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-counter5',
  standalone: true,
  imports: [],
  templateUrl: './counter5.component.html',
  styleUrl: './counter5.component.css'
})
export class Counter5Component {
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      (function ($) {
        jQuery('.counter').counterUp({
          delay: 10,
          time: 3000
        });
      })(jQuery);
    }, 100)
	}
}
