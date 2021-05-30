import { Action } from "@ngrx/store";
import { SignUp } from "src/app/shared/models/signup.model";

export const CREATE_FAMILY = "[SignUp] Create Family";
export const FAMILY_CREATED = "[SignUp] Family Created Successfully";
export const START_SIGNUP = "[SignUp] Start SignUp";
export const SIGNUP_SUCCESS = "[SignUp] SignUp Success";
export const SIGNUP_FAILED = "[SignUp] SignUp Failed";

export class CreateFamily implements Action {
    readonly type = CREATE_FAMILY;
    constructor(public payload: string){}
}

export class FamilyCreated implements Action {
    readonly type = FAMILY_CREATED;
}

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
    | CreateFamily
    | FamilyCreated
    | StartSignUp
    | SuccessSignUp
    | FailedSignUp;
