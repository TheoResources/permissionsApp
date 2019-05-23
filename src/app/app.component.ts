import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>Panel administracyjny</h1>
    <button routerLink="/" type="button" class="btn btn-outline-secondary mr-2">Strona główna</button>
    <button routerLink="/list" type="button" class="btn btn-outline-secondary mr-2">Lista prezentacji</button>
    <div class="app">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {


}
