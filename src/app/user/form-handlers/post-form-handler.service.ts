import { FormBuilder, Validators } from '@angular/forms';
import { Post, PostView } from '../models/post.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostFormHandler {
  postForm(_fb: FormBuilder, data?: PostView) {
    return _fb.group({
      _id: [{ value: data?._id || '', disabled: !data?._id }],
      content: [data?.content || '', [Validators.required]],
      docUrl: [
        data?.docUrl || '',
        [
          Validators.pattern(
            '^(https?://)?(www\\.)?[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\\.[a-zA-Z]{2,}(/\\S*)?$'
          ),
        ],
      ],
    });
  }
}
