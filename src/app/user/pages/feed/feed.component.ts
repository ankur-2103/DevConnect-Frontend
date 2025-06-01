import { Component, OnInit, ViewChild } from '@angular/core';
import { Post, PostView } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { InfiniteScrollComponent } from '../../../shared/infinite-scroll/infinite-scroll.component';
import { PaginatedResponse } from '../../models/common.model';

@Component({
  selector: 'app-feed',
  standalone: false,
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit {
  posts: PostView[] = [];
  currentPage: number = 1;
  @ViewChild(InfiniteScrollComponent)
  infiniteScroll!: InfiniteScrollComponent<PostView>;

  constructor(private _postService: PostService) {}

  ngOnInit(): void {}

  // Create a bound function that has access to the PostService
  loadMorePosts = async (
    page: number
  ): Promise<{ items: PostView[]; hasMore: boolean }> => {
    if (!this._postService) {
      console.error('PostService is not available');
      return { items: [], hasMore: false };
    }

    return new Promise((resolve, reject) => {
      this._postService.getFeed(page).subscribe({
        next: (response: PaginatedResponse<PostView>) => {
          if (page === 1) {
            this.posts = response.items;
          } else {
            this.posts = [...this.posts, ...response.items];
          }
          resolve({
            items: response.items,
            hasMore: response.pagination.hasMore,
          });
        },
        error: (error) => {
          console.error('Error loading feed:', error);
          reject(error);
        },
      });
    });
  };

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
    console.log('Selected post:', post);
  }
}
