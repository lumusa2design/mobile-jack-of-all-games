import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from "../../../services/auth/auth.service";
import { IonButton } from "@ionic/angular/standalone";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-fom',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, IonButton],
  templateUrl: './login-fom.component.html',
  styleUrl: './login-fom.component.scss'
})
export class LoginFomComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  onSubmit() {
    const { email, password } = this.form.value;

    if (this.form.valid) {
      this.authService.login(email!, password!).subscribe({
        next: (userCredential) => {
          console.log('Sesión iniciada:', userCredential.user);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Error al iniciar sesión:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
