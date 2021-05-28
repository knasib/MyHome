import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromApp from '../../store/app.reducer';
import * as LoginActions from '../../auth/login/store/login.actions';

@Injectable({providedIn: 'root'})
export class LoginService {

    private sessionExpiry: any;

    constructor(private store: Store<fromApp.AppState>){}

    setLogoutTimer(expiredAt: number) {
        this.sessionExpiry = setTimeout(() => {
            this.store.dispatch(new LoginActions.Logout());
        }, expiredAt);
    }

    clearLogoutTimer() {
        if(this.sessionExpiry) {
            clearTimeout(this.sessionExpiry);
            this.sessionExpiry = null;
        }
    }
}