import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  constructor(private router: Router, private http: HttpService, private route: ActivatedRoute) { }

  isLoading: boolean = true;
  branch: any = {};
  branches: Array<any> = [];
  commits: Array<any> = [];
  currentRoute: Array<any> = [];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pullChanges()
    })
  }

  pullChanges() {    
    this.currentRoute = this.router.url.split('commits')
    this.http.get(`branches?owner=${environment.githubUser}&repo=${environment.githubRepo}`).subscribe((res: Array<any>) => {
      this.branches = res;
      const branchName = this.currentRoute[1].replace('/', '')
      this.branch = this.branches.find(obj => this.currentRoute[1] !== '' ? obj.name === branchName : obj.name === 'master' || obj.name === 'main')
      if(this.branch) {
        this.http.get(`history?owner=${environment.githubUser}&repo=${environment.githubRepo}&branch=${this.branch.commit.sha}`).subscribe((res2) => {
          this.commits = res2;
          this.isLoading = false;
        })
      } else {
        // handle not found branch error
        // this.isLoading = false;
      }
    })
  }

  onBranchChange(evt: any) {
    this.router.navigate([`commits/${evt.name}`])
    this.pullChanges();
  }
}
