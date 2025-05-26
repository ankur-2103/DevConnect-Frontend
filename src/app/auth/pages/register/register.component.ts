import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthFacade } from '../../store/auth.facade';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _authFacade: AuthFacade,
    private _store: Store
  ) {
    this._authFacade.checkLogin();

    this.registerForm = this.fb.group({
      username: ['test@test.com', [Validators.required, Validators.email]],
      email: ['test@test.com', [Validators.required, Validators.email]],
      password: ['test@123', [Validators.required, Validators.minLength(6)]],
    });

    this._store
      .select((state) => state)
      .subscribe((state) => {
        console.log('Initial Store State:', state);
      });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      const { email, password, username } = this.registerForm.value;
      this._authFacade.register(
        username as string,
        email as string,
        password as string
      );
    }
  }
}
