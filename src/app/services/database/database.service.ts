import { Injectable, signal, WritableSignal } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Game } from 'src/app/models/game';

const DB_NAME = 'favouritegames'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection
  private gameList: WritableSignal<Game[]> = signal([]);

  constructor() { }

  async initialize() {
    this.db = await this.sqlite.createConnection(
      DB_NAME,
      false,
      'no-encryption',
      1,
      false
    );

    await this.db.open();

    const schema = `CREATE TABLE IF NOT EXISTS favourites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      gameId TEXT NOT NULL
      );`;

    await this.db.execute(schema);
    this.loadGames();
    return true;
  }

  async loadGames() {
    const games = await this.db.query('SELECT * FROM favourites;');
    this.gameList.set(games.values || []);
  }

  async addGame(id: string) {
    const result = await this.db.run(
      'INSERT INTO favourites (gameId) VALUES (?);',
      [id]
    );

    this.loadGames();

    return result;
  }

  getGameList() {
    return this.gameList;
  }

  /*
  async updateGameById(id: string, newValue: string) {
    const query = `UPDATE favourites SET value=${newValue} WHERE id=${id}`;
    const result = await this.db.query(query);

    this.loadGames();

    return result;
  }
  */

  async deleteGame(id: string) {
    const query = `DELETE FROM favourites WHERE id=${id}`;
    const result = await this.db.query(query);

    this.loadGames();

    return result;
  }

}
