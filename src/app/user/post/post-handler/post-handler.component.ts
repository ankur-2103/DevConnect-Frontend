import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostFormHandler } from '../../form-handlers/post-form-handler.service';
import { Post, PostView } from '../../models/post.model';
import { MessageService } from 'primeng/api';
import { PostService } from '../../services/post.service';
import { finalize } from 'rxjs/operators';
import { Editor } from 'primeng/editor';
import { FileSelectEvent } from 'primeng/fileupload';

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
  isGenerating = false;

  editorModules = {
    toolbar: [
      ['bold', 'italic', 'underline'], // toggled buttons
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, false] }],
      ['link'], // only link, no image/video
      [{ align: [] }],
      ['clean'], // remove formatting
    ],
  };

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

  onFileSelect(event: FileSelectEvent) {
    const file = event.files[0];
    this.postForm.get('file')?.setValue(file);
  }

  onEditorChange(event: any) {
    let content = event.htmlValue;
    ;
    const editorElement = document.querySelector('#content .ql-editor');
    if (editorElement) {
      content = editorElement.innerHTML; // Includes classes like ql-list, ql-align, etc.
    }

    const quillEditor = this.editor.getQuill();

    if (quillEditor) {
      // Get the full HTML content including attributes (like styles, classes)
      const htmlContent = quillEditor.root.innerHTML;
      this.postForm.get('content')?.setValue(htmlContent);
      this.postForm.value
    } else {
      console.warn('Quill instance not found!');
    }

    // Check if content is effectively empty
    if (content === '<p></p>' || content === '') {
      this.postForm.get('content')?.setErrors({ required: true });
    }
  }

  onGenratePost() {
    const prompt = this.postForm.get('prompt')?.value;
    if (!prompt) {
      this._messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Please enter a prompt to generate post',
        life: 3000,
      });
      return;
    }

    this.isGenerating = true;
    this.postForm.get('prompt')?.disable();
    
    this._postService.generatePost(prompt).subscribe({
      next: (response) => {
        if (this.editor) {
          this.editor.writeValue(response.post);
          this.postForm.get('content')?.setValue(response.post);
        }
      },
      error: (error) => {
        console.error('Error generating post:', error);
        this._messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to generate post. Please try again.',
          life: 4000,
        });
      },
      complete: () => {
        this.isGenerating = false;
        this.postForm.get('prompt')?.enable();
      }
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const formValue = this.postForm.value;
      const file = this.postForm.get('file')?.value;

      const formData = new FormData();

      // Append all form fields except file
      Object.keys(formValue).forEach((key) => {
        if (key !== 'file') {
          formData.append(key, formValue[key]);
        }
      });

      // Append file if it exists
      if (file) {
        formData.append('file', file);
      }
      const request$ = this.postData
        ? this._postService.updatePost(this.postData._id, formData)
        : this._postService.createPost(formData);

      request$.subscribe({
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
