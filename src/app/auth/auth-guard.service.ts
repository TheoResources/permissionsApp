import {Injectable} from '@angular/core';
import {AuthorizationService} from './authorization.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private authorizationService: AuthorizationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authorizationService.hasRole(route.data.auth);
  }

}
