import { saveUserToken, clearUserToken } from '../utils/localStorage';

const userInitialState = {};

const user = (state = userInitialState, action) => {
    switch (action.type) {
        case 'USER_SIGN_IN_SUCCESS':
            saveUserToken(action.payload.token);  // TODO: Сохранение в LocalStorage должно быть здесь?
            return action.payload;
        case 'USER_LOG_OUT':
            clearUserToken();
            return userInitialState;
        default:
            return state
    }
};

export default user;

