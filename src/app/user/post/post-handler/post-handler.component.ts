import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostFormHandler } from '../../form-handlers/post-form-handler.service';
import { Post, PostView } from '../../models/post.model';
import { MessageService } from 'primeng/api';
import { PostService } from '../../services/post.service';
import { finalize } from 'rxjs/operators';
import { Editor } from 'primeng/editor';

@Component({
  selector: 'app-post-handler',
  standalone: false,
  templateUrl: './post-handler.component.html',
  styleUrl: './post-handler.component.scss',
})
export class PostHandlerComponent implements OnChanges {
  @Input() isOpen: boolean = false;
  @Input() title: string = 'Create Post';
  @Input() postData?: PostView;
  @Output() isOpenChange = new EventEmitter<boolean>();
  @Output() postCreated = new EventEmitter<PostView>();
  @Output() postUpdated = new EventEmitter<PostView>();
  @ViewChild('editor') editor!: Editor;
  
  postForm: FormGroup;

  constructor(
    private _postFormHandler: PostFormHandler,
    private _fb: FormBuilder,
    private _messageService: MessageService,
    private _postService: PostService
  ) {
    this.postForm = this._postFormHandler.postForm(this._fb);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen'] || changes['postData']) {
      if (this.isOpen) {
        // Reset form with post data when dialog opens or data changes
        this.postForm = this._postFormHandler.postForm(this._fb, this.postData);
        // Update title based on whether we're editing or creating
        this.title = this.postData ? 'Edit Post' : 'Create Post';
        
        // Set editor content if editing
        if (this.postData?.content && this.editor?.quill?.root) {
          this.editor.quill.root.innerHTML = this.postData?.content || '';
        }
      }
    }
  }

  onEditorChange(event: any) {
    const content = event.innerHTML;
    // Check if content is effectively empty
    if (content === '<p></p>' || content === '') {
      this.postForm.get('content')?.setErrors({ required: true });
    }
  }

  onSubmit() {
    if (this.postForm.valid) {
      const formValue = this.postForm.getRawValue();

      const request$ = this.postData
        ? this._postService.updatePost(this.postData._id, formValue)
        : this._postService.createPost(formValue);

      request$
        .subscribe({
          next: (post) => {
            this._messageService.add({
              severity: 'success',
              summary: this.postData ? 'Post Updated' : 'Post Created',
              detail: this.postData
                ? 'Your post has been updated successfully!'
                : 'Your post has been created successfully!',
              life: 4000,
            });

            // Emit the appropriate event
            if (this.postData) {
              this.postUpdated.emit(post);
            } else {
              this.postCreated.emit(post);
            }

            this.closeDialog();
          },
          error: (error) => {
            console.error('Error saving post:', error);
            this._messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to save post. Please try again.',
              life: 4000,
            });
          },
        });
    }
  }

  closeDialog() {
    this.isOpen = false;
    this.isOpenChange.emit(false);
    this.postForm = this._postFormHandler.postForm(this._fb);
  }
}
