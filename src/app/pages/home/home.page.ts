import {Component, inject,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { AsyncPipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth/auth.service';
import {user} from "@angular/fire/auth";

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  imports: [CommonModule, IonContent, AsyncPipe],
})
export class HomePage  {
  private authService = inject(AuthService);
  user = this.authService.getUser();

}
