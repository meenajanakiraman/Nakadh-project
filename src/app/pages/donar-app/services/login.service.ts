import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserDetailsService } from './user-details.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginUrl = `${environment.apiUrl}/login`;
  private userStore = inject(UserDetailsService);

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const payload = { username, password };

    return this.http.post<{ token: string }>(this.loginUrl, payload).pipe(
      tap((response: { token: string }) => {
        if (response?.token) {
          localStorage.setItem('auth_token', response.token);

          const tokenPayload = this.decodeToken(response.token);
          if (tokenPayload?.role === 'user') {
            this.userStore.loadUser(tokenPayload.username, response.token);
          }
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  getUserRole(): string | null {
    const payload = this.decodeToken(this.getToken());
    return payload?.role || null;
  }

  getUserName(): string | null {
    const payload = this.decodeToken(this.getToken());
    return payload?.username || null;
  }

  private decodeToken(token: string | null): any {
    if (!token) return null;
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch {
      return null;
    }
  }
}
