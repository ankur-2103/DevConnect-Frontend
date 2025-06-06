export interface Post {
  _id: string;
  userId?: string;
  content: string;
  docUri: string;
  likes: string[];
  createdAt: string;
  updatedAt: string;
}

export interface PostUser {
  _id: string;
  name: string;
  avatar: string;
}

export interface PostView {
  _id: string;
  user: PostUser;
  content: string;
  docUri: string;
  likes: string[];
  createdAt: string;
  updatedAt: string;
  commentsCount: number;
}
