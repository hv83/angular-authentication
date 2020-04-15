import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from '@app/_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  canActivate() {
    if (this.authService.adminLogged()) {
      return true;
    }
    this.router.navigate(['denied']);
    return false;
  }
}
