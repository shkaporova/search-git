import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../UI/form/form.component';
import {
  Auth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';
  formMode: 'signIn' | 'signUp' | 'github' = 'signIn';

  constructor(private auth: Auth, private router: Router) {}

  selectFormMode(mode: 'signIn' | 'signUp' | 'github') {
    this.formMode = mode;
    if (mode === 'github') {
      this.signInWithGitHub();
    }
  }

  signIn(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then(() => this.router.navigate(['/blocks']))
      .catch((error) => console.error('Sign In Error:', error));
  }

  signUp(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then(() => this.router.navigate(['/blocks']))
      .catch((error) => console.error('Sign Up Error:', error));
  }

  signInWithGitHub() {
    const provider = new GithubAuthProvider();
    provider.addScope('read:user');
    provider.addScope('user:email');
    signInWithPopup(this.auth, provider)
      .then(() => this.router.navigate(['/blocks']))
      .catch((error) => console.error('GitHub Sign In Error:', error));
  }

  getSubmitText() {
    switch (this.formMode) {
      case 'signIn':
        return 'Sign in';
      case 'signUp':
        return 'Sign up';
      default:
        return '';
    }
  }

  getSubmitMethod() {
    return (email: string, password: string) => {
      if (this.formMode === 'signIn') {
        this.signIn(email, password);
      } else if (this.formMode === 'signUp') {
        this.signUp(email, password);
      }
    };
  }
}
