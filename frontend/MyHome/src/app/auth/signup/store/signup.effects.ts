import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of, pipe } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/Operators";
import { SignUp } from "src/app/shared/models/signup.model";

import * as SignUpActions from './signup.actions';

import * as env from '../../../../environments/environment';


@Injectable()
export class SignUpEffects {
    @Effect()
    signUp = this.actions$.pipe(
        ofType(SignUpActions.START_SIGNUP),
        switchMap((signUpAction: SignUpActions.StartSignUp) => {
            return this.http.post<SignUp>(`${env.environment.baseUrl}/signup`, 
                signUpAction.payload,
                {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                }
            )
            .pipe(
                map((_) => {
                    return new SignUpActions.SuccessSignUp();
                }),
                catchError((errorResp) => {
                    return of(new SignUpActions.FailedSignUp(errorResp.error.errorMessage));
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

    @Effect({dispatch: false})
    createFamily = this.actions$.pipe(
        ofType(SignUpActions.CREATE_FAMILY),
        switchMap((createFanily: SignUpActions.CreateFamily) => {
            return this.http.post<SignUp>(`${env.environment.baseUrl}/families`, 
                {
                    'name':createFanily.payload
                },
                {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                }
            )
            .pipe(
                map((_) => {
                    return new SignUpActions.FamilyCreated();
                }),
                catchError((errorResp) => {
                    return of(new SignUpActions.FailedSignUp(errorResp.error.errorMessage));
                })
            )
        })
    );
    

    constructor(private actions$: Actions,
        private http: HttpClient,
        private router: Router){
    }
}