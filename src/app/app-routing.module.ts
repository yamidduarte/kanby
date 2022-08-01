import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './info/about-page/about-page.component'
  // canActivate [AuthGuard] imports here
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
    // WITH HOME PAGE GUARD:
  //   { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  {
    path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'kanban', 
    loadChildren: () =>
      import('./kanban/kanban.module').then(m => m.KanbanModule),
      canActivate: [AuthGuard]
  },
  { path: 'about', component: AboutPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
