import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Post, PostView } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthFacade } from '../../../auth/store/auth.facade';
import { AuthUser } from '../../../auth/models';
import { RoleEnum } from '../../../core/enums/role.enum';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-post-card',
  standalone: false,
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit, OnChanges {
  @Input() postId?: string;
  @Input() postData?: PostView;
  @Input() showActions: boolean = true;
  @Output() postUpdated = new EventEmitter<PostView>();
  @Output() postDeleted = new EventEmitter<string>();
  @ViewChild('contentContainer') contentContainer!: ElementRef;

  isLoading = false;
  isLikeLoading = false;
  isAuthor = false;
  isAdmin = false;
  currentUserId: string | undefined;
  isEditDialogOpen = false;
  isExpanded: boolean = false;
  hasOverflow: boolean = false;
  isCommentsDialogOpen: boolean = false;
  commentsCount: number = 0;

  constructor(
    private _postService: PostService,
    private _messageService: MessageService,
    private _authFacade: AuthFacade,
    private _confirmationService: ConfirmationService,
    private _sanitizer: DomSanitizer,
    private _commonService: CommonService
  ) {}

  ngOnInit() {
    if (this.postId && !this.postData) {
      this.loadPost();
    } else if (this.postData) {
      this.checkUserPermissions();
    }

    // Subscribe to auth user changes
    this._authFacade.authUser$.subscribe((user: AuthUser | undefined) => {
      if (user) {
        this.currentUserId = user._id;
        this.isAdmin = user.roles.includes(RoleEnum.admin.enum);
        if (this.postData) {
          this.isAuthor = user._id === this.postData.user._id;
        }
      } else {
        this.currentUserId = undefined;
        this.isAdmin = false;
        this.isAuthor = false;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // Check for content overflow when post data changes
    if (changes['postData'] && changes['postData'].currentValue) {
      this.checkUserPermissions();
      this.checkContentOverflow();
    }
  }

  private checkUserPermissions() {
    if (!this.postData) return;
    this._authFacade.authUser$.subscribe((user: AuthUser | undefined) => {
      if (user) {
        this.isAuthor = user._id === this.postData?.user._id;
        this.isAdmin = user.roles.includes(RoleEnum.admin.enum);
      } else {
        this.isAuthor = false;
        this.isAdmin = false;
      }
    });
  }

  private checkContentOverflow() {
    // Use setTimeout to ensure DOM is updated
    // setTimeout(() => {
    //   if (this.contentContainer) {
    //     const element = this.contentContainer.nativeElement;
    //     this.hasOverflow = element.scrollHeight > 100;
    //   }
    // });
  }

  handleCommentCount(value: number) {
    if (this.postData) {
      this.postData.commentsCount += value;
    }
  }

  private loadPost() {
    this.isLoading = true;
    this._postService.getPostById(this.postId!).subscribe({
      next: (post) => {
        this.postData = post;
        this.checkUserPermissions();
        this.checkContentOverflow();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading post:', error);
        this._messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load post',
          life: 4000,
        });
        this.isLoading = false;
      },
    });
  }

  get isLiked(): boolean {
    return Boolean(
      this.currentUserId && this.postData?.likes?.includes(this.currentUserId)
    );
  }

  get likesCount(): number {
    return this.postData?.likes?.length ?? 0;
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  toggleLike() {
    if (!this.currentUserId || !this.postData || this.isLikeLoading) return;

    this.isLikeLoading = true;
    // Optimistically update the UI
    const originalLikes = [...(this.postData.likes || [])];
    if (this.isLiked) {
      this.postData.likes = (this.postData.likes || []).filter(
        (id) => id !== this.currentUserId
      );
    } else {
      this.postData.likes = [
        ...(this.postData.likes || []),
        this.currentUserId,
      ];
    }

    this._postService.toggleLike(this.postData._id).subscribe({
      next: (updatedPost) => {
        this.postData = updatedPost;
        this.checkContentOverflow();
      },
      error: (error) => {
        if (this.postData) {
          this.postData.likes = originalLikes;
        }
        console.error('Error toggling like:', error);
        this._messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to update like status',
          life: 4000,
        });
        this.isLoading = false;
      },
      complete: () => {
        this.isLikeLoading = false;
      },
    });
  }

  onEdit() {
    if (this.postData) {
      this.isEditDialogOpen = true;
    }
  }

  onPostUpdated(updatedPost: PostView) {
    this.postData = updatedPost;
    this.postUpdated.emit(updatedPost);
    this.isEditDialogOpen = false;
    this.checkContentOverflow();
  }

  closeEditDialog() {
    this.isEditDialogOpen = false;
  }

  get canEditPost(): boolean {
    return this.isAuthor || this.isAdmin;
  }

  onDelete(event: Event) {
    if (!this.postData) return;

    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to delete this post?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      acceptIcon: 'pi pi-trash',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this._postService.deletePost(this.postData!._id).subscribe({
          next: () => {
            this._messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Post deleted successfully',
              life: 4000,
            });
            this.postDeleted.emit(this.postData!._id);
          },
          error: (error) => {
            console.error('Error deleting post:', error);
            this._messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to delete post',
              life: 4000,
            });
          },
        });
      },
      reject: () => {
        this._messageService.add({
          severity: 'info',
          summary: 'Cancelled',
          detail: 'Post deletion cancelled',
          life: 3000,
        });
      },
    });
  }

  toggleComments(): void {
    this.isCommentsDialogOpen = !this.isCommentsDialogOpen;
  }

  visibleChange(value: boolean) {
    this.isCommentsDialogOpen = value;
  }

  get postContent(): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(
      this.postData?.content || ''
    );
  }
}
