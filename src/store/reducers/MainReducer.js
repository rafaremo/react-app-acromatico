import * as actionTypes from '../actions/actions';
import Auth from '../../helpers/Auth';
import WC from '../../helpers/WindowChecker';

const initialState = {
    authFunctions: new Auth(),
    windowFunctions: new WC(),
    isAuthenticated: false,
    userId: '',
    profile: {}
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOGIN:
            return action.newState;
        case actionTypes.LOGOUT:
            state.authFunctions.logout(action.history);
            return {
                ...state,
                isAuthenticated: false,
                userId: '',
                profile: {}
            };
        default:
            return state;
    }
};

export default reducer;