import { Action } from "@ngrx/store";
import { SignUp } from "src/app/shared/models/signup.model";

export const START_SIGNUP = "[SignUp] Start SignUp";
export const SIGNUP_SUCCESS = "[SignUp] SignUp Success";
export const SIGNUP_FAILED = "[SignUp] SignUp Failed";

export class StartSignUp implements Action {
    readonly type = START_SIGNUP;
    constructor(public payload: SignUp) {}
}

export class SuccessSignUp implements Action {
    readonly type = SIGNUP_SUCCESS;
}

export class FailedSignUp implements Action {
    readonly type = SIGNUP_FAILED;
    constructor(public payload: String){}
}

export type SignUpActions = 
    | StartSignUp
    | SuccessSignUp
    | FailedSignUp;
