
import { formatDate } from "@angular/common";
import {Member} from "../../shared/models/member.model";
import * as MembersActions from "./members.actions";

export interface State {
    members: Member[]
}

const initialState: State = {
    members: [
        /*new Member(1, 'Nasib Kumar Sahu', 
                'M', 
                '../../../assets/images/nasib.jpg',
                '9483 2320 3303',
                'CWDPS6024D',
                '9962769221',
                new Date("06-29-1988"),
                'er.nasib@gmail.com'),
        new Member(2, 'Sahana D',
                'F', 
                '../../../assets/images/sahana.jpg',
                '5483 2320 5302',
                'RJDXS9802E',
                '7681093822',
                new Date('09-11-1993'),
                'chakkuvs@gmail.com')*/

    ]
};


export function membersReducer(state = initialState, action: MembersActions.MembersActions) {

    switch(action.type) {
        case MembersActions.SET_MEMBERS:
            return {
                ...state,
                members: [...action.payload]
            }
        case MembersActions.ADD_MEMBER: 
            return {
                ...state,
                members: [...state.members, action.payload]
            };

        case MembersActions.UPDATE_MEMBER:
            const member = state.members.find((member, id) => {
                return id === member.id;
            });
            const updatedMember = {
                ...member,
                ...action.payload.newMember
            };

            const updateMembers = [...state.members];
            let index: number = updateMembers.findIndex(i => i.id===action.payload.id);
            updateMembers[index] = updatedMember;

            return {
                ...state,
                members: updateMembers
            };

        case MembersActions.DELETE_MEMBER:
            return {
                ...state,
                members: state.members.filter((member, index) => {
                    return member.id !== action.payload;
                })
            };
        case MembersActions.GET_MEMBERS:            
        default:
            return state;    
    }
}
