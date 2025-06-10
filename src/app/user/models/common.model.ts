export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasMore: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: PaginationMeta;
}

export interface DataPoint {
  date: string;
  count: number;
}

export interface DatasetData {
  label: string;
  data: DataPoint[];
  color: string;
}
