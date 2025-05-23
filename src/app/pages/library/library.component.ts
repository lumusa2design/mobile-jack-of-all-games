import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, docData, doc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonList, IonItem } from '@ionic/angular/standalone';
import { CoverCardComponent } from '../../components/cover-card/cover-card.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-library-page',
  standalone: true,
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonList,
    IonItem,
    CoverCardComponent
  ]
})
export class LibraryPageComponent {
  private firestore = inject(Firestore);
  private router = inject(Router);

  games$: Observable<any[]> = collectionData(collection(this.firestore, 'games'), {
    idField: 'id'
  });

  goToGame(id: string) {
    this.router.navigate(['/game', id]);
  }
}
