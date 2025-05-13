import { Component } from '@angular/core';
import {
  IonApp,
  IonButtons,
  IonContent, IonHeader,
  IonMenu,
  IonMenuButton,
  IonRouterOutlet,
  IonTitle, IonToolbar
} from '@ionic/angular/standalone';
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonButtons, IonMenuButton, IonMenu, HeaderComponent, IonContent, IonTitle, IonToolbar, IonHeader],
})
export class AppComponent {
  constructor() {}
}
