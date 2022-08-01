import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'

@Directive({
  selector: '[appGoogleSignin2]'
})
export class GoogleSignin2Directive {

  constructor(private afAuth: AngularFireAuth) {}

  @HostListener('click')
  onclick() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());    
  }
  

}
