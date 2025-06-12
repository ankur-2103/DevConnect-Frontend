import { PostView } from './post.model';

export interface Overview {
  totalUsers: number;
  totalPosts: number;
  totalComments: number;
  newUsers: number;
  newPosts: number;
  newComments: number;
}

export interface RoleDistribution {
  role: string;
  count: number;
}

export interface HistoryDataPoint {
  count: number;
  date: string;
}

export interface RecentPost {
  _id: string;
  title?: string;
  createdAt: string;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}

export interface RecentUser {
  _id: string;
  name: string;
  avatar: string;
  bio: string
  createdAt: string;
}

export interface AdminDashboardData {
  overview: Overview;
  recentActivity: {
    posts: PostView[];
    users: RecentUser[];
    mostLikedPosts: PostView[];
    mostCommentedPosts: PostView[];
  };
}

export interface AdminHistory{
  usersOverTime: HistoryDataPoint[];
  postsOverTime: HistoryDataPoint[];
  commentsOverTime: HistoryDataPoint[];
  roleDistribution: RoleDistribution[];
}
