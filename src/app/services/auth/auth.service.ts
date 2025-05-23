import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  user,
  User,
  UserCredential
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  getUser(): Observable<User | null> {
    return user(this.auth);
  }

  login(email: string, password: string): Observable<UserCredential> {
  return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  signup(email: string, password: string, displayName: string): Observable<UserCredential> {
    return from(
      createUserWithEmailAndPassword(this.auth, email, password).then(userCredential => {
        return updateProfile(userCredential.user, { displayName }).then(() => userCredential);
      })
    );
  }

  resetPassword(email: string): Observable<void> {
    return from(sendPasswordResetEmail(this.auth, email));
  }

  logout(): Observable<void> {
    return from(signOut(this.auth));
  }
}
