import { FormBuilder, Validators } from '@angular/forms';
import { AuthUser } from '../../auth/models';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ProfileFormHandler {
  updateProfile(_fb: FormBuilder, data?: AuthUser) {
    return _fb.group({
      _id: [{ value: data?._id || '', disabled: !data?._id }],
      name: [data?.name || '', Validators.required],
      bio: [data?.bio || ''],
      skills: [data?.skills || []],
      avatar: [data?.avatar || ''],
      file: [],
      social: _fb.group({
        github: [
          data?.social?.github || '',
          [
            Validators.pattern(
              '^(https?://)?(www\\.)?github\\.com/[a-zA-Z0-9-]+/?$'
            ),
          ],
        ],
        linkedin: [
          data?.social?.linkedin || '',
          [
            Validators.pattern(
              '^(https?://)?(www\\.)?linkedin\\.com/in/[a-zA-Z0-9-]+/?$'
            ),
          ],
        ],
        twitter: [
          data?.social?.twitter || '',
          [
            Validators.pattern(
              '^(https?://)?(www\\.)?twitter\\.com/[a-zA-Z0-9-]+/?$'
            ),
          ],
        ],
        website: [
          data?.social?.website || '',
          [
            Validators.pattern(
              '^(https?://)?(www\\.)?[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\\.[a-zA-Z]{2,}(/\\S*)?$'
            ),
          ],
        ],
      }),
    });
  }
}
