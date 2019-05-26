import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListPresentationsComponent} from './presentations/list-presentations.component';

const appRoutes: Routes = [
  {path: 'list', component: ListPresentationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
