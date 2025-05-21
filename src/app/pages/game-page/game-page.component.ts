import { Component } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonContent
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';


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
  game = {
    title: 'Cyber Jack',
    company: 'Jack Studios',
    description: 'Descripción del juego... orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    score: '9.5',
    platforms: ['PC', 'PS5'],
    video: '',
    image: 'assets/cover.jpg'
  };

  expanded = false;

  get imgPath(): string {
    return this.game.image;
  }

  platforms(): string {
    return this.game.platforms.join(', ');
  }

  videoURL?: string;

  hasVideo(): boolean {
    return !!this.game.video;
  }

  isExpanded(): boolean {
    return this.expanded;
  }

  toggleDescription() {
    this.expanded = !this.expanded;
  }
}
