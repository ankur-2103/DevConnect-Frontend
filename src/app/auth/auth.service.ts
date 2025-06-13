import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { ConfigService, TokenStorageService } from '../core/services';

import { AuthUser } from './models';

export interface AccessData {
  token_type: 'Bearer';
  expires_in: number;
  accessToken: string;
  refresh_token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly configService = inject(ConfigService);
  private readonly tokenStorageService = inject(TokenStorageService);

  private readonly hostUrl = this.configService.getAPIUrl();
  private readonly clientId = this.configService.getAuthSettings().clientId;
  private readonly clientSecret = this.configService.getAuthSettings().secretId;

  /**
   * Performs a request with user credentials
   * in order to get auth tokens
   *
   * @param {string} username
   * @param {string} password
   * @returns Observable<AccessData>
   */
  login(usernameOrEmail: string, password: string): Observable<AccessData> {
    return this.http.post<AccessData>(`${this.hostUrl}/api/auth/signin`, {
      usernameOrEmail,
      password,
    });
  }

  register(
    username: string,
    email: string,
    password: string
  ): Observable<AccessData> {
    return this.http.post<AccessData>(`${this.hostUrl}/api/auth/signup`, {
      username,
      email,
      password,
    });
  }

  /**
   * Performs a request for logout authenticated user
   *
   * @param {('all' | 'allButCurrent' | 'current')} [clients='current']
   * @returns Observable<void>
   */
  logout(
    clients: 'all' | 'allButCurrent' | 'current' = 'current'
  ): Observable<void> {
    const params = new HttpParams().append('clients', clients);

    return this.http.get<void>(`${this.hostUrl}/api/auth/logout`, { params });
  }

  /**
   * Asks for a new access token given
   * the stored refresh token
   *
   * @returns {Observable<AccessData>}
   */
  refreshToken(): Observable<AccessData> {
    const refreshToken = this.tokenStorageService.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error('Refresh token does not exist'));
    }

    return this.http.post<AccessData>(`${this.hostUrl}/api/auth/login`, {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    });
  }

  forgetPassword(usernameOrEmail: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${this.hostUrl}/api/auth/forgotPassword`,
      { usernameOrEmail }
    );
  }

  resetPassword(
    token: string,
    newPassword: string
  ): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${this.hostUrl}/api/auth/resetPassword`,
      {
        token,
        newPassword,
      }
    );
  }

  /**
   * Returns authenticated user
   * based on saved access token
   *
   * @returns {Observable<AuthUser>}
   */
  getAuthUser(): Observable<AuthUser> {
    return this.http.get<AuthUser>(`${this.hostUrl}/api/user/me`);
  }

  updateUserRoles(
    userId: string,
    roles: number[]
  ): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      `${this.hostUrl}/api/auth/updateRoles`,
      {
        userId,
        roles,
      }
    );
  }
}
