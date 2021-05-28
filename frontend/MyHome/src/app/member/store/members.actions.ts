import { state } from "@angular/animations";
import { Action } from "@ngrx/store"
import { Member } from "src/app/shared/models/member.model";

export const SET_MEMBERS = "[members] Set Members";
export const GET_MEMBERS = "[members] Get Members";
export const ADD_MEMBER = "[members] Add Member"; 
export const UPDATE_MEMBER = "[members] Update Member";
export const DELETE_MEMBER = "[members] Delete Member";

export class SetMembers implements Action {
    readonly type= SET_MEMBERS;
    constructor(public payload: Member[]){
    }
}

export class GetMembers implements Action {
    readonly type= GET_MEMBERS;
}

export class AddMember implements Action {
    readonly type= ADD_MEMBER;
    constructor(public payload: Member) {
    }
}

export class UpdateMember implements Action {
    readonly type= UPDATE_MEMBER;
    constructor(public payload: {id: number, newMember: Member}) {
    }
}

export class DeleteMember implements Action {
    readonly type= DELETE_MEMBER;

    constructor(public payload: number) {}
}

export type MembersActions = 
    | SetMembers
    | GetMembers
    | AddMember
    | UpdateMember
    | DeleteMember;
