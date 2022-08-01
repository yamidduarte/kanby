import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss']
})
export class EmailLoginComponent implements OnInit { 
  form: FormGroup = this.fb.group({ 
    email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.minLength(6), Validators.required]
      ],
      passwordConfirm: ['',[]]
       });

  type: 'login' | 'signup' | 'reset' = 'signup';
  loading = false;

  serverMessage: string = '';

  constructor(private afAuth: AngularFireAuth, private fb: FormBuilder) {}

  ngOnInit(){
    this.type = 'login';
  }

  changeType(value: any) {
    this.type = value;
  }

  get isLogin() {
    return this.type === 'login';  // 1
  }

  get isSignup() {
    return this.type === 'signup'; // 2
  }

  get isPasswordReset() {
    return this.type === 'reset';  // 3
  }

  get email() {
    return this.form.get('email');             // A
  }
  get password() {
    return this.form.get('password');         // B
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm');  // C
  }

  get passwordDoesMatch() {
    if (this.type !== 'signup') {
      return true;
    } else {
      return this.password?.value === this.passwordConfirm?.value
      // return this.password.value === this.passwordConfirm.value;
    }
  }

  async onSubmit() {
    this.loading = true;

    const email = this.email?.value;
    const password = this.password?.value;

    try {
      if (this.isLogin) {
        await this.afAuth.signInWithEmailAndPassword(email, password);
      }
      if (this.isSignup) {
        await this.afAuth.createUserWithEmailAndPassword(email, password);
      }
      if (this.isPasswordReset) {
        await this.afAuth.sendPasswordResetEmail(email);
        this.serverMessage = 'Check your email';
      }

    } catch (err: any) {
      this.serverMessage = err;
    }

    this.loading = false;
  }
}