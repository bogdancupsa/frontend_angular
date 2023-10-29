import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}api-token-auth/`, { username, password });
  }

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}clients/`);
  }

  
}
