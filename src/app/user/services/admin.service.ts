import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../core/services/http.service';
import { AdminDashboardData, AdminHistory } from '../models/admin.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private readonly ADMIN_ENDPOINT = '/api/admin';

  constructor(private _httpService: HttpService) {}

  // Get dashboard statistics and recent activities
  getDashboardStats(): Observable<AdminDashboardData> {
    return this._httpService.get<AdminDashboardData>(
      `${this.ADMIN_ENDPOINT}/dashboard`
    );
  }

  getHistory(): Observable<AdminHistory> {
    return this._httpService.get<AdminHistory>(
      `${this.ADMIN_ENDPOINT}/history`
    );
  }
}
