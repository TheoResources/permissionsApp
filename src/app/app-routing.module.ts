import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListPresentationsComponent} from './presentations/list-presentations.component';
import {AuthGuardService} from './auth/auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'list',
    component: ListPresentationsComponent,
    canActivate: [AuthGuardService],
    data: {auth: 'ReadOnly'}
  }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
