import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <ion-content class="ion-padding">
      <h1>Bienvenido</h1>
    </ion-content>
  `,
  imports: [IonContent],
})
export class HomePage {}
