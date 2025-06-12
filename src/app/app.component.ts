import { AfterViewInit, Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TextareaModule } from 'primeng/textarea';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { AUTH_FEATURE_KEY, authReducer } from './auth/store';
import { AuthFacade } from './auth/store/auth.facade';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables)


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    FormsModule,
    ToggleButtonModule,
    ToolbarModule,
    TextareaModule,
    RouterModule,
    ToastModule,
    InputTextModule,
    ConfirmDialogModule,
  ],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  _darkTheme: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    // this.darkTheme = true
  }

  // ngOnInit() {
  //   this._authFacade.checkLogin();
  // }

  ngAfterViewInit(): void {
    // initial theme to match system theme
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      this.darkTheme = false;
    } else {
      this.darkTheme = true;
    }
    this.darkTheme = false;
  }

  get darkTheme(): boolean {
    return this._darkTheme;
  }

  set darkTheme(value: boolean) {
    this._darkTheme = value;
    if (this._darkTheme) {
      this.document.querySelector('html')?.classList.add('dark-theme');
    } else {
      this.document.querySelector('html')?.classList.remove('dark-theme');
    }
  }
}
