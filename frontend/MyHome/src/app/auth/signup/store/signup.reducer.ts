import * as SignUpActions from './signup.actions';


export interface State {
    error: String;
    loading: boolean;    
}

const initalState: State = {
    error: null,
    loading: false
};

export function signUpReducer(state: State = initalState, action : SignUpActions.SignUpActions) {
    switch(action.type) {
        case SignUpActions.START_SIGNUP:
            return {
                ...state,
                error: null,
                loading: true
            }
        case SignUpActions.SIGNUP_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false
            }
        case SignUpActions.SIGNUP_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}