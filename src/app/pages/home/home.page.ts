import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonList, IonItem } from '@ionic/angular/standalone';
import { CoverCardComponent } from 'src/app/components/cover-card/cover-card.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { DatabaseService } from 'src/app/services/database/database.service';
import { combineLatest, map, Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game';
import { Favourites } from 'src/app/models/favourites';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonList,
    IonItem,
    CoverCardComponent,
  ],
})
export class HomePage {
  private authService = inject(AuthService);
  private firestore = inject(Firestore);
  private db = inject(DatabaseService);
  private router = inject(Router);


  user = this.authService.getUser();

  allGames$: Observable<Game[]> = collectionData(
    collection(this.firestore, 'games'),
    { idField: 'id' }
  ) as Observable<Game[]>;

  favourites$: Observable<Favourites[]> = toObservable(this.db.getGameList());

  games$: Observable<Game[]> = combineLatest([this.allGames$, this.favourites$]).pipe(
    map(([games, favourites]) => {
      const favIds = new Set(favourites.map(fav => fav.gameId));
      return games.filter(game => favIds.has(game.id ?? ''));
    })
  );
  goToGame(id: string) {
    this.router.navigate(['/game', id]);
  }
}
