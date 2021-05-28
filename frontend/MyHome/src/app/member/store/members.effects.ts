import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/Operators';
import { Member } from 'src/app/shared/models/member.model';

import * as MembersActions from './members.actions';

@Injectable()
export class MembersEffects {

    @Effect()
    fetchMembers = this.actions$.pipe(
        ofType(MembersActions.GET_MEMBERS),
        switchMap(() => {
            return this.http.get<Member[]>(
                `http://localhost:8080/families/${localStorage.getItem("familyName")}/members`
                );
        }),
        map((members) => {
            return new MembersActions.SetMembers(members);
        })
    );

    @Effect()
    addMember = this.actions$.pipe(
        ofType(MembersActions.ADD_MEMBER),
        switchMap((data: MembersActions.AddMember) => {
            return this.http.post<Member>(
                `http://localhost:8080/families/${localStorage.getItem("familyName")}/members`, 
                data.payload, 
                {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                }
            );
        }),
        map((members) => {
            return new MembersActions.GetMembers();
        })
    );

    @Effect()
    updateMember = this.actions$.pipe(
        ofType(MembersActions.UPDATE_MEMBER),
        switchMap((data: MembersActions.UpdateMember) => {
            return this.http.put<Member>(
                `http://localhost:8080/families/${localStorage.getItem("familyName")}/members/${data.payload.id}`, 
                data.payload.newMember, 
                {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                }
            );
        }),
        map((members) => {
            return new MembersActions.GetMembers();
        })
    );

    @Effect()
    deleteMember = this.actions$.pipe(
        ofType(MembersActions.DELETE_MEMBER),
        switchMap((data: MembersActions.DeleteMember) => {
            return this.http.delete<Member[]>(
                `http://localhost:8080/families/${localStorage.getItem("familyName")}/members/${data.payload}`
                )
        }),
        map((members) => {
            return new MembersActions.GetMembers();
        })
    );

    constructor(private actions$: Actions, private http: HttpClient) {
    }
}