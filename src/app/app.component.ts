import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { DatabaseService } from './services/database/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private database: DatabaseService) {
    this.initDB();
  }

  async initDB() {
    await this.database.initialize();
  }

}
