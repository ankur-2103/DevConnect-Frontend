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

    this._authFacade.isLoggedIn$
      .pipe(
        filter((loggedIn) => loggedIn),
        take(1),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Registered Successful',
          detail: 'Account created!',
          life: 4000,
        });
      });

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
        }, 1000);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { email, password, username } = this.registerForm.value;
      const temp = this._authFacade.register(
        username as string,
        email as string,
        password as string
      );
      console.log('🚀 ~ RegisterComponent ~ onSubmit ~ temp:', temp);
    }
  }
}
