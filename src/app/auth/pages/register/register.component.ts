import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthFacade } from '../../store/auth.facade';
import { MessageService } from 'primeng/api';
import { route } from '../../auth-routing.module';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;
  loginRoute: string = route.login.url

  constructor(
    private fb: FormBuilder,
    private _authFacade: AuthFacade,
    private _store: Store,
    private messageService: MessageService
  ) {

    this.registerForm = this.fb.group({
      username: ['test@test.com', [Validators.required, Validators.email]],
      email: ['test@test.com', [Validators.required, Validators.email]],
      password: ['test@123', [Validators.required, Validators.minLength(6)]],
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
