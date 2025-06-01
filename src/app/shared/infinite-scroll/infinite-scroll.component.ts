import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infinite-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infinite-scroll.component.html'
})
export class InfiniteScrollComponent<T> implements OnInit, OnDestroy {
  @Input() loadMoreData!: (page: number) => Promise<{ items: T[], hasMore: boolean }>;
  @Input() itemTemplate!: any;
  @Input() initialPage: number = 1;
  @Input() rootMargin: string = '100px';
  @Input() threshold: number = 0.1;
  @Output() itemSelected = new EventEmitter<T>();

  @ViewChild('loadMoreTrigger') loadMoreTrigger!: ElementRef;
  private observer: IntersectionObserver | null = null;

  items: T[] = [];
  loading: boolean = false;
  currentPage: number = 1;
  hasMore: boolean = true;
  error: boolean = false;

  ngOnInit() {
    this.currentPage = this.initialPage;
    this.loadInitialData();
  }

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.loading && this.hasMore && !this.error) {
          this.loadMore();
        }
      });
    }, options);

    if (this.loadMoreTrigger) {
      this.observer.observe(this.loadMoreTrigger.nativeElement);
    }
  }

  private async loadInitialData() {
    if (!this.loadMoreData) {
      console.error('loadMoreData function is not provided');
      return;
    }
    await this.loadData(this.initialPage);
  }

  private async loadData(page: number) {
    if (this.loading || !this.hasMore || !this.loadMoreData) return;

    this.loading = true;
    this.error = false;
    
    try {
      const response = await this.loadMoreData(page);
      
      if (!response) {
        throw new Error('No response from loadMoreData');
      }

      if (page === this.initialPage) {
        this.items = response.items || [];
      } else {
        this.items = [...this.items, ...(response.items || [])];
      }
      console.log("🚀 ~ InfiniteScrollComponent<T> ~ loadData ~ this.items:", this.items)
      
      this.currentPage = page;
      this.hasMore = response.hasMore;
    } catch (error) {
      console.error('Error loading data:', error);
      this.error = true;
      this.hasMore = false;
    } finally {
      this.loading = false;
    }
  }

  async loadMore() {
    if (!this.loading && this.hasMore && !this.error) {
      await this.loadData(this.currentPage + 1);
    }
  }

  onItemSelect(item: T) {
    this.itemSelected.emit(item);
  }

  reset() {
    this.items = [];
    this.currentPage = this.initialPage;
    this.hasMore = true;
    this.error = false;
    this.loadInitialData();
  }
} 