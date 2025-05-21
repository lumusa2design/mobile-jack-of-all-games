import { Component, OnInit } from '@angular/core';
import {
  IonAccordion,
  IonAccordionGroup, IonContent,
  IonHeader,
  IonItem,
  IonLabel, IonList, IonMenu, IonRouterOutlet,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
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
    IonRouterOutlet
  ]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
