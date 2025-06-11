import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: false,
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
})
export class ForgetPasswordComponent {
  forgetPasswordForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.forgetPasswordForm = this.fb.group({
      usernameOrEmail: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.forgetPasswordForm.valid) {
      // this.loading = true;
      const { usernameOrEmail } = this.forgetPasswordForm.value;

      this.authService.forgetPassword(usernameOrEmail).subscribe({
        next: (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.message,
          });
          this.router.navigate(['/auth/login']);
          this.loading = false;
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error.error.message || 'Something went wrong',
          });
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        },
      });
    }
  }
}
