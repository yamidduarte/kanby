import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { SnackService } from '../services/snack.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public router: Router, private snack: SnackService) { }

  async ngOnInit() {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        // console.log('user is logged in');
        this.router.navigate(['/kanban']);
        this.snack.AuthCheck();
      } else {
        //console.log('user not logged in');
        this.snack.AuthCheck();
      }
    });   
  }


}
