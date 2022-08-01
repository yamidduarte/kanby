import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SnackService } from '../services/snack.service';
//import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth,
    private snack: SnackService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.afAuth.authState.pipe(
      map(user => {
        if(user) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
