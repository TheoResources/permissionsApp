import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListPresentationsComponent} from './presentations/list-presentations.component';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {path: 'list', component: ListPresentationsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListPresentationsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
