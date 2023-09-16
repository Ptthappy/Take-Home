import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  constructor(private router: Router) { }

  branch = {};
  currentRoute: Array<any> = [];

  ngOnInit() {
    this.currentRoute = this.router.url.split('commits')
    // console.log()
  }
}
