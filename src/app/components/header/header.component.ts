import { Component, OnInit } from '@angular/core';
import {
  IonAccordion,
  IonAccordionGroup,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonAccordion,
    IonItem,
    IonLabel,
    IonAccordionGroup
  ]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
