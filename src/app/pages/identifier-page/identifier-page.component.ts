import { Component, signal } from '@angular/core';
import {LoginFomComponent} from "./login-fom/login-fom.component";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {IonContent} from "@ionic/angular/standalone";

@Component({
  selector: 'app-identifier-page',
  standalone: true,
  imports: [
    LoginFomComponent,
    RegisterFormComponent,
    IonContent,
  ],
  templateUrl: './identifier-page.component.html',
  styleUrls: ['./identifier-page.component.scss']
})
export class IdentifierPageComponent {
  showLogin = signal(true);

  toggleForm() {
    this.showLogin.update(value => !value);
  }
}
