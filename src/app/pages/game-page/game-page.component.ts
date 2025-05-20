import { Component, inject } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-page',
  standalone: true,
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
  imports: [
    CommonModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonContent
  ]
})
export class GamePageComponent {
  private route = inject(ActivatedRoute);
  private firestore = inject(Firestore);

  game$: Observable<any>;

  constructor() {
    const gameId = this.route.snapshot.paramMap.get('id');
    const ref = doc(this.firestore, `games/${gameId}`);
    this.game$ = docData(ref);
  }

  expanded = false;

  isExpanded(): boolean {
    return this.expanded;
  }

  toggleDescription() {
    this.expanded = !this.expanded;
  }
}
