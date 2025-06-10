import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from '../../services/user.service';
import { AuthUser } from '../../../auth/models';
import { InfiniteScrollComponent } from '../../../shared/infinite-scroll/infinite-scroll.component';
import { PaginatedResponse } from '../../models/common.model';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { route } from '../../user-routing.module';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  route = route;
  @ViewChild(InfiniteScrollComponent)
  infiniteScroll!: InfiniteScrollComponent<AuthUser>;

  searchControl = new FormControl('');
  users: AuthUser[] = [];
  currentPage: number = 1;
  isLoading: boolean = false;

  constructor(private _profileService: ProfileService) {}

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(query => {
        this.currentPage = 1;
        this.users = [];
        this.infiniteScroll?.reset();
      });
  }

  loadMoreUsers = async (
    page: number
  ): Promise<{ items: AuthUser[]; hasMore: boolean }> => {
    const query = this.searchControl.value;
    this.isLoading = true;
    if (!query) {
      return { items: [], hasMore: false };
    }

    return new Promise((resolve, reject) => {
      this._profileService.searchUsers(query, page).subscribe({
        next: (response: PaginatedResponse<AuthUser>) => {
          if (page === 1) {
            this.users = response.items;
          } else {
            this.users = [...this.users, ...response.items];
          }
          resolve({
            items: response.items,
            hasMore: response.pagination.hasMore,
          });
        },
        error: (error) => {
          console.error('Error searching users:', error);
          reject(error);
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    });
  };

  onUserSelected(user: AuthUser) {
    // Handle user selection, e.g., navigate to profile
  }
}
