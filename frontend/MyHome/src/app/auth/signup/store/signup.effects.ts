import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of, pipe } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/Operators";
import { SignUp } from "src/app/shared/models/signup.model";

import * as SignUpActions from './signup.actions';


@Injectable()
export class SignUpEffects {
    @Effect()
    signUp = this.actions$.pipe(
        ofType(SignUpActions.START_SIGNUP),
        switchMap((signUpAction: SignUpActions.StartSignUp) => {
            return this.http.post<SignUp>('http://localhost:8080/signup', 
                signUpAction.payload,
                {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                }
            )
            .pipe(
                map((_) => {
                    //console.log(resp);
                    return new SignUpActions.SuccessSignUp();
                }),
                catchError((errorResp) => {
                    console.log(errorResp);
                    return of(new SignUpActions.FailedSignUp("Something went wrong"));
                })
            )
        })
    );

    @Effect({dispatch: false})
    successSignUp = this.actions$.pipe(
        ofType(SignUpActions.SIGNUP_SUCCESS),
        tap((signupAciton: SignUpActions.SuccessSignUp) => {
            this.router.navigate(["/login"]);
        })
    );

    constructor(private actions$: Actions,
        private http: HttpClient,
        private router: Router){
    }
}