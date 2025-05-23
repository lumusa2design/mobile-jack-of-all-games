import {inject, Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Auth, User, user} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    private user$: Observable<User | null> = new Observable<null>;

    constructor(private auth: Auth, private router: Router) {
      this.user$ = user(this.auth);
    }

    canActivate(): Observable<boolean> {
        const currentRoute = this.router.routerState.snapshot.url;
        const currentRouteIsLogin = currentRoute === '/login';

        return this.user$.pipe(
            map((user) => {
                if (user) {
                    return true;
                } else if (user && currentRouteIsLogin) {
                    this.router.navigate(['/']);
                    return false
                } else {
                    this.router.navigate(['/home']);
                    return false;
                }
            })
        );
    }
}
