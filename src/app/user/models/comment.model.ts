export interface Comment {
  _id: string;
  postId: string;
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface CommentUser {
  _id: string;
  name: string;
}

export interface CommentView {
  _id: string;
  postId: string;
  userId: CommentUser;
  content: string;
  createdAt: string;
  updatedAt: string;
}
