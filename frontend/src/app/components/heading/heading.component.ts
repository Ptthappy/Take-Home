import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent {
  @Input('title') title: string = 'XD';
  @Input('heading') heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
}
