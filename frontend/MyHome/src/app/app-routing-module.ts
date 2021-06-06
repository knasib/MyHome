import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ChatComponent } from "./chat/chat.component";

import { ExpenseComponent } from "./expense/expense.component";
import { GroceryComponent } from "./grocery/grocery.component";
import { MemberDetailComponent } from "./member/member-detail/member-detail.component";
import { MemberEditComponent } from "./member/member-edit/member-edit.component";
import { MemberSelectComponent } from "./member/member-select/member-select.component";
import { MemberComponent } from './member/member.component';
import { NotificationComponent } from "./notification/notification.component";


const appRoutes : Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'members', component: MemberComponent, children:[
        {path: '', component: MemberSelectComponent},
        {path: 'new', component: MemberEditComponent},
        {path: ':id', component: MemberDetailComponent},
        {path: ':id/edit', component: MemberEditComponent},   
    ]},
    {path: 'grocery', component: GroceryComponent},
    {path: 'expense', component: ExpenseComponent},
    {path: 'chat', component: ChatComponent},
    {path: 'notification', component: NotificationComponent},
    {path: '**', redirectTo: '/login'}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes/*, {useHash: true}*/)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}