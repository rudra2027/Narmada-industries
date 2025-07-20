import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
declare var jQuery: any;
declare var handleMasonryFilter2: any;

@Component({
  selector: 'app-gallery5',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gallery5.component.html',
  styleUrl: './gallery5.component.css'
})
export class Gallery5Component {

  ngOnInit(): void {
    (function ($) {
      handleMasonryFilter2();
    })(jQuery);
  }
}
