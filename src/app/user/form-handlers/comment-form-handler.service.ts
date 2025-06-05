import { FormBuilder, Validators } from '@angular/forms';
import { Post, PostView } from '../models/post.model';
import { Injectable } from '@angular/core';
import { Comment, CommentView } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class PostFormHandler {
  commentForm(_fb: FormBuilder, data?: CommentView) {
    console.log("🚀 ~ PostFormHandler ~ commentForm ~ data:", data)
    return _fb.group({
      _id: [{ value: data?._id || '', disabled: !data?._id }],
      content: [data?.content || '', [Validators.required]],
      postId: [data?.postId || '', [Validators.required]],
      userId: [data?.userId?._id || ''],
    });
  }
}
