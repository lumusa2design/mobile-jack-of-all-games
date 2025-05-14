import { Component, Input } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonImg
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cover-card',
  standalone: true,
  templateUrl: './cover-card.component.html',
  styleUrls: ['./cover-card.component.scss'],
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonImg
  ]
})
export class CoverCardComponent {
  @Input() title!: string;
  @Input() imgPath!: string;

  constructor() { }

  ngOnInit() {}
}
