import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as signUpActions from './store/signup.actions';
import * as loginActions from '../login/store/login.actions';
import * as fromApp from '../../store/app.reducer';
import { Observable, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as env from '../../../environments/environment';
import { catchError, tap } from 'rxjs/Operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  signUp: FormGroup;
  subscription: Subscription;
  signUpObj: Subscription;
  error: String;
  loading: boolean = false;

  constructor(private store:Store<fromApp.AppState>,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.store.dispatch(new loginActions.ClearLoginError());
    this.subscription = this.store.select("signup").subscribe(signupState=> {
      this.error = signupState.error;
      this.loading = signupState.loading;
    });

    this.initForm(null, null, null, null);
    
  }

  initForm(familyName: String,
    userId: string,
    password: string, 
    confirmPassword: string) {
    this.signUp = new FormGroup({
      familyName: new FormControl(familyName, Validators.required, this.forbiddenFamilyName.bind(this)),
      userId: new FormControl(userId, Validators.required),
      password: new FormControl(password, Validators.required),
      confirmPassword: new FormControl(confirmPassword, Validators.required)
    });
  }

  submit() {
    this.store.dispatch(new signUpActions.StartSignUp(this.signUp.value));
  }

  clear() {
    this.signUp.reset();
  }

  createFamily() {
    if(this.signUp.get("familyName") != null) {
      this.store.dispatch(new signUpActions.CreateFamily(this.signUp.get("familyName").value));
      //this.signUp.patchValue({'familyName': this.signUp.get("familyName").value})
    }
    this.signUpObj = this.store.select("signup").subscribe(signupState=> {
      this.error = signupState.error;
      this.loading = signupState.loading;
      this.initForm(this.signUp.get("familyName").value,
                  this.signUp.get("userId").value,
                  this.signUp.get("password").value,
                  this.signUp.get("confirmPassword").value
                  );
    });
    
    
    //console.log(this.signUp);
  }

  forbiddenFamilyName(control: any): Promise<any> | Observable<any>  {
    const promise = new Promise<any>((resolve, reject) => {
      this.http.get(`${env.environment.baseUrl}/families/${control.value}`)
      .pipe(
        tap((_) => {
          resolve(resolve(null));
        }),
        catchError(_ => {
          return of(resolve({'forbiddenFamilyName': true}));
        })
      ).subscribe();
    });
    return promise;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if(this.signUpObj != null) {
      this.signUpObj.unsubscribe();
    }
  }
}
