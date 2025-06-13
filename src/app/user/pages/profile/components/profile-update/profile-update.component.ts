import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { AuthFacade } from '../../../../../auth/store/auth.facade';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileFormHandler } from '../../../../form-handlers/profile-form-handler.service';
import { AuthUser } from '../../../../../auth/models';
import { MessageService } from 'primeng/api';
import { ProfileService } from '../../../../services/user.service';
import { AuthUserActions } from '../../../../../auth/store/auth.actions';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FileSelectEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-profile-update',
  standalone: false,
  templateUrl: './profile-update.component.html',
  styleUrl: './profile-update.component.scss',
})
export class ProfileUpdateComponent implements OnChanges {
  @Input() userData?: AuthUser;
  @Input() isOpen: boolean = false;
  @Input() title: string = 'Update Profile';
  @Input() closable: boolean = true;
  @Output() isOpenChange = new EventEmitter<boolean>();
  @Output() profileUpdated = new EventEmitter<void>();
  
  user: AuthUser = {
    _id: '',
    name: '',
    bio: '',
    skills: '',
    avatar: '',
    social: {
      github: '',
      linkedin: '',
      twitter: '',
      website: '',
    },
    roles: [],
    createdAt: '',
    updatedAt: '',
  };

  profileUpdatedForm: FormGroup;

  constructor(
    private _authFacade: AuthFacade,
    private _store: Store,
    private _profileFormBuilder: ProfileFormHandler,
    private messageService: MessageService,
    private _fb: FormBuilder,
    private _profileService: ProfileService
  ) {
    this.profileUpdatedForm = _profileFormBuilder.updateProfile(_fb);
    
    // Subscribe to auth user changes
    this._authFacade.authUser$.subscribe((state) => {
      if (state) {
        // Only update if userData is not provided
        if (!this.userData) {
          this.user = state;
          this.updateForm(state);
        }
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen'] && this.isOpen) {
      // Reset form when dialog opens
      this.updateForm(this.userData || this.user);
    }
    
    if (changes['userData'] && this.userData) {
      this.user = this.userData;
      this.updateForm(this.userData);
    }
  }

  private updateForm(userData: AuthUser) {
    this.profileUpdatedForm = this._profileFormBuilder.updateProfile(this._fb, userData);
  }

  onFileSelect(event: FileSelectEvent) {
    const file = event.files[0];
    this.profileUpdatedForm.get('file')?.setValue(file);
  }

  onSubmit() {
    if (this.profileUpdatedForm.valid) {
      const formValue = this.profileUpdatedForm.value;
      const file = this.profileUpdatedForm.get('file')?.value;

      const formData = new FormData();
      
      // Append all form fields except file
      Object.keys(formValue).forEach((key) => {
        if (key === 'social') {
          formData.append(key, JSON.stringify(formValue[key]));
        } else if (key !== 'file') {
          formData.append(key, formValue[key]);
        }
      });

      // Append file if it exists
      if (file) {
        formData.append('file', file);
      }

      this._profileService.updateMe(formData).subscribe({
        next: (updatedUser) => {
          this._store.dispatch(AuthUserActions.success({ user: updatedUser }));
          this.messageService.add({
            severity: 'success',
            summary: 'Profile Updated',
            detail: 'Your profile has been updated successfully!',
            life: 4000,
          });
          this.profileUpdated.emit();
          this.closeDialog();
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Update Failed',
            detail: error.message || 'Failed to update profile. Please try again.',
            life: 4000,
          });
        },
      });
    }
  }

  closeDialog() {
    this.isOpen = false;
    this.isOpenChange.emit(false);
    this.updateForm(this.userData || this.user);
  }

  get skills() {
    return this.user.skills ? this.user.skills : [];
  }
}
