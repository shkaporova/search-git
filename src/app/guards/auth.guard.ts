import { CanActivateFn } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return new Observable<boolean>((observer) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        observer.next(true);
      } else {
        router.navigate(['/login']);
        observer.next(false);
      }
      observer.complete();
    });
  });
};

export const unauthGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return new Observable<boolean>((observer) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        router.navigate(['/blocks']);
        observer.next(false);
      } else {
        observer.next(true);
      }
      observer.complete();
    });
  });
};
