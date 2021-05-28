import { User } from '../../../shared/models/user.model';

import * as LoginActions from './login.actions';


export interface State {
    user: User;
    error: String;
    loading: boolean;    
}

const initalState: State = {
    user: null,
    error: null,
    loading: false
};

export function loginReducer(state: State = initalState, action : LoginActions.LoginActions) {
    switch(action.type) {
        case LoginActions.START_LOGIN:
            return {
                ...state,
                user: null,
                error: null,
                loading: true
            }
        case LoginActions.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null,
                loading: false
            }
        case LoginActions.LOGIN_FAILED:
            return {
                ...state,
                user: null,
                error: action.payload,
                loading: false
            }
        case LoginActions.LOGOUT:    
        case LoginActions.AUTO_LOGOUT:
            return {
                ...state,
                user: null,
                error: null,
                loading: null
            }
        case LoginActions.CLEAR_LOGIN_ERROR:
            return {
                ...state,
                error: null,
                loading: null
            }    
        default:
            return state;
    }
}