import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { AuthUser } from '../../auth/models';
import { Observable } from 'rxjs';
import { PaginatedResponse } from '../models/common.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly PROFILE_ENDPOINT = '/api/user';

  constructor(private _httpService: HttpService) {}

  updateMe(profileData: FormData): Observable<AuthUser> {
    return this._httpService.put<AuthUser>(
      `${this.PROFILE_ENDPOINT}/me`,
      profileData
    );
  }

  searchUsers(
    search: string,
    page: number = 1
  ): Observable<PaginatedResponse<AuthUser>> {
    return this._httpService.get<PaginatedResponse<AuthUser>>(
      `${this.PROFILE_ENDPOINT}/search`,
      {
        search,
        page,
      }
    );
  }

  getUserById(userId: string): Observable<AuthUser> {
    return this._httpService.get<AuthUser>(
      `${this.PROFILE_ENDPOINT}/${userId}`
    );
  }
}
