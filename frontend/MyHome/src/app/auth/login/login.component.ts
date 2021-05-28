import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { User } from 'src/app/shared/models/user.model';

import * as fromApp from '../../store/app.reducer';
import * as LoginActions from './store/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  subscription: Subscription;

  user: User;
  error: String;
  loading: boolean = false;

  constructor(private store:Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new LoginActions.ClearLoginError());
    this.subscription = this.store.select("login").subscribe(loginAction=> {
      this.user = loginAction.user;
      this.error = loginAction.error;
      this.loading = loginAction.loading;
    });

    if(!this.error) {
      this.initForm();
    }
  }

  initForm() {
    this.loginForm = new FormGroup({
      familyName: new FormControl(null, Validators.required),
      userId: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required])
    });
  }

  submit() {
    this.store.dispatch(new LoginActions.StartLogin(this.loginForm.value));
  }

  clear() {
    this.loginForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
