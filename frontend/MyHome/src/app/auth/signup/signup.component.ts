import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as signUpActions from './store/signup.actions';
import * as fromApp from '../../store/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  signUp: FormGroup;
  subscription: Subscription;
  error: String;
  loading: boolean = false;

  constructor(private store:Store<fromApp.AppState>) { }

  ngOnInit(): void {

    this.subscription = this.store.select("signup").subscribe(signupState=> {
      this.error = signupState.error;
      this.loading = signupState.loading;
    });

    if(!this.error) {
      this.initForm();
    }
  }

  initForm() {
    this.signUp = new FormGroup({
      familyName: new FormControl(null, Validators.required),
      userId: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, Validators.required)
    });
  }

  submit() {
    this.store.dispatch(new signUpActions.StartSignUp(this.signUp.value));
  }

  clear() {
    this.signUp.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
