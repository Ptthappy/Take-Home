import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HistoryComponent } from './views/history/history.component';
import { HeadingComponent } from './components/heading/heading.component';
import { CommitComponent } from './components/commit/commit.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommitsGroupComponent } from './components/commits-group/commits-group.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    HeadingComponent,
    CommitComponent,
    FooterComponent,
    CommitsGroupComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ClipboardModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
