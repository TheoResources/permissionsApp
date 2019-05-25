import {Component} from '@angular/core';
import {AuthorizationService} from './oauth/AuthorizationService';


@Component({
  selector: 'app-root',
  template: `
    <h1>Panel administracyjny
      <span *ngIf="authorizationService.hasAnyRole()">(twoje uprawnienia to: {{authorizationService.getRoles()}})</span>
    </h1>
    <button *ngIf="authorizationService.hasAnyRole()" (click)="authorizationService.logout()"
            type="button"
            class="btn btn-outline-secondary mr-2">Logout</button>
    <button routerLink="/" type="button" class="btn btn-outline-secondary mr-2">Strona główna</button>
    <button routerLink="/list" type="button" class="btn btn-outline-secondary mr-2">Lista prezentacji</button>
    <div class="app">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private authorizationService: AuthorizationService) {
  }
}
