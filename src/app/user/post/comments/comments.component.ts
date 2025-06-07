import {
  Component,
  Input,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { map, tap, catchError, of, finalize } from 'rxjs';

import { Comment, CommentView } from '../../models/comment.model';
import { AuthFacade } from '../../../auth/store/auth.facade';
import { AuthUser } from '../../../auth/models';
import { RoleEnum } from '../../../core/enums/role.enum';
import { CommentService } from '../../services/comment.service';
import { PostFormHandler } from '../../form-handlers/comment-form-handler.service';
import { PaginatedResponse } from '../../models/common.model';
import { InfiniteScrollComponent } from '../../../shared/infinite-scroll/infinite-scroll.component';

@Component({
  selector: 'app-comments',
  standalone: false,
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent implements OnInit, OnChanges {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() commentCountHandler = new EventEmitter<number>();
  @Input() postId: string = '';
  @Input() postOwnerId: string = '';
  @ViewChild(InfiniteScrollComponent)
  infiniteScroll!: InfiniteScrollComponent<Comment>;

  comments: CommentView[] = [];
  commentForm: FormGroup;
  currentUserId: string | undefined;
  isAdmin: boolean = false;
  isEditing: boolean = false;

  constructor(
    private _commentService: CommentService,
    private _messageService: MessageService,
    private _confirmationService: ConfirmationService,
    private _authFacade: AuthFacade,
    private _formBuilder: FormBuilder,
    private _formHandler: PostFormHandler,
    private _cdr: ChangeDetectorRef
  ) {
    this.commentForm = this._formHandler.commentForm(this._formBuilder);
  }

  ngOnInit() {
    this._authFacade.authUser$
      .pipe(
        map((user: AuthUser | undefined) => {
          if (user) {
            this.currentUserId = user._id;
            this.isAdmin = user.roles.includes(RoleEnum.admin.enum);
          } else {
            this.currentUserId = undefined;
            this.isAdmin = false;
          }
          return user;
        }),
        finalize(() => this._cdr.detectChanges())
      )
      .subscribe();

    this.commentForm.valueChanges
      .pipe(
        tap(() => {
          if (this.commentForm.invalid) {
            console.log('Form Errors:', this.getFormErrors());
          }
        }),
        finalize(() => this._cdr.detectChanges())
      )
      .subscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['postId'] || changes['postOwnerId']) {
      this.commentForm = this._formHandler.commentForm(this._formBuilder, {
        postId: this.postId,
      } as CommentView);
      this.comments = [];
      this.isEditing = false;

      this.commentForm.valueChanges
        .pipe(
          tap(() => {
            if (this.commentForm.invalid) {
              console.log('Form Errors:', this.getFormErrors());
              console.log('Form Value:', this.commentForm.value);
            }
          })
        )
        .subscribe();

      if (this.visible && this.postId) {
        this.loadMoreComments(1);
      }
    }
  }

  private getFormErrors(): { [key: string]: any } {
    const errors: { [key: string]: any } = {};
    Object.keys(this.commentForm.controls).forEach((key) => {
      const control = this.commentForm.get(key);
      if (control?.errors) {
        errors[key] = control.errors;
      }
    });
    return errors;
  }

  loadMoreComments = async (
    page: number
  ): Promise<{ items: CommentView[]; hasMore: boolean }> => {
    if (!this.postId || !this._commentService) {
      console.error('PostId or CommentService is not available');
      return { items: [], hasMore: false };
    }

    return new Promise((resolve, reject) => {
      this._commentService
        .getCommentsByPost(this.postId, page)
        .pipe(
          map((response: PaginatedResponse<CommentView>) => {
            if (page === 1) {
              this.comments = response.items;
            } else {
              this.comments = [...this.comments, ...response.items];
            }
            return {
              items: response.items,
              hasMore: response.pagination.hasMore,
            };
          }),
          catchError((error) => {
            console.error('Error loading comments:', error);
            reject(error);
            return of({ items: [], hasMore: false });
          }),
          finalize(() => this._cdr.detectChanges())
        )
        .subscribe(resolve);
    });
  };

  addComment() {
    if (this.commentForm.invalid) {
      console.log(
        'Cannot add comment - Form is invalid:',
        this.getFormErrors()
      );
      return;
    }
    if (!this.postId || !this.currentUserId) {
      console.log('Cannot add comment - Missing required data:', {
        postId: this.postId,
        currentUserId: this.currentUserId,
      });
      return;
    }

    const commentData = {
      postId: this.postId,
      content: this.commentForm.get('content')?.value.trim(),
    };

    console.log('Adding comment with data:', commentData);

    this._commentService
      .createComment(commentData)
      .pipe(
        map((newComment) => {
          console.log('Comment added successfully:', newComment);
          this.comments.unshift(newComment);
          this.commentForm = this._formHandler.commentForm(this._formBuilder, {
            postId: this.postId,
          } as CommentView);
          this._messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Comment added successfully',
            life: 3000,
          });
          this.commentCountHandler.emit(1);
          return newComment;
        }),
        catchError((error) => {
          console.error('Error adding comment:', error);
          this._messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to add comment',
            life: 4000,
          });
          return of(null);
        }),
        finalize(() => this._cdr.detectChanges())
      )
      .subscribe();
  }

  startEdit(comment: CommentView) {
    this.isEditing = true;
    this.commentForm = this._formHandler.commentForm(
      this._formBuilder,
      comment
    );
  }

  saveEdit() {
    if (this.commentForm.invalid) {
      console.log('Cannot save edit - Form is invalid:', this.getFormErrors());
      return;
    }

    const commentId = this.commentForm.get('_id')?.value;
    const content = this.commentForm.get('content')?.value.trim();

    console.log('Saving comment edit:', { commentId, content });

    this._commentService
      .updateComment(commentId, content)
      .pipe(
        map((updatedComment) => {
          console.log('Comment updated successfully:', updatedComment);
          const index = this.comments.findIndex(
            (c) => c._id === updatedComment._id
          );
          if (index !== -1) {
            this.comments[index] = updatedComment;
          }
          this.cancelEdit();
          this._messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Comment updated successfully',
            life: 3000,
          });
          return updatedComment;
        }),
        catchError((error) => {
          console.error('Error updating comment:', error);
          this._messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to update comment',
            life: 4000,
          });
          return of(null);
        }),
        finalize(() => this._cdr.detectChanges())
      )
      .subscribe();
  }

  cancelEdit() {
    this.isEditing = false;
    this.commentForm = this._formHandler.commentForm(this._formBuilder, {
      postId: this.postId,
    } as CommentView);
  }

  deleteComment(event: Event, comment: CommentView) {
    this._confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to delete this comment?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      acceptIcon: 'pi pi-trash',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this._commentService
          .deleteComment(comment._id)
          .pipe(
            map(() => {
              this.comments = this.comments.filter(
                (c) => c._id !== comment._id
              );
              this._messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Comment deleted successfully',
                life: 3000,
              });
              this.commentCountHandler.emit(-1);
            }),
            catchError((error) => {
              console.error('Error deleting comment:', error);
              this._messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Failed to delete comment',
                life: 4000,
              });
              return of(null);
            }),
            finalize(() => this._cdr.detectChanges())
          )
          .subscribe();
      },
    });
  }

  canEditComment(comment: CommentView): boolean {
    return Boolean(
      this.currentUserId &&
        (this.currentUserId === comment.user._id ||
          this.currentUserId === this.postOwnerId ||
          this.isAdmin)
    );
  }

  canDeleteComment(comment: CommentView): boolean {
    return this.canEditComment(comment);
  }

  onCommentSelected(data: CommentView) {}

  closeDialog(): void {
    this.visible = false;
    this.commentForm = this._formHandler.commentForm(this._formBuilder, {
      postId: this.postId,
    } as CommentView);
    this.comments = [];
    this.infiniteScroll.reset();
  }
}
