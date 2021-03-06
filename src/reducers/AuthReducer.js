
import {
    EAMIL_CHANGED, PASSWORD_CHANGED,
    LOGIN_USER_FAIL, LOGIN_USER_SUCCESS,
    LOGIN_USER
} from '../action/type'


const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false

}


export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EAMIL_CHANGED:
            return { ...state, email: action.payload };

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };


        case LOGIN_USER:
            return { ...state, loading: true, error: '' };

        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload, loading: false };

        case LOGIN_USER_FAIL:
            return { ...state,error: 'Authentication Fail ', email: '', password: '', loading: false}
        default:
            return state;

    }

}   
