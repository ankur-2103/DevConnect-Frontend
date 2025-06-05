import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../core/services/http.service';
import { Comment, CommentView } from '../models/comment.model';
import { PaginatedResponse } from '../models/common.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private readonly COMMENT_ENDPOINT = '/api/comment';
  private readonly COMMENTS_BY_POST_ENDPOINT = '/api/comments/post';

  constructor(private _httpService: HttpService) {}

  // Create a new comment
  createComment(data: {
    postId: string;
    content: string;
  }): Observable<CommentView> {
    return this._httpService.post<CommentView>(this.COMMENT_ENDPOINT, { ...data });
  }

  // Get all comments for a specific post with pagination
  getCommentsByPost(
    postId: string,
    page: number = 1,
    limit: number = 10
  ): Observable<PaginatedResponse<CommentView>> {
    return this._httpService.get<PaginatedResponse<CommentView>>(
      `${this.COMMENTS_BY_POST_ENDPOINT}/${postId}`,
      {
        page: page,
        limit: limit,
      }
    );
  }

  // Get a single comment by ID
  getCommentById(id: string): Observable<CommentView> {
    return this._httpService.get<CommentView>(`${this.COMMENT_ENDPOINT}/${id}`);
  }

  // Update a comment
  updateComment(id: string, content: string): Observable<CommentView> {
    return this._httpService.put<CommentView  >(`${this.COMMENT_ENDPOINT}/${id}`, {
      content,
    });
  }

  // Delete a comment
  deleteComment(id: string): Observable<void> {
    return this._httpService.delete<void>(`${this.COMMENT_ENDPOINT}/${id}`);
  }
}
