import { Component, Input, OnInit } from '@angular/core';
//import {IonCard} from "@ionic/angular/standalone";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-cover-card',
  templateUrl: './cover-card.component.html',
  styleUrls: ['./cover-card.component.scss'],
  standalone: true,
  imports: [
      IonCard,
      IonicModule
  ]
})
export class CoverCardComponent  implements OnInit {

  @Input() title!: string;
  @Input() imgPath!: string;

  constructor() { }

  ngOnInit() {}

}
