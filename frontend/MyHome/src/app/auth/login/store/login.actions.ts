import { Action } from "@ngrx/store";
import { Login } from "src/app/shared/models/login.model";
import { User } from "src/app/shared/models/user.model";

export const START_LOGIN = "[Login] Start Login";
export const LOGIN_SUCCESS = "[Login] Login Success";
export const LOGIN_FAILED = "[Login] Login Failed";
export const LOGOUT = "[Login] Logout";
export const CLEAR_LOGIN_ERROR = "[Login] Crear Error";
export const AUTO_LOGOUT = "[Login] Auto Logout";
export const AUTO_LOGIN = "[Login] Auto Login";

export class StartLogin implements Action {
    readonly type = START_LOGIN;
    constructor(public payload: Login) {}
}

export class SuccessLogin implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: User){}
}

export class FailedLogin implements Action {
    readonly type = LOGIN_FAILED;
    constructor(public payload: String){}
}

export class Logout implements Action {
    readonly type = LOGOUT;
    //constructor(public payload: String){}
}

export class AutoLogout implements Action {
    readonly type = AUTO_LOGOUT;
    constructor(public payload: String){}
}

export class ClearLoginError implements Action {
    readonly type = CLEAR_LOGIN_ERROR;
}

export class AutoLogin implements Action {
    readonly type = AUTO_LOGIN;
}

export type LoginActions = 
    | StartLogin
    | SuccessLogin
    | FailedLogin
    | AutoLogout
    | Logout
    | ClearLoginError;
