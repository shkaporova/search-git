import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private apiUrl = 'https://api.github.com/search/users';

  constructor(private http: HttpClient) {}

  searchUsers(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${query}`);
  }

  getUserDetails(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}`);
  }
}
