import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class SnackService {
  constructor(private snackBar: MatSnackBar, public afAuth: AngularFireAuth, private router: Router) {}

  isLoggedIn() {
    return this.afAuth.authState.pipe(first())
    

  }

  
  AuthCheck() {
    this.isLoggedIn().pipe(
      tap(user => {
        if (user) {
          // do something
          return this.snackBar.open('Logged in successfully ✔️', 'OK', {
            duration: 1000  //in milliseconds
          });
        } else {
          // do nothing
          return
        }
      })
    )
    .subscribe()
  }
}
