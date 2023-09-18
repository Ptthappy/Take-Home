import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent {
  constructor(private datePipe: DatePipe, private clipboard: ClipboardService) {}

  @Input('commit') commit: any = {};
  formattedDate: string | null = '';

  ngOnInit(): void {
    this.setDate()
  }

  ngOnChanges(): void {
    this.setDate()
  }

  setDate() {
    const date = new Date(this.commit?.commit?.author.date);
    this.formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy, h:mma');
  }

  handleCopy() {
    this.clipboard.copy(this.commit?.sha)
  }

  handleGoToTree() {
    window.open(this.commit?.html_url.replace('commit', 'tree'), '_blank')
    
  }

  handleViewChanges() {
    window.open(this.commit?.html_url, '_blank')
  }

  getShortSha() {
    return this.commit.sha.slice(-6)
  }
}
