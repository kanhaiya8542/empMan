import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLYOEE_SAVE_SUCCESS
} from '../action/type';


const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //action.payload === {props:'name' ,value:'jane' }
        case EMPLOYEE_UPDATE:
            return {
                ...state, [action.payload.prop]: action.payload.value
            }

        case EMPLOYEE_CREATE:
            return INITIAL_STATE

        case EMPLYOEE_SAVE_SUCCESS:
            return INITIAL_STATE;

        default:
            return state;
    }
}



//[action.payload.props] === name