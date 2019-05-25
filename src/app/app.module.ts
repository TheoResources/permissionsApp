import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListPresentationsComponent} from './presentations/list-presentations.component';
import {RouterModule, Routes} from '@angular/router';
import {OAuthModule} from 'angular-oauth2-oidc';
import {HttpClientModule} from '@angular/common/http';
import {AuthorizationService} from './oauth/AuthorizationService';

const appRoutes: Routes = [
  {path: 'list', component: ListPresentationsComponent}
];

export function onAppInitOAuth(authorizationService: AuthorizationService): () => Promise<any> {
  return () => authorizationService.login();
}

@NgModule({
  declarations: [
    AppComponent,
    ListPresentationsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: onAppInitOAuth,
      multi: true,
      deps: [AuthorizationService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
