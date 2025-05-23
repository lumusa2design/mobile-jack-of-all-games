import { Component, inject } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database/database.service';

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
  private dbService = inject(DatabaseService);

  game$: Observable<any>;
  gameId!: string;
  isFavourite = false;

  constructor() {
    const gameId = this.route.snapshot.paramMap.get('id');
    this.gameId = gameId!;
    const ref = doc(this.firestore, `games/${this.gameId}`);
    this.game$ = docData(ref);

    // Verifica si ya es favorito
    this.checkIfFavourite();
  }

  async checkIfFavourite() {
    const games = this.dbService.getGameList()();
    this.isFavourite = games.some(g => g.id === this.gameId);
  }

  async toggleFavourite() {
    try {
      if (this.isFavourite) {
        await this.dbService.deleteGame(this.gameId);
        console.log('Juego eliminado de favoritos');
      } else {
        await this.dbService.addGame(this.gameId);
        console.log('Juego añadido a favoritos');
      }
      this.isFavourite = !this.isFavourite;
    } catch (err) {
      console.error('Error al actualizar favoritos:', err);
    }
  }

  expanded = false;

  isExpanded(): boolean {
    return this.expanded;
  }

  toggleDescription() {
    this.expanded = !this.expanded;
  }
}
