const user = (state = {}, action) => {
    switch (action.type) {
        case 'USER_SIGN_IN_SUCCESS':
            console.log('here', action.payload)
            return action.payload;
        case 'USER_LOG_OUT':
            return null;
        default:
            return state
    }
};
export default user;

