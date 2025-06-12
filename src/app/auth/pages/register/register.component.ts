import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthFacade } from '../../store/auth.facade';
import { MessageService } from 'primeng/api';
import { route } from '../../auth-routing.module';
import { filter, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;
  loginRoute: string = route.login.url;
  isLoading = false;
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private _authFacade: AuthFacade,
    private _store: Store,
    private messageService: MessageService
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // Subscribe to loading state
    this._authFacade.isLoadingLogin$
      .pipe(takeUntil(this.destroy$))
      .subscribe((loading) => {
        this.isLoading = loading;
      });

    // Subscribe to error messages
    this._authFacade.errorMessage$
      .pipe(
        filter((message) => message != '' && message != undefined),
        takeUntil(this.destroy$)
      )
      .subscribe((message) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Registration Failed',
          detail: message,
          life: 4000,
        });

        setTimeout(() => {
          this._authFacade.clearError();
        }, 4000); // Increased to match toast life
      });

    // Subscribe to registration success
    this._authFacade.isRegistered$
      .pipe(
        filter((loggedIn) => loggedIn),
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Registration Successful',
          detail: 'Please login with your credentials',
          life: 4000,
        });

        setTimeout(() => {
          this._authFacade.clearIsRegistered();
        }, 4000);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { email, password, username } = this.registerForm.value;
      this._authFacade.register(
        username as string,
        email as string,
        password as string
      );
    }
  }
}
