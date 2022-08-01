import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App Modules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

// Firebase Imports
import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule } from '@angular/fire/firestore';
// import { Firestore } from '@angular/fire/firestore';
// import { AngularFireAuth } from '@angular/fire/auth'; REPLACED BELOW
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

// Additional Imports
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { GoogleSignin2Directive } from './home-page/google-signin-2.directive';
import { AboutPageComponent } from './info/about-page/about-page.component';

      

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GoogleSignin2Directive,
    AboutPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirestoreModule,
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()), // <-- ANGULAR FIRE AUTH TO MANAGE USERS  
    provideDatabase(() => getDatabase()),
    //provideFirestore(() => getFirestore()) // <-- FIRESTORE FOR THE BACKEND DATABASE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }