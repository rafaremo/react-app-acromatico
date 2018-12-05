export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const handleLogin = (newState) => {
    return {
        type: LOGIN,
        newState
    }
};

export const loggedIn = () => {
    return function(dispatch, getState) {
        let state = getState();
        const profile = state.authFunctions.getProfile();
        const userId = profile.sub.split('|')[1];
        const newState = {
            ...state,
            isAuthenticated: state.authFunctions.isAuthenticated(),
            userId,
            profile
        };

        dispatch(handleLogin(newState));
    }
};

export const login = () => {
    return function(dispatch, getState) {
        let state = getState();
        state.authFunctions.handleAuthentication()
            .then(user => {
                const profile = state.authFunctions.getProfile();
                const userId = profile.sub.split('|')[1];
                const newState = {
                    ...state,
                    isAuthenticated: state.authFunctions.isAuthenticated(),
                    userId,
                    profile
                };

                dispatch(handleLogin(newState));
            }).catch(err => {
                console.log(err);
            });
    }
};
