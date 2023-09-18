import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './views/history/history.component';

const routes: Routes = [
  {path: 'commits', component: HistoryComponent},
  {path: 'commits/:branch', component: HistoryComponent},
  {path: '**', redirectTo: 'commits'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
