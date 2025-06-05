import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="'mb-4 ' + containerClass">
      <label *ngIf="label" class="block text-sm font-medium mb-1">{{
        label
      }}</label>
      <ng-content></ng-content>
      <small
        *ngIf="formControl?.invalid && formControl?.touched"
        class="text-red-500"
      >
        {{ getErrorMessage() }}
      </small>
    </div>
  `,
})
export class InputWrapperComponent {
  @Input() control!: any;
  @Input() label?: string;
  @Input() errorMessages!: { [key: string]: string };
  @Input() containerClass: string = '';

  get formControl(): FormControl | null {
    return this.control as FormControl;
  }

  getErrorMessage(): string {
    if (this.formControl && this.formControl.errors) {
      for (const errorKey in this.formControl.errors) {
        if (this.errorMessages && this.errorMessages[errorKey]) {
          return this.errorMessages[errorKey];
        }
      }
    }
    return '';
  }
}
