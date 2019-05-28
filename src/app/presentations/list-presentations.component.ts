import {Component} from '@angular/core';
import {AuthorizationService} from '../auth/authorization.service';


interface Presentation {
  id: string;
  name: string;
  author: string;
  description: string;
}

@Component({
  template: `
    <p>Lista prezentacji</p>
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nazwa</th>
        <th scope="col">Opis</th>
        <th scope="col">Autor</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let presentation of presentations; index as i">
        <th scope="row">{{ i + 1 }}</th>
        <td>
          {{ presentation.name }}
        </td>
        <td>{{ presentation.description  }}</td>
        <td>{{ presentation.author}}</td>
        <td><a routerLink="/edit" *ngIf="authorizationService.hasWriteAllRole()">Edycja</a></td>
        <td><a routerLink="/remove">Usuń</a></td>
      </tr>
      </tbody>
    </table>
  `
})
export class ListPresentationsComponent {
  presentations = [
    {
      id: 'id1',
      name: 'CSP, czyli rozbrajanie bomby w praktyce',
      author: 'Paweł Czubachowski',
      description: 'Content Security Policy to mechanizm, który ma chronić użytkowników m.in. przed podatnością XSS. Jego poprawne ...'
    },
    {
      id: 'id2',
      name: 'BigData w oparciu o rozwiązania Google',
      author: 'Michał Karykowski',
      description: 'Wszyscy wiedzą, że rozwiązania chmurowe są na topie, a każdy dostawca specjalizuje się w jakiejś gałęzi ...'
    },
    {
      id: 'id3',
      name: 'Docker w służbie dev(ops)a',
      author: 'Marcin Jasiński',
      description: 'Docker w ostatnim czasie stał się bardzo popularny, zarówno wśród gigantow takich jak Google, jak ...'
    }
  ] as Presentation[];


  constructor(private authorizationService: AuthorizationService) {

  }
}
