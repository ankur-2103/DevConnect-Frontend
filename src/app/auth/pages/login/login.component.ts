import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '../../store/auth.facade';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _authFacade: AuthFacade, private _store: Store) {
    this._authFacade.checkLogin();

    this.loginForm = this.fb.group({
      email: ['test@test.com', [Validators.required, Validators.email]],
      password: ['test@123', [Validators.required, Validators.minLength(6)]],
    });

    this._store.select(state => state).subscribe(state => {
      console.log('Initial Store State:', state);
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const { email, password } = this.loginForm.value;
      this._authFacade.login(email as string, password as string);
    }
  }
}
