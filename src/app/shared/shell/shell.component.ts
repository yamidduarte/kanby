import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, NavigationEnd } from '@angular/router';
 
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
  constructor(private breakpointObserver: BreakpointObserver, public afAuth: AngularFireAuth, private router: Router) {
  }

    canGoToBoard() {
      return !(this.router.url === '/kanban' || this.router.url === '/' || this.router.url === '/login');
    }

  

}