import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-fom',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-fom.component.html',
  styleUrl: './login-fom.component.scss'
})
export class LoginFomComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.form.valid) {
      console.log('Login datos:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
