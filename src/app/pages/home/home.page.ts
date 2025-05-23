import { Component, computed, effect, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { DatabaseService } from '../../services/database/database.service';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { IonContent, IonList, IonItem } from '@ionic/angular/standalone';
import { CoverCardComponent } from '../../components/cover-card/cover-card.component';
import { Game } from '../../models/game';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonList,
    IonItem,
    CoverCardComponent
  ]
})
export class HomePage {
  private auth = inject(AuthService);
  private db = inject(DatabaseService);
  private firestore = inject(Firestore);

  user$: Observable<User | null> = this.auth.getUser();
  favourites = signal<Game[]>([]); // local lista completa con datos desde Firestore

  constructor() {
    effect(() => {
      const localGames = this.db.getGameList()(); // Signal<Game[]>
      this.loadFavouritesFromFirestore(localGames);
    });
  }

  private async loadFavouritesFromFirestore(localGames: Game[]) {
    const result: Game[] = [];

    for (const fav of localGames) {
      if (!fav.id) continue;
      const ref = doc(this.firestore, `games/${fav.id}`);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        result.push({ id: snap.id, ...snap.data() } as Game);
      }
    }

    this.favourites.set(result);
  }
}
