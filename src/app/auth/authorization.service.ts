import {AuthConfig, JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {Injectable} from '@angular/core';


export const authConfig: AuthConfig = {
  issuer: 'https://dev-128554.okta.com/oauth2/default',
  redirectUri: window.location.origin,
  clientId: '0oamrm4qsW0zl5zfD356'
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

  login(): Promise<void> {
    return this.oauthService.loadDiscoveryDocument().then(doc => {
      this.oauthService.tryLogin({
        onTokenReceived: context => {
          this.roles = this.getRolesFromToken();
        }
      }).then(() => {
        if (!this.oauthService.hasValidAccessToken()) {
          this.oauthService.initImplicitFlow();
        } else {
          this.roles = this.getRolesFromToken();
        }
      });
    });
  }

  logout() {
    this.oauthService.logOut();
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

  private getRolesFromToken(): string[] {
    return JSON.parse(window.atob(this.oauthService.getAccessToken().split('.')[1])).roles;
  }

}
