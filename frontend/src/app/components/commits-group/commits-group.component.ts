import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commits-group',
  templateUrl: './commits-group.component.html',
  styleUrls: ['./commits-group.component.css']
})
export class CommitsGroupComponent {
  @Input('commits') commits: Array<any> = [];
}
