import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, indexedDBLocalPersistence, initializeAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { Capacitor } from '@capacitor/core';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), 
    provideFirebaseApp(() => initializeApp({ 
      projectId: "jack-of-all-games", 
      appId: "1:831810578588:web:9ff12e4990757011976559", 
      databaseURL: "https://jack-of-all-games-default-rtdb.europe-west1.firebasedatabase.app", 
      storageBucket: "jack-of-all-games.firebasestorage.app", 
      apiKey: "AIzaSyDcC73-4BIS4t4jFowahH3zamyhNiW9yZA", 
      authDomain: "jack-of-all-games.firebaseapp.com", 
      messagingSenderId: "831810578588", 
      measurementId: "G-4G27BV4XSY" })), 
      provideAuth(() => {
        if (Capacitor.isNativePlatform()) {
          return initializeAuth(getApp(), {
            persistence: indexedDBLocalPersistence,
          });
        } else {
          return getAuth();
        }
      }), 
      provideFirestore(() => getFirestore()),
  ],
});
