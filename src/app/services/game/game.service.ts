import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { Game } from 'src/app/models/game';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private firestore: Firestore,
  ) { }

  addGame(game: Game) {
    const ref = collection(this.firestore, 'games');
    return addDoc(ref, game);
  }

  getGames(): Observable<Game[]> {
    const ref = collection(this.firestore, 'games');
    return collectionData(ref, {idField: 'id'}) as Observable<Game[]>;
  }

  getGameById(id: string): Observable<Game> {
    const ref = doc(this.firestore, `games/${id}`);
    return docData(ref, {idField: 'id'}) as Observable<Game>;
  }

  updateGame(game: Game) {
    const ref = doc(this.firestore, `games/${game.id}`);
    return setDoc(ref, game);
  }

  deleteGame(game: Game) {
    const ref = doc(this.firestore, `games/${game.id}`);
    return deleteDoc(ref);
  }

}
