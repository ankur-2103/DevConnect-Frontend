import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { Observable } from 'rxjs';
import { Post, PostView } from '../models/post.model';
import { PaginatedResponse } from '../models/common.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly POSTS_ENDPOINT = '/api/posts';

  constructor(private _httpService: HttpService) {}

  // Get all posts
  getAllPosts(): Observable<Post[]> {
    return this._httpService.get<Post[]>(this.POSTS_ENDPOINT);
  }

  // Get post by ID
  getPostById(id: string): Observable<PostView> {
    return this._httpService.get<PostView>(`${this.POSTS_ENDPOINT}/${id}`);
  }

  // Create new post
  createPost(postData: Partial<PostView>): Observable<PostView> {
    return this._httpService.post<PostView>(this.POSTS_ENDPOINT, postData);
  }

  // Update existing post
  updatePost(id: string, postData: Partial<PostView>): Observable<PostView> {
    return this._httpService.put<PostView>(
      `${this.POSTS_ENDPOINT}/${id}`,
      postData
    );
  }

  // Delete post
  deletePost(id: string): Observable<void> {
    return this._httpService.delete<void>(`${this.POSTS_ENDPOINT}/${id}`);
  }

  // Toggle like on post
  toggleLike(id: string): Observable<PostView> {
    return this._httpService.post<PostView>(
      `${this.POSTS_ENDPOINT}/${id}/like`,
      {}
    );
  }

  // Get user posts with pagination
  getUserPosts(
    page: number = 1,
    limit: number = 3,
    id: string = ''
  ): Observable<PaginatedResponse<PostView>> {
    return this._httpService.get<PaginatedResponse<PostView>>(
      `${this.POSTS_ENDPOINT}/user/${id}`,
      {
        page: page,
        limit: limit,
      }
    );
  }

  // Get feed posts with pagination
  getFeed(
    page: number = 1,
    limit: number = 10
  ): Observable<PaginatedResponse<PostView>> {
    return this._httpService.get<PaginatedResponse<PostView>>(
      `${this.POSTS_ENDPOINT}/feed`,
      {
        page: page,
        limit: limit,
      }
    );
  }
}
