import { REGISTER_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST } from './constants';

const INITIAL_STATE = {
    user: {},
    isLoading: true,
    hasError: false,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case REGISTER_REQUEST:
        return {
            ...state,
            isLoading: true
        }
        case REGISTER_SUCCESS: 
        return {
            ...state,
            user: action.user,
            isLoading: false,
            hasError: false,
        }
        case REGISTER_FAIL: 
        return {
            ...state,
            user: {},
            isLoading: false,
            hasError: true
        }
        default: 
        return state;
    }
}