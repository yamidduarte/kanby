import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  async ngOnInit() {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        // console.log('user is logged in');
        this.router.navigate(['/kanban']);
      } else {
        //console.log('user not logged in');
      }
    });   
  }
}
