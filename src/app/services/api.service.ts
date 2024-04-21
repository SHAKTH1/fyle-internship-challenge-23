import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  getUser(githubUsername: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  
  getRepos(username: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`https://api.github.com/users/${username}/repos`);
  }
  
  getUserProfile(username: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/users/${username}`);
  }
}