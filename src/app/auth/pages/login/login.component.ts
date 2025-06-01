import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '../../store/auth.facade';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { filter, take } from 'rxjs';
import { route } from '../../auth-routing.module';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  registerRoute: string = route.register.url

  constructor(
    private fb: FormBuilder,
    private _authFacade: AuthFacade,
    private _store: Store,
    private messageService: MessageService
  ) {
    this.loginForm = this.fb.group({
      email: ['user@user.com', [Validators.required, Validators.email]],
      password: ['user@123', [Validators.required, Validators.minLength(6)]],
    });

    this._store
      .select((state) => state)
      .subscribe((state) => {
        console.log('Initial Store State:', state);
      });

    this._authFacade.isLoggedIn$
      .pipe(
        filter((loggedIn) => loggedIn),
        take(1)
      )
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Login Successful',
          detail: 'Welcome back!',
          life: 4000,
        });
      });

    this._authFacade.errorMessage$.pipe().subscribe((message) => {
      if (message !== '') {
        this.messageService.add({
          severity: 'error',
          summary: 'Login Successful',
          detail: message,
          life: 4000,
        });
      }
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const { email, password } = this.loginForm.value;
      this._authFacade.login(email as string, password as string);
    }
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }
}
