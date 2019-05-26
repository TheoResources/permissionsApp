import {AuthConfig, JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {Injectable} from '@angular/core';


export const authConfig: AuthConfig = {
  issuer: '?',
  redirectUri: window.location.origin,
  clientId: '?'
};

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private roles: string[] = [];

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
  }

  hasReadOnlyRole() {
    return this.roles.includes('ReadOnly');
  }

  hasWriteAllRole() {
    return this.roles.includes('WriteAll');
  }

  isAuthenticated() {
    return this.oauthService.hasValidAccessToken() && (this.hasReadOnlyRole() || this.hasWriteAllRole());
  }

  getRoles() {
    return this.roles;
  }

  hasRole(role: string): boolean {
    return this.roles.includes(role);
  }

  login(): Promise<void> {
    return this.oauthService.loadDiscoveryDocument().then(doc => {
      this.oauthService.tryLogin(
        {
          onTokenReceived: context => {
            this.roles = JSON.parse(window.atob(this.oauthService.getAccessToken().split('.')[1])).roles;
          }
        }
      )
        .catch(err => {
          console.error(err);
        })
        .then(() => {
          if (!this.oauthService.hasValidAccessToken()) {
            this.oauthService.initImplicitFlow();
          } else {
            this.roles = JSON.parse(window.atob(this.oauthService.getAccessToken().split('.')[1])).roles;
          }
        });
    });
  }

  logout() {
    this.oauthService.logOut();
  }

}
