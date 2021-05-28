import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/Operators";

import { User } from "src/app/shared/models/user.model";
import { LoginService } from '../../../shared/services/login.service';

import * as LoginActions from './login.actions';
import * as env from '../../../../environments/environment';

@Injectable()
export class LoginEffect {
    
    @Effect()
    startLogin = this.actions$.pipe(
        ofType(LoginActions.START_LOGIN),
        switchMap((loginStartAction: LoginActions.StartLogin) => {
                return this.http.post<User>(`${env.environment.baseUrl}/login`, 
                loginStartAction.payload,
                {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                }
            )
            .pipe(
                tap(user => {
                    localStorage.removeItem("user");
                    localStorage.removeItem("familyName");
                }),
                map((user) => {
                    return new LoginActions.SuccessLogin(user);
                }),
                catchError(error => {
                    console.log(error.error.errorMessage);
                    return of(new LoginActions.FailedLogin(error.error.errorMessage));
                })
            )
        })

    );

    @Effect({dispatch: false})
    loginSuccess = this.actions$.pipe(
        ofType(LoginActions.LOGIN_SUCCESS),
        tap((loginAction: LoginActions.SuccessLogin) => {
            localStorage.setItem("user", JSON.stringify(loginAction.payload));
            localStorage.setItem("familyName", JSON.stringify(loginAction.payload.familyName));
            this.loginService.setLogoutTimer(new Date(loginAction.payload.expiryAt).getTime() - new Date().getTime());
            this.router.navigate(["/members"]);
        })
    )

    @Effect({dispatch: false})
    logout = this.actions$.pipe(
        ofType(LoginActions.LOGOUT || LoginActions.AUTO_LOGOUT),
        tap((loginActon: LoginActions.Logout) => {
            localStorage.removeItem("user");
            localStorage.removeItem("familyName");
            this.loginService.clearLogoutTimer();
            this.router.navigate(['']);
        })
    );

    @Effect()
    autoLogin = this.actions$.pipe(
        ofType(LoginActions.AUTO_LOGIN),
        map((loginAction: LoginActions.AutoLogin) => {
            if(localStorage.getItem("user") != null) {
                return new LoginActions.SuccessLogin(JSON.parse(localStorage.getItem("user")));
            } else {
                return new LoginActions.Logout();    
            }
        })
    );

    constructor(private http: HttpClient,
        private actions$: Actions,
        private loginService: LoginService,
        private router: Router){}
}