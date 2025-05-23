import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  form = this.fb.group({
    userName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      this.passwordStrengthValidator
    ]],
    confirmPassword: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (value && !strongRegex.test(value)) {
      return {weakPassword: true};
    }
    return null;
  }

  onSubmit() {
    const {userName ,email, password, confirmPassword} = this.form.value;

    if (this.form.valid && password === confirmPassword) {
      this.authService.signup(email!, password!, userName!).subscribe({
        next: (userCredential) => {
          console.log('✅ Usuario registrado:', userCredential.user);
        },
        error: (err) => {
          console.error(' Error al registrar:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
      }
    }
  }



}
