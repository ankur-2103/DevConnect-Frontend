import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthUser } from '../../../auth/models';
import { AuthFacade } from '../../../auth/store/auth.facade';
import { Store } from '@ngrx/store';
import { PostService } from '../../services/post.service';
import { Post, PostView } from '../../models/post.model';
import { PaginatedResponse } from '../../models/common.model';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { InfiniteScrollComponent } from '../../../shared/infinite-scroll/infinite-scroll.component';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/user.service';
import { RoleEnum } from '../../../core/enums/role.enum';
import { CommonService } from '../../services/common.service';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: AuthUser = {
    _id: '',
    name: '',
    bio: '',
    skills: '',
    avatar: '',
    social: {
      github: '',
      linkedin: '',
      twitter: '',
      website: '',
    },
    roles: [],
    createdAt: '',
    updatedAt: '',
  };

  isUpdateDialogOpen: boolean = false;
  isPostDialogOpen: boolean = false;
  currentPage: number = 1;
  posts: PostView[] = [];
  roles = Object.values(RoleEnum);
  selectedRoles: number[] = [];
  isOwnProfile: boolean = false;
  isLoading: boolean = true;
  isAdmin: boolean = false;
  private authSubscription: Subscription | null = null;
  @ViewChild(InfiniteScrollComponent)
  infiniteScroll!: InfiniteScrollComponent<PostView>;
  loading: boolean = false;
  updatingRoles: boolean = false;

  constructor(
    private _authFacade: AuthFacade,
    private _store: Store,
    private _postService: PostService,
    private _profileService: ProfileService,
    private _route: ActivatedRoute,
    private _commonService: CommonService,
    private _messageService: MessageService,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this.loading = true;
    this._route.params.subscribe((params) => {
      const userId = params['id'];
      this.isAdmin = this._commonService.isAdmin;
      if (userId) {
        this.loadUserProfile(userId);
      } else {
        this.loadOwnProfile();
      }
    });
  }

  private loadUserProfile(userId: string) {
    this.isLoading = true;
    this._profileService.getUserById(userId).subscribe({
      next: (user) => {
        this.user = user;
        this.selectedRoles = user.roles;
        this.checkIfOwnProfile();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading user profile:', error);
        this.isLoading = false;
      },
    });
  }

  private loadOwnProfile() {
    this.authSubscription = this._authFacade.authUser$.subscribe((state) => {
      if (state) {
        this.user = state;
        this.selectedRoles = state.roles;
        this.isOwnProfile = true;
        this.isLoading = false;
      }
    });
  }

  private checkIfOwnProfile() {
    this._authFacade.authUser$.subscribe((currentUser) => {
      this.isOwnProfile = currentUser?._id === this.user._id;
    });
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  // Create a bound function that has access to the PostService
  loadMorePosts = async (
    page: number
  ): Promise<{ items: PostView[]; hasMore: boolean }> => {
    if (!this._postService) {
      console.error('PostService is not available');
      return { items: [], hasMore: false };
    }

    const prevPosts = this.posts;
    this.posts = [];

    return new Promise((resolve, reject) => {
      this._postService.getUserPosts(page, 10, this.user._id).subscribe({
        next: (response: PaginatedResponse<PostView>) => {
          if (page === 1) {
            this.posts = response.items;
          } else {
            this.posts = [...prevPosts, ...response.items];
          }
          resolve({
            items: response.items,
            hasMore: response.pagination.hasMore,
          });
        },
        error: (error) => {
          console.error('Error loading posts:', error);
          this.posts = prevPosts;
          reject(error);
        },
      });
    });
  };

  onPostCreated(post: PostView) {
    // Reset and refresh posts from the beginning
    this.currentPage = 1;
    this.infiniteScroll.reset();
    this.closePostDialog(null);
  }

  onPostUpdated(post: PostView) {
    // Update the post in the list
    const index = this.posts.findIndex((p) => p._id === post._id);
    if (index !== -1) {
      this.posts[index] = post;
    } else {
      // If post is not found, reset and refresh the list
      this.currentPage = 1;
      this.infiniteScroll.reset();
    }
    this.closePostDialog(null);
  }

  onPostDeleted(postId: string) {
    // Create a new array reference to ensure change detection
    const updatedPosts = [...this.posts].filter((post) => post._id !== postId);
    this.posts = updatedPosts;

    // If we have no posts left and we're not on page 1, reset to page 1
    if (this.posts.length === 0 && this.currentPage > 1) {
      this.currentPage = 1;
      this.infiniteScroll.reset();
    }
  }

  onPostSelected(post: PostView) {
    // You can handle post selection here
    // For example:
    // - Navigate to post detail page
    // - Open post in a modal
    // - Update post state
  }

  openUpdateDialog() {
    this.isUpdateDialogOpen = true;
  }

  closeUpdateDialog(event: any) {
    this.isUpdateDialogOpen = false;
  }

  openPostDialog() {
    this.isPostDialogOpen = true;
  }

  closePostDialog(event: any) {
    this.isPostDialogOpen = false;
  }

  onError(event: Event) {
    console.log(event);
  }

  get skills(): string[] {
    return this.user.skills ? this.user.skills.split(',') : [];
  }

  get canEditProfile(): boolean {
    return this.isOwnProfile || this.isAdmin;
  }

  get canCreatePost(): boolean {
    return this.isOwnProfile;
  }

  sortRoles() {
    // Sort roles by enum value in descending order (admin: 103, moderator: 102, user: 101)
    this.selectedRoles.sort((a, b) => a - b);
  }

  onRolesChange(event: any) {
    if (!this.user._id || !this.isAdmin) return;

    if (!this.selectedRoles || this.selectedRoles.length === 0) {
      this._messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'At least one role must be selected',
        life: 3000,
      });
      // Revert to previous roles
      this.selectedRoles = this.user.roles;
      return;
    }

    // Sort roles before updating

    this.updatingRoles = true;
    this._authService
      .updateUserRoles(this.user._id, this.selectedRoles)
      .subscribe({
        next: (updatedUser) => {
          this._messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'User roles updated successfully',
            life: 3000,
          });
          this.updatingRoles = false;
        },
        error: (error) => {
          console.error('Error updating roles:', error);
          this._messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to update user roles',
            life: 3000,
          });
          // Revert to previous roles
          this.selectedRoles = this.user.roles;
          this.updatingRoles = false;
        },
      });
  }
}
