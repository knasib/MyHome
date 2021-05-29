import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MemberComponent } from './member/member.component';
import { GroceryComponent } from './grocery/grocery.component';
import { ExpenseComponent } from './expense/expense.component';
import { NotificationComponent } from './notification/notification.component';
import { AppRoutingModule } from './app-routing-module';
import { DropdownDirective } from './shared/directive/dropdown.directive';

import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberItemComponent } from './member/member-item/member-item.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberSelectComponent } from './member/member-select/member-select.component';
import { MemberEditComponent } from './member/member-edit/member-edit.component';

import { GroceryPurchasedListComponent } from './grocery/grocery-purchased-list/grocery-purchased-list.component';
import { GroceryPurchasingListComponent } from './grocery/grocery-purchasing-list/grocery-purchasing-list.component';
import { GroceryPurchasedItemComponent } from './grocery/grocery-purchased-list/grocery-purchased-item/grocery-purchased-item.component';
import { GroceryPurchasingItemComponent } from './grocery/grocery-purchasing-list/grocery-purchasing-item/grocery-purchasing-item.component';

import { MemberService } from './shared/services/member.service';
import { GenderExpansionPipe } from './shared/pipes/gender.expansion.pipe';
import { PurchasedGroceryService } from './shared/services/purchased.grocery.service';
import { PurchasingGroceryService } from './shared/services/purchasing.grocery.service';
import { MembersEffects } from './member/store/members.effects';

import * as fromApp from './store/app.reducer';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SignUpEffects } from './auth/signup/store/signup.effects';
import { LoginEffect } from './auth/login/store/login.effects';
import { PurchasedGloceryEffect } from './grocery/grocery-purchased-list/store/grocery-purchased.effects';
import { PurchasingGloceryEffect } from './grocery/grocery-purchasing-list/store/grocery-purchasing.effects';
import { ChartsModule } from 'ng2-charts';
import { MonthlyBarchartComponent } from './expense/monthly-barchart/monthly-barchart.component';
import { DoughnutChartComponent } from './expense/doughnut-chart/doughnut-chart.component';
import { DoughnutChartEffect } from './expense/doughnut-chart/store/doughnut-chart.effects';
import { BarChartEffect } from './expense/monthly-barchart/store/bar-chart.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MemberComponent,
    GroceryComponent,
    ExpenseComponent,
    NotificationComponent,
    MemberListComponent,
    MemberItemComponent,
    MemberDetailComponent,
    MemberSelectComponent,
    MemberEditComponent,
    DropdownDirective,
    GenderExpansionPipe,
    GroceryPurchasedListComponent,
    GroceryPurchasingListComponent,
    GroceryPurchasedItemComponent,
    GroceryPurchasingItemComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    MonthlyBarchartComponent,
    DoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([
      SignUpEffects, 
      LoginEffect,
      MembersEffects, 
      PurchasedGloceryEffect,
      PurchasingGloceryEffect,
      DoughnutChartEffect,
      BarChartEffect
    ])
  ],
  providers: [
    MemberService,
    PurchasedGroceryService,
    PurchasingGroceryService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
