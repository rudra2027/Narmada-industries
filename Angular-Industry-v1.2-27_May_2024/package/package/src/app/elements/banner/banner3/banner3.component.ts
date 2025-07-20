import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner3',
  standalone: true,
  imports: [],
  templateUrl: './banner3.component.html',
  styleUrl: './banner3.component.css'
})
export class Banner3Component {
	@Input() data : any;
}
