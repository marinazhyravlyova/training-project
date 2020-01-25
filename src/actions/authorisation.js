export const signIn = userData => ({
    type: 'USER_SIGN_IN_REQUESTED',
    payload: userData,
});

export const signUp = userData => ({
    type: 'USER_SIGN_UP_REQUESTED',
    payload: userData,
});

export const signInSuccess = userData => ({
    type: 'USER_SIGN_IN_SUCCESS',
    payload: userData,
});
