import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    const { password, confirmPassword } = this.form.value;
    if (this.form.valid && password === confirmPassword) {
      console.log('Registro datos:', this.form.value);
    } else {
      this.form.markAllAsTouched();
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
      }
    }
  }
}
