import { Component, OnInit } from '@angular/core';
import {
  IonAccordion,
  IonAccordionGroup, IonContent,
  IonHeader, IonIcon,
  IonItem,
  IonLabel, IonList, IonMenu, IonRouterOutlet,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonAccordion,
    IonItem,
    IonLabel,
    IonAccordionGroup,
    IonMenu,
    IonContent,
    IonList,
    IonRouterOutlet,
    IonIcon
  ]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
