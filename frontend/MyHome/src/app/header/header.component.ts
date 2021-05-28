import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/Operators';

import * as fromApp from '../store/app.reducer';
import * as LoginActions from '../auth/login/store/login.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean;
  subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new LoginActions.AutoLogin());
    this.subscription = this.store.select("login")
      .pipe(map(loginState => loginState.user))
      .subscribe((user) => {
        this.isAuthenticated = !!user;
    });
  }


  goToHome() {
    this.store.dispatch(new LoginActions.AutoLogin());
  }

  logout() {
    this.store.dispatch(new LoginActions.Logout());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
