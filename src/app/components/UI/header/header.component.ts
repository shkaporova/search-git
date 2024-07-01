import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  user: any;

  constructor(private router: Router, public auth: Auth) {}

  ngOnInit() {
    this.auth.onAuthStateChanged((user) => {
      this.user = user;
    });
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  logout() {
    from(signOut(this.auth))
      .pipe(
        tap(() => this.router.navigate(['/'])),
        catchError((error) => {
          console.error('Logout Error:', error);
          return [];
        })
      )
      .subscribe();
  }
}
