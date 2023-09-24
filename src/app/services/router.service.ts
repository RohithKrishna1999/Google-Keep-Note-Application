import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouterService {

  constructor(private route: Router) { }

  routeToDashboard() {
    this.route.navigate(['/dashboard']);
  }

  routeToLogin() {
  this.route.navigate(['/login']);
  }
}
