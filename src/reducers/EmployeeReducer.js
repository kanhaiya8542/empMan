import {
    EMPLOYEE_FATCH_SUCCESS
} from '../action/type';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case EMPLOYEE_FATCH_SUCCESS:
            return action.payload;

        default:
            return state;
    }

}