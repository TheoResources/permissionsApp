import {Injectable} from '@angular/core';
import {AuthorizationService} from './authorization.service';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authorizationService: AuthorizationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authorizationService.hasRole(route.data.auth);
  }

}
